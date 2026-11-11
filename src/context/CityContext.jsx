
import { createContext, useContext, useState } from "react";

import forecasts from "../data/forecasts.json";

export const CityContext = createContext(null);

export function CityProvider({ children }) {
  const [cityId, setCityId] = useState("seattle");
  const city = forecasts.find((forecast) => forecast.id === cityId);

  return (
    <CityContext value={{ city, setCityId }}>
      {children}
    </CityContext>
  );
}

export function useCity() {
  const value = useContext(CityContext);

  if (value === null) {
    throw new Error("useCity must be used inside a CityProvider");
  }

  return value;
}
