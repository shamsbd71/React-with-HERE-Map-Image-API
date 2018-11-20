import React, { Component } from 'react';
import Location from './Location';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <section>
          <Location/>
        </section>

        <section className="ref-list">
        <h3>Ref:</h3>
        <ul className="List">
          <li>http://localhost:3000/</li>
          <li>https://developer.here.com/documentation/geocoder/topics/resource-search.html</li>
          <li>https://developer.here.com/api-explorer/maps-js/v3.0/servicesRouting/geocode-a-location-from-address</li>
          <li>https://image.maps.api.here.com/mia/1.6/mapview?w=600&h=300&z=17&t=5&poitxs=16&poitxc=black&poifc=yellow&app_id=BQLwX4xjnqAiRhYU5YW9&app_code=KxsKarRdhsxYp1wS9v_6aQ&searchText=Dhaka,%20Bangladesh</li>
        </ul>
        </section>
      </div>
    );
  }
}

export default App;
