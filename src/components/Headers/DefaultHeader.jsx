import React, { Component } from "react";

// Components
import Menu from "./Menu";

class DefaultHeader extends React.Component {
	render() {
		return (
			<header>
				<Menu />
				<div className="container">
					<div className="title typography">
						<h4>{this.props.pageSubTitle}</h4>
						<h1>{this.props.pageTitle}</h1>
					</div>
				</div>
			</header>
		);
	}
}

export default DefaultHeader;
