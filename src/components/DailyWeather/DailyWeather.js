import { useContext } from "react";
import { CurrentCityContext } from '../../contexts/CurrentCityContext.js';

export default function DailyWeather() {
  const currentCity = useContext(CurrentCityContext);

  return (
    <div>DailyWeather</div>
  )
}