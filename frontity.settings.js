const settings = {
  name: "demo-frontity",
  state: {
    frontity: {
      url: "https://awesome-hair-store.000webhostapp.com",
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
            ["OUR TEAM", "/our-team"],
            ["PROCEDURES", "/procedures"],
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
          url: "https://awesome-hair-store.000webhostapp.com",
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ],
};

export default settings;
