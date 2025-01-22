import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
export default function fetchData() {
  const { data, error, isValidating } = useSWR(
    "https://data.brreg.no/enhetsregisteret/api/enheter",
    fetcher
  );

  // Handles error and loading state
  if (error) return <div className="failed">failed to load</div>;
  if (isValidating) return <div className="Loading">Loading...</div>;
  return <div>Fetchdata works!</div>;
}
