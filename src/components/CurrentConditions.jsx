import { conditionIcon } from "../conditions.js";
import Temperature from "./Temperature.jsx";

function CurrentConditions({ current }) {
  return (
    <div className="current">
      <span className="current-icon">{conditionIcon(current.condition)}</span>
      <div>
        <p className="current-temp">
          <Temperature celsius={current.celsius} />
        </p>
        <p className="current-condition">{current.condition}</p>
      </div>
      <dl className="current-details">
        <dt>Feels like</dt>
        <dd>
          <Temperature celsius={current.feelsLike} />
        </dd>
        <dt>Humidity</dt>
        <dd>{current.humidity}%</dd>
      </dl>
    </div>
  );
}

export default CurrentConditions;
