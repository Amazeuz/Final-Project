import { useState, useEffect } from 'react';
import Header from '../Header/Header.js';
import Main from '../Main/Main.js';
import Footer from '../Footer/Footer.js';
import api from '../../utils/api.js';
import city from '../../models/Itapema.js';
import { CurrentCityContext } from '../../contexts/CurrentCityContext.js';

export default function App() {
  const [currentCity, setCurrentCity] = useState('');

  useEffect(() => {
    setCurrentCity(city)
  }, [])

  return (
    <CurrentCityContext.Provider value={currentCity}>
      <div className='page'>
        <Header />
        <Main />
        <Footer />
      </div>
    </CurrentCityContext.Provider>
  )
}