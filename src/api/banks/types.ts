type PropertiesType = {
  name: string;
  full_address: string;
  metadata: {
    phone: string;
  };
};

type GeometryType = {
  coordinates: [number, number];
};

export type BanksFetchResponseType = {
  properties: PropertiesType;
  geometry: GeometryType;
};

export type CoordinatesType = {
  long: number;
  lat: number;
};
