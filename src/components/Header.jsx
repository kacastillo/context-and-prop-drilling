import { NavLink } from "react-router";

import { useCity } from "../context/CityContext.jsx";
import { useUnits } from "../context/UnitsContext.jsx";
import CityPicker from "./CityPicker.jsx";
import Clock from "./Clock.jsx";
import UnitsToggle from "./UnitsToggle.jsx";

function navClass({ isActive }) {
  return isActive ? "nav-link nav-on" : "nav-link";
}

function Header() {
  const { city } = useCity();
  const { units } = useUnits();

  return (
    <header className="header">
      <div className="header-top">
        <div>
          <h1 className="header-title">Weather Desk</h1>
          <p className="header-meta">
            {city.name} · °{units}
          </p>
        </div>
        <Clock />
      </div>
      <div className="header-bar">
        <nav className="nav">
          <NavLink end to="/" className={navClass}>
            Today
          </NavLink>
          <NavLink to="/week" className={navClass}>
            This week
          </NavLink>
        </nav>
        <div className="header-controls">
          <CityPicker />
          <UnitsToggle />
        </div>
      </div>
    </header>
  );
}

export default Header;
