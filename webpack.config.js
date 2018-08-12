//Module exports 
//Since we have only Node available here : we use require
const path = require('path'); //importing path module
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

console.log(path.join(__dirname, 'public'));

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if(process.env.NODE_ENV === 'test'){
    // process.env.Firebase_API_KEY 
    // we will not manually write all these variables we use dotenv module
    require('dotenv').config({path : '.env.test'})
}else if(process.env.NODE_ENV === 'development'){
    require('dotenv').config({path : '.env.development'})
}

module.exports = (env) => {
    console.log('env',env)
    const isProduction = env === 'production'
    const cssExtract = new ExtractTextPlugin('styles.css')//styles.css will be the filename where the styles will go
    return {
        //entry : where webpack should start
        //Refer to webpack.js.org
        //entry can be a 'string', od array of string. To use polyfill we use the following entry:
        entry : ['babel-polyfill','./src/app.js'],
        output : {
            path : path.join(__dirname, 'public', 'dist'), //where do we want to put the webpack file i.e bundle.js
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
                // use: [
                // after ExtractTextPlugin both cssloader and sass loader will be passed as objects,
                // b'cause we need to use thier options property and style loader will not be needed as we dont want to declare inline css
                //   'style-loader', 
                //   'css-loader',
                //   'sass-loader'
                // ]
                use : cssExtract.extract({
                    use : [
                        {
                            loader : 'css-loader',
                            options : {
                                sourceMap : true
                            }
                        },
                        {
                            loader : 'sass-loader',
                            options : {
                                sourceMap : true
                            }
                        }
                    ]
                })
            }
        ]
        },
        plugins : [
            cssExtract,
            new webpack.DefinePlugin({
                //without JSON stringify, it will treat them as variables
                //EG : project id i.e expensify-b9d78 will be considered as a variable and will be searched for its value in the files
                "process.env.FIREBASE_API_KEY" : JSON.stringify(process.env.FIREBASE_API_KEY),
                "process.env.FIREBASE_AUTH_DOMAIN" : JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
                "process.env.FIREBASE_DATABASE_URL" : JSON.stringify(process.env.FIREBASE_DATABASE_URL),
                "process.env.FIREBASE_PROJECT_ID" : JSON.stringify(process.env.FIREBASE_PROJECT_ID),
                "process.env.FIREBASE_STORAGE_BUCKET" : JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
                "process.env.FIREBASE_MESSAGING_SENDER_ID" : JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID)
            })
        ],
        // devtool : isProduction ? 'sourcemap' : 'cheap-module-eval-source-map', //cheap-module-eval-source-map doesnt work with css files and hence any error will not point correctly
        devtool : isProduction ? 'source-map' : 'inline-source-map',

        //devserver genrates its own bundle.js file dynamically and does not produce any physical file and serves it up and this is what makes it quicker
        //so even if we delete the bundle.js the app will still run
        //Whenever we want the bundle.js we can run : yarn build (to run webpack)
        devServer : {
            contentBase :  path.join(__dirname, 'public'),
            historyApiFallback : true,
            // historyApiFallback : true means that we will be handling the routing using our client side code 
            //We command to serve up index.html everytime and let reat-route figure out routes
            publicPath : '/dist/'
        }
}
}
