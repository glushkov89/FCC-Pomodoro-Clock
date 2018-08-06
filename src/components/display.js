import React, { Component } from "react";
import { connect } from "react-redux";
// import { bindActionCreators } from "redux";

// import * as actions from "../actions";

const mapStateToProps = (state) => {
	return {
		session: state.input.session,
		break: state.input.break
	};
};

// const mapDispatchToProps = (dispatch) => {
// 	return bindActionCreators(actions, dispatch);
// };

class Display extends Component {
	render() {
		console.log(this.props);
		//		console.log("00" + 1);
		return (
			<div>
				<div id="time-left">{this.props.session}</div>
			</div>
		);
	}
}

export default connect(
	mapStateToProps,
	null
)(Display);
