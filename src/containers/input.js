import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as actions from "../actions";

//Components
import Button from "../components/button";

const mapStateToProps = (state) => {
	return {
		session: state.input.session,
		break: state.input.break
	};
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(actions, dispatch);
};

class Input extends Component {
	// inputModules = [
	// 	{
	// 		id: "break",
	// 		value: this.props.break,
	// 		inc: this.props.increaseBreak,
	// 		dec: this.props.decreaseBreak
	// 	},
	// 	{
	// 		id: "session",
	// 		value: this.props.session,
	// 		inc: this.props.increaseSession,
	// 		dec: this.props.decreaseSession
	// 	}
	// ];

	render() {
		console.log(this.props);
		return (
			<div>
				<div id={`break-label`}>Break Length</div>
				<Button id={`break-decrement`} click={this.props.decreaseBreak} />
				<div id={`break-length`}>{this.props.break}</div>
				<Button id={`break-increment`} click={this.props.increaseBreak} />
				<div id={`session-label`}>Session Length</div>
				<Button id={`session-decrement`} click={this.props.decreaseSession} />
				<div id={`session-length`}>{this.props.session}</div>
				<Button id={`session-increment`} click={this.props.increaseSession} />
			</div>
		);
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Input);
