import mapboxgl from 'mapbox-gl';

import { BanksType } from '@type/banks';

export type MapPropsType = {
  searchQuery: string;
};

export type MapStateType = {
  longitude: number;
  latitude: number;
  initialized: boolean;
  map: mapboxgl.Map | null;
  banks: BanksType[];
};
