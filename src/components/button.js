import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as actions from "../actions";

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(actions, dispatch);
};

class Button extends Component {
	componentWillUpdate() {
		console.log("Button updated");
	}

	render() {
		console.log(this.props);
		return <div>My button</div>;
	}
}

export default connect(
	null,
	mapDispatchToProps
)(Button);
