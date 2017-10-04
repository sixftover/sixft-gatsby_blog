import React, { Component } from "react"

// Components
import Menu from "./Menu"
import Meta from "../ArticleMeta/ArticleMetaTopics"

class ArticleHeader extends React.Component {
	render() {
		const headerBackground = { backgroundImage: `url(${this.props.thumbnail})` }
		return (
			<header id="headerArticle">
				<Menu />
				<div className="container">
					<div className="title">
						<h4>{this.props.subitle}</h4>
						<h1>{this.props.title}</h1>
						<Meta
							country={this.props.country}
							continent={this.props.continent}
							topics={this.props.topics}
							topicUrl={this.props.topicUrl}
							topicIcon={this.props.topicIcon}
						/>
					</div>
				</div>

				<div className="bg-image" style={headerBackground}>
					<div className="overlay" />
				</div>
			</header>
		)
	}
}

export default ArticleHeader
