import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './progressBarStyles.css';

class ProgressBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 25,
			min: 0,
			max: 100,
		};
		//Used as a set default values when user doesn't specify values
	}

	componentDidMount() {
		const { data } = this.props;
		if (data) {
			let obj = Object.assign(this.state, data); //Copy previous state and then merge it with incoming props
			this.setState({ obj });
		}
	}

	componentWillUpdate() {
		const { data } = this.props;
		const { value } = this.state;
		if (data.value !== value) {
			this.setState({ value: data.value });
		}
	}

	handleBarStyle(val) {
		//Handles styling as well as width manipulation of the bar
		const { styles } = this.props;
		let styleObj = {};
		if (styles && styles.bar) {
			styleObj = Object.assign({}, styles.bar);
		}
		styleObj.width = `${val}%`;
		return styleObj;
	}

	render() {
		const { value, min, max } = this.state;
		const { styles } = this.props;
		let progress = Math.floor((value / (max - min)) * 100);
		return (
			<div className="progressWrapper" style={styles && styles.wrapper ? styles.wrapper : {}}>
				<div className="bar" style={this.handleBarStyle(progress)}>
					<span>{`${progress}%`}</span>
				</div>
			</div>
		);
	}
}

ProgressBar.propTypes = {
	data: PropTypes.shape({
		value: PropTypes.number,
		min: PropTypes.number,
		max: PropTypes.number,
	}),
	styles: PropTypes.object,
}; //Standard proptype validation

export default ProgressBar;
