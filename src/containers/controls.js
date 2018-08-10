import React, { Component } from "react";
import FontAwesomeIcon from "react-fontawesome";

//Components
//import Timer from "../components/timer";
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
	// reset = () => {
	// 	this.setState({ ctrlstate: "reset" });
	// };
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
	// pause = () => {
	// 	this.setState({ ctrlstate: "pause" });
	// };
	// play = () => {
	// 	this.setState({ ctrlstate: "play" });
	// };

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

	// controls = {
	// 	stop: this.stop,
	// 	playPause: this.play,
	// 	pause: this.pause
	// };

	render() {
		//	console.log(this.state);
		return (
			<div id="controls">
				<div id="clock-container">
					<Timer
						{...this.state}
						// {...this.controls}
					/>
					<div id="time-input">
						<div id="control-break-group">
							<div id="break-label">Break</div>
							<div onClick={this.incrBreak} id="break-increment">
								{this.state.break === 60 ? (
									<FontAwesomeIcon name="fas fa-minus" className="f-a-minus" />
								) : (
									<FontAwesomeIcon name="fas fa-angle-up" />
								)}
							</div>
							<div id="break-length">{this.state.break}</div>
							<div onClick={this.decrBreak} id="break-decrement">
								{this.state.break === 1 ? (
									<FontAwesomeIcon name="fas fa-minus" className="f-a-minus" />
								) : (
									<FontAwesomeIcon name="fas fa-angle-down" />
								)}
							</div>
						</div>
						<div id="control-session-group">
							<div id="session-label">Session</div>
							<div onClick={this.incrSession} id="session-increment">
								{this.state.session === 60 ? (
									<FontAwesomeIcon name="fas fa-minus" className="f-a-minus" />
								) : (
									<FontAwesomeIcon name="fas fa-angle-up" />
								)}
							</div>
							<div id="session-length">{this.state.session}</div>
							<div onClick={this.decrSession} id="session-decrement">
								{this.state.session === 1 ? (
									<FontAwesomeIcon name="fas fa-minus" className="f-a-minus" />
								) : (
									<FontAwesomeIcon name="fas fa-angle-down" />
								)}
							</div>
						</div>
					</div>
					<div id="control-playback-group">
						<div onClick={this.playPause} id="start_stop">
							<FontAwesomeIcon name="fas fa-play" className="f-a-button" />
							<FontAwesomeIcon name="fas fa-pause" className="f-a-button" />
						</div>
						<div onClick={this.stop} id="stop">
							<FontAwesomeIcon name="fas fa-stop" className="f-a-button" />
						</div>
						<div onClick={this.resetControls} id="reset">
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
				</div>
			</div>
		);
	}
}

export default Controls;

/* 
 (<FontAwesomeIcon name="fas fa-minus" />) 

<div id="controls">
				<div id="control-playback-group">
					<div onClick={this.playPause} id="start_stop">
						<FontAwesomeIcon name="fas fa-play" />
						<FontAwesomeIcon name="fas fa-pause" />
					</div>
					<div onClick={this.stop} id="reset">
						<FontAwesomeIcon name="fas fa-stop" />
					</div>
					<div onClick={this.resetControls} id="reset">
						<FontAwesomeIcon name="fas fa-undo" />
					</div>
				</div>

				<div id="control-break-group">
					<div id="break-label">Break Length</div>
					<div onClick={this.incrBreak} id="break-increment">
						<FontAwesomeIcon name="fas fa-angle-up" />
					</div>
					<div id="break-length">{this.state.break}</div>
					<div onClick={this.decrBreak} id="break-decrement">
						<FontAwesomeIcon name="fas fa-angle-down" />
					</div>
				</div>
				<Timer
					{...this.state}
					// {...this.controls}
				/>
				<div id="control-session-group">
					<div id="session-label">Session Length</div>
					<div onClick={this.incrSession} id="session-increment">
						<FontAwesomeIcon name="fas fa-angle-up" />
					</div>
					<div id="session-length">{this.state.session}</div>
					<div onClick={this.decrSession} id="session-decrement">
						<FontAwesomeIcon name="fas fa-angle-down" />
					</div>
				</div>
			</div> */
