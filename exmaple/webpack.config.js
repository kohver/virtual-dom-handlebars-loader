module.exports = {
    entry: {
        'index': './example.js'
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/dest/'
    },
    module: {
        loaders: [
            {
                test: /\.hbs$/,
                loader: '../index.js'
            }
        ]
    }
};
