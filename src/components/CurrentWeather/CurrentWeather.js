import { useContext } from "react";
import { CurrentCityContext } from '../../contexts/CurrentCityContext.js';
import climateImages from "../../images/climates/climatesImageExport.js";

export default function currentWeather() {
  const currentCity = useContext(CurrentCityContext);

  return (
    <>
      <div>
        <h1 className="currentWeather__city_name"></h1>
        <h2 className="currentWeather__rain_chance"></h2>
        <p className="currentWeather__degree"></p>
      </div>
      <img className="currentWeather__weather_condition" src={climateImages[currentCity.condition]} />
    </>
  )
}