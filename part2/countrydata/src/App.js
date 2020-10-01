
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';
import CountryList from './Components/Country';

const App = () => {
  //#region Hooks
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState('');
  const [weather, setWeather] = useState({})
  const [singleCountry, setSingleCountry] = useState('');
  const filterEffect = () => {
    if (filteredData.length === 1 && singleCountry !== filteredData[0] ) {
      setSingleCountry(filteredData[0])
    }
  };
  const getWeatherEffect = () => {
    if (singleCountry === '') return;
    axios.get(`http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_WEATHER_KEY}&query=${filteredData[0].capital}`)
      .then(res => {
        setWeather(res.data)
      })
    };
      
  useEffect(getWeatherEffect, [singleCountry]);
  useEffect(filterEffect, [filter])
  //#endregion

  //#region Initial Data Load
  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then(res => {
        setData(res.data)
      })
  }, [])
  //#endregion
  const filteredData = data.filter(x => x.name.toLowerCase().includes(filter.toLowerCase()))

//#region Event Handlers
  const filterChanged = (event) => {
    setFilter(event.target.value)
  }
  const countrySelectedHandler = (name) => {
    setSingleCountry(name);
    setFilter(name)
  }
  //#endregion
  return (
    <div>
      <strong>
        Filter
        </strong>
      <input value={filter} onChange={filterChanged} />
      <CountryList data={filteredData} countrySelected={countrySelectedHandler} weather={weather} />
    </div>
  )
}

export default App;
 