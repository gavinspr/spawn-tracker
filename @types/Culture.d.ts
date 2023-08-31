export type Culture = {
  uuid: string;
  name: string;
  scientificName: ScientificName;
  cultureId: string;
  substrate: Substrate;
  dateInoculated: string;
  status: CultureStatus;
  origin?: string;
};

type ScientificName = {
  genus: string;
  species: string;
};

type Substrate = {
  type: "liquid" | "agar" | "grain";
  metadata: Record<string, any>; // !
};

type CultureStatus =
  | "Inoculated"
  | "Colonizing"
  | "Healthy"
  | "Contaminated"
  | "Dead"
  | "Resurrected Outside";
