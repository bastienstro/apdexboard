const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const extractCSS = new ExtractTextPlugin('bundle.min.css')


const HtmlWebpackPluginConfig = new HtmlWebpackPlugin(
{
  title: 'newRelicHosts',
  template: 'src/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {

  entry:  ['./src/js/index.js',
	  	   './src/css/app.css',
	  	  ],
  output:
  {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.min.js'
  },
  module:
  {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
		query: {
                    presets: ["es2015","react"]
                },
        exclude: /node_modules/
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
		query: {
                    presets: ["es2015","react"]
                },
        exclude: /node_modules/
      },
      {

        test: /\.css$/,
        use: extractCSS.extract(
        {
          use:
          {
            loader: 'css-loader',
            options:
            {
              minimize: false
            }
          }
        })
      },
    ]
  },

  plugins: [HtmlWebpackPluginConfig, extractCSS]
}
