import React from "react";
import Helmet from "react-helmet";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

// Components
import Header from "../components/Headers/BlogHeader";
import PostListing from "../components/PostListing/PostListing";
import Topics from "../components/Topics/TopicListing";

// Files
import thumbnail from "./img/home-welcome.jpg";

class Latest extends React.Component {
	render() {
		const postEdges = this.props.data.allMarkdownRemark.edges;
		return (
			<div className="latest-container">
				<Helmet title={config.siteTitle} />
				<SEO postEdges={postEdges} />

				<Header title="Latest Posts" subtitle="yolo" thumbnail={thumbnail} />
				<Topics />
				<PostListing postEdges={postEdges} containerClass="threeWide" />
			</div>
		);
	}
}

export default Latest;

/* eslint no-undef: "off"*/
export const pageQuery = graphql`
	query LatestQuery {
		allMarkdownRemark(limit: 12, sort: { fields: [frontmatter___date], order: DESC }) {
			edges {
				node {
					fields {
						slug
					}
					excerpt
					timeToRead
					frontmatter {
						title
						category
						cover
						date
						tags
					}
				}
			}
		}
	}
`;
