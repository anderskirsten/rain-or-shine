import React, { Component } from 'react';
import Forecast from './Forecast';

class CurrentWeather extends Component {
  constructor(props) {
    super(props);

    this.state = {
      forecast: this.props.currentWeather.forecast,
    };

    this.getForecast = this.getForecast.bind(this);
    this.toggleHidden = this.props.toggleHidden.bind(this);
  }

  getForecast(forecast) {
    console.log(forecast);
    // need to hide current-weather component and then display forecast instead
    this.toggleHidden();
    return <Forecast forecast={forecast} />;
  }

  render() {
    const { currentWeather } = this.props;

    return (
      <table className="current-weather">
        <tbody>
          <tr>
            <td>
              <h1 className="day-header">{currentWeather.location.name}</h1>
            </td>
            <td>
              <div className="overview">
                <p>
                  <img src={currentWeather.current.condition.icon} alt={currentWeather.current.condition.text} />
                  <strong>{currentWeather.current.condition.text}</strong>
                </p>
              </div>
            </td>
          </tr>
          <tr className="weather">
            <td>
              <h2 className="temp">Currently {currentWeather.current.temp_f.toFixed()} &#8457;</h2>
              <h3 className="temp">Feels Like {currentWeather.current.feelslike_f.toFixed()} &#8457;</h3>
            </td>
            <td>
              <p>
                Humidity: {currentWeather.current.humidity}% <br />
                Wind: {currentWeather.current.wind_mph.toFixed()} mph <br />
                Wind Direction: {currentWeather.current.wind_dir}
              </p>
            </td>
          </tr>
          <tr>
            <td className="time-info">
              <small>Local Time: {currentWeather.location.localtime} <br />
              Last Updated: {currentWeather.current.last_updated}</small>
            </td>
          </tr>
        </tbody>
      </table>
    )
  }
}

export default CurrentWeather;
