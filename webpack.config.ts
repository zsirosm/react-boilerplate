import * as webpack from 'webpack';
import * as path from 'path';

const clientConfig = {
    entry: [
            "react-hot-loader/patch",
            "./src/index.tsx"
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "bundle.js",
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: 'whatever' as 'source-map',

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],
    module: {
        rules: [
            { 
                test: /\.tsx?$/,
                // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
                use: ["react-hot-loader/webpack", "awesome-typescript-loader"],
            },
            {
                test: /\.css?$/,
                use: ["style-loader", {
                    loader: 'typings-for-css-modules-loader',
                        options: {
                            modules: true,
                            namedExport: true
                        }
                }]
            },
            { 
                enforce: "pre" as 'pre',
                test: /\.js$/,
                // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
                use: "source-map-loader"
            }
        ]
    },
    devServer: {
        hot: true,
        historyApiFallback: true,
    }
    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
}

const serverConfig = {
    target: 'node',
    entry: {
        server: "./src/server/server.tsx",
    },
    output: {
        path: __dirname + "/dist",
        filename: "[name].js"
    },

    devtool: "source-map",

    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            { 
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            },

            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },
}

const config: webpack.Configuration = clientConfig

export default config;