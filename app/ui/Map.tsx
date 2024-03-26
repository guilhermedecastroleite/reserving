"use client";
import { MapContainer, Marker, TileLayer, Tooltip } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { LocationType } from "../types";

interface MapProps {
  location: LocationType;
}

export const MapSkeleton = () => (
  <div role="status" className="max-w-sm animate-pulse">
    <div className="h-[240px] w-full rounded-md bg-zinc-300" />
  </div>
);

const Map = ({ location }: MapProps) => {
  const { coordinates, nearby } = location;

  return (
    <MapContainer
      center={coordinates}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: "240px", borderRadius: "0.375rem" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={coordinates}>
        <Tooltip>HOTEL NAME HERE</Tooltip>
      </Marker>
      {nearby.map((place) => (
        <Marker key={place.name} position={place.coordinates}>
          <Tooltip>{place.name}</Tooltip>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
