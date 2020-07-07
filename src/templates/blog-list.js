// Gatsby supports TypeScript natively!
import React from 'react';
import { Link, graphql } from 'gatsby';

import Bio from '../components/bio';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Tag from '../components/tag';
import { rhythm } from '../utils/typography';

const BlogIndex = ({ data, location, pageContext }) => {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.edges;
  const { currentPage, numPages } = pageContext;
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString()
  const nextPage = (currentPage + 1).toString()

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Blog" />
      <Bio />
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug;
        return (
          <article key={node.fields.slug}>
            <header>
              <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                <h3
                  style={{
                    marginBottom: 0,
                  }}
                >
                  {title}
                </h3>
                <h4
                  style={{
                    marginTop: rhythm(0.2),
                    marginBottom: 0,
                  }}
                >
                  {node.frontmatter.subtitle}
                </h4>
              </Link>
              <small>
                {node.frontmatter.date} • {`${node.timeToRead} min read`}{' '}
                {node.frontmatter.tags.map(tag => (
                  <Tag name={tag} />
                ))}
              </small>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </section>
          </article>
        );
      })}
      <div style={{ display: 'flex' }}>
        <div style={{ width: '33%' }}>
          {!isFirst && (
            <Link to={prevPage} rel="prev" style={{ justifyContent: 'flex-start' }}>
              ← Previous Page
            </Link>
          )}
        </div>

        <div className="pageNumbers">
          {Array.from({ length: numPages }, (_, i) => (
            <Link key={`pagination-number${i + 1}`} to={`/${i === 0 ? "" : i + 1}`} >
              {i + 1}
            </Link>
          ))}
        </div>
        <div style={{ width: '33%', textAlign: 'right' }}>
          {!isLast && (
            <Link to={nextPage} rel="next" style={{ justifyContent: 'flex-end' }}>
              Next Page →
            </Link>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query blogPageQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          excerpt
          timeToRead
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            subtitle
            tags
          }
        }
      }
    }
  }
`;
