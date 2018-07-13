//Module exports 
const path = require('path') //importing path module
console.log(path.join(__dirname, 'public'));

module.exports = {
    //entry : where webpack should start
    //Refer to webpack.js.org
    entry : './src/app.js',
    output : {
        path : path.join(__dirname, 'public'), //where do we want to put the webpack file i.e bundle.js
        //The paath is the absolute path that we need to specify and it is differnt for different machines and users.
        //SO we use console.log(__dirname); then node function path.join() to get to the public folder through string concat
        filename : 'bundle.js' // we can specify any name 
    },
    module : {
        rules : [{  //rules array contains 3 things 
            loader : 'babel-loader',
            test : /\.js$/, // run babel through all js files to convert JSX to javascript
            exclude : /node_modules/ //name of the files where we do not want to run babel
        },
        {
            test: /\.s?css$/,
            use: [
              'style-loader',
              'css-loader',
              'sass-loader'
            ]
        }
    ]
    },
    devtool : 'cheap-module-eval-source-map',
    //devserver genrates its own bundle.js file dynamically and does not produce any physical file and serves it up and this is what makes it quicker
    //so even if we delete the bundle.js the app will still run
    //Whenever we want the bundle.js we can run : yarn build (to run webpack)
    devServer : {
        contentBase :  path.join(__dirname, 'public')
    }
};