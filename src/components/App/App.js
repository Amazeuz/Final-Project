import { useState, useEffect } from 'react';
import Header from '../Header/Header.js';
import Main from '../Main/Main.js';
import Footer from '../Footer/Footer.js';
import AboutPopup from '../AboutPopup/AboutPopup.js';
import api from '../../utils/api.js';
import city from '../../models/Itapema.js';
import { CurrentCityContext } from '../../contexts/CurrentCityContext.js';

export default function App() {
  const [currentCity, setCurrentCity] = useState('');
  const [isAboutPopupOpen, setAboutPopupState] = useState(false)

  useEffect(() => {
    setCurrentCity(city)
  }, [])

  return (
    <CurrentCityContext.Provider value={currentCity}>
      {isAboutPopupOpen && <AboutPopup setAboutPopupState={setAboutPopupState} />}
      <div className={`page ${isAboutPopupOpen && 'page_overlay'}`}>
        <Header setAboutPopupState={setAboutPopupState} />
        <Main />
        <Footer />
      </div>
    </CurrentCityContext.Provider>
  )
}