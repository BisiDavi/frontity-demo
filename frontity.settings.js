const settings = {
  name: "demo-frontity",
  state: {
    frontity: {
      url: "https://test.frontity.org",
      title: "Getting Started with Test Frontity Blog",
      description: "WordPress installation for Frontity development",
    },
  },
  packages: [
    {
      name: "@frontity/mars-theme",
      state: {
        theme: {
          menu: [
            ["HOME", "/"],
            ["OUR TEAM", "/our-team"],
            ["PROCEDURES", "/procedures"],
          ],
          featured: {
            showOnList: false,
            showOnPost: false,
          },
          socialLinks: {
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
          url: "https://test.frontity.org",
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ],
};

export default settings;
