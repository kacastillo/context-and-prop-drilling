// function Temperature({ celsius, units }) {
//   const degrees = units === "C" ? celsius : (celsius * 9) / 5 + 32;

//   return (
//     <span className="temperature">
//       {Math.round(degrees)}°{units}
//     </span>
//   );
// }

// export default Temperature;


import { useContext } from "react";
import { UnitsContext } from "../context/UnitsContext.jsx";

function Temperature({ celsius }) {
  const units = useContext(UnitsContext);
  const degrees = units === "C" ? celsius : (celsius * 9) / 5 + 32;

  return (
    <span className="temperature">
      {Math.round(degrees)}°{units}
    </span>
  );
}

export default Temperature;