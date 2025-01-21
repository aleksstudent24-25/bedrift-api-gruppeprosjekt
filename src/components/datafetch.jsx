import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
export default function fetchData() {
  const {
    data: countries,
    error,
    isValidating,
  } = useSWR("https://restcountries.com/v2/all", fetcher);

  // Handles error and loading state
  if (error) return <div className="failed">failed to load</div>;
  if (isValidating) return <div className="Loading">Loading...</div>;

  return <div>Test</div>;
}