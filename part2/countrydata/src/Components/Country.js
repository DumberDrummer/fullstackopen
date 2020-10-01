import React from 'react'
const WeatherDisplay = ({ weather }) => {
    if (weather.location === undefined) return (null);
    return (
      <>
        <h2>Weather in {weather.location.name}</h2>
        <br />
        <strong>Temperature: </strong> {weather.current.temperature} °C
        <br />
        <img src={weather.current.weather_icons[0]} />
        <br />
        <strong>Wind: </strong> {weather.current.wind_speed} km/h {weather.current.wind_dir}
      </>)
  }
  const SingleCountrydisplay = ({ country }) => {
    return (
      <div>
        <h1>{country.name}</h1>
        <strong>Capital: </strong> {country.capital} <br />
        <strong>Languages: </strong> <br />
        <ul>
          {country.languages.map(lan => <li key={lan.name}>{lan.name}</li>)}
        </ul>
        <img src={country.flag} style={{ height: "200px" }} />
  
      </div>
    )
  }
  const CountryList = ({ data, countrySelected, weather }) => {
    if (data.length > 10) {
      return (<div>Too many results. Narrow your search</div>)
    }
    else if (data.length > 1) {
      return (<table><tbody>{data.map(x => <tr key={x.name}><td>{x.name}</td><td><button onClick={() => countrySelected(x.name)}>Show</button></td></tr>)}</tbody></table>)
    }
    else if (data.length === 1) {
      return (<><SingleCountrydisplay country={data[0]} /> <br /> <WeatherDisplay weather={weather} /></>)
    }
    else {
      return (null)
    }
  }

  export default CountryList