import React, { Component } from "react";

//Components
import Display from "./display";

class Timer extends Component {
	state = {
		breakTimerCount: 0,
		sessionTimerCount: 0,
		running: "Session"
	};

	componentWillMount() {
		this.setState({
			breakTimerCount: this.props.break * 60,
			sessionTimerCount: this.props.session * 60
		});
	}

	// componentDidUpdate() {
	// 	if (this.props.stop) {
	// 		if (this.props.currtimer) this.props.clearTimer();
	// 		this.props.setSessionTimer(this.props.session * 60);
	// 		this.props.setBreakTimer(this.props.break * 60);
	// 	}
	// 	if (!this.props.pause) {
	// 		this.props.stopTimer(false);
	// 		this.handleTimer();
	// 	} else {
	// 		this.props.clearTimer();
	// 	}
	// }

	// componentWillUnmount() {
	// 	this.props.clearTimer();
	// }

	// handleTimer = () => {
	// 	if (!this.props.currtimer) {
	// 		console.log("Started Timer!!!");
	// 		this.props.startTimer(
	// 			setInterval(() => {
	// 				this.props.countSessionTimer();
	// 			}, 50)
	// 		);
	// 	}
	// 	if (this.props.timersession === 0 && this.props.running === "Session") {
	// 		this.props.clearTimer();
	// 		console.log("Hooyah");
	// 		this.props.setRunning("Break");
	// 		this.props.startTimer(
	// 			setInterval(() => {
	// 				this.props.countBreakTimer();
	// 			}, 50)
	// 		);
	// 	}
	// };

	// getMinutes = () => {
	// 	switch (this.props.running) {
	// 		case "Session":
	// 			return Math.floor(this.props.timersession / 60);
	// 		case "Break":
	// 			return Math.floor(this.props.timerbreak / 60);
	// 		default:
	// 			break;
	// 	}
	// };
	// getSeconds = () => {
	// 	switch (this.props.running) {
	// 		case "Session":
	// 			return ("0" + (this.props.timersession % 60)).slice(-2);
	// 		case "Break":
	// 			return ("0" + (this.props.timerbreak % 60)).slice(-2);
	// 		default:
	// 			break;
	// 	}
	// };

	render() {
		console.log(this.props);
		console.log(this.state);
		return (
			<div>
				Timer.
				<Display {...this.state} />
			</div>
		);
	}
}

export default Timer;
