import raw from "../components/fetch-dataNY";

export function Informasjon() {
  const kommuner = raw.classificationItems.map((kommune) => kommune.kommune);
  const stiftelsesdato = raw.classificationItems.map(
    (stiftelsesdato) => stiftelsesdato.stiftelsesår
  );

  return { kommuner, stiftelsesdato };
}
export default Informasjon;
