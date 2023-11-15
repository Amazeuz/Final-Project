import DayConditions from '../DayConditions/DayConditions.js';
import CurrentWeather from '../CurrentWeather/CurrentWeather.js';
import WeeklyWeather from '../WeeklyWeather/WeeklyWeather.js';

export default function Main({ searchCity }) {

  return (
    <>
      <div className='container'>
        <CurrentWeather searchCity={searchCity} />
        <DayConditions />
      </div>
      <WeeklyWeather />
    </>
  )
}