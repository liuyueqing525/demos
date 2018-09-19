const path = require('path');

module.exports = {
    entry: {entry: './src/index.js',
    entry2: './src/goo.js'},
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
     module: {
     rules: [
       {
         test: /\.css$/,
         use: [
           'style-loader',
           'css-loader'
         ]
       }
     ]
   }
};