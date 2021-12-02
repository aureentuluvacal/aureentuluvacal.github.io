import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

import { rhythm } from '../utils/typography';

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic/" }) {
        childImageSharp {
          fixed(width: 140, height: 140) {
            ...GatsbyImageSharpFixed
          }
        }
      }
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
  const calloutStyles = {
    borderLeft: '4px solid #2541b2',
    borderRight: '4px solid #2541b2',
    padding: 24,
    marginTop: 10,
  };

  return (
    <>
      <div
        style={{
          display: 'flex',
          fontSize: '16px',
          marginBottom: rhythm(0.75),
        }}
      >
        <Image
          fixed={data.avatar.childImageSharp.fixed}
          alt={author.name}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            minWidth: 140,
            borderRadius: '100%',
          }}
          imgStyle={{
            borderRadius: '50%',
          }}
        />
        <p>{author.summary}</p>
      </div>
      <div style={calloutStyles}>
        <h3 style={{ margin: 0 }}>For the curious</h3>
        <p style={{ margin: 0 }}>
          Here's my{' '}
          <a
            href="https://caryssa-perez-images.s3.us-east-2.amazonaws.com/ResumeCP.pdf"
            target="_blank"
          >
            resume
          </a>
          .
        </p>
      </div>
    </>
  );
};

export default Bio;
