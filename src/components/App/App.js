import AirConditions from '../AirConditions/AirConditions.js';
import CurrentWeather from '../CurrentWeather/CurrentWeather.js';
import DailyWeather from '../DailyWeather/DailyWeather.js';
import SearchBar from '../SearchBar/SearchBar.js';
import WeeklyWeather from '../WeeklyWeather/WeeklyWeather.js';

export default function App() {
  return (
    <div className='page'>
      <AirConditions />
      <CurrentWeather />
      <DailyWeather />
      <SearchBar />
      <WeeklyWeather />
    </div>
  )
}