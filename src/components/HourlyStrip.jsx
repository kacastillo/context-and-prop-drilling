import HourCard from "./HourCard.jsx";

function HourlyStrip({ hours }) {
  return (
    <ol className="hours">
      {hours.map((hour) => (
        <HourCard key={hour.hour} hour={hour} />
      ))}
    </ol>
  );
}

export default HourlyStrip;
