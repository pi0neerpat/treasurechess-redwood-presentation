import { themes } from "mdx-deck";

export default {
  ...themes.prism,
  ...themes.hack,
  fonts: {
    body: "Montserrat, sans-serif",
    monospace: "Montserrat, sans-serif",
  },
  colors: {
    text: "white",
    background: "#47433f",
    primary: "grey",
    anchor: "white",
  },
};

// Customize your presentation theme here.
//
// Read the docs for more info:
// https://github.com/jxnblk/mdx-deck/blob/master/docs/theming.md
// https://github.com/jxnblk/mdx-deck/blob/master/docs/themes.md
