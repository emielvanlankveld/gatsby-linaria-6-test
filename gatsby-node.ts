import { GatsbyNode } from "gatsby"

export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({ stage, rules, loaders, plugins, actions }) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.(tsx|jsx|ts|js)?$/,
          use: [{ loader: '@wyw-in-js/webpack-loader' }],
        },
      ],
    },
  })
}
