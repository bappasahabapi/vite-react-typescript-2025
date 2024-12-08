
import { useState } from "react";
import LocationSearch from "./components/LocationSearch";
import Map from "./components/Map";
import type { IPlace } from "./interface/PlaceInterface";

export default function App() {

  const [place, setPlace]=useState<IPlace|null>(null);


  return (
    <div className="h-screen w-screen grid grid-cols-12">
      <div className="col-span-3 p-4 ">
        <LocationSearch onPlaceClick={(place)=>setPlace(place)} />
      </div>
      <div className="col-span-9 p-4">
        <Map place={place} />
      </div>
    </div>
  );
}
