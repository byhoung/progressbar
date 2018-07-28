import React, { Component } from 'react';
import './progressBarStyles.css';

class ProgressBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 25,
			min: 0,
			max: 100,
		};
	}

	componentDidMount() {
		const { data } = this.props;
		if (data) {
			let obj = Object.assign(this.state, data);
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

export default ProgressBar;
