import { useState } from "react";
import UserSearch from "./UserSearch";
import RefactorUserSearch from "./RefactorUserSearch";

const defaultGuest = ["Bappa Saha", "Kappa Saha"];

const GuestList = () => {
  const [name, setName] = useState("");
  const [guests, setGuests] = useState<string[]>(defaultGuest);
  //   const [guests, setGuests]=useState<string[]>(['Bappa Saha']);

  const onClick = () => {
    setName("");
    setGuests([...guests, name]);
  };

  return (
    <header>
      <h1>Guest list</h1> <br />
      <b style={{ color: "yellow" }}>{name}</b> <br />
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="add a guest name" //optional
        name="" //optional
        id="" //optional
      />
      <button onClick={onClick} style={{ marginLeft: "0.5rem" }}>
        Add Guest
      </button>
      <h3>Guest list</h3> <br />
      <div>
        {
          <ol>
            {guests.map((guest) => (
              <li key={guest}>{guest}</li>
            ))}
          </ol>
        }
      </div>
      <hr />
      <UserSearch />
      <hr />
      <RefactorUserSearch />
    </header>
  );
};

export default GuestList;

