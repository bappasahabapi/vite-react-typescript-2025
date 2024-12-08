import React, { useState } from "react";

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

const UserSearch = () => {
    const [name, setName] = useState<string>('');
    const [age, setAge] = useState<number | undefined>(undefined);
    const [user, setUser] = useState<User | undefined>(undefined);
    const [matchedUsers, setMatchedUsers] = useState<User[]>([]);

    const handleClick = () => {
        const foundUser = users.find(user => 
            user.name.toLowerCase() === name.toLowerCase() && 
            (age === undefined || user.age === age)
        );

        setUser(foundUser);

    };
    const handleClickAll = () => {
        const filteredUsers = users.filter(user => 
            user.name.toLowerCase() === name.toLowerCase() &&
            (age === undefined || user.age === age)
        );

        setMatchedUsers(filteredUsers);

    };

    const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const onAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setAge(value ? parseInt(value) : undefined); // Convert to number or set to undefined
    };

    return (
        <header>
            <h1>User Search</h1>
            <input 
                type="text" 
                placeholder="Enter name" 
                value={name} 
                onChange={onNameChange} 
            />
            <input 
                type="number" 
                placeholder="Enter age (optional)" 
                onChange={onAgeChange} 
            />
            <button onClick={handleClick} style={{ marginLeft: "0.5rem" }}>
                Find user
            </button>
            <button onClick={handleClickAll} style={{ marginLeft: "0.5rem" }}>
                Find All users
            </button>
            <div>
                {user ? (
                    <>
                        {user.name} is present <br />
                        Age: {user.age}
                    </>
                ) : (
                    <p>User not found</p>
                )}
            </div>
            <hr />
            <div>
                {matchedUsers.length > 0 ? (
                    matchedUsers.map((user, index) => (
                        <div key={index}>
                            <li> <b>{user.name}</b> is present with <b>Age: {user.age}</b></li>
                        </div>
                    ))
                ) : (
                    <p>No not found</p>
                )}
            </div>
        </header>
    );
};

export default UserSearch;