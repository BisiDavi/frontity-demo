const settings = {
  name: "demo-frontity",
  state: {
    frontity: {
      url: "https://davidolubisi.wordpress.com",
      title: "Getting Started with Test Frontity Blog",
      description: "WordPress installation for Frontity development",
    },
  },
  packages: [
    {
      name: "@frontity/own-theme",
      state: {
        theme: {
          logo: { link: "/" },
          menu: [
            ["CLINICAL TRIALS", "/category/clinical-trials"],
            ["PROCEDURES", "/category/procedures"],
            ["CONTACT LENS", "/category/contact-lens"],
            ["OUR TEAM", "/category/our-team"],
          ],
          featured: {
            showOnList: false,
            showOnPost: false,
          },
          SocialLinks: {
            links: [
              { link: "#facebook", name: "facebook" },
              { link: "#twitter", name: "twitter" },
              { link: "#instagram", name: "instagram" },
            ],
          },
          footerLinks: [
            { name: "CLINICAL TRIALS", link: "/category/clinical-trials" },
            { name: "PROCEDURES", link: "/category/procedures" },
            { name: "CONTACT LENS", link: "/category/contact-lens" },
            { name: "BLOG", link: "/category/blog" },
          ],
        },
      },
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          url: "https://davidolubisi.wordpress.com",
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ],
};

export default settings;
