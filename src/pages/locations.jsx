import React from "react"
import Helmet from "react-helmet"
import SEO from "../components/SEO/SEO"
import config from "../../data/SiteConfig"

// Components
import Header from "../components/Headers/DefaultHeader"
import Visited from "../components/Visited/VisitedListing"
import Map from "../components/Map/Map"

class Locations extends React.Component {
	render() {
		return (
			<div className="locations-container" id="locationsPage">
				<Helmet title={config.siteTitle} />

				<Header pageTitle="Locations" />
				<Map />
				<section id="pageContent" className="container">
					<Visited />
				</section>
			</div>
		)
	}
}

export default Locations
