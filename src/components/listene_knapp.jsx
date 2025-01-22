import kommuner from "../Data/kommuner";
import stiftelsedato from "./fetch-dataNY";

const KommuneListe = () => {
  if (!Array.isArray(kommuner) || !Array.isArray(stiftelsedato)) {
    console.error("Feil: 'kommuner' eller 'stiftelsedato' er ikke en gyldig liste.");
    return <div>Dataene kunne ikke lastes inn.</div>;
  }

  return (
    <div className="Listene">
      <select className="kommuner" defaultValue="">
        <option value="" disabled>
          Velg en kommune
        </option>
        {kommuner.map((kommune, index) => (
          <option key={index} value={kommune}>
            {kommune}
          </option>
        ))}
      </select>

      <select className="years" defaultValue="">
        <option value="" disabled>
          Velg et år
        </option>
        {stiftelsedato.map((dato, index) => (
          <option key={index} value={dato}>
            {dato}
          </option>
        ))}
      </select>

      <button type="submit"> Search</button>
    </div>
  );
};

export default KommuneListe;


