import React from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";

// Dependencies
//import $ from '../../static/js/jquery.min.js';
//import jQuery from '../../static/js/jquery.min.js';
//import '../../static/js/jquery.min.js';
//import $ from 'jquery';

// Components
import Footer from "../components/Footer/Footer";
import Newsletter from "../components/Footer/Newsletter";

// Instafeed
import Instafeed from "../../static/js/instafeed.min.js";
var userFeed = new Instafeed({
	get: "user",
	userId: "5453885940",
	limit: "6",
	sortBy: "most-recent",
	resolution: "standard_resolution",
	accessToken: "5453885940.ecd67b3.8a01a526df134951ae7349de8ad5a618",
	template:
		'<div class="instagramPhoto"><a href="{{link}}" class="instagramPhotoInside" target="_blank" rel="nofollow" style="background-image:url({{image}})" ></a></div>'
});
userFeed.run();

// TypeIt
/*
import "../../static/js/typeit.min.js";
$('#typing').typeIt({
	strings: ["Six Feet Over.", "tasting new food.", "exploring new cities.", "taking photos."],
	// options
	//speed: 50,
	breakLines: false,
	loop: true,
	deleteDelay: 2000,
	//autoStart: false
});

// Unveil
import "../../static/js/jquery.unveil.js";
$(document).ready(function() {
   $("img").unveil();
});
*/


// Stylesheets
import "../sass/style.scss";

export default class MainLayout extends React.Component {
	getLocalTitle() {
		function capitalize(string) {
			return string.charAt(0).toUpperCase() + string.slice(1);
		}
		const pathPrefix = config.pathPrefix ? config.pathPrefix : "/";
		const currentPath = this.props.location.pathname.replace(pathPrefix, "").replace("/", "");
		let title = "";
		if (currentPath === "") {
			title = "Home";
		} else if (currentPath === "tags/") {
			title = "Tags";
		} else if (currentPath === "categories/") {
			title = "Categories";
		} else if (currentPath === "about/") {
			title = "About";
		} else if (currentPath.includes("posts")) {
			title = "Article";
		} else if (currentPath.includes("tags/")) {
			const tag = currentPath
				.replace("tags/", "")
				.replace("/", "")
				.replace("-", " ");
			title = `Tagged in ${capitalize(tag)}`;
		} else if (currentPath.includes("categories/")) {
			const category = currentPath
				.replace("categories/", "")
				.replace("/", "")
				.replace("-", " ");
			title = `${capitalize(category)}`;
		}
		return title;
	}
	render() {
		const { children } = this.props;
		return (
			<div>
				<Helmet>
					<title>{`${config.siteTitle} |  ${this.getLocalTitle()}`}</title>
					<meta name="description" content={config.siteDescription} />
				</Helmet>

				{children()}

				<Newsletter />
				<Footer />

				<script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.js' />
				<script type='text/javascript' src='https://www.gstatic.com/charts/loader.js' />
				<script type='text/javascript' src='https://www.google.com/jsapi' />
				<script type='text/javascript' src='./js/settings.js' />
				

			</div>
		);
	}
}


