const webpack = require('webpack');

module.exports = {

    overrideWebpackConfig: ({ webpackConfig, cracoConfig, pluginOptions, context: { env, paths } }) => {

        let webpackConfigAdjust = Object.assign({}, webpackConfig);

        webpackConfigAdjust.resolve = {
            ...webpackConfig.resolve,
            alias: {
                process: require.resolve('process'),
                Buffer: require.resolve('buffer'),
                '../../theme.config': require('path').join(
                    __dirname,
                    '../src/semantic-ui/theme.config',
                ),
            },
            fallback: {
                path: require.resolve('path-browserify'),
                assert: require.resolve("assert"),
                crypto: require.resolve("crypto-browserify"),
                fs: false,
                http: require.resolve("stream-http"),
                https: require.resolve("https-browserify"),
                os: require.resolve("os-browserify"),
                stream: require.resolve("stream-browserify"),
                url: require.resolve("url")
            },
        };


        webpackConfigAdjust.plugins = [
            ...webpackConfig.plugins,
            new webpack.ProvidePlugin({
                process: 'process/browser',
                Buffer: ['buffer', 'Buffer']
            })
        ];

        webpackConfigAdjust.output = {
            ...webpackConfig.output,
            libraryTarget: "umd"
        };

        console.log(webpackConfigAdjust);
        return webpackConfigAdjust;

    }

};

// // eslint-disable-next-line
// module.exports = function (context, options) {



//     return {
//         name: 'polyfills-plugin',
//         // eslint-disable-next-line
//         configureWebpack(config, isServer, utils) {
//             let webpackConfig;

//             webpackConfig = {
//                 resolve: {
//                     alias: {
//                         process: require.resolve('process'),
//                         Buffer: require.resolve('buffer'),
//                     },
//                     fallback: {
//                         path: require.resolve('path-browserify'),
//                         assert: require.resolve("assert"),
//                         crypto: require.resolve("crypto-browserify"),
//                         fs: false,
//                         http: require.resolve("stream-http"),
//                         https: require.resolve("https-browserify"),
//                         os: require.resolve("os-browserify"),
//                         stream: require.resolve("stream-browserify"),
//                         url: require.resolve("url")
//                     },
//                 },
//                 plugins: [
//                     new webpack.ProvidePlugin({
//                         process: 'process/browser',
//                         Buffer: ['buffer', 'Buffer']
//                     }),
//                 ],
//                 output: {
//                     libraryTarget: "umd"
//                 }
//             };

//             return webpackConfig;
//         },
//     };
// };