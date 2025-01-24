import { useState } from "react";
import useEnhetsregisteret from "./fetch-dataNY";
import DisplayModal from "./displaymodal";

export default function ShowData(values) {
  const { data, error, isLoading } = useEnhetsregisteret(values);
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");

  const openModal = (x) => {
    setModalData(x); // Set the data for the modal
    setModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setModalOpen(false); // Close the modal
    setModalData(null); // Clear the modal data
  };

  const filteredData =
    data?.filter(
      (x) =>
        x.navn.toLowerCase().includes(searchTerm.toLowerCase()) ||
        x.organisasjonsnummer.includes(searchTerm)
    ) || [];

  return (
    <>
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
              <div>
                <div
                  className="businessEntry"
                  onClick={() => openModal(x)}
                  key={x.organisasjonsnummer}
                  style={{
                    color: x.konkurs ? "red" : "white",
                  }}
                >
                  {x.organisasjonsnummer}: {x.navn}, {x.stiftelsesdato}.
                  {x.konkurs && " (Konkurs)"}
                </div>
              </div>
            ))
          ) : (
            <p>Ingen resultater funnet.</p>
          )}
        </ul>
      </div>

      {isModalOpen && modalData && (
        <DisplayModal isOpen={isModalOpen} onClose={closeModal} businessData={modalData}>
        </DisplayModal>
      )}
    </>
  );
}
