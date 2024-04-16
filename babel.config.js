module.exports = {
  "plugins": [
    ["@babel/plugin-proposal-decorators", { "legacy": true }]
  ],
  "presets": [
    '@babel/preset-typescript',
    '@wyw-in-js/babel-preset',
    [
      "babel-preset-gatsby",
      {
        "targets": {
          "browsers": [">0.25%", "not dead"]
        }
      }
    ],
  ]
}
