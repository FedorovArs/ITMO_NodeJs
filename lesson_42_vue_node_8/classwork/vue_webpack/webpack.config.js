const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry: path.join(__dirname, "src", "main.js"),
    devServer:{
        contentBase: path.join(__dirname, 'dist'),
        port: 8000
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            } ,
            {
                test: /\.css$/,
                use: ['vue-style-loader', 'css-loader']
            },{
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
                options: {
                    outputPath: 'images',
                    esModule: false
                }
            },{
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            prependData: '$color: red;'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin() // убедитесь что подключили плагин!
    ],
    mode: 'production'
}