import KommuneDropdown from "../data/fetch_kommuner";
import { useState } from "react";
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
      <h2 className="title"> Bedrift Søker </h2>
      <KommuneDropdown handleChange={handleChange} />
      <input
        name="year"
        type="number"
        min="1900"
        max="2025"
        step="1"
        value={allValues.year}
        onChange={handleChange}
      />
      <div className="result">
        <ShowData kommune={allValues.kommune} year={allValues.year}></ShowData>
      </div>
    </>
  );
}
