import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "ferryops.dev",
  tagline: "Membahas Teknologi Terkini dan Jasa Buat Web/Program",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://ferryops.dev",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "ferryops", // Usually your GitHub org/user name.
  projectName: "Blog", // Usually your repo name.

  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "id",
    locales: ["id"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/ferryops/ferryops-dev",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/ferryops/ferryops-dev",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "ferryops.dev",
      logo: {
        alt: "Membahas Teknologi Terkini dan Jasa Buat Web/Program",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Tutorial",
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/facebook/docusaurus",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Halaman",
          items: [
            {
              label: "Tutorial",
              to: "/ReactJS/vite",
            },
            {
              label: "Blog",
              to: "/blog",
            },
          ],
        },
        {
          title: "Sosial Media",
          items: [
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/ferry-ananda-febian",
            },
            {
              label: "Instagram",
              href: "https://www.instagram.com/ferryops_/",
            },
            {
              label: "Facebook",
              href: "https://web.facebook.com/ferry.anandafebian/",
            },
          ],
        },
        {
          title: "Komunitas",
          items: [
            {
              label: "DEV Community",
              href: "https://dev.to/ferryops/",
            },
            {
              label: "kasKus",
              href: "https://www.kaskus.co.id/@ferry.a.febian",
            },
            {
              label: "Github",
              href: "https://github.com/ferryops",
            },
          ],
        },
        {
          title: "Hubungi Saya",
          items: [
            {
              label: "Email",
              href: "mailto:ferry.a.febian@gmail.com",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ferryops.dev, Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
