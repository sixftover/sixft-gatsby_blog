import React, { Component } from "react";
import Link from "gatsby-link";

class ArticleMeta extends React.Component {
	render() {
		return (
			<ul className="articleMeta">
				<li>
					<span className="metaCountry" to="." target="_self">
						{this.props.country}
					</span>
				</li>
				{/*
					<li>
						<span className="metaContinent" to="." target="_self">
							{this.props.continent}
						</span>
					</li>
				*/}

				
				{this.props.topics &&
					this.props.topics.map(tag => (
						<li key={tag}>
							<span className="metaTopic" to={`/tags/${tag}`}>
								{/*{this.props.topicIcon}*/}
								{tag}
							</span>
						</li>
					))}
			
			</ul>
		);
	}
}

export default ArticleMeta;
