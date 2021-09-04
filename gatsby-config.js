const path = require("path");
const { title, keywords, description, author, trackingId } = require("./config/site");

require("dotenv").config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title,
    keywords,
    description,
    author,
    menuLinks: [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "Studio",
        link: "/studio",
      },
      {
        name: "Services",
        link: "/services",
      },
      {
        name: "About",
        link: "/about",
      },
      {
        name: "Contact",
        link: "/contact",
      },
    ],
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: trackingId,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: title,
        short_name: "Agency",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#f6961d",
        display: "minimal-ui",
        icon: "content/assets/quadratic-favicon-color.png",
      },
    },
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "markdown",
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/content/assets/images`,
      },
    },
    "gatsby-plugin-eslint",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-offline",
    "gatsby-plugin-nullish-coalescing-operator",
    {
      resolve: "gatsby-plugin-sass",
      options: {
        data: `@import "core.scss";`,
        includePaths: [path.resolve(__dirname, "src/style")],
      },
    },
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: [
          "Montserrat:400,700",
          "Almarai:300,400,700,800",
          "Kaushan+Script",
          "Droid+Serif:400,400i,700,700i",
          "Roboto+Slab:400,100,300,700",
        ],
      },
    },
  ],
};
