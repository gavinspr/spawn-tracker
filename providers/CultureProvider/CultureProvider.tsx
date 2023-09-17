import React, { useContext, useState } from "react";
import CultureContext from "./CultureContext";
import { CultureContextType, CultureType } from "../../@types";

type PropTypes = {
  children: JSX.Element;
};
export const useCultureContext = () =>
  useContext(CultureContext) as CultureContextType;

export const CultureProvider = ({ children }: PropTypes) => {
  const [cultures, setCultures] = useState<Array<CultureType> | undefined>(
    undefined
  );

  return (
    <CultureContext.Provider value={{ cultures, setCultures }}>
      {children}
    </CultureContext.Provider>
  );
};
