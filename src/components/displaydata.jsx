import { useState } from "react";
import useEnhetsregisteret from "./fetch-dataNY";

export default function ShowData(values) {
  const { data, error, isLoading } = useEnhetsregisteret(values);

  const [searchTerm, setSearchTerm] = useState("");

  const filteredData =
    data?.filter((x) =>
      x.navn.toLowerCase().includes(searchTerm.toLowerCase()) || 
      x.organisasjonsnummer.includes(searchTerm) 
    ) || [];

  return (
    <div>
      <input
        type="text"
        placeholder="Søk etter bedrift (navn eller org.nr)"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      
      <ul>
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error</p>
        ) : filteredData.length > 0 ? (
          filteredData.map((x) => (
            <div
              key={x.organisasjonsnummer}
              style={{
                color: x.konkurs ? "red" : "white", 
              }}
            >
              {x.organisasjonsnummer}: {x.navn}, {x.stiftelsesdato}.
              {x.konkurs && " (Konkurs)"}
            </div>
          ))
        ) : (
          <p>Ingen resultater funnet.</p>
        )}
      </ul>
    </div>
  );
}