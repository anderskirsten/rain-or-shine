import React, { Component } from 'react';

class SingleDay extends Component {
  render() {
    console.log(this.props);
    const { forecast } = this.props;
    console.log(forecast);

    return (
      <table className="single-day-item">
        <tbody>
          <tr>
            <td>
              <h3 className="day-header">{forecast.date}</h3>
            </td>
          </tr>
          <tr>
            <td>
              <div className="overview">
                <p>
                  <img src={forecast.day.condition.icon} alt={forecast.day.condition.text} />
                  <strong>{forecast.day.condition.text}</strong>
                </p>
              </div>
            </td>
          </tr>
          <tr className="weather">
            <td>
              <h2 className="temp">High {forecast.day.maxtemp_f.toFixed()} &#8457;</h2>
              <h3 className="temp">Low {forecast.day.mintemp_f.toFixed()} &#8457;</h3>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default SingleDay;
