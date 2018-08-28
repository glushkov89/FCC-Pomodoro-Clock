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
		time: 0,
		start: 0
	};

	entry = "";

	componentDidUpdate() {
		this.handleControls();
	}

	handleControls = () => {
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
		this.stopCountdown();
		this.entry = "pause";
	};

	handleStop = () => {
		if (this.entry !== "stop") {
			this.stopCountdown();
			this.entry = "stop";
		} else {
			this.handleIntervalInput();
		}
	};

	handleReset = () => {
		if (this.entry !== "reset") {
			this.stopCountdown();
			const audio = document.getElementById("beep");
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
			this.entry = "reset";
		} else {
			this.handleIntervalInput();
		}
	};

	handlePlay = () => {
		if (this.entry !== "play") {
			if (this.state.running === "Session") {
				this.countSession();
			} else {
				this.countBreak();
			}
			this.entry = "play";
		}
	};

	countSession = () => this.startCountdown(this.tickSessionTC);

	countBreak = () => this.startCountdown(this.tickBreakTC);

	stopCountdown = () => {
		clearTimeout(this.timer.timer);
		this.timer.timer = null;
		this.timer.time = 0;
		this.timer.start = 0;
	};

	startCountdown = (callback) => {
		this.timer.start = new Date().getTime();
		this.timer.timer = setTimeout(callback, SPEED);
	};

	tickBreakTC = () => {
		if (this.state.breakTC === 1) {
			document.getElementById("beep").play();
		}
		if (this.state.breakTC === 0) {
			this.stopCountdown();
			this.setState({ breakTC: this.timer.breakBuf, running: "Session" });
			this.startCountdown(this.tickSessionTC);
			return;
		}
		this.setState({ breakTC: this.state.breakTC - 1 });
		this.timer.time += SPEED;
		let adj = new Date().getTime() - this.timer.start - this.timer.time;
		this.timer.timer = setTimeout(this.tickBreakTC, SPEED - adj);
	};

	tickSessionTC = () => {
		if (this.state.sessionTC === 1) {
			document.getElementById("beep").play();
		}
		if (this.state.sessionTC === 0) {
			this.stopCountdown();
			this.setState({ sessionTC: this.timer.sessionBuf, running: "Break" });
			this.startCountdown(this.tickBreakTC);
			return;
		}
		this.setState({ sessionTC: this.state.sessionTC - 1 });
		this.timer.time += SPEED;
		let adj = new Date().getTime() - this.timer.start - this.timer.time;
		this.timer.timer = setTimeout(this.tickSessionTC, SPEED - adj);
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
		return (
			<div>
				<Display {...this.state} />
			</div>
		);
	}
}

export default Timer;
