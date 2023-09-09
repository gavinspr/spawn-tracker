import { ScientificName } from "./ScientificName";

export type FungiType = {
  uuid: string;
  created_at: string;
  common_name: string | null;
  genus: string;
  species: string;
  // todo: image
};
