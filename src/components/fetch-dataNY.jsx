import useSWR from "swr";
import axios from "axios";

// const fetcher = (url) => fetch(url).then((res) => res.json());
const fetcher = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

function useEnhetsregisteret(kommune, stiftelseYear) {
  const apiUrl =
    `https://data.brreg.no/enhetsregisteret/api/enheter?forretningsadresse.kommune=${kommune}&size=10000&fraStiftelsesdato=${stiftelseYear}-01-01&tilStiftelsesdato=${stiftelseYear}-12-31`;
    // `https://data.brreg.no/enhetsregisteret/api/enheter?forretningsadresse.kommune=Oslo&size=10000&fraStiftelsesdato=2025-01-01&tilStiftelsesdato=2025-12-31`;

  const { data, error, isLoading } = useSWR(apiUrl, fetcher);

  return { data: data?._embedded.enheter || null, error, isLoading };
  // if (isLoading) return <p>Laster data...</p>;
  // if (error) return <p>Noe gikk galt: {error.message}</p>;

  // return data?._embedded.enheter;
}

export default useEnhetsregisteret;
