import React from "react";
import Helmet from "react-helmet";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

// Components
import Header from "../components/Headers/HomeHeader";
import PostListing from "../components/PostListing/PostListing";
import Topics from "../components/Topics/TopicListing";
import Content from "../components/PageContent/Home";

// Files
import thumbnail from "./img/home-welcome.jpg";

class Index extends React.Component {
	render() {
		const postEdges = this.props.data.allMarkdownRemark.edges;
		return (
			<div className="index-container" id="homePage">
				<Helmet title={config.siteTitle} />
				<SEO postEdges={postEdges} />

				<Header title="欢迎 | Welcome" subtitle="欢迎 | Welcome" thumbnail={thumbnail} />
				<Topics />
				<Content />
				<PostListing postEdges={postEdges} />
			</div>
		);
	}
}

export default Index;

/* eslint no-undef: "off"*/
export const pageQuery = graphql`
	query IndexQuery {
		allMarkdownRemark(limit: 3, sort: { fields: [frontmatter___date], order: DESC }) {
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
