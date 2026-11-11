
import { Route, Routes } from "react-router";

import { CityProvider } from "./context/CityContext.jsx";
import { UnitsProvider } from "./context/UnitsContext.jsx";
import Layout from "./components/Layout.jsx";
import TodayPage from "./components/TodayPage.jsx";
import WeekPage from "./components/WeekPage.jsx";

function App() {
  return (
    <UnitsProvider>
      <CityProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<TodayPage />} />
            <Route path="week" element={<WeekPage />} />
          </Route>
        </Routes>
      </CityProvider>
    </UnitsProvider>
  );
}

export default App;
