import React, { useState } from "react";
import EventComponet from "./EventComponet";

interface User {
    name: string;
    age: number;
}

const users: User[] = [
    { name: "Bappa", age: 45 },
    { name: "bappa", age: 45 },
    { name: "bappa", age: 15 },
    { name: "saha", age: 25 },
    { name: "sd", age: 45 },
];

const Events = () => {
    const [name, setName] = useState<string>('');
    const [age, setAge] = useState<number | undefined>(undefined);
    const [matchedUsers, setMatchedUsers] = useState<User[]>([]);


    const handleClickAll = () => {
        const filteredUsers = users.filter(user => 
            user.name.toLowerCase() === name.toLowerCase() &&
            (age === undefined || user.age === age)
        );

        setMatchedUsers(filteredUsers);

    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        if (name === "name") {
            setName(value);
        } else if (name === "age") {
            setAge(value ? parseInt(value) : undefined); // Convert to number or set to undefined
        }
    };

    return (
        <header>
            <h1>Handle Events </h1>
            <input 
                type="text" 
                placeholder="Enter name" 
                value={name} 
                name="name"
                onChange={handleChange} 
            />
            <input 
                type="number" 
                placeholder="Enter age (optional)" 
                name="age"
                onChange={handleChange} 
            />
            <button onClick={handleClickAll} style={{ marginLeft: "0.5rem" }}>
                Find user
            </button>

            <hr />
            <div>
                {matchedUsers.length > 0 ? (
                    matchedUsers.map((user, index) => (
                        <div key={index}>
                            <li> <b>{user.name}</b> is present with <b>Age: {user.age}</b></li>
                        </div>
                    ))
                ) : (
                    <p>user not found</p>
                )}
            </div>
            <hr />
            <EventComponet/>
        </header>
    );
};

export default Events;