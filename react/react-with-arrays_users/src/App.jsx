import React from "react";
import "./styles.css";
import Card from "./components/Card";
import Title from "./components/Title";
import { USERS } from "./db";

//Task 1
export default function App() {
  return (
    <main className="app">
      <Title text="ClientBoard" />
      <div className="app__card-grid">
        {USERS.map((user) => (
          <Card key={user.id} user={user} />
        ))}
      </div>
    </main>
  );
}

//Task 2 is in Card.jsx
//Task 3 is in Tag.jsx
