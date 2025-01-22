import raw from "./kom.json";

export const kommuner = raw.classificationItems.map((kommune) => kommune.name);

export default kommuner;
