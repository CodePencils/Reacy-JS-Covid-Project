import React, { Component } from 'react';
import axios from 'axios';	
const API_URL = 'https://covid19.mathdro.id/api/';

class App extends Component {
	state = {
		countries: []
	}



	componentDidMount() {
		const url = `${API_URL}/countries/`;
		axios.get(url).then(response => response.data)
		.then((data) => {
			this.setState({ countries: data })
			console.log(this.state.countries)
		})
	}


fetchData = async (country) => {
  let changeableUrl = API_URL;
  if (country) {
    changeableUrl = `${API_URL}/countries/${country}`;
  }

  try {
   axios.get(changeableUrl).then(response => response.data)
		.then((data) => {
			this.setState({ countries: data })
			console.log(this.state.countries)
		})
  } catch (error) {
    console.log(error);
  }
};

	render() {

		return (
			<div className="container">
			<div className="col-xs-8">
			<h1>Covid-19 React Project</h1>
			<h3>Covid-19 React Project</h3>
			{this.state.countries.map((country) => (
				<div className="card">
				<div className="card-body">
				<h4 className="card-title">{country.name}</h4>

				</div>
				</div>
				))}
				</div>
				</div>
				);
			}
		}

		export default App;