import raw from "../components/fetch-dataNY";

export const informasjon = raw.classificationItems.map(
  (kommune) => kommune.kommune
);

export default kommuner;
