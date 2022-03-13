const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Cal Perez',
    author: {
      summary: 'Senior Software Engineer at Praxis Labs. I like to code, cook, paint, and play D&D and Warhammer. This blog documents my thoughts about the tech industry, best practices, my failures, and some random things I like sprinkled in. Currently getting into building circuits.'
    },
    description: 'Cal Perez\'s blog',
    siteUrl: 'https://calperez.io/'
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: path.join(__dirname, '/content/blog'),
        name: 'blog'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: path.join(__dirname, '/content/assets'),
        name: 'assets'
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 590
            }
          },
          {
            resolve: 'gatsby-remark-katex',
            options: {
              strict: 'ignore'
            }
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem'
            }
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              inlineCodeMarker: '±',
              aliases: { js: 'javascript' },
              prompt: {
                user: 'root',
                host: 'localhost',
                global: false
              }
            }
          },
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants'
        ]
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Gatsby Starter Blog',
        short_name: 'GatsbyJS',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#031A6B',
        display: 'minimal-ui',
        icon: 'content/assets/logo.svg'
      }
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography'
      }
    }
  ]
}
