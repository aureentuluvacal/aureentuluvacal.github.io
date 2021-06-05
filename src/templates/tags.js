import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'

const Tags = ({ data, pageContext, location }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } tagged with "${tag}"`

  return (
    <Layout location={location} title='Caryssa Perez'>
      <h1>{tagHeader}</h1>
      {edges.map(({ node }) => {
        const { slug } = node.fields
        const { title, subtitle } = node.frontmatter
        const fullTitle = subtitle ? `${title}: ${subtitle}` : title

        return (
          <article key={title}>
            <Link to={slug}>
              <h4>{fullTitle}</h4>
            </Link>
          </article>
        )
      })}
      <Link to='/tags'>All tags</Link>
    </Layout>
  )
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired
            })
          })
        }).isRequired
      )
    })
  })
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            subtitle
          }
        }
      }
    }
  }
`
