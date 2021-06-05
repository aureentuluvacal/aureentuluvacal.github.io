import React from 'react'
import PropTypes from 'prop-types'
import kebabCase from 'lodash/kebabCase'
import { Helmet } from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import Tag from '../components/tag'

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title }
    }
  }
}) => (
  <Layout location='/tags' title={title}>
    <Helmet title={title} />
    <div>
      <h1>Tags</h1>
      {group.map(tag => (
        <React.Fragment key={tag.fieldValue}>
          <article>
            <Tag name={tag.fieldValue} />
            <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
              ({tag.totalCount})
            </Link>
          </article>
          <br />
        </React.Fragment>
      ))}
    </div>
  </Layout>
)

TagsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired
        }).isRequired
      )
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired
      })
    })
  })
}

export default TagsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
