import { useContext } from "react";
import { CurrentCityContext } from '../../contexts/CurrentCityContext.js';

export default function WeeklyWeather() {
  const currentCity = useContext(CurrentCityContext);

  return (
    <div>WeeklyWeather</div>
  )
}