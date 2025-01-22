// import kommuner from "../Data/kommuner";
import { kommune , stiftelseYear } from "./fetch-dataNY";

const KommuneListe = () => {
  if (!Array.isArray(kommune) || !Array.isArray(stiftelseYear)) {
    console.error("Feil: 'kommuner' eller 'stiftelsedato' er ikke en gyldig liste.");
    return <div>Dataene kunne ikke lastes inn.</div>;
  }

  return (
    <div className="Listene">
      <select className="kommuner" defaultValue="">
        <option value="" disabled>
          Velg en kommune
        </option>
        {kommune.map((kommune, index) => (
          <option key={index} value={kommune}>
            {kommune}
          </option>
        ))}
      </select>

      <select className="years" defaultValue="">
        <option value="" disabled>
          Velg et årstall
        </option>
        {stiftelseYear.map((stiftelseYear, index) => (
          <option key={index} value={stiftelseYear}>
            {stiftelseYear}
          </option>
        ))}
      </select>

      <button type="submit"> Search </button>
    </div>
  );
};

export default KommuneListe;


