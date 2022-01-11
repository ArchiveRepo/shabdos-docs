/* eslint-disable global-require */

const pages = require( './src/pages.config' )

module.exports = {
  title: 'Shabad OS Docs',
  tagline: 'Browse the latest docs, including tutorial guides, sample code, product articles, and API references.',
  url: 'https://docs.shabados.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'shabados',
  projectName: 'docs',
  themeConfig: {
    hideableSidebar: false,
    colorMode: {
      respectPrefersColorScheme: true,
      switchConfig: {
        darkIcon: '🌙',
        darkIconStyle: {
          marginLeft: '1px',
          paddingBottom: '2px',
        },
        lightIcon: '😎',
        lightIconStyle: {
          marginLeft: '1px',
          paddingBottom: '2px',
        },
      },
    },
    navbar: {
      hideOnScroll: true,
      title: 'Docs',
      logo: {
        alt: 'ShabadOS Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          label: 'Products',
          position: 'left',
          items: [
            { to: 'database/', label: 'Database' },
            { to: 'viewer/', label: 'Viewer' },
            { to: 'presenter/', label: 'Presenter' },
            { to: 'mobile/', label: 'Mobile' },
            { to: 'gurmukhi-utils/', label: 'Gurmukhi Utils' },
            { to: 'theme-tool/', label: 'Theme Tool' },
          ],
        },
        { to: 'community/', label: 'Community', position: 'left' },
        {
          href: 'https://github.com/shabados/docs',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    algolia: {
      // https://docusaurus.io/blog/2021/11/21/algolia-docsearch-migration
      appId: '44X4G5ZXKB',
      apiKey: '152efab97b0443cf92b925d295a6bc9c',
      indexName: 'shabados',
    },
    prism: {
      theme: require( 'prism-react-renderer/themes/github' ),
      darkTheme: require( 'prism-react-renderer/themes/vsDark' ),
      defaultLanguage: 'javascript',
    },
    footer: {
      copyright: 'Built with <a href="https://docusaurus.io/" target="_blank">Docusaurus</a>. <br/> <a href="https://vercel.com/?utm_source=ShabadOS&utm_campaign=oss" target="_blank"><img class="vercel" src="https://www.datocms-assets.com/31049/1618983297-powered-by-vercel.svg"/></a>', // You can also put own HTML here.
    },
  },
  plugins: [ ...pages ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: false,
        theme: {
          customCss: require.resolve( './src/css/custom.css' ),
        },
      },
    ],
  ],
}
