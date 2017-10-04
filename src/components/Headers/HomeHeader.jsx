import React, { Component } from "react";

// Components

// Components
import Menu from "./Menu";

class HomeHeader extends React.Component {
	render() {
		const headerBackground = { backgroundImage: `url(${this.props.thumbnail})` };
		return (
			<header id="headerHome">
				<Menu />
				<div className="container">
					<div className="title">
						<h1>
							We are <span id="typing" />
						</h1>
						<h4>{this.props.subtitle}</h4>
					</div>
				</div>
				<div className="bg-image" style={headerBackground} />
			</header>
		);
	}
}

export default HomeHeader;
