import React, { Component } from 'react';
import Map from './Map';
// This class definition is a React.Component so that we
// can use it in multiple places for the app.

class Location extends Component {

  // The constructor takes properties defined as element attributes
  // defined in JSX along with an initial default value for state.

  constructor(props) {
    super(props);
    this.state = {
      value: '0,0', // Null Island
      address: '', // Null Island
      error: null,
    }
  }

  // When the component is rendered to the DOM for the first time
  // such as at page load we call the Geolocation API to determine
  // a latitude and longitude for the browser

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.setState({
            value: position.coords.latitude + ',' + position.coords.longitude,
            address: '',
            error: null,
          });
        },
        (error) => this.setState(
          {error: error.message}
        )
      );
    }
  }

// Respond to user input with event callback
  
changeLocation(evt) {
    this.setState({
        value: evt.target.value,
      }
    )
  }
  
  changeLocationAdd(evt) {
    this.setState({
        address: evt.target.value,
      }
    )
  }


  // The JSX definition for how to render this component on the page.  
  // In this case, it's a simple input field for new todo items.

  render() {
    return (
      <div>
        <center>
          <h3>Location latitude and longitude</h3>
          <p>Ex: 23.772814,90.3535878</p>
          <input
                className="new-todo"
                value={ this.state.value }
                onChange={ evt => this.changeLocation(evt) }
          />
        </center>
        <Map app_id="BQLwX4xjnqAiRhYU5YW9" app_code="KxsKarRdhsxYp1wS9v_6aQ" value={this.state.value} />        
      </div>
    );
  }
}

// <center>
// <h3>Location</h3>
// <p>Ex: Dhaka, Bangladesh</p>
// <input
//   className="new-todo"
//   value={ this.state.address }
//   onChange={ evt => this.changeLocationAdd(evt) }
// />
// </center>
// <Map app_id="BQLwX4xjnqAiRhYU5YW9" app_code="KxsKarRdhsxYp1wS9v_6aQ" value="" address={this.state.address} />

export default Location;