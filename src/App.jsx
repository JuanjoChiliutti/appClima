
import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import Searchbar from './components/Searchbar'
import { useEffect } from 'react';
import Nofound from './components/Nofound';



function App() {
  const [city, setCity] = useState('');
  const [show, setShow] = useState(false)
  const [notFound, setNotFound] = useState(false);
 useEffect(() => {
  
   }
 , [city])
 

  
  function onSearch(city) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4ae2636d8dfbdc3044bede63951a019b&units=metric`
    )
      .then((r) => r.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
          const city = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon,
          };
          setCity(city);
        } else {
          setNotFound(true)
        }
      });
  }

  return (
    <div className='contenedor-principal'>
      <h1>CHEQUEA EL CLIMA EN LA LOCALIDAD QUE DESEES</h1>
      <Searchbar onSearch={onSearch} setCity={setCity} setShow={setShow} setNotFound={setNotFound}/>
      {show ? (
        notFound ? (
          <Nofound />
        ) : (
          <Card city={city} />
        )
      ) : null}
    </div>
  );
}


export default App
