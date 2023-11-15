import { useRef } from "react";
import searchIcon from '../../images/search-icon.svg'

export default function SearchBar({ searchCity }) {
  const cityRef = useRef()

  function handleClick() {
    searchCity(cityRef.current.value)
  }

  return (
    <div className="search-bar">
      <input className="search-bar__field" ref={cityRef} type="text" placeholder="Busque sua cidade" />
      <button className="search-bar__button" type="submit"><img className="search-bar__icon" src={searchIcon} onClick={handleClick} alt="Imagem representando o botão de buscar cidade" /></button>
    </div>
  )
}