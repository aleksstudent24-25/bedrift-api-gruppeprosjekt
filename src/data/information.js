import raw from "../components/fetch-dataNY";

export function Informasjon() {
  const kommuner = raw.classificationItems.map((kommune) => kommune.kommune);
  const stiftelsesdato = raw.classificationItems.map(
    (stiftelsesdato) => stiftelsesdato.stiftelsesdato
  );

  return { kommuner, stiftelsesdato };
}
export default Informasjon;
