import React, { useState } from "react";

export const City = ({ city , handleClear,handleClick,control}) => {
  

  let weatherImage = null;
  if (city.weather && city.weather.length > 0) {
    const weatherMain = city.weather[0].main;
    if (weatherMain === "Rain") {
      weatherImage = (
        <img src="images/rain.png" className="weatherRain" alt="Rainy" />
      );
    } else if (weatherMain === "Clear") {
      weatherImage = (
        <img src="images/sunny.png" className="weatherSunny" alt="Sunny" />
      );
    } else if (weatherMain === "Clouds") {
      weatherImage = (
        <img src="images/cloudy.png" className="weatherCloudy" alt="Cloudy" />
      );
    }
  }
  
  
  
  return (
    <div>
      {control ? (
        <div className='showWeather'>
            <button onClick={handleClick} className="mt-8 showButton">Show Weather</button>
        <h1  className='mt-10 text-lg text-white flex'>City <p className="text-black ml-1">:</p></h1>
        <h1 className='mt-8 text-white text-lg flex'>Weather <p className="text-black ml-1">:</p></h1>
        <h1 className='mt-5 text-white text-xl flex'>Temperature <p className="text-black ml-1">:</p></h1>
    </div>
      ) : (
        <div className="showWeather">
            <button onClick={handleClear} className="mt-8 showButton">Clear</button>
          <h1 className="mt-10 text-lg text-white flex">City <p className="text-black ml-1 mr-1">:</p> {city.name}</h1>
          <h1 className="mt-0 text-white text-lg flex"> {weatherImage}</h1>
          <h1 className="mt-5 text-white text-xl flex">
            Temperature <p className="text-black ml-1 mr-1">:</p> {city.main.feels_like}
          </h1>
        </div>
      )}
    </div>
    
  );
};
