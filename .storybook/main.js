module.exports = {
  "stories": [
    "../src/Stories/**/*.stories.mdx",
    "../src/Stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    'storybook-addon-sass-postcss'
  ],
  "framework": "@storybook/react"
}