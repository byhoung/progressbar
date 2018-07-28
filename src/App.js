import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ProgressBar from './components/progressBar.js';

const styles = {
	wrapper: {
		height: '30px',
		borderRadius: '0px',
	},
	bar: {
		background: 'red',
		borderRadius: '0px',
	},
};

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currVal: 75,
		};
	}
	componentDidMount() {
		this.countdown = setInterval(() => this.timer(), 5000);
	}

	timer() {
		let val = Math.floor(Math.random() * 100);
		this.setState({ currVal: val });
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to React</h1>
				</header>
				<ProgressBar data={{ value: 25, min: 20, max: 50 }} />
				<ProgressBar data={{ value: this.state.currVal }} styles={styles} />
				<ProgressBar data={{ value: 10, min: 20, max: 50 }} />
				<ProgressBar data={{ value: 25, max: 50 }} styles={{ bar: { background: 'blue' } }} />
				<ProgressBar data={{ value: 25, min: 20 }} />
			</div>
		);
	}
}

export default App;
