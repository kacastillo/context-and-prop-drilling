// function Temperature({ celsius, units }) {
//   const degrees = units === "C" ? celsius : (celsius * 9) / 5 + 32;

//   return (
//     <span className="temperature">
//       {Math.round(degrees)}°{units}
//     </span>
//   );
// }

// export default Temperature;



import { useUnits } from "../context/UnitsContext.jsx";

function Temperature({ celsius }) {
  const { units } = useUnits();

  const degrees =
    units === "C" ? celsius : (celsius * 9) / 5 + 32;

  return (
    <span className="temperature">
      {Math.round(degrees)}°{units}
    </span>
  );
}

export default Temperature;