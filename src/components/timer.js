import React, { Component } from "react";

//Components
import Display from "./display";
import { DEF_BREAK, DEF_SESSION, SPEED } from "../components/constants";

class Timer extends Component {
	state = {
		breakTimerCount: DEF_BREAK * 60,
		sessionTimerCount: DEF_SESSION * 60,
		running: "Session",
		timer: null
	};

	componentWillMount() {
		this.setState({
			breakTimerCount: DEF_BREAK * 60,
			sessionTimerCount: DEF_SESSION * 60
		});
	}

	componentDidUpdate() {
		console.log("<Timer/> updated");
		if (this.props.resetFlag) {
			this.stopCountdown();
			this.setState({
				breakTimerCount: DEF_BREAK * 60,
				sessionTimerCount: DEF_SESSION * 60,
				running: "Session"
			});
			this.props.resetControls();
		}
		if (this.props.pause) {
			if (this.state.timer) this.stopCountdown();
		} else {
			if (!this.state.timer) {
				this.state.running === "Session"
					? this.startCountdown(this.tickSessionTimer)
					: this.startCountdown(this.tickBreakTimer);
			}
		}
	}

	tickBreakTimer = () => {
		if (this.state.breakTimerCount > 0) {
			this.setState({ breakTimerCount: this.state.breakTimerCount - 1 });
		} else {
			this.stopCountdown();
		}
	};

	tickSessionTimer = () => {
		if (this.state.sessionTimerCount > 0) {
			this.setState({ sessionTimerCount: this.state.sessionTimerCount - 1 });
		} else {
			this.stopCountdown();
		}
	};

	startCountdown = (callback) => {
		if (!this.state.timer) {
			this.setState({ timer: setInterval(callback, SPEED) });
		}
	};

	stopCountdown = () => {
		console.log("Stopping Timer");
		if (this.state.timer) {
			clearInterval(this.state.timer);
			this.setState({ timer: null });
			console.log("Timer stopped");
		} else {
			console.log("No Timer to stop");
		}
	};

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
