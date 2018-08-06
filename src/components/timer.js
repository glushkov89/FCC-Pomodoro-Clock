import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as actions from "../actions";

const mapStateToProps = (state) => {
	return {
		session: state.input.session,
		break: state.input.break,
		stop: state.timer.stop
	};
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(actions, dispatch);
};

class Timer extends Component {
	render() {
		console.log(this.props);
		if (this.props.stop) {
			return (
				<div id="display">
					<div id="running-interval">Session</div>
					<div id="time-left">{this.props.session}:00</div>
				</div>
			);
		} else {
			return <div id="display">Test</div>;
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Timer);
