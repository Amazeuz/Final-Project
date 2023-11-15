import { useState } from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';
import Header from '../Header/Header.js';
import ApiData from '../ApiData/ApiData.js';
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
        <HashRouter>
          <Header setAboutPopupState={setAboutPopupState} />
          <Switch>
            <Route exact path="/">
              <Main searchCity={searchCity} />
            </Route>
            <Route path="/api">
              <ApiData />
            </Route>
          </Switch>
          <Footer />
        </HashRouter>
      </div>
    </CurrentCityContext.Provider>
  )
}