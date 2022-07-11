import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { rhythm } from '../utils/typography';

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            summary
          }
        }
      }
    }
  `);

  const { author } = data.site.siteMetadata;

  return (
    <div
      style={{
        display: 'flex',
        fontSize: '14px',
        marginTop: rhythm(0.5),
      }}
    >
      <p
        style={{
          marginBottom: 0,
          fontFamily: 'Montserrat, sans-serif',
          fontStyle: 'italic',
        }}
      >
        {author.summary}{' '}
        <Link
          style={{
            boxShadow: 'none',
            color: 'inherit',
          }}
          to="/resume"
        >
          <strong>Here's my resume.</strong>
        </Link>
      </p>
    </div>
  );
};

export default Bio;
