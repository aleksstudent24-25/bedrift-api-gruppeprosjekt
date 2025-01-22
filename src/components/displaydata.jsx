import useEnhetsregisteret from "./fetch-dataNY";

export default function ShowData() {
  const { data, error, isLoading } = useEnhetsregisteret();
  console.log(data);
  return (
    <ul>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error</p>
      ) : (
        data.map((x) => <div>{x.navn}</div>)
      )}
    </ul>
  );
}
