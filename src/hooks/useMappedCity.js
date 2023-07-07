import { useState } from "react";

function useMappedCity(url) {
  const [cities, setCities] = useState([]);

  if (url) {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4ae2636d8dfbdc3044bede63951a019b&units=metric`
    )
      .then((response) => response.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
          const ciudad = {
            key: recurso.id,
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
          setCities((oldCities) => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
    return {
      ciudad,
    };
  }
}

export default useMappedCity;
