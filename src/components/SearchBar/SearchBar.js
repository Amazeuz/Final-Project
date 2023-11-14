import { useContext } from "react";
import { CurrentCityContext } from '../../contexts/CurrentCityContext.js';
import searchIcon from '../../images/search-icon.svg'

export default function SearchBar() {
  const currentCity = useContext(CurrentCityContext);

  return (
    <div className="search-bar">
      <input className="search-bar__field" type="text" placeholder="Busque sua cidade" />
      <button className="search-bar__button" type="submit"><img className="search-bar__icon" src={searchIcon} alt="Imagem representando o botão de buscar cidade" /></button>
    </div>
  )
}