import { useContext } from "react";
import { CurrentCityContext } from '../../contexts/CurrentCityContext.js';

export default function SearchBar() {
  const currentCity = useContext(CurrentCityContext);

  return (
    <div>SearchBar</div>
  )
}