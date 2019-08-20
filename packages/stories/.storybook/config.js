import { configure, addDecorator } from "@storybook/react";
import { configureActions } from "@storybook/addon-actions";
import themeDecorator from "./themeDecorator";

addDecorator(themeDecorator);
// automatically import all files ending in *.stories.js
const req = require.context("../stories", true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
configureActions({
  depth: 100,
  // Limit the number of items logged into the actions panel
  limit: 20
});
