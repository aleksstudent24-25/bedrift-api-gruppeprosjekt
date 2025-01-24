import "./Modal.css";

const DisplayModal = ({ isOpen, onClose, businessData }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h3 className="modal-title">{businessData.navn}</h3>
        <p>Organisasjonsnummer: {businessData.organisasjonsnummer}</p>
        <p>
          Stiftelsesdato:{" "}
          {businessData.stiftelsesdato != null
            ? businessData.stiftelsesdato
            : "N/A"}
        </p>
        <p>Status: {businessData.konkurs ? "Konkurs" : "Ikke konkurs"}</p>
        <p>Aktivitet: {businessData.aktivitet.map((x) => x)}</p>
        <button className="modal-close" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default DisplayModal;
