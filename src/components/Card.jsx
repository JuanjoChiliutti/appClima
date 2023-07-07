import '../styles/Card.css'
import thunderstorm from '../assets/thunderstorm.jpg'
import rain from '../assets/rain.jpg'
import mist from '../assets/mist.jpg'
import clouds from '../assets/clouds.jpg'
import despejado from '../assets/despejado.jpg'
import drizzle from '../assets/drizzle.jpg'
import mostcloudy from '../assets/mostcloudy.jpg'
import snow from '../assets/snow.jpg'
import temp from '../assets/termometro.svg'
import tempmax from '../assets/tempmax.svg'
import tempmin from '../assets/tempmin.svg'

function Card({ city }) {

  const background = {
    'Rain': rain,
    'Thunderstorm': thunderstorm,
    'Mist': mist,
    'Clouds': clouds,
    'Drizzle': drizzle,
    'Snow': snow,
  }
  const translations = {
    Rain: 'Lluvia',
    Thunderstorm: 'Tormenta',
    Mist: 'Neblina',
    Clouds: 'Nublado',
    Drizzle: 'Llovizna',
  };
  return (
    <div className="contenedor-clima">
      <h1 className='clima-name'>{city.name}</h1>
      <div className="contenedor-ciudad">
        <div className='contenedor-imagen'>
          <img src={city.weather === 'Clouds' && city.clouds === 100 ? mostcloudy : background[city.weather] || despejado} alt="" />
        </div>
        <div className="contenedor-datos">
          <p className='datos weather'>Condiciones actuales: {translations[city.weather] || 'Despejado'}</p>
          <div className='datos hijo temperaturas'>
            <div className='datos temp hijo'>
              <img src={temp} alt="" />
              <p>{city.temp}°C </p>
            </div>
            <div className='datos tempmax hijo'>
              <img src={tempmax} alt="" />
              <p>{city.max}°C</p>
            </div>
            <div className='datos tempmin hijo'>
              <img src={tempmin} alt="" />
              <p>{city.min}°C</p>
            </div>
          </div>
          <p className='datos wind'>Velocidad del viento: {city.wind}Km/h</p>
          <p className='datos clouds'>Nubosidad: {city.clouds}%</p>
        </div>
      </div>
    </div>


  )
}

export default Card