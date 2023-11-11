import { useContext } from "react";
import { CurrentCityContext } from '../../contexts/CurrentCityContext.js';
import climateImages from "../../images/climates/climatesImageExport.js";
import SearchBar from '../SearchBar/SearchBar.js';

export default function currentWeather() {
  const currentCity = useContext(CurrentCityContext);

  return (
    <div className="current-weather">
      <SearchBar />
      <h1 className="current-weather__city-name">{currentCity.city}</h1>
      <div className="current-weather__container">
        <p className="current-weather__temperature">{currentCity.temp} &#8451;</p>
        <img className="current-weather__weather-condition" src={climateImages[currentCity.condition]} />
      </div>
    </div>
  )
}