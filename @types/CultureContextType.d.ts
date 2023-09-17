import { Dispatch, SetStateAction } from "react";

export type CultureContextType = {
  cultures: Array<CultureType> | undefined;
  setCultures: Dispatch<SetStateAction<Array<CultureType> | undefined>>;
};
