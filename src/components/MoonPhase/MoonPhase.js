import { useContext } from "react";
import { CurrentCityContext } from '../../contexts/CurrentCityContext.js';
import moonPhasesImages from "../../images/moon_phases/moonPhaseImagesExport.js";

export default function MoonPhase() {
  const currentCity = useContext(CurrentCityContext)

  const moonPhases = ['first_quarter', 'full', 'last_quarter', 'new', 'waning_crescent', 'waning_gibbous', 'waxing_crescent', 'waxing_gibbous'];
  const moonPhasesTranslations = ['Quarto crescente', 'Lua cheia', 'Quarto Minguante', 'Lua nova', 'Lua Minguante', 'Minguante Gibosa', 'Lua Crescente', 'Crescente Gibosa'];

  return (
    <div className="moon-phase">
      <img className="moon-phase__moon-icon" src={moonPhasesImages[currentCity.moon_phase]} alt="Imagem representando a fase da lua" />
      <h1 className="moon-phase__text">{moonPhasesTranslations[moonPhases.indexOf(currentCity.moon_phase)]}</h1>
    </div>
  )
}