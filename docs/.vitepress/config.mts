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
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
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
