import React, { Component } from "react";

class Display extends Component {
	getMinutes = () => {
		switch (this.props.running) {
			case "Session":
				return Math.floor(this.props.sessionTimerCount / 60);
			case "Break":
				return Math.floor(this.props.breakTimerCount / 60);
			default:
				break;
		}
	};
	getSeconds = () => {
		switch (this.props.running) {
			case "Session":
				return ("0" + (this.props.sessionTimerCount % 60)).slice(-2);
			case "Break":
				return ("0" + (this.props.breakTimerCount % 60)).slice(-2);
			default:
				break;
		}
	};
	render() {
		return (
			<div id="display">
				Display.
				<div id="timer-label">{this.props.running}</div>
				<div id="time-left">
					{this.getMinutes()}:{this.getSeconds()}
				</div>
			</div>
		);
	}
}

export default Display;
