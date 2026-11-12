import { createContext, useContext, useState } from "react";

export const UnitsContext = createContext(null);

export function UnitsProvider({ children }) {
  const [units, setUnits] = useState("F");

  return <UnitsContext value={{ units, setUnits }}>{children}</UnitsContext>;
}

export function useUnits() {
  const value = useContext(UnitsContext);

  if (value === null) {
    throw new Error("useUnits must be used inside a UnitsProvider");
  }

  return value;
}
