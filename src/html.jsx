/* eslint import/no-unresolved:"off" */
/* eslint import/extensions:"off" */
/* eslint global-require:"off" */
import React from "react";
import favicon from "./favicon.png";
//import "../static/js/jquery.min.js";

export default class HTML extends React.Component {
	render() {
		return (
			<html lang="en">
				<head>
					<meta charSet="utf-8" />
					<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
					<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />

					{this.props.headComponents}

					<link rel="shortcut icon" href={favicon} />
					<script type='text/javascript' src='./js/jquery.min.js'></script>
				</head>

				<body>
					<div id="___gatsby" dangerouslySetInnerHTML={{ __html: this.props.body }} />
					{this.props.postBodyComponents}

					
				</body>
			</html>
		);
	}
}
