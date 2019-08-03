/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: 'Renat',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/image.jpg'.
    image: '/img/undraw_open_source.svg',
    infoLink: 'https://www.facebook.com',
    pinned: true,
  },
];

const siteConfig = {
  title: 'Documentation', // Title for your website.
  tagline: 'Apphud',
  url: 'https://docs.apphud.com', // Your website URL
  baseUrl: '/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',
  cname: 'docs.apphud.com',
  // Used for publishing and more
  projectName: 'docs',
  organizationName: 'apphud',

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
  //  {doc: 'welcome', label: 'Docs'},
    {href: 'https://apphud.com', label: 'Get Apphud'},
    {href: 'https://apphud.com/contacts', label: 'Contacts'},
    {languages: true}
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/docs-logo-2.svg',
  footerIcon: 'img/docs-footer-2.svg',
  favicon: 'img/favicon.ico',

  /* Colors for website */
  colors: {
    primaryColor: '#0085ff',
    secondaryColor: '#1a344b',
  },

  /* Custom fonts for website */
  fonts: {
    myFont: [
      "Ubuntu",
      "-apple-system",
      "system-ui",
      "Serif"
    ],
    myOtherFont: [
      "Ubuntu",
      "-apple-system",
      "system-ui"
    ]
  },

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Softeam Inc.`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js', "https://code.tidio.co/gdrvzh9vn6fev1qclymh8n4y4iu7fkst.js"],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/undraw_online.svg',
  twitterImage: 'img/undraw_tweetstorm.svg',

  scrollToTop: false,

  twitterUsername: `apphud`,

  disableHeaderTitle: true,

  stylesheets: [
    "https://fonts.googleapis.com/css?family=Ubuntu:400,400i,500,500i",
    "/css/code-block-buttons.css"
  ],

  gaTrackingId: "UA-142675040-3",
  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;
