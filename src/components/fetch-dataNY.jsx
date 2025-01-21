import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
export default function fetchData() {
  const {
    data: Stiftelsesdato, navn, 
    error,
    isValidating,
  } = useSWR("https://data.brreg.no/enhetsregisteret/api/enheter?kommunenummer=5061&size=10000&fraStiftelsesdato=2022-01-01&tilStiftelsesdato=2022-12-31", fetcher);

  // Handles error and loading state
  if (error) return <div className="failed">failed to load</div>;
  if (isValidating) return <div className="Loading">Loading...</div>;

  return (
    Stiftelsesdato, navn, kommunenummer
  );
}

