// Gatsby supports TypeScript natively!
import React from 'react';
import { PageProps, Link, graphql } from 'gatsby';

import Bio from '../components/bio';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Tag from '../components/tag';
import { rhythm } from '../utils/typography';

type Data = {
  site: {
    siteMetadata: {
      title: string;
    };
  };
  allMarkdownRemark: {
    edges: {
      node: {
        timeToRead: number;
        excerpt: string;
        fields: {
          slug: string;
        };
        frontmatter: {
          title: string;
          date: string;
          description: string;
          subtitle: string;
          tags: [string];
        };
      };
    }[];
  };
};

const BlogIndex = ({ data, location }: PageProps<Data>) => {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.edges;

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
                {node.frontmatter.tags.map((tag: string) => (
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
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
