const polyfillPlugin = require("./plugins/polyfill.js");

module.exports = {
    plugins: [
        { plugin: require('@semantic-ui-react/craco-less') },
        { plugin: require('tailwindcss') },
        { plugin: require('autoprefixer') },
        { plugin: polyfillPlugin, options: {}}
    ],
}