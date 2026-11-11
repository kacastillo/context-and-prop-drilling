import DayCard from "./DayCard.jsx";

function WeekPage({ city}) {
  return (
    <section className="page">
      <h2 className="page-title">This week in {city.name}</h2>
      <ol className="days">
        {city.daily.map((day) => (
          <DayCard key={day.day} day={day} />
        ))}
      </ol>
    </section>
  );
}

export default WeekPage;
