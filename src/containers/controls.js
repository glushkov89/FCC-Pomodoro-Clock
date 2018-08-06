import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as actions from "../actions";

//Components
import Button from "../components/button";

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(actions, dispatch);
};

class Controls extends Component {
	render() {
		return (
			<div id="controls">
				<Button id={"reset"} click={this.props.reset} />
			</div>
		);
	}
}

export default connect(
	null,
	mapDispatchToProps
)(Controls);
