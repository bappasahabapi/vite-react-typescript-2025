# React + TypeScript + Vite

- `Homepage:`
    - `Header Component`
        - **Display Dynamic Text and Image** for every redering 
    - `Example Tab Button Section:`
        - **Show different content** based on button click
    - `Core Concept Section:`
        - **show data loading** based on button click


#### 🔥 1. Define Props in typeScript

Parent 
```typescript
import { Child } from "./Child";

export const Props = () => {
  return (
    <header>
      <h1>Props Componet</h1>
      <Child title="child - 1" onClick={() => alert("Clicked")}>
        <p>bangladesh</p>
      </Child>
    </header>
  );
};

```

Children
```typescript
import { ReactNode } from "react";

interface ChildProps {
  title: string;
  onClick: () => void;
  children: React.ReactNode;
}

export const Child = ({ title, onClick, children }: ChildProps) => {
  return (
    <div>
      <h3>props </h3>
      <p style={{ color: "red" }}>{title}</p>
      <button onClick={onClick}>Click me</button>
      <b>{children}</b>
    </div>
  );
};
```
#### 🔥 1. Define State in typeScript

- In typeScript all hooks are `generic` types


```typescript
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

```
#### 🔥 3. Define Events in typeScript




```typescript

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



```


