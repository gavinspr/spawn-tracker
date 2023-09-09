import { ScientificName } from "./ScientificName";

export interface CultureType {
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
}

export type CultureSubstrate = "liquid" | "agar" | "grain";

type Substrate = {
  type: CultureSubstrate;
  description: string;
};

type CultureStatus =
  | "Inoculated"
  | "Colonizing"
  | "Healthy"
  | "Possibly Contaminated"
  | "Contaminated"
  | "Dead"
  | "Resurrected Outside";
