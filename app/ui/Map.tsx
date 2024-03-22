"use client";
import { MapContainer, Marker, TileLayer, Tooltip } from "react-leaflet";
// import { MdLocationPin } from "react-icons/md";

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { LocationType } from "../types";

interface MapProps {
  location: LocationType;
}

const Map = ({ location }: MapProps) => {
  const { coordinates, nearby } = location;

  return (
    <MapContainer
      center={coordinates}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: "240px", width: "400px", borderRadius: "0.375rem" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={coordinates}>
        <Tooltip>HOTEL NAME HERE</Tooltip>
      </Marker>
      {nearby.map((place) => (
        <Marker
          key={place.name}
          position={place.coordinates}
          // icon={divIcon({
          //   html: renderToStaticMarkup(
          //     <MdLocationPin className="text-rose-500 text-3xl" />
          //   ),
          //   shadowUrl:
          //     "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
          //   iconSize: [0, 0],
          //   iconAnchor: [25, 41],
          //   shadowSize: [41, 41],
          // })}
        >
          <Tooltip>{place.name}</Tooltip>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
