import { ReactNode } from "react";
import "./styles.css";

// Step 1: Type the props of `Greeting`. `name` is a string, `age` is a number
// and should be optional. Show the age only if it is provided.
type GreetingProps = {
  name: string;
  age?: number;
};

function Greeting({ name, age }: GreetingProps) {
  return (
    <p>
      Hello {name}
      {age !== undefined && `, you are ${age} years old`}!
    </p>
  );
}

// Step 2: Type the props of `Badge`. `label` is a string and `color` can only be
// "green", "red" or "blue". Use a string literal union.
type BadgeProps = {
  label: string;
  color: "red" | "blue" | "green";
};

function Badge({ label, color }: BadgeProps) {
  return <span className={`badge badge-${color}`}>{label}</span>;
}

// Step 3: Type the props of `Card`. `title` is a string. The content between the
// opening and closing tag is passed as `children`. Use `ReactNode` for it.
type CardProps = {
  title: string;
  children: ReactNode;
};

function Card({ title, children }: CardProps) {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

// Step 4: Type the props of `LikeButton`. `isLiked` is a boolean and `onToggle` is a
// function without parameters that returns nothing.
type LikeButtonProps = {
  isLiked: boolean;
  onToggle: () => void;
};

function LikeButton({ isLiked, onToggle }: LikeButtonProps) {
  return <button onClick={onToggle}>{isLiked ? "❤️" : "🤍"}</button>;
}

export default function App() {
  function handleToggle() {
    console.log("toggled");
  }

  return (
    <main>
      <Greeting name="Alex" />
      <Greeting name="Sam" age={28} />
      <Badge label="New" color="green" />
      <Card title="Favourite">
        <LikeButton isLiked={true} onToggle={handleToggle} />
      </Card>

      {/* Step 5: After typing, these lines should show errors. Read the messages,
          then fix or delete the lines. */}
      <Greeting name="42" />
      <Badge label="Sale" color="red" />
      <LikeButton isLiked={false} onToggle={handleToggle} />
    </main>
  );
}
