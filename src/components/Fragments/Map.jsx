import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = ({ position, address }) => {
    return (
      <MapContainer
        center={position}
        zoom={13}
        style={{ width: "80%", height: "450px" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={position}
          eventHandlers={{
            click: (e) => {
              window.open(
                "https://maps.app.goo.gl/EpbL9UmAFF1Z6MuY8",
                "_blank" // <- This is what makes it open in a new window.
              );
            },
          }}
        >
          <Popup>{address}</Popup>
        </Marker>
      </MapContainer>
    );
  };
  
  export default Map;