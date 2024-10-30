import "leaflet/dist/leaflet.css";
import type { Map as LeafletMap } from "leaflet";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { useRef, useEffect } from "react";

import type { IPlace } from "../interface/PlaceInterface";

type MapProps = {
  place: IPlace | null;
};

const Map = ({ place }: MapProps) => {
  const mapRef = useRef<LeafletMap | null>(null);

  useEffect(()=>{
    if(mapRef.current && place){
      mapRef.current.flyTo([place.latitude,place.longitude])
    }
  },[place])

  return (
    <MapContainer
      ref={mapRef}
      center={[26.0199568,88.4688764]}
      zoom={14}
      scrollWheelZoom={true}
      className="h-full"
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {place && <Marker position={[place.latitude, place.longitude]} />}
    </MapContainer>
  );
};

export default Map;
