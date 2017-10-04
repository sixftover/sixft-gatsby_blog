import React, { Component } from "react";
import Link from "gatsby-link";

class Newsletter extends React.Component {
	render() {
		return (
			<section id="newsletter">
				<div className="container typography">
					<h3>Join our newsletter and never miss a trip.</h3>
					<h4 className="highlight">
						We believe in a spam free inbox. That's why we will never send you more than one email a week. If you want more frequent
						updates, consider checking out our Facebook or Instagram.
					</h4>

					<form id="newsletterForm">
						<input required type="email" name="email" id="email" required type="email" placeholder="your@awesome-email.com" />
						<input className="newsletterButton" type="submit" value="Sign me up!" />
					</form>
				</div>
			</section>
		);
	}
}

export default Newsletter;
