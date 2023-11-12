import { useContext } from "react";
import { CurrentCityContext } from '../../contexts/CurrentCityContext.js';
import cloudIcon from '../../images/day-condition-icons/cloud-icon.svg'
import humidityIcon from '../../images/day-condition-icons/humidity-icon.svg'
import rainIcon from '../../images/day-condition-icons/rain-icon.svg'
import windIcon from '../../images/day-condition-icons/wind-icon.svg'
import sunriseIcon from '../../images/day-condition-icons/sunrise_icon.svg';
import sunsetIcon from '../../images/day-condition-icons/sunset_icon.svg';

export default function DayConditions() {
  const currentCity = useContext(CurrentCityContext);

  return (
    <div className="day-condition">
      <div className="day-condition__container">
        <div className="day-condition__sub-container">
          <img className="day-condition__icon" src={humidityIcon} />
          <p className="day-condition__text">Umidade</p>
        </div>
        <h1 className="day-condition__value">{currentCity.humidity}%</h1>
      </div>
      <div className="day-condition__container">
        <div className="day-condition__sub-container">
          <img className="day-condition__icon" src={rainIcon} />
          <p className="day-condition__text">Chance de Chuva</p>
        </div>
        <h1 className="day-condition__value">{currentCity.forecast && currentCity.forecast[0].rain_probability}%</h1>
      </div>
      <div className="day-condition__container">
        <div className="day-condition__sub-container">
          <img className="day-condition__icon" src={windIcon} />
          <p className="day-condition__text">Velocidade do vento</p>
        </div>
        <h1 className="day-condition__value">{currentCity.wind_speedy}</h1>
      </div>
      <div className="day-condition__container" >
        <div className="day-condition__sub-container">
          <img className="day-condition__icon" src={cloudIcon} />
          <p className="day-condition__text">Nebulosidade</p>
        </div>
        <h1 className="day-condition__value">{currentCity.cloudiness}%</h1>
      </div>
      <div className="day-condition__container" >
        <div className="day-condition__sub-container">
          <img className="day-condition__icon" src={sunriseIcon} />
          <p className="day-condition__text">Nascer do sol</p>
        </div>
        <h1 className="day-condition__value">{currentCity.sunrise}</h1>
      </div>
      <div className="day-condition__container" >
        <div className="day-condition__sub-container">
          <img className="day-condition__icon" src={sunsetIcon} />
          <p className="day-condition__text">Pôr do sol</p>
        </div>
        <h1 className="day-condition__value">{currentCity.sunset}</h1>
      </div>
    </div>
  )
}