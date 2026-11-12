// import forecasts from "../data/forecasts.json";

// function CityPicker({ cityId, onCityChange }) {
//   return (
//     <label className="city-picker">
//       City
//       <select value={cityId} onChange={(e) => onCityChange(e.target.value)}>
//         {forecasts.map((forecast) => (
//           <option key={forecast.id} value={forecast.id}>
//             {forecast.name}
//           </option>
//         ))}
//       </select>
//     </label>
//   );
// }

// export default CityPicker;



import { useCity } from "../context/CityContext.jsx";
import forecasts from "../data/forecasts.json";

function CityPicker() {
  const { city, setCityId } = useCity();

  return (
    <label className="city-picker">
      City
      <select
        value={city.id}
        onChange={(e) => setCityId(e.target.value)}
      >
        {forecasts.map((forecast) => (
          <option key={forecast.id} value={forecast.id}>
            {forecast.name}
          </option>
        ))}
      </select>
    </label>
  );
}

export default CityPicker;
