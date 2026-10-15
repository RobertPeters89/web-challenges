import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>Test for button one</Button>
      <Button>Test for button two</Button>
      <Button>Test for button three</Button>
      <Button>Test for button four</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
