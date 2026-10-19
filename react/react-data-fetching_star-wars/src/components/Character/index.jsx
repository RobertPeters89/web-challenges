import Card from "../Card";
import useSWR from "swr";

const fetcher = async (url) => {
  const response = await fetch(url);

  if (!response.ok) {
    const error = new Error("Error Message");
    error.info = await response.json();
    error.status = response.status;
    throw error;
  }
  return response.json();
};

export default function Character({ id }) {
  const { data, error, isLoading } = useSWR(
    `https://swapi.py4e.com/api/people/${id}`,
    fetcher,
  );

  if (error) return <h2>Error Message (Status: {error.status}</h2>;
  if (isLoading || !data) return <h2>Loading...</h2>;

  return (
    <Card
      id={id}
      name={data.name}
      height={data.height}
      eyeColor={data.eye_color}
      birthYear={data.birth_year}
    />
  );
}
