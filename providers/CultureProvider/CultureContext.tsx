import { createContext } from "react";
import { CultureContextType } from "../../@types";

const CultureContext = createContext<CultureContextType | null>(null);

export default CultureContext;
