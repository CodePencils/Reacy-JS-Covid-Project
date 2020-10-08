import React, { Component } from 'react';
import axios from 'axios';
const API_URL = 'https://covid19.mathdro.id/api';

class App extends Component {
  state = {
    countries: []
  }
  componentDidMount() {
    const url = '${API_URL}/countries/';
    axios.get(url).then(response => response.data)
    .then((data) => {
      this.setState({ countries: data })
      console.log(this.state.countries)
     })
  }
 render() {

    return (
       <div className="container">
        <div className="col-xs-8">
        <h1>Kamion React Project</h1>
        {this.state.countries.map((country) => (
          <div className="card">
           <div className="card-body">
               <h3 className="card-title">{country.name}</h3>
             
            </div>
          </div>
        ))}
        </div>
       </div>
    );
  }
export default App;