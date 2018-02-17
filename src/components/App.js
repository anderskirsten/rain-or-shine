import React from 'react';
import CityForm from './CityForm';
import { get } from 'axios';
import ReactWeatherApiKey from '../constants.js';
import CurrentWeather from './CurrentWeather';
import Forecast from './Forecast';

const apiWeatherKey = ReactWeatherApiKey;
const urlBase = 'http://api.apixu.com/v1/forecast.json?key=' + apiWeatherKey;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      city: '',
      weather: null,
      isHidden: true
    };

    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  onFormSubmit(city) {
    get(urlBase + '&q="' + city + '"&days=5')
    .then((response) => {
       console.log(response);
       this.setState({weather: response.data})
     })
    .catch((error)=>{
       console.log(error);
    });

    this.setState({ city });
  }

  render() {
    return(
      <div className="app">
        <CityForm onSubmit={this.onFormSubmit} />
        {this.state.weather !== null && <CurrentWeather currentWeather={this.state.weather} city={this.state.city} toggleHidden={this.toggleHidden} />}
        {this.state.weather !== null && <Forecast forecast={this.state.weather.forecast} />}
      </div>
    );
  }
}

export default App;
