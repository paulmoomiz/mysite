const { environment } = require('@rails/webpacker')

/* for jquery and popper extensions */
const webpack = require("webpack")

environment.plugins.append("Provide", new webpack.ProvidePlugin({
  $: 'jquery',
  jQuery: 'jquery',
  Popper: ['popper.js', 'default']
}))
/* end */

module.exports = environment
