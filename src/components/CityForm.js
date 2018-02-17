import React from 'react';

class CityForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      city: ''
    };

    this.inputUpdated = this.inputUpdated.bind(this);
    this.submitCity = this.submitCity.bind(this);
  }

  inputUpdated(e) {
    const { value } = e.target;

    this.setState({ city: value });
  }

  submitCity(e) {
    // prevent page reload
    e.preventDefault();

    // pull value into city variable & onSubmit method from props
    const { city } = this.state;
    const { onSubmit } = this.props;

    // pass city value to parent - App.js
    onSubmit(city);

    // clear city field
    this.setState({ city: '' })
  }

  render() {
    return(
      <div className="city-form">
        <form onSubmit={this.submitCity}>
          <label htmlFor="city">City Name</label>
          <input
            className="form-control"
            type="input"
            name="city"
            value={this.state.city}
            onInput={this.inputUpdated} />
          <button type="submit" className="btn btn-success">Get the weather!</button>
        </form>
      </div>
    );
  }
}

export default CityForm;
