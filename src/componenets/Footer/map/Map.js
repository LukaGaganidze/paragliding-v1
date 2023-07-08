"use client";

import React from "react";

// leaflet dependencies
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { Marker } from "react-leaflet";

// css needed for leaflet
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

// for map container
import classes from "./Map.module.scss";

function Map() {
  return (
    <MapContainer
      className={classes["map"]}
      center={[42.4740038, 44.4793203]}
      zoom={11}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[42.4740038, 44.4793203]} />
    </MapContainer>
  );
}

export default Map;
