import mapboxgl, { Marker } from 'mapbox-gl';
import { Component, createRef, RefObject } from 'react';
import { connect } from 'react-redux';

import { fetchBanks } from '@api/banks/fetchBanks';
import { MapStyled } from '@pages/BankCard/components/Map/styled';
import { MapPropsType, MapStateType } from '@pages/BankCard/components/Map/types';
import { RootState } from '@redux/store';
import { theme } from '@styled/theme';
import { BanksType } from '@type/banks';

class Map extends Component<MapPropsType, MapStateType> {
  mapContainerRef: RefObject<HTMLDivElement>;
  markers: Marker[];

  constructor(props: MapPropsType) {
    super(props);
    this.mapContainerRef = createRef();
    this.markers = [];
    this.state = {
      longitude: 27.5667,
      latitude: 53.9,
      initialized: false,
      map: null,
      banks: [],
    };
  }

  componentDidMount() {
    this.initializeGeolocation();
  }

  componentDidUpdate(prevProps: Readonly<MapPropsType>) {
    const { searchQuery } = this.props;
    if (searchQuery !== prevProps.searchQuery) {
      this.updateMarkers();
    }
  }

  componentWillUnmount() {
    const { map } = this.state;
    this.removeBankMarkers();
    map?.remove();
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

  updateMarkers = () => {
    this.removeBankMarkers();
    const { banks } = this.state;
    const { searchQuery } = this.props;
    const filteredBanks = banks.filter((bank) =>
      bank.currencies.some((currency) => currency.toUpperCase().includes(searchQuery.slice(0, 2).toUpperCase())),
    );
    this.addBankMarkers(filteredBanks);
  };

  removeBankMarkers() {
    this.markers.map((marker) => marker.remove());
    this.markers = [];
  }

  addBankMarkers(banks: BanksType[]) {
    const { map } = this.state;
    if (!map) return;
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
      this.markers.push(marker);
    });
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
    return <MapStyled ref={this.mapContainerRef} />;
  }
}

const mapStateToProps = (state: RootState) => ({
  searchQuery: state.banks.searchQuery,
});

export default connect(mapStateToProps)(Map);
