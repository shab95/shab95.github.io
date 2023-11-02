module.exports = {
  extends: "airbnb-base",
  env: {
    browser: true,
    node: true,
  },
  rules: {
    "no-console": "off",
    "linebreak-style": 0,
    "no-param-reassign": [2, { props: false }],
    "no-unused-vars": "off",
  },
};
