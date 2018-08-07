import React, { Component } from "react";

//Components
import Timer from "../components/timer";
import { DEF_BREAK, DEF_SESSION } from "../components/constants";

class Controls extends Component {
	state = {
		session: DEF_SESSION,
		break: DEF_BREAK,
		resetFlag: false,
		pause: true
	};

	setResetFlag = (bool) => {
		this.setState({ resetFlag: bool });
	};

	setResetFlag = (bool) => {
		this.setState({ resetFlag: bool });
	};

	resetControls = () => {
		this.setState({
			session: DEF_SESSION,
			break: DEF_BREAK,
			resetFlag: false,
			pause: true
		});
	};

	togglePause = () => {
		this.setState({ pause: this.state.pause ? false : true });
	};

	incrBreak = () => {
		if (this.state.break < 60 && this.state.pause) {
			this.setState({ break: this.state.break + 1 });
		}
	};

	decrBreak = () => {
		if (this.state.break > 1 && this.state.pause) {
			this.setState({ break: this.state.break - 1 });
		}
	};

	incrSession = () => {
		if (this.state.session < 60 && this.state.pause) {
			this.setState({ session: this.state.session + 1 });
		}
	};

	decrSession = () => {
		if (this.state.session > 1 && this.state.pause) {
			this.setState({ session: this.state.session - 1 });
		}
	};

	controls = {
		togglePause: this.togglePause,
		resetControls: this.resetControls
	};

	render() {
		return (
			<div id="controls">
				Controls
				<button onClick={this.togglePause} id="start_stop">
					Play/Pause
				</button>
				<button onClick={() => this.setResetFlag(true)} id="reset">
					Reset
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
				<Timer {...this.state} {...this.controls} />
			</div>
		);
	}
}

export default Controls;
