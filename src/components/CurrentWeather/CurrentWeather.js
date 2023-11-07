import { useContext } from "react";
import { CurrentCityContext } from '../../contexts/CurrentCityContext.js';
import climateImages from "../../images/climates/climatesImageExport.js";
import moonPhasesImages from "../../images/moon_phases/moonPhaseImagesExport.js";

export default function currentWeather() {
  const currentCity = useContext(CurrentCityContext);

  return (
    <div className="current-weather">
      <p className="current-weather__temperature">{currentCity.temp} &#8451;</p>
      <div className="current-weather__container">
        <h1 className="current-weather__city-name">{currentCity.city}</h1>
        <img className="current-weather__weather-condition" src={climateImages[currentCity.condition]} />
      </div>
      {currentCity.currently == 'noite' && <img className="current-weather__moon-phase" src={moonPhasesImages[currentCity.moon_phase]} />}
    </div>
  )
}