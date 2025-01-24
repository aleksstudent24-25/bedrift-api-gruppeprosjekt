import KommuneDropdown from "../data/fetch_kommuner";
import { useState } from "react";
import ShowData from "./displayData";

export default function RullNed() {
  const [allValues, setValues] = useState({
    kommune: "Oslo",
    year: "----",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "year") {
      if (value === "" || /^\d{0,4}$/.test(value)) {
        const currentYear = new Date().getFullYear();

        if (
          value === "" ||
          (value.length === 4 && value >= 1900 && value <= currentYear)
        ) {
          setErrorMessage("");
        } else if (value.length === 4) {
          setErrorMessage(
            `Vennligst skriv inn et gyldig årstall mellom 1900 og ${currentYear}.`
          );
        }

        setValues({ ...allValues, [name]: value === "" ? "----" : value });
      }
    } else {
      setValues({ ...allValues, [name]: value });
    }
  };

  return (
    <>
      <h2 className="title">Bedrift Søker</h2>

      {errorMessage && <p style={{ color: "red", textAlign: "center" }}>{errorMessage}</p>}
      <div className="search">
        <KommuneDropdown handleChange={handleChange} />

        <div className="numberInput">
          <input
            type="number"
            id="year"
            name="year"
            value={allValues.year === "----" ? "" : allValues.year}
            onChange={handleChange}
            placeholder="Skriv inn årstall"
          />
        </div>
      </div>

      <div className="result">
        <ShowData kommune={allValues.kommune} year={allValues.year}></ShowData>
      </div>
    </>
  );
}
