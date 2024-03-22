import { LatLngExpression } from "leaflet";

export interface TypographyType {
  as?: string;
  icon?: string;
  iconClassName?: string;
  className?: string;
}

export interface NearbyPlaceType {
  coordinates: LatLngExpression;
  name: string;
}
export interface LocationType {
  country: string;
  city: string;
  address: string;
  coordinates: LatLngExpression;
  nearby: NearbyPlaceType[];
}
