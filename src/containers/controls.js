import React, { Component } from "react";

//Components
import Timer from "../components/timer";

class Controls extends Component {
	state = {
		session: 25,
		break: 5
	};

	render() {
		return (
			<div id="controls">
				Controls
				<Timer {...this.state} />
			</div>
		);
	}
}

export default Controls;
