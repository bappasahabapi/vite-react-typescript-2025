import { Fragment, useState } from "react";
import type { IPlace } from "../interface/PlaceInterface";
import { searchPlace } from "../api/search";

interface ILocationSearchProps {
  onPlaceClick: (place: IPlace) => void;
}

const LocationSearch = ({ onPlaceClick }: ILocationSearchProps) => {
  const [places, setPlaces] = useState<IPlace[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const results = await searchPlace(searchTerm);
    setPlaces(results);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="searchTerm" className="font-bold">
          Search For a Location
        </label>
        <input
          className="border border-gray-300 rounded-md shadow-smfocus:border-indigo-500 mt-1 px-4 py- w-full"
          id="searchTerm"
          placeholder="dhaka and hit enter"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>

      <h1 className="mt-6 font-bold">Found Locations</h1>
      <div className="grid grid-cols-[1fr_40px] gap-2 mt-2 items-center ">
        {places.map((place) => {
          return (
            <Fragment key={place.id}>
              <p className="text-sm">{place.name}</p>
              <button
                className="bg-blue-400 text-xs font-bold text-white py-1 px-1 rounded"
                onClick={() => onPlaceClick(place)}
              >
                Go
              </button>
              <div className="border-b w-full col-span-2" />
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default LocationSearch;
