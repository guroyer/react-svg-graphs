const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        app: "./src/index.tsx"
    },
    plugins: [
        new CleanWebpackPlugin(["dist"])
    ],
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    resolve: { 
        extensions: [".ts", ".tsx", ".js", ".json", ".less"],
        alias: {
            utils: path.join(__dirname, "src", "components/utils"),
            graphs: path.join(__dirname, "src", "components/graphs"),
            examples: path.join(__dirname, "src", "examples"),
            assets: path.join(__dirname, "src", "assets")
        }
    },
    module: {
        rules: [
            { 
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader" 
            },
            { 
                enforce: "pre", 
                test: /\.js$/,
                loader: "source-map-loader" 
            },
            {
                test: /\.less$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader'
                }, {
                    loader: 'less-loader'
                }]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'url-loader'
                ]
            }
        ]
    }
};