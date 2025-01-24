import useSWR from "swr";
import axios from "axios";

const fetcher = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

function useEnhetsregisteret(values) {
  const { kommune, year } = values;

  const apiUrl = new URL("https://data.brreg.no/enhetsregisteret/api/enheter");
  apiUrl.searchParams.set("forretningsadresse.kommune", kommune);
  apiUrl.searchParams.set("size", "10000");

  if (year && year !== "----" && year <= 2025 && year >= 1900) {
    apiUrl.searchParams.set("fraStiftelsesdato", `${year}-01-01`);
    apiUrl.searchParams.set("tilStiftelsesdato", `${year}-12-31`);
  }

  const { data, error, isLoading } = useSWR(apiUrl.toString(), fetcher);

  return { data: data?._embedded.enheter || null, error, isLoading };
}

export default useEnhetsregisteret;
