import React, { Component } from 'react';
import './index.css';

class Card extends Component {

  state = {
    loading: true,
    weather: null
  };

  // asynchronous function
  async componentDidMount(){
      const url = "https://api.weather.gov/gridpoints/MLB/25,69/forecast";
      // waits for the promise to resolve then places it into the const
      const response = await window.fetch(url);
      const data = await response.json();


      const weatherData = data.properties.periods;
      // console.log(data.properties.periods[0]);
      // sets weather state to api data, and turns loading to false as loading in const true unless specified
      this.setState({weather: weatherData, loading: false})
  };

  render(){

    // if loading equals true, tells users data is still being processed
    if(this.state.loading){
      return(
        <div>Loading Data....</div>
      )
    // if no weather is to be found
    } else if(!this.state.weather){
      return(
        <div>Weather Data Missing...</div>
      )
    } else{
      // displays weather data
      return(
        <div>
          {/* uses same map technique from lab 4 but now adjusted to display the weather data */}
          {this.state.weather.map(s => (
          <div className="card">
              <h1>{s.name}</h1>
              <h3>{s.temperature} {s.temperatureUnit}</h3>
              <p>{s.detailedForecast}</p>
          </div>
          ))}
        </div>
      )
    }
  }
}

export default Card;