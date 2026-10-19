import Controls from "../Controls/index";
import Map from "../Map/index";
import useSWR from "swr";

const fetcher = async (URL) => {
  const response = await fetch(URL);

  if (!response.ok) throw new Error("Error Message");
  return response.json();
};

const URL = "https://api.wheretheiss.at/v1/satellites/25544";

export default function ISSTracker() {
  const { data, error, isLoading, mutate } = useSWR(URL, fetcher, {
    refreshInterval: 5000,
  });

  if (error) return <h1>Error Message.</h1>;
  if (isLoading || !data) return <h1>Loading...</h1>;

  /* export default function ISSTracker() {
  /* const [coords, setCoords] = useState({
    longitude: 0,
    latitude: 0,
  }); */

  /* async function getISSCoords() {
    try {
      const response = await fetch(URL);
      if (response.ok) {
        const data = await response.json();
        setCoords({ longitude: data.longitude, latitude: data.latitude });
      }
    } catch (error) {
      console.error(error);
    }
  } */

  /* useEffect(() => {
    const timer = setInterval(() => {
      getISSCoords();
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, []); */

  return (
    <main>
      <Map longitude={data.longitude} latitude={data.latitude} />
      <Controls
        longitude={data.longitude}
        latitude={data.latitude}
        onRefresh={mutate}
      />
    </main>
  );
}
