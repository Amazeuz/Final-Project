import { useState, useEffect } from 'react';
import Header from '../Header/Header.js';
import Main from '../Main/Main.js';
import Footer from '../Footer/Footer.js';
import AboutPopup from '../AboutPopup/AboutPopup.js';
import defaultCity from '../../utils/defaultCity.js';
import api from '../../utils/api.js';
import { CurrentCityContext } from '../../contexts/CurrentCityContext.js';

export default function App() {
  const [currentCity, setCurrentCity] = useState(defaultCity);
  const [isAboutPopupOpen, setAboutPopupState] = useState(false)

  function searchCity(city) {
    api.getCityInfo(city)
      .then((data) => {
        setCurrentCity(data)
      })
  }

  return (
    <CurrentCityContext.Provider value={currentCity}>
      {isAboutPopupOpen && <AboutPopup setAboutPopupState={setAboutPopupState} />}
      <div className={`page ${isAboutPopupOpen && 'page_overlay'}`}>
        <Header setAboutPopupState={setAboutPopupState} />
        <Main searchCity={searchCity} />
        <Footer />
      </div>
    </CurrentCityContext.Provider>
  )
}