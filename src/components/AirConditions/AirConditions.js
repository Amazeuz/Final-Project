import { useContext } from "react";
import { CurrentCityContext } from '../../contexts/CurrentCityContext.js';
import cloudIcon from '../../images/air-condition-icons/cloud-icon.svg'
import humidityIcon from '../../images/air-condition-icons/humidity-icon.svg'
import rainIcon from '../../images/air-condition-icons/rain-icon.svg'
import windIcon from '../../images/air-condition-icons/wind-icon.svg'

export default function AirConditions() {
  const currentCity = useContext(CurrentCityContext);

  return (
    <div className="air-condition">
      <div className="air-condition__container">
        <div className="air-condition__sub-container">
          <img className="air-condition__icon" src={humidityIcon} />
          <p className="air-condition__text">Umidade</p>
        </div>
        <h1 className="air-condition__value">{currentCity.humidity}%</h1>
      </div>
      <div className="air-condition__container">
        <div className="air-condition__sub-container">
          <img className="air-condition__icon" src={rainIcon} />
          <p className="air-condition__text">Chance de Chuva</p>
        </div>
        <h1 className="air-condition__value">{currentCity.rain}%</h1>
      </div>
      <div className="air-condition__container">
        <div className="air-condition__sub-container">
          <img className="air-condition__icon" src={windIcon} />
          <p className="air-condition__text">Velocidade do vento</p>
        </div>
        <h1 className="air-condition__value">{currentCity.wind_speedy}</h1>
      </div>
      <div className="air-condition__container" >
        <div className="air-condition__sub-container">
          <img className="air-condition__icon" src={cloudIcon} />
          <p className="air-condition__text">Nebulosidade</p>
        </div>
        <h1 className="air-condition__value">{currentCity.cloudiness}%</h1>
      </div>
    </div>
  )
}