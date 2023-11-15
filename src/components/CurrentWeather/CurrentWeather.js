import { useContext } from "react";
import { CurrentCityContext } from '../../contexts/CurrentCityContext.js';
import climateImages from "../../images/climates/climatesImageExport.js";
import SearchBar from '../SearchBar/SearchBar.js';
import MoonPhase from "../MoonPhase/MoonPhase.js";

export default function currentWeather() {
  const currentCity = useContext(CurrentCityContext);

  return (
    <div className="current-weather">
      <SearchBar />
      <h1 className="current-weather__text">{currentCity.results?.city}</h1>
      <div className="current-weather__container">
        <p className="current-weather__temperature">{currentCity.results?.temp}&#8451;</p>
        {currentCity.results?.currently === 'noite' && <MoonPhase />}
      </div>
      <div className="current-weather__container">
        <img className="current-weather__weather-condition" src={climateImages[currentCity.results?.condition_slug]} alt="Imagem representando a condição do tempo" />
        <h2 className="current-weather__text">{currentCity.results?.description}</h2>
      </div>
    </div>
  )
}