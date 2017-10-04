import React, { Component } from "react";
import Link from "gatsby-link";

// Components
import Meta from "../ArticleMeta/ArticleMeta";

class ArticleCard extends React.Component {
	render() {
		return (
			<Link className="card card-article" to={this.props.url}>
				<div className="title">
					<h6>{this.props.date}</h6>
					<h3>{this.props.title}</h3>
					<Meta
						country={this.props.country}
						continent={this.props.continent}
						topics={this.props.topics}
						topicUrl={this.props.topicUrl}
						topicIcon={this.props.topicIcon}
					/>
				</div>
				<div className="overlay" />
				<img src={this.props.thumbnail} width="1280" height="720" alt={this.props.cardDescription} />
			</Link>
		);
	}
}

export default ArticleCard;
