const path = require('path')
const cssnano = require('cssnano')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const postcssCustomProperties = require('postcss-custom-properties')
const autoprefixer = require('autoprefixer')
const { VueLoaderPlugin } = require('vue-loader')


// --- variable ---
const { NODE_ENV } = process.env


// webpack setting
module.exports = {
  entry: {
    index: ['@babel/polyfill', './js/index.js'],
  },
  output: {
    path: path.join(__dirname, '../'),
    filename: 'js/[name].js',
  },
  resolve: {
    alias: {
      vue: NODE_ENV === 'production' ? 'vue/dist/vue.min.js' : 'vue/dist/vue.js',
    },
  },
  optimization: {
    minimize: true,
    minimizer: [
      new OptimizeCSSAssetsPlugin({
        assetNameRegExp: /\.css\.*(?!.*map)/g,
        cssProcessor: cssnano,
        cssProcessorPluginOptions: {
          preset: [
            'default',
            {
              discardComments: {
                removeAll: true,
              },
              safe: true,
              autoprefixer: false,
              reduceTransforms: false,
            },
          ],
        },
        canPrint: true,
      }),
      new TerserPlugin({
        sourceMap: true, // Must be set to true if using source-maps in production
        terserOptions: {
          cache: true,
          parallel: true,
          ecma: 6,
          mangle: true,
          comments: false, // Eliminate comments
          compress: {
            warnings: false, // remove warnings
            drop_console: true, // Drop console statements
          },
        },
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        exclude: (file) => /node_modules/.test(file) && !/\.vue\.js/.test(file),
        use: [
          'babel-loader',
        ],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          // {
          //   loader: MiniCssExtractPlugin.loader,
          //   options: {
          //     publicPath: '../',
          //   },
          // },
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              parser: 'postcss-scss',
              plugins: (loader) => [
                postcssCustomProperties(),
                autoprefixer({
                  grid: 'autoplace',
                }),
              ],
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
        include: path.resolve(__dirname, 'img/icon'),
      },
      {
        test: /\.(jpe?g|png|svg)$/i,
        include: [path.resolve(__dirname, 'img')],
        exclude: [path.resolve(__dirname, 'img/icon')],
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './views/index.html',
      filename: 'index.html',
    }),
    // new MiniCssExtractPlugin({
    //   filename: 'style/[name].css',
    //   chunkFilename: '[id].css',
    // }),
    new VueLoaderPlugin(),
  ],
}
