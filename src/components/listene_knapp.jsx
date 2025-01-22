import kommuner from "../Data/kommuner";
import Stiftelsedato from "./fetch-dataNY";

export const KommuneListe = () => {


  return (
    <div className="Listene">
    
    <select className="kommuner">
      {kommuner.map((kommune) => (
        <option key={kommune}>{kommune}</option>
      ))}
    </select>
    <select className="years">
      {Stiftelsedato.map((Stiftelsedato) => (
        <option key={Stiftelsedato}>{Stiftelsedato}</option>))}
        </select>

        <button>Search</button>
        </div>
  )
}


