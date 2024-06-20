import mapboxgl from 'mapbox-gl';
import React, { Component } from 'react';

import { fetchBanks } from '@api/banks';
import { theme } from '@styled/theme';

type MapPropsType = {
  searchQuery: string;
};

type MapStateType = {
  longitude: number;
  latitude: number;
  initialized: boolean;
  map: mapboxgl.Map | null;
  banks: Array<{ longitude: number; latitude: number; info: string; currencies: string[] }>;
  markers: mapboxgl.Marker[];
};

class Map extends Component<MapPropsType, MapStateType> {
  mapContainerRef = React.createRef();
  state = {
    longitude: 27.5667,
    latitude: 53.9,
    initialized: false,
    map: null,
    banks: [],
    markers: [],
  };

  componentDidMount() {
    this.initializeGeolocation();
  }

  componentDidUpdate(prevProps: Readonly<MapPropsType>) {
    const { searchQuery } = this.props;
    if (searchQuery !== prevProps.searchQuery) {
      this.updateMarkers();
    }
  }

  initializeMap = async () => {
    if (!this.mapContainerRef.current) return;
    const { longitude, latitude, initialized } = this.state;

    if (!initialized) {
      const map = new mapboxgl.Map({
        container: this.mapContainerRef.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [longitude, latitude],
        zoom: 12,
        accessToken: process.env.REACT_APP_MAP_BOX_API_KEY,
      });

      map.addControl(new mapboxgl.NavigationControl(), 'top-right');
      map.addControl(
        new mapboxgl.GeolocateControl({
          positionOptions: {
            enableHighAccuracy: true,
          },
          trackUserLocation: true,
          showUserHeading: true,
        }),
      );

      new mapboxgl.Marker({ color: 'red' }).setLngLat([longitude, latitude]).addTo(map);
      const banks = await fetchBanks({ long: longitude, lat: latitude });
      this.setState({ initialized: true, map, banks }, () => this.addBankMarkers(banks));
    }
  };

  updateMarkers = async () => {
    this.removeBankMarkers();
    const { banks } = this.state;
    const { searchQuery } = this.props;
    const filteredBanks = banks.filter((bank) =>
      bank.currencies.some((currency) => currency.toUpperCase().includes(searchQuery.slice(0, 2).toUpperCase())),
    );
    this.addBankMarkers(filteredBanks);
  };

  removeBankMarkers() {
    const { markers } = this.state;
    markers.forEach((marker) => marker.remove());
    this.setState({ markers: [] });
  }

  addBankMarkers(banks) {
    const { map } = this.state;
    const markers: mapboxgl.Marker[] = [];

    banks.forEach((bank) => {
      const marker = new mapboxgl.Marker({ color: theme.colors.green[300] })
        .setLngLat([bank.longitude, bank.latitude])
        .setPopup(
          new mapboxgl.Popup().setHTML(`
          <p style="color: ${theme.colors.black.DEFAULT};">${bank.info}</p>
          <p style="color: ${theme.colors.black.DEFAULT};">Currencies: ${bank.currencies.toString()}</p>
        `),
        )
        .addTo(map);
      markers.push(marker);
    });
    this.setState({ markers });
  }

  initializeGeolocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { longitude, latitude } = position.coords;
          this.setState({ longitude, latitude, initialized: false }, this.initializeMap);
        },
        () => {
          this.initializeMap();
        },
      );
    } else {
      this.initializeMap();
    }
  }

  render() {
    return <div ref={this.mapContainerRef} style={{ width: '100%', height: '500px' }} />;
  }
}

export default Map;
