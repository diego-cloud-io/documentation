// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const darkCodeTheme = require("prism-react-renderer/themes/github");
const lightCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Diego",
  tagline: "",
  url: "https://diego-cloud-io.github.io",
  baseUrl: "/documentation/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "diego-cloud-io", // Usually your GitHub org/user name.
  projectName: "documentation", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  stylesheets: [
    {
      href: "https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css",
    },
  ],
  plugins: [
  ],
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */

    ({
      colorMode: {
        defaultMode: "dark",
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        logo: {
          alt: "My Site Logo",
          src: "img/logoLight.svg",
          srcDark: "img/logoDark.svg",
        },
      },
      footer: {
        style: "dark",
        copyright: `Copyright © ${new Date().getFullYear()} Tech Amigos Ltd, Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
