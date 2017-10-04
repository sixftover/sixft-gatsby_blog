import React, { Component } from "react"
import Link from "gatsby-link"

// Components
import Menu from "./Menu"
import Meta from "../ArticleMeta/ArticleMetaTopics"

class BlogHeader extends React.Component {
	render() {
		const headerBackground = { backgroundImage: `url(${this.props.thumbnail})` }
		return (
			<header id="headerBlog">
				<Menu />
				<div className="container">
					<Link className="title" to="./">
						<h4>{this.props.subitle}</h4>
						<h1>{this.props.title}</h1>
						<Meta
							country={this.props.country}
							continent={this.props.continent}
							cardTopics={this.props.topics}
							topicUrl={this.props.topicUrl}
							topicIcon={this.props.topicIcon}
						/>
					</Link>
				</div>
				<div className="bg-image" style={headerBackground}>
					<div className="overlay" />
				</div>
			</header>
		)
	}
}

export default BlogHeader
