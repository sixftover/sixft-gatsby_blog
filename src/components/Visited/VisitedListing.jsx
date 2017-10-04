import React, { Component } from "react";
import Link from "gatsby-link";

class VisitedListing extends React.Component {
	render() {
		return (
			<ul className="visitedList">
				<li className="visitedContinent">
					Asia
					<ul className="visitedCountryList">
						<li className="visitedCountry">
							<a href=".">China</a>
						</li>
						<li className="visitedCountry">
							<a href=".">Hong kong</a>
						</li>
						<li className="visitedCountry">
							<a href=".">South Korea</a>
						</li>
					</ul>
				</li>
				<li className="visitedContinent">
					Europe
					<ul className="visitedCountryList">
						<li className="visitedCountry">
							<a href=".">United Kingdom</a>
						</li>
						<li className="visitedCountry">
							<a href=".">Italy</a>
						</li>
						<li className="visitedCountry">
							<a href=".">Belgium</a>
						</li>
						<li className="visitedCountry">
							<a href=".">Iceland</a>
						</li>
					</ul>
				</li>
			</ul>
		);
	}
}

export default VisitedListing;
