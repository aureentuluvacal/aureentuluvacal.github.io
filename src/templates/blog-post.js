import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import Seo from '../components/seo'
import Tag from '../components/tag'
import { rhythm, scale } from '../utils/typography'

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article>
        <header>
          <h1
            style={{
              marginTop: rhythm(1),
              marginBottom: 0
            }}
          >
            {post.frontmatter.title}
          </h1>
          {post.frontmatter.subtitle && (
            <h2
              style={{
                marginTop: rhythm(0.5),
                marginBottom: 0
              }}
            >
              {post.frontmatter.subtitle}
            </h2>
          )}
          <p
            style={{
              ...scale(-1 / 10),
              display: 'block',
              marginTop: rhythm(0.2),
              marginBottom: rhythm(1)
            }}
          >
            {post.frontmatter.date} • {`${post.timeToRead} min read`} {post.frontmatter.tags.map(tag => <Tag key={tag} name={tag} />)}
          </p>
        </header>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr
          style={{
            marginBottom: rhythm(1)
          }}
        />
      </article>

      <nav>
        <ul
          style={{
            display: 'flex',
            flexWrap: 'no-wrap',
            justifyContent: 'space-between',
            listStyle: 'none',
            padding: 0,
            fontSize: '16px'
          }}
        >
          <li style={{ width: '340px' }}>
            {previous && (
              <Link to={previous.fields.slug} rel='prev' style={{ width: '340px' }}>
                ← {previous.frontmatter.title}
                {previous.frontmatter.subtitle && `: ${previous.frontmatter.subtitle}`}
              </Link>
            )}
          </li>
          <li style={{ minWidth: '340px', textAlign: 'right' }}>
            {next && (
              <Link to={next.fields.slug} rel='next'>
                {next.frontmatter.title} →
                <br />
                {next.frontmatter.subtitle}
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

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
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        subtitle
        tags
      }
    }
  }
`
