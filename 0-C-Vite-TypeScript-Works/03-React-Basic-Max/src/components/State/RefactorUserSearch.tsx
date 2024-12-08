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

const RefactorUserSearch = () => {
    const [name, setName] = useState<string>('');
    const [age, setAge] = useState<number | undefined>(undefined);
    const [matchedUsers, setMatchedUsers] = useState<User[]>([]);

    const handleSearch = () => {
        const filteredUsers = users.filter(user => 
            (name === '' || user.name.toLowerCase() === name.toLowerCase()) &&
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

    // const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setName(e.target.value);
    // };

    // const onAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const value = e.target.value;
    //     setAge(value ? parseInt(value) : undefined); // Convert to number or set to undefined
    // };

    return (
        <header>
            <h1>Refactor User Search</h1>
            <input 
                type="text" 
                placeholder="Enter name" 
                value={name} 
                onChange={handleChange} 
                name="name"
                // onChange={onNameChange} 
            />
            <input 
                type="number" 
                placeholder="Enter age (optional)" 
                onChange={handleChange} 
                name="age"
                // onChange={onAgeChange} 
            />
            <button onClick={handleSearch} style={{ marginLeft: "0.5rem" }}>
                Find Users
            </button>
            <div>
                {matchedUsers.length > 0 ? (
                    matchedUsers.map((user, index) => (
                        <div key={index}>
                            <li>
                                <b>{user.name}</b> is present with <b>Age: {user.age}</b>
                            </li>
                        </div>
                    ))
                ) : (
                    <p>No users found</p>
                )}
            </div>
        </header>
    );
};

export default RefactorUserSearch;