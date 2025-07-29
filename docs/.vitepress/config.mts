import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "CatLinux Wiki",
  description: "A VitePress Site",
  base: "/catlinux-wiki/",
  head: [["link", { rel: "icon", href: "/catlinux-wiki/favicon.png" }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "ArchLinux", link: "/archlinux-instalation" },
    ],

    sidebar: [
      {
        text: "Instalacja ArchLinuxa",
        link: "/archlinux-instalation",
        items: [
          {
            text: "Przed instalacją",
            link: "/archlinux-instalation/pre-instalation",
          },
          { text: "Instalacja", link: "/archlinux-instalation/instalation" },
          {
            text: "Po instalacji",
            link: "/archlinux-instalation/post-instalation",
          },
        ],
      },
      {
        text: "Examples",
        items: [
          {
            text: "Markdown Examples",
            link: "/markdown-examples",
          },
        ],
      },
    ],
    logo: "/favicon.png",
  },
});
