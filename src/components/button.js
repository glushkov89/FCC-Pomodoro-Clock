import React, { Component } from "react";

class Button extends Component {
	render() {
		//		console.log(this.props);
		return (
			<div id={this.props.id} onClick={this.props.click}>
				{this.props.id}
			</div>
		);
	}
}

export default Button;
