import { useState, useEffect } from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';
import Header from '../Header/Header.js';
import ApiData from '../ApiData/ApiData.js';
import Main from '../Main/Main.js';
import Footer from '../Footer/Footer.js';
import PreLoader from '../PreLoader/PreLoader.js';
import AboutPopup from '../AboutPopup/AboutPopup.js';
import ErrorPopup from '../ErrorPopup/ErrorPopup.js';
import api from '../../utils/api.js';
import { CurrentCityContext } from '../../contexts/CurrentCityContext.js';

export default function App() {
  const [currentCity, setCurrentCity] = useState('');
  const [isAboutPopupOpen, setAboutPopupState] = useState(false);
  const [isPageLoaded, setPageLoaded] = useState(true);
  const [errorPopupState, setErrorPopupState] = useState(false)

  async function searchCity(city) {
    setPageLoaded(false)
    await api.getCityInfo(city)
      .then((data) => {
        if (data.valid_keys === false) {
          setErrorPopupState(true)
        }
        else {
          setCurrentCity(data)
        }
      })
    setPageLoaded(true)
  }

  useEffect(() => {
    searchCity('São Paulo')
  }, [])

  return (
    <CurrentCityContext.Provider value={currentCity}>
      {isAboutPopupOpen && <AboutPopup setAboutPopupState={setAboutPopupState} />}
      {!isPageLoaded && <PreLoader />}
      {errorPopupState && <ErrorPopup setErrorPopupState={setErrorPopupState} />}
      <div className={`page ${isAboutPopupOpen | !isPageLoaded && 'page_overlay'}`}>
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