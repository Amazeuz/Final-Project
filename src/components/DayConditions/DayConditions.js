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
          <img className="day-condition__icon" src={humidityIcon} alt="Imagem representando a umidade" />
          <p className="day-condition__text">Umidade</p>
        </div>
        <h1 className="day-condition__value">{currentCity.results?.humidity}%</h1>
      </div>
      <div className="day-condition__container">
        <div className="day-condition__sub-container">
          <img className="day-condition__icon" src={rainIcon} alt="Imagem representando a chance de chuva" />
          <p className="day-condition__text">Chance de Chuva</p>
        </div>
        <h1 className="day-condition__value">{currentCity.results?.forecast && currentCity.results?.forecast[0].rain_probability}%</h1>
      </div>
      <div className="day-condition__container">
        <div className="day-condition__sub-container">
          <img className="day-condition__icon" src={windIcon} alt="Imagem representando a velocidade do vento" />
          <p className="day-condition__text">Velocidade do vento</p>
        </div>
        <h1 className="day-condition__value">{currentCity.results?.wind_speedy}</h1>
      </div>
      <div className="day-condition__container" >
        <div className="day-condition__sub-container">
          <img className="day-condition__icon" src={cloudIcon} alt="Imagem representando a nebulosidade" />
          <p className="day-condition__text">Nebulosidade</p>
        </div>
        <h1 className="day-condition__value">{currentCity.results?.cloudiness}%</h1>
      </div>
      <div className="day-condition__container" >
        <div className="day-condition__sub-container">
          <img className="day-condition__icon" src={sunriseIcon} alt="Imagem representando o nascer do sol" />
          <p className="day-condition__text">Nascer do sol</p>
        </div>
        <h1 className="day-condition__value">{currentCity.results?.sunrise}</h1>
      </div>
      <div className="day-condition__container" >
        <div className="day-condition__sub-container">
          <img className="day-condition__icon" src={sunsetIcon} alt="Imagem representando o pôr do sol" />
          <p className="day-condition__text">Pôr do sol</p>
        </div>
        <h1 className="day-condition__value">{currentCity.results?.sunset}</h1>
      </div>
    </div>
  )
}