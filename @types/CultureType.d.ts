import { ScientificName } from "./ScientificName";

export type CultureType = {
  uuid: string;
  created_at: string;
  culture_name: string;
  common_name: string | null;
  scientificName: ScientificName;
  culture_id?: string | null;
  substrate: Substrate;
  date_inoculated: string;
  status: CultureStatus;
  origin?: string;
  description?: string;
  is_isolated?: boolean;
  // todo: image
};

export type SupaBaseCultureType = Omit<
  CultureType,
  "scientificName",
  "substrate"
> & {
  genus: string;
  species: string;
  substrate: CultureSubstrate;
  substrate_description: string;
};

export type CultureSubstrate = "liquid" | "agar" | "grain";

type Substrate = {
  type: CultureSubstrate;
  description: string;
};

type CultureStatus =
  | "Inoculated"
  | "Colonizing"
  | "Healthy"
  | "Contaminated"
  | "Dead"
  // | "Resurrected Outside"; // todo: only for fungi status
