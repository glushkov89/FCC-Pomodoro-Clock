import React, { Component } from "react";

//Components
import Display from "./display";
import { DEF_BREAK, DEF_SESSION, SPEED } from "../components/constants";

class Timer extends Component {
	// state = {
	// 	breakTC: DEF_BREAK * 60,
	// 	sessionTC: DEF_SESSION * 60,
	// 	running: "Session"
	// };

	timer = {
		breakBuf: DEF_BREAK * 60,
		sessionBuf: DEF_SESSION * 60,
		timer: null
	};

	display = {
		breakTC: DEF_BREAK * 60,
		sessionTC: DEF_SESSION * 60,
		running: "Session"
	};

	// componentWillMount() {
	// 	this.setState({
	// 		breakTimerCount: DEF_BREAK * 60,
	// 		sessionTimerCount: DEF_SESSION * 60
	// 	});
	// }

	componentDidUpdate() {
		//	console.log("Did update Timer");
		this.handleControls();
	}

	handleControls = () => {
		//	console.log("Handling controls");
		switch (this.props.ctrlstate) {
			case "play":
				this.handlePlay();
				return;
			case "pause":
				this.handlePause();
				return;
			case "stop":
				this.handleStop();
				break;
			case "reset":
				this.handleReset();
				return;

			default:
				return;
		}
	};

	handlePlay = () => {
		console.log("Handling play");
		if (this.display.running === "Session") {
			this.countSession();
		} else {
			this.countBreak();
		}
	};

	handlePause = () => {
		console.log("Handling pause");
		this.stopCountdown();
	};

	handleStop = () => {
		console.log("Handling stop");
		this.stopCountdown();
		// if (this.timer.breakBuf !== this.props.break) {
		// 	this.timer.breakBuf = this.props.break * 60;
		// 	this.display.breakTC = this.props.break * 60;
		// }
		// if (this.timer.sessionBuf !== this.props.session) {
		// 	this.timer.sessionBuf = this.props.session * 60;
		// 	this.display.sessionTC = this.props.session * 60;
		// }
	};

	handleReset = () => {
		console.log("Handling reset");
		this.stopCountdown();
		this.timer = {
			...this.timer,
			breakBuf: DEF_BREAK * 60,
			sessionBuf: DEF_SESSION * 60
		};
	};

	stopCountdown = () => {
		console.log("Stopping Timer");
		if (this.timer.timer) {
			clearInterval(this.timer.timer);
			this.timer.timer = null;
			console.log("Timer stopped");
		} else {
			console.log("No Timer to stop");
		}
	};

	startCountdown = (callback) => {
		if (!this.timer.timer) {
			this.timer.timer = setInterval(callback, SPEED);
		}
	};

	tickBreakTC = () => {
		if (this.display.breakTC > 0) {
			this.display.breakTC -= 1;
		} else {
			this.stopCountdown();
		}
	};

	tickSessionTC = () => {
		if (this.display.sessionTC > 0) {
			this.display.sessionTC -= 1;
		} else {
			this.stopCountdown();
		}
	};

	countSession = () => {
		if (this.display.sessionTC === 0) {
			this.display.sessionTC = this.timer.sessionBuf;
			this.display.running = "Break";
			this.startCountdown(this.tickBreakTC);
		} else {
			if (!this.timer.timer) {
				this.startCountdown(this.tickSessionTC);
			}
		}
	};

	countBreak = () => {
		if (this.display.breakTC === 0) {
			this.display.breakTC = this.timer.sessionBuf;
			this.display.running = "Session";
			this.startCountdown(this.tickSessionTC);
		} else {
			if (!this.timer.timer) {
				this.startCountdown(this.tickBreakTC);
			}
		}
	};

	render() {
		console.log(this.props);
		// console.log(this.state);
		// console.log(this.buffer);
		return (
			<div>
				Timer.
				<Display {...this.display} />
			</div>
		);
	}
}

export default Timer;
