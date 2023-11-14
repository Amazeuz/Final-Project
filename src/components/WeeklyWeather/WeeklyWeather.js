import { useContext } from "react";
import { CurrentCityContext } from '../../contexts/CurrentCityContext.js';
import clearDay from '../../images/climates/clear_day.svg'

export default function WeeklyWeather() {
  const currentCity = useContext(CurrentCityContext);

  return (
    <div className="weekly-weather">
      {currentCity.forecast?.map((day, i) => (
        <div className="weekly-weather__day" key={i}>
          <h1 className="weekly-weather__week-day">{day.weekday}</h1>
          <img className="weekly-weather__icon-condition" src={clearDay} alt="Imagem representando a condição do tempo" />
          <h2 className="weekly-weather__description">{day.description}</h2>
          <h3 className="weekly-weather__temperature">{day.min}&#8451; / {day.max}&#8451;</h3>
        </div>
      ))}
    </div>
  )
}