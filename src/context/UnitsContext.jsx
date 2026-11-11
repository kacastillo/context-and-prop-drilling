import { createContext } from "react";

// export const UnitsContext = createContext("C");
export const UnitsContext = createContext("F");

export function UnitsProvider({ children }) {
  const [units, setUnits] = useState("F");

  return (
    <UnitsContext value={{ units, setUnits }}>
      {children}
    </UnitsContext>
  );
}