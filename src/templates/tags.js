import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"

const Tags = ({ data, pageContext }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
    } tagged with "${tag}"`

  return (
    <div>
      <h1>{tagHeader}</h1>
      {edges.map(({ node }) => {
        const { slug } = node.fields
        const { title } = node.frontmatter
        return (
          <article key={slug}>
            <Link to={slug}>{title}</Link>

          </article>
        )
      })}
      <Link to="/tags">All tags</Link>
    </div>
  );
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
          allMarkdownRemark(
            limit: 2000
      sort: {fields: [frontmatter___date], order: DESC }
      filter: {frontmatter: {tags: { in: [$tag] } } }
    ) {
          totalCount
      edges {
          node {
          fields {
          slug
        }
          frontmatter {
          title
        }
        }
      }
    }
  }
`