import React, { Component } from "react";
import Link from "gatsby-link";

import Card from "../ArticleCard/ArticleCard";

class PostListing extends React.Component {
	getPostList() {
		const postList = [];
		this.props.postEdges.forEach(postEdge => {
			postList.push({
				path: postEdge.node.fields.slug,
				tags: postEdge.node.frontmatter.tags,
				cover: postEdge.node.frontmatter.cover,
				title: postEdge.node.frontmatter.title,
				date: postEdge.node.frontmatter.date,
				category: postEdge.node.frontmatter.category,
				excerpt: postEdge.node.excerpt
			});
		});
		return postList;
		cardContainer;
	}
	render() {
		const postList = this.getPostList();

		return (
			<section className={`cardContainer ${this.props.containerClass}`}>
				{postList.map(post => {
					//const cardBackground = { backgroundImage: `url(${post.cover})` };

					return (
						<Card
							key={post.title}
							title={post.title}
							date={post.date}
							country={post.category}
							continent={post.category}
							topics={post.tags}
							//topicUrl="null"
							//topicIcon="null"
							url={post.path}
							thumbnail={post.cover}
						/>
					);
				})}
			</section>
		);
	}
}

export default PostListing;
