const path = require('path');
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const copyWebpackPlugin = require('copy-webpack-plugin');



const mode = process.env.NODE_ENV;

const isDev = mode === 'development';

const filename = (ext) => isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`;


module.exports = {

    entry: {
        main: './index.js'
    },
    output: {

        filename: `./js/${filename('js')}`,
        path: path.resolve(__dirname, 'build'),
        environment: {
            arrowFunction: false
        }

    },
    mode,
    context: path.resolve(__dirname, 'src'),
    plugins: [

        new HTMLWebpackPlugin({
            template: './index.html',
            /*minify: {
                collapseWhitespace: !isDev
            }*/
        }), new CleanWebpackPlugin(),
      /* new MiniCssExtractPlugin({

            filename: `./css/${filename('css')}`,
        }),*/
        /*new copyWebpackPlugin({

            patterns:[
                {
                    from:'./src/css',
                    to:'./build/css'
                }
            ]
        })*/
    ],
    module: {
        rules: [
            {
                test: /\.js$/i,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }

            },
            {
                test: /\.(c|sa|sc)ss$/i,
                exclude: /node_modules/,
                use: [
                   /*  {
                       loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '/'
                        }
                    },*/ 'style-loader','css-loader','sass-loader']

            }, {
                test: /\.html$/i,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'html-loader',
                        
                    }]

            },
            {
                test: /\.(png|jpeg|jpg|svg|gif)$/i,
                exclude: /node_modules/,
                use:
                {

                    loader: 'file-loader',
                    options:{
                        name: '[path][name].[ext]'
                    }
                }

            }
        ]

    },
    devServer: {
        contentBase: './build',
        open: true,
        port:3000,
        hot:true,
        compress:true,
        overlay:true,
        writeToDisk: true
         
    },devtool: isDev && 'source-map'
   
};