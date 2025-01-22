import kommuner from "../Data/kommuner";


export default function RullNed(){

 

  return (
    <div>
    <select className="kommuner">
      {kommuner.map((kommune) => (
        <option key={kommune}>{kommune}</option>
      ))}
    </select>
    <input type="number" min="1900" max="2025" step="1" value="2016" />
  <button>Search</button>
  </div>
  


   )}
  

