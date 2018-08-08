import React, { Component } from "react";

//Components
import Display from "./display";
import { DEF_BREAK, DEF_SESSION, SPEED } from "../components/constants";

class Timer extends Component {
	state = {
		breakTC: DEF_BREAK * 60,
		sessionTC: DEF_SESSION * 60,
		running: "Session"
	};

	timer = {
		breakBuf: DEF_BREAK * 60,
		sessionBuf: DEF_SESSION * 60,
		timer: null,
		time: null
	};

	entry = { reset: true, stop: true };

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

	handlePause = () => {
		//	console.log("Handling pause");
		this.stopCountdown();
		this.entry = { reset: true, stop: true };
	};

	handleStop = () => {
		if (this.entry.stop) {
			console.log("Handling stop");
			this.stopCountdown();
			this.entry = { reset: true, stop: false };
		} else {
			this.handleIntervalInput();
		}
	};

	handleReset = () => {
		if (this.entry.reset) {
			//			console.log("Handling reset");
			this.stopCountdown();
			let audio = document.getElementById("beep");
			audio.pause();
			audio.currentTime = 0;
			this.timer = {
				...this.timer,
				breakBuf: DEF_BREAK * 60,
				sessionBuf: DEF_SESSION * 60
			};
			this.setState({
				breakTC: DEF_BREAK * 60,
				sessionTC: DEF_SESSION * 60,
				running: "Session"
			});
			this.entry = { reset: false, stop: true };
		} else {
			this.handleIntervalInput();
		}
	};

	// toggleEntry=()=>{
	//     for (const key of Object.keys(this.entry)) {
	//         obj[key]?
	//     }
	// }

	handlePlay = () => {
		//		console.log("Handling play");
		if (this.state.running === "Session") {
			this.countSession();
		} else {
			this.countBreak();
		}
		this.entry = { reset: true, stop: true };
	};

	stopCountdown = () => {
		//	console.log("Stopping Timer");
		if (this.timer.timer) {
			clearInterval(this.timer.timer);
			this.timer.timer = null;
			this.timer.time = null;
			//		console.log("Timer stopped");
		} else {
			//		console.log("No Timer to stop");
		}
	};

	startCountdown = (callback) => {
		if (!this.timer.timer) {
			this.timer.time = new Date().getTime();
			this.timer.timer = setInterval(callback, SPEED);
		}
	};

	tickBreakTC = () => {
		this.setState({ breakTC: this.state.breakTC - 1 });
	};

	tickSessionTC = () => {
		// let time = new Date().getTime();
		// time -= this.timer.time;
		// this.setState({
		// 	sessionTC: this.state.sessionTC - Math.floor(time / 1000)
		// });
		// this.timer.time = new Date().getTime();
		this.setState({ sessionTC: this.state.sessionTC - 1 });
	};

	countSession = () => {
		if (this.state.sessionTC === 0) {
			document.getElementById("beep").play();
		}
		if (this.state.sessionTC === -1) {
			this.stopCountdown();
			this.setState({ sessionTC: this.timer.sessionBuf, running: "Break" });
			this.startCountdown(this.tickBreakTC);
		} else {
			if (!this.timer.timer) {
				this.startCountdown(this.tickSessionTC);
			}
		}
	};

	countBreak = () => {
		if (this.state.breakTC === 0) {
			document.getElementById("beep").play();
		}
		if (this.state.breakTC === -1) {
			this.stopCountdown();
			this.setState({ breakTC: this.timer.breakBuf, running: "Session" });
			this.startCountdown(this.tickSessionTC);
		} else {
			if (!this.timer.timer) {
				this.startCountdown(this.tickBreakTC);
			}
		}
	};

	handleIntervalInput() {
		if (this.timer.breakBuf !== this.props.break * 60) {
			this.timer.breakBuf = this.props.break * 60;
			this.setState({ breakTC: this.props.break * 60 });
		}
		if (this.timer.sessionBuf !== this.props.session * 60) {
			this.timer.sessionBuf = this.props.session * 60;
			this.setState({ sessionTC: this.props.session * 60 });
		}
	}

	render() {
		//	console.log(this.props);
		// console.log(this.state);
		//console.log(this.timer);
		return (
			<div>
				Timer.
				<Display {...this.state} />
			</div>
		);
	}
}

export default Timer;
