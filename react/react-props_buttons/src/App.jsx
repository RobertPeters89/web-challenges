// Task 4
export default function App() {
  function handleClick() {
    console.log("You clicked me!");
  }

  return (
    <Button
      color="red"
      disabled={false}
      text="Click me here"
      onClick={handleClick}
    />
  );
}

function Button({ color, disabled, text, onClick }) {
  return (
    <button disabled={disabled} style={{ color: color }} onClick={onClick}>
      {text}
    </button>
  );
}

// Task 1
function Button({ color, disabled, text }) {
  return (
    <button disabled={disabled} style={{ color: color }}>
      {text}
    </button>
  );
}

// Task 2
function Button({ color, disabled, text, onClick }) {
  return (
    <button
      disabled={disabled}
      style={{ color: color }}
      onClick={() => alert("You clicked me!")}
    >
      {text}
    </button>
  );
}

// Task 3
function Button({ color, disabled, text }) {
  function handleClick() {
    console.log("You clicked me!");

    return (
      <button
        disabled={disabled}
        style={{ color: color }}
        onClick={handleClick}
      >
        {text}
      </button>
    );
  }
}
