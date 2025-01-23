import { useState } from "react";
import kommuner from "../Data/kommuner";
import ShowData from "./displayData";

export default function RullNed() {
  const [allValues, setValues] = useState({
    kommune: "Oslo",
    year: "2016",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...allValues, [name]: value });
  };

  return (
    <>
      <div className="search">
        <select name="kommune" className="kommuner" onChange={handleChange}>
          {kommuner.map((kommune) => (
            <option key={kommune}>{kommune}</option>
          ))}
        </select>
        <input
          name="year"
          type="number"
          min="1900"
          max="2025"
          step="1"
          value={allValues.year}
          onChange={handleChange}
        />
      </div>
      <div className="result">
        <ShowData kommune={allValues.kommune} year={allValues.year}></ShowData>
      </div>
    </>
  );
}
