import React, { Component } from "react";

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
		return (
			<div id="controls">
				Controls
				<button onClick={this.playPause} id="start_stop">
					Play/Pause
				</button>
				<button onClick={this.resetControls} id="reset">
					Reset
				</button>
				<button onClick={this.stop} id="reset">
					Stop
				</button>
				<br />
				<button onClick={this.decrBreak} id="break-decrement">
					DOWN
				</button>
				<div id="break-label">Break Length</div>
				<div id="break-length">{this.state.break}</div>
				<button onClick={this.incrBreak} id="break-increment">
					UP
				</button>
				<br />
				<button onClick={this.decrSession} id="session-decrement">
					DOWN
				</button>
				<div id="session-label">Session Length</div>
				<div id="session-length">{this.state.session}</div>
				<button onClick={this.incrSession} id="session-increment">
					UP
				</button>
				<Timer
					{...this.state}
					// {...this.controls}
				/>
			</div>
		);
	}
}

export default Controls;
