
const path = require('path');
const webpack = require('webpack'); // only add this if you don't have yet
module.exports = {

    entry:'./src/index.js',
   
    
    module:{
        rules:[
            {
                test:/\.css$/i, // all css files
                use:['style-loader','css-loader']
            },

            {
                test: /\.(js)$/,  // all JavaScript files
                exclude: /node_modules/,
                use: 'babel-loader'
            },
        
        ]
    },

    output:{
        filename:'bundle.js',
        path: path.join(__dirname,'dist')
      },

    devServer: {
     
        static: {
            directory: path.join(__dirname, 'dist'),
          },
         
        compress: true,
        port: 2200,

    },
    plugins:[
      
    ],

    mode: 'development',

}