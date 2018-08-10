import React, { Component } from "react";
import FontAwesomeIcon from "react-fontawesome";

//Components
import Timer from "../components/timer_stateful";
import { DEF_BREAK, DEF_SESSION } from "../components/constants";

class Controls extends Component {
	state = {
		session: DEF_SESSION,
		break: DEF_BREAK,
		ctrlstate: "stop"
	};

	resetControls = () => {
		this.setState({
			session: DEF_SESSION,
			break: DEF_BREAK,
			ctrlstate: "reset"
		});
	};

	stop = () => {
		this.setState({ ctrlstate: "stop" });
	};

	playPause = () => {
		switch (this.state.ctrlstate) {
			case "stop":
			case "pause":
			case "reset":
				this.setState({ ctrlstate: "play" });
				return;
			case "play":
				this.setState({ ctrlstate: "pause" });
				return;

			default:
				return;
		}
	};

	incrBreak = () => {
		if (this.state.ctrlstate === "stop" || this.state.ctrlstate === "reset") {
			if (this.state.break < 60) {
				this.setState({ break: this.state.break + 1 });
			}
		}
	};

	decrBreak = () => {
		if (this.state.ctrlstate === "stop" || this.state.ctrlstate === "reset") {
			if (this.state.break > 1) {
				this.setState({ break: this.state.break - 1 });
			}
		}
	};

	incrSession = () => {
		if (this.state.ctrlstate === "stop" || this.state.ctrlstate === "reset") {
			if (this.state.session < 60) {
				this.setState({ session: this.state.session + 1 });
			}
		}
	};

	decrSession = () => {
		if (this.state.ctrlstate === "stop" || this.state.ctrlstate === "reset") {
			if (this.state.session > 1) {
				this.setState({ session: this.state.session - 1 });
			}
		}
	};

	render() {
		return (
			<div id="controls">
				<div id="clock-container">
					<Timer {...this.state} />
					<div id="time-input">
						<div id="control-break-group">
							<div id="break-label" className="hiviz-container">
								Break
							</div>
							<div
								onClick={this.incrBreak}
								id="break-increment"
								className="button-container"
							>
								{this.state.break === 60 ? (
									<FontAwesomeIcon name="fas fa-minus" className="f-a-minus" />
								) : (
									<FontAwesomeIcon
										name="fas fa-angle-up"
										className="f-a-button"
									/>
								)}
							</div>
							<div id="break-length" className="hiviz-container">
								{this.state.break}
							</div>
							<div
								onClick={this.decrBreak}
								id="break-decrement"
								className="button-container"
							>
								{this.state.break === 1 ? (
									<FontAwesomeIcon name="fas fa-minus" className="f-a-minus" />
								) : (
									<FontAwesomeIcon
										name="fas fa-angle-down"
										className="f-a-button"
									/>
								)}
							</div>
						</div>
						<div id="control-session-group">
							<div id="session-label" className="hiviz-container">
								Session
							</div>
							<div
								onClick={this.incrSession}
								id="session-increment"
								className="button-container"
							>
								{this.state.session === 60 ? (
									<FontAwesomeIcon name="fas fa-minus" className="f-a-minus" />
								) : (
									<FontAwesomeIcon
										name="fas fa-angle-up"
										className="f-a-button"
									/>
								)}
							</div>
							<div id="session-length" className="hiviz-container">
								{this.state.session}
							</div>
							<div
								onClick={this.decrSession}
								id="session-decrement"
								className="button-container"
							>
								{this.state.session === 1 ? (
									<FontAwesomeIcon name="fas fa-minus" className="f-a-minus" />
								) : (
									<FontAwesomeIcon
										name="fas fa-angle-down"
										className="f-a-button"
									/>
								)}
							</div>
						</div>
					</div>
					<div id="control-playback-group">
						<div
							onClick={this.playPause}
							id="start_stop"
							className="button-container"
						>
							<FontAwesomeIcon name="fas fa-play" className="f-a-button" />
							<FontAwesomeIcon name="fas fa-pause" className="f-a-button" />
						</div>
						<div onClick={this.stop} id="stop" className="button-container">
							<FontAwesomeIcon name="fas fa-stop" className="f-a-button" />
						</div>
						<div
							onClick={this.resetControls}
							id="reset"
							className="button-container"
						>
							<FontAwesomeIcon name="fas fa-undo" className="f-a-button" />
						</div>
					</div>
				</div>
				<div id="my-footer">
					<a
						href="https://github.com/glushkov89/FCC-Pomodoro-Clock"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FontAwesomeIcon name="fas fa-github" />
					</a>
					<br />
					<a
						className="credentials"
						href="http://www.orangefreesounds.com/cool-alarm-tone-notification-sound/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Alarm sound.
					</a>
					<br />
					<a
						className="credentials"
						href="https://unsplash.com/photos/ue-RW8OT2xk"
						target="_blank"
						rel="noopener noreferrer"
					>
						Landscape background.
					</a>
					<a
						className="credentials"
						href="https://unsplash.com/photos/ccTuLk6nNO8"
						target="_blank"
						rel="noopener noreferrer"
					>
						Portrait background.
					</a>
				</div>
			</div>
		);
	}
}

export default Controls;
