const path = require('path');
module.exports = {
    entry: path.join(__dirname, "src", "main.js"),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        library: 'myLib'
    },
    mode: 'production',
    watch: true,
    devtool: 'source-map',

    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env']
            }
        }]
    }
};