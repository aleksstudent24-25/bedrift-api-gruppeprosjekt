import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

const Enhetsregisteret = () => {
  const apiUrl =
    'https://data.brreg.no/enhetsregisteret/api/enheter?kommunenummer=5061&size=10000&fraStiftelsesdato=2022-01-01&tilStiftelsesdato=2022-12-31';

  
  const { kommune, stiftelsedato, error, isLoading } = useSWR(apiUrl, fetcher);

  if (isLoading) return <p>Laster data...</p>;
  if (error) return <p>Noe gikk galt: {error.message}</p>;


  return (
    kommune, stiftelsedato
  )
};

export default Enhetsregisteret;

