import React, { Component } from 'react';
import SingleDay from './SingleDay.js';

// need to unpack forecast to get at pertinent data
function fiveDayForecast(forecast) {
  const daysArray = [];

  for (let i = 0; i < 5; i++) {
    let day = Object.entries(forecast)[0][1][i];
    daysArray.push(day);
  }
  return daysArray;
}

class Forecast extends Component {
  render() {
      console.log("The forecast is " + this.props.forecast);
      return (
        <table className="forecast-container flex-parent">
          <th>Your 5-Day Forecast:</th>
            <tbody>
              <tr>
                {(fiveDayForecast(this.props.forecast)).map(function(day, index) {
                  return <td key={index}><SingleDay forecast={day} /></td>;
                })}
              </tr>
            </tbody>
        </table>
      );
    }
}

export default Forecast;
