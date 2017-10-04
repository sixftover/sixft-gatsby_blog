import React, { Component } from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";

// Components
import Header from "../components/Headers/DefaultHeader";
import About from "../components/PageContent/About";

class AboutPage extends Component {
	render() {
		return (
			<div className="about-container">
				<Helmet title={`About | ${config.siteTitle}`} />

				<Header pageTitle="Latest Posts" />

				<About />
			</div>
		);
	}
}

export default AboutPage;
