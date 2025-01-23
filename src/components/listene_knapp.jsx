import KommuneDropdown from "../data/fetch_kommuner";


export default function RullNed(){

 

  return (
    <div>
    <KommuneDropdown />
    <input type="number" min="1900" max="2025" step="1" value="2016" />
  <button>Search</button>
  </div>
  


   )}
  

