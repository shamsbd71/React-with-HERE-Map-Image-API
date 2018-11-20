import React, { Component } from 'react';

class Map extends Component {

  // For conciseness simply included all parameters in the querystring directly

  constructor(props) {
    super(props);
    this.state = {
      url: 'https://image.maps.api.here.com/mia/1.6/mapview?w=600&h=300&z=14&t=5&poitxs=16&poitxc=black&poifc=yellow',
      urladdress: 'https://image.maps.api.here.com/mia/6.2/search?w=600&h=300&z=17&t=5&poitxs=16&poitxc=black&poifc=yellow',
      points: [],
    }
  }

  // Helper function to format list of points

  getPOIList(value) {
    let location = [];
    if(value.length){
      location = value.split(',');
    }

    // if (this.state.points.length > 0) {
    if (location.length > 0) {
      let param = '&poi=';
      // for (var poi in this.state.points) {
      // for (var poi in location) {
      param += location[0] + ',' + location[1];
      // }
      console.log(param);
      return param;
    }

    return '';
  }
  
  getPOIListAddress(value) {
    // if (this.state.points.length > 0) {
    return '&searchText='+value;
  }

  // Render method builds the URL dynamically to fetch the image from the
  // HERE Map Image API

  render() {
    let value = this.props.value;
    let address = this.props.address;
    
    return (
      <div> 
            {
              value ? 
              <img
                src={ this.state.url
                  + '&app_id=' + this.props.app_id
                  + '&app_code=' + this.props.app_code
                  + this.getPOIList(value)
                  }
                alt="Todo Map"/>
              :
              null
            }

    
            {
              address ?
              <img
              src={ this.state.urladdress
                + '&app_id=' + this.props.app_id
                + '&app_code=' + this.props.app_code
                + this.getPOIListAddress(address)
                }
              alt="Todo Map"/>
              :
              null
            }
          
      </div>

    )
  }
}
export default Map;