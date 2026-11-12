import { conditionIcon } from "../conditions.js";
import Temperature from "./Temperature.jsx";

function DayCard({ day }) {
  return (
    <li className="day">
      <span className="day-name">{day.day}</span>
      <span className="day-icon">{conditionIcon(day.condition)}</span>
      <span className="day-condition">{day.condition}</span>
      <span className="day-range">
        <Temperature celsius={day.high} />
        <span className="day-low">
          <Temperature celsius={day.low} />
        </span>
      </span>
    </li>
  );
}

export default DayCard;
