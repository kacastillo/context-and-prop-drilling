import { useState } from "react";
import { Route, Routes } from "react-router";

import forecasts from "./data/forecasts.json";
import Layout from "./components/Layout.jsx";
import TodayPage from "./components/TodayPage.jsx";
import WeekPage from "./components/WeekPage.jsx";

import { UnitsContext } from "./context/UnitsContext.jsx";

function App() {
  const units = "F";
  const [cityId, setCityId] = useState("seattle");
  const city = forecasts.find((forecast) => forecast.id === cityId);


return (
  <UnitsContext value="C">
    <Routes>
      <Route element={<Layout cityId={cityId} onCityChange={setCityId} />}>
        <Route index element={<TodayPage city={city} />} />
      <Route
  path="week"
  element={
    <UnitsContext value="F">
      <WeekPage city={city} />
    </UnitsContext>
  }
/>

      </Route>
    </Routes>
  </UnitsContext>
);
}

export default App;


