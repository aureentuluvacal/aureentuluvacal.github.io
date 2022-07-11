import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { rhythm } from '../utils/typography';

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`; // eslint-disable-line
  let header;

  const data = useStaticQuery(graphql`
    query LayoutQuery {
      file(absolutePath: { regex: "/profile-pic/" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED)
        }
      }
    }
  `);

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          marginBottom: rhythm(0.75),
          marginTop: rhythm(0.75),
          padding: 0,
          display: 'inline-block',
        }}
      >
        {title}
      </h1>
    );
  } else {
    header = (
      <h3
        style={{
          fontFamily: 'Montserrat, sans-serif',
          marginTop: 0,
          display: 'inline-block',
        }}
      >
        {title}
      </h3>
    );
  }
  return (
    <div
      style={{
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <header>
        <Link
          style={{
            boxShadow: 'none',
            color: 'inherit',
            display: 'flex',
            alignItems: 'center',
          }}
          to="/"
        >
          <GatsbyImage
            image={data.file.childImageSharp.gatsbyImageData}
            alt="Logo with the letter C layered over the letter P"
            style={{
              marginRight: rhythm(1 / 2),
              marginBottom: 0,
              width: 60,
              height: 60,
            }}
          />
          {header}
        </Link>
      </header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with{' '}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  );
};

export default Layout;
