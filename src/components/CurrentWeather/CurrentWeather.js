import { useContext } from "react";
import { CurrentCityContext } from '../../contexts/CurrentCityContext.js';

export default function currentWeather() {
  const currentCity = useContext(CurrentCityContext);

  console.log(currentCity)
  return (
    <div>CurrentWeather</div>
  )
}