var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var vue = require("vue-loader");


//定义了一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname);
console.log(ROOT_PATH)
var APP_PATH = path.resolve(ROOT_PATH, 'src/main.js');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

var plugins = [
    //压缩js
     //new webpack.optimize.UglifyJsPlugin({minimize: true}),
    //提公用js到common.js文件中
    new webpack.optimize.CommonsChunkPlugin('common.js'),
    //将样式统一发布到style.css中
    new ExtractTextPlugin("style.css", {
        allChunks: true
    }),
    // 使用 ProvidePlugin 加载使用率高的依赖库
    new webpack.ProvidePlugin({
        $: 'webpack-zepto'
    }),
    //区分环境
    new  webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production') // or development
    })
];

module.exports = {
  /*  //项目的文件夹 可以直接用文件夹名称 默认会找index.js 也可以确定是哪个文件名字
    entry: {
        build : APP_PATH
    },
    //输出的文件名 合并以后的js会命名为bundle.js
    output: {
        path: BUILD_PATH,
        filename: '[name].js',
        // 指向异步加载的路径
        publicPath : ROOT_PATH + '/build/',
        // 非主文件的命名规则
        chunkFilename: '[id].build.[chunkhash].js'
    },*/
    entry : './src/main.js',
    output : {
        path : './build',
        publicPath : 'build/',
        filename : 'build.js',
        chunkFilename: '[id].build.[chunkhash].js'
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue',
            },
            {
                test: /\.css$/,
                //loader : "style!css"
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=40000'
            },
            // 转化ES6 语法
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
        ]
    },
    vue: {
        css: ExtractTextPlugin.extract("css"),
        //sass: ExtractTextPlugin.extract("css!sass-loader")
    },
    babel: {
        presets: ['es2015']
    },
    plugins: plugins
};