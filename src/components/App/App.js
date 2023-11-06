import { useState, useEffect } from 'react';
import AirConditions from '../AirConditions/AirConditions.js';
import CurrentWeather from '../CurrentWeather/CurrentWeather.js';
import DailyWeather from '../DailyWeather/DailyWeather.js';
import SearchBar from '../SearchBar/SearchBar.js';
import WeeklyWeather from '../WeeklyWeather/WeeklyWeather.js';
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
        <div className='container'>
          <SearchBar />
          <CurrentWeather />
          <DailyWeather />
          <AirConditions />
        </div>
        <WeeklyWeather />
      </div>
    </CurrentCityContext.Provider>
  )
}