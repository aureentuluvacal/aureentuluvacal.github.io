import React from "react";
import { Link, graphql } from "gatsby";
import Image from "gatsby-image";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { rhythm, scale } from "../utils/typography";

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark;
  const siteTitle = data.site.siteMetadata.title;
  const { previous, next } = pageContext;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article>
        <header>
          <h1
            style={{
              marginTop: rhythm(1),
              marginBottom: 0,
            }}
          >
            {post.frontmatter.title}
          </h1>
          {post.frontmatter.subtitle && (
            <h2
              style={{
                marginTop: rhythm(0.5),
                marginBottom: 0,
              }}
            >
              {post.frontmatter.subtitle}
            </h2>
          )}
          <p
            style={{
              ...scale(-1 / 5),
              display: `block`,
              marginTop: rhythm(0.2),
              marginBottom: rhythm(1),
            }}
          >
            {post.frontmatter.date} • {`${post.timeToRead} min read`}
          </p>
          {post.hero && (
            <Image
              fixed={post.hero.childImageSharp.fixed}
              alt={post.frontmatter.heroAlt}
              style={{
                margin: 0,
              }}
              imgStyle={{
                width: `100%`,
              }}
            />
          )}
        </header>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
      </article>

      <nav>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title} <br />
                {previous.frontmatter.subtitle}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
                <br />
                {next.frontmatter.subtitle}
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      timeToRead
      html
      hero {
        childImageSharp {
          fixed(width: 600) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        subtitle
        heroAlt
      }
    }
  }
`;