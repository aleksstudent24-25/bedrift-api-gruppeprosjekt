import kommuner from "../Data/kommuner";
import Stiftelsedato from "../components/fetch-dataNY";

const KommuneListe = () => {
  return (
    
    <select className="kommuner">
      {kommuner.map((kommune) => (
        <option key={kommune}>{kommune}</option>
      ))}
    </select>
    <select className="dato">
      {Stiftelsedato.map((Stiftelsedato) => (
        <option key={Stiftelsedato}>{Stiftelsedato}</option>
      ))}
    </select>
  );
};

export default KommuneListe;