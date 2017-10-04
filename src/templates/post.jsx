import React from "react";
import Helmet from "react-helmet";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

// Components
import Header from "../components/Headers/ArticleHeader";
import UserInfo from "../components/UserInfo/UserInfo";
import PostTags from "../components/PostTags/PostTags";

export default class PostTemplate extends React.Component {
	render() {
		const { slug } = this.props.pathContext;
		const postNode = this.props.data.markdownRemark;
		const post = postNode.frontmatter;
		if (!post.id) {
			post.id = slug;
		}
		if (!post.id) {
			post.category_id = config.postDefaultCategoryID;
		}
		return (
			<div id="articlePage">
				<Helmet>
					<title>{`${post.title} | ${config.siteTitle}`}</title>
				</Helmet>
				<SEO postPath={slug} postNode={postNode} postSEO />

				<Header
					title={post.title}
					subtitle={post.slug}
					country={post.category}
					continent={post.category}
					topics={post.tags}
					topicUrl={post.title}
					topicIcon={post.title}
					thumbnail={post.cover}
				/>

				<section id="page-content">
					<article className="container" dangerouslySetInnerHTML={{ __html: postNode.html }} />
					<UserInfo config={config} />
				</section>
			</div>
		);
	}
}

/* eslint no-undef: "off"*/
export const pageQuery = graphql`
	query BlogPostBySlug($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			html
			timeToRead
			excerpt
			frontmatter {
				title
				cover
				date
				category
				tags
			}
			fields {
				slug
			}
		}
	}
`;
