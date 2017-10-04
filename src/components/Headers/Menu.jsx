import React, { Component } from "react";
import Link from "gatsby-link";
import logo from "../logo.svg";

class Menu extends React.Component {
	render() {
		return (
			<nav>
				<div className="nav-left">
					<a className="logo" href="." target="_blank">
						<img alt="Six Feet Over Logo" src={logo} width="92" height="36" />
					</a>

					<div id="currentLocation">
						<h6>We're exploring:</h6>
						<h6 className="highlight">Shanghai</h6>
					</div>

					<button className="hamburger hamburger--squeeze" type="button">
						<span className="hamburger-box">
							<span className="hamburger-inner" />
						</span>
					</button>
				</div>

				<ul className="nav-right">
					<li>
						<Link className="nav-item" to="/">
							Home
						</Link>
					</li>
					{/*
						<li>
							<Link className="nav-item" to="/about">
								About
							</Link>
						</li>
					*/}
					<li>
						<Link className="nav-item" to="/latest">
							Latest
						</Link>
					</li>
					<li>
						<Link className="nav-item" to="/locations">
							Locations
						</Link>
					</li>
				</ul>
			</nav>
		);
	}
}

export default Menu;
