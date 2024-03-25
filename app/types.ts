import { LatLngExpression } from "leaflet";
import { IconType } from "react-icons";

export enum Facilities {
  WIFI = "WIFI",
  AC = "AC",
  PARKING = "PARKING",
  BUSINESS = "BUSINESS",
  SWIMMING_POOL = "SWIMMING_POOL",
  TOP_RATED = "TOP_RATED",
}

export interface TypographyType {
  as?: string;
  icon?: IconType;
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

export interface ImageType {
  width: number;
  height: number;
  src: string;
  alt: string;
}

export interface DestinationType {
  title: string;
  subtitle: string;
  image: ImageType;
}

export interface InspirationalArticleType {
  title: string;
  subtitle: string;
  image: ImageType;
}

export interface PopularHotelType {
  title: string;
  subtitle: string;
  image: ImageType;
}

export interface PriceType {
  original: number;
  discounted?: number;
  discount?: number;
  formatted: string;
  original_formatted?: string;
  currency?: string;
}
