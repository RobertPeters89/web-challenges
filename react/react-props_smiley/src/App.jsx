export default function App() {
  return (
    <>
      <Smiley isHappy={true} />
      <Smiley isHappy={false} />
    </>
  );
}

function Smiley({ isHappy }) {
  return <p>{isHappy ? "😁" : "😢"}</p>;
}
