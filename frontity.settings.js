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
            ["CLINICAL TRIALS", "/clinical-trials"],
            ["PROCEDURES", "/procedures"],
            ["CONTACT LENS", "/contact-lens"],
            ["OUR TEAM", "/our-team"],
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
            { name: "CLINICAL TRIALS", link: "/clinical-trials" },
            { name: "PROCEDURES", link: "/procedures" },
            { name: "CONTACT-LENS", link: "/contact-lens" },
            { name: "PROVIDER PORTAL", link: "/provider-portal" },
            {
              name: "SCHEDULE CONSULTATION",
              link: "/schedule-consultation",
            },
            { name: "BLOG", link: "/blog" },
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
