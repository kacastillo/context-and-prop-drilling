import { useUnits } from "../context/UnitsContext.jsx";

function UnitsToggle() {
  const { units, setUnits } = useUnits();

  return (
    <div className="units-toggle">
      <button
        type="button"
        className={units === "F" ? "units-on" : ""}
        onClick={() => setUnits("F")}
      >
        °F
      </button>
      <button
        type="button"
        className={units === "C" ? "units-on" : ""}
        onClick={() => setUnits("C")}
      >
        °C
      </button>
    </div>
  );
}

export default UnitsToggle;