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
          menu: [
            ["HOME", "/"],
            ["OUR TEAM", "/category/our-team"],
            ["PROCEDURES", "/category/procedures"],
            ["BLOGS", "/category/blog"],
            ["TESTIMONIALS", "/category/testimonials"],
            ["CONTACT-LENS", "/category/contact-lens"],
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
