const nodeExternals = require("webpack-node-externals");
const path = require("path");

module.exports = {
    entry: path.resolve(__dirname, "./index.ts"),
    output: {
        path: path.resolve(__dirname, "./dist"),
        library: 'seb-components-library',
        filename: "index.js",
        libraryTarget: 'umd',
        globalObject: 'this',
    },

    mode: "production",
    target: "node",

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".jsx"],
    },

    module: {
        rules: [
            {
                test: /\.(gif|png)$/, 
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      limit: 10000,
                      name: './public' + '.[ext]'
                    }
                  }
               ]
              },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                test: /\.(?:js|mjs|cjs)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-react', { targets: "defaults" }]
                        ]
                    }
                }
            },
            {
                enforce: "pre",
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "source-map-loader",
            },
            {
                test:  /\.(?:css|scss)$/,
                exclude: /node_modules/,
                use: [
                    // Use the chain sass-loader -> css-loader -> style-loader
                    // But use MiniCssExtractPlugin on prod, so we get a file.
                    {
                        loader: "style-loader",
                    },
                    {
                        loader: "css-loader",
                    },
                    {
                        loader: "sass-loader",
                    },
                ],
            }
        ],
    },
    externals: [nodeExternals()],
    plugins: [],
};