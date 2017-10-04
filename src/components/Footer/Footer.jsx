import React, { Component } from "react";
import Link from "gatsby-link";
import config from "../../../data/SiteConfig";

// Components
import UserLinks from "../UserLinks/UserLinks";

// Files
import logo from "../logo.svg";
import facebook from "./icon-facebook.svg";
import instagram from "./icon-instagram.svg";
import pinterest from "./icon-pinterest.svg";

class Footer extends React.Component {
	render() {
		//const { config } = this.props;
		const url = config.siteRss;
		const copyright = config.copyright;
		if (!copyright) {
			return null;
		}
		return (
			<footer>
				<div id="instafeed" />

				<div className="container">
					<Link to={url}>
						<h5>Subscribe</h5>
					</Link>

					<div className="footer-logo">
						<img src={logo} alt="logo" />
					</div>

					<div className="footer-links">
						<a className="social-icon facebook" target="_blank" rel="noopener" href=".">
							<img src={facebook} alt="facebook" width="28" height="28" />
						</a>

						<a className="social-icon instagram" target="_blank" rel="noopener" href=".">
							<img src={instagram} alt="instagram" width="28" height="28" />
						</a>

						<a className="social-icon pinterest" target="_blank" rel="noopener" href=".">
							<img src={pinterest} alt="pinterest" width="28" height="28" />
						</a>
					</div>

					<h6>
						&copy; 2017 <span>Six Feet Over</span>. All Rights Reserved.
					</h6>
				</div>
			</footer>
		);
	}
}

export default Footer;
