module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "radiomics-web",
    author: '@parinaznasr'
  },
  plugins: [
    'gatsby-plugin-smoothscroll',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-image',
    'gatsby-plugin-styled-components',
    'gatsby-transformer-json',
    'gatsby-transformer-csv',
    `gatsby-plugin-preload-fonts`,
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        display: 'minimal-ui',
        icon: 'src/images/logo/R3-gray.png',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/src/data/`,
      },
    }
  ]
};
