module.exports = {
  // "stories": [
  //   "../stories/**/*.stories.mdx",
  //   "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  // ],
  stories: [
    '../packages/**/*.stories.mdx',
    '../packages/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
};
