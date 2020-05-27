const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const common = {
    node: {
        __dirname: false
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].bundle.js'
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' , '.css'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: ["ts-loader"],
                exclude: /node_modules/
            },
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1,
                            sourceMap: true,
                            modules:{
                               auto: true
                            }
                        }
                    }
                ]
            },
        ],
    }
};

module.exports = [
    {
        target: 'electron-main',
        entry: {
            main: './main/Main.ts'
        },
        ...common
    },
    {
        target: 'electron-renderer',
        entry: {
            renderer: './renderer/index.tsx'
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './static/index.html'
            })
        ],
        ...common
    }
];