import useSWR from "swr";
import axiosInstance from "./axiosInstance";


const fetcher = (url) => axiosInstance.get(url).then((res) => res.data);

const KommuneDropdown = () => {
  const { data, error, isLoading } = useSWR("?size=1000", fetcher);

  if (isLoading) return <p>Laster...</p>;
  if (error) return <p>Kunne ikke hente data: {error.message}</p>;

  const enheter = data._embedded?.enheter || [];

  const kommuner = Array.from(
    new Set(
      enheter.flatMap((enhet) => [
        enhet?.postadresse?.kommune,
        enhet?.forretningsadresse?.kommune,
      ]).filter(Boolean) 
    )
  ).sort(); 

  return (
    <div>
      <select>
        <option value="">Velg kommune</option>
        {kommuner.map((kommune, index) => (
          <option key={index} value={kommune}>
            {kommune}
          </option>
        ))}
      </select>
    </div>
  );
};

export default KommuneDropdown;