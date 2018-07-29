//Module exports 
//Since we have only Node available here : we use require
const path = require('path') //importing path module
const ExtractTextPlugin = require('extract-text-webpack-plugin')

console.log(path.join(__dirname, 'public'));

module.exports = (env) => {
    const isProduction = env === 'production'
    const cssExtract = new ExtractTextPlugin('styles.css')//styles.css will be the filename where the styles will go
    return {
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
            cssExtract
        ],
        // devtool : isProduction ? 'sourcemap' : 'cheap-module-eval-source-map', //cheap-module-eval-source-map doesnt work with css files and hence any error will not point correctly
        devtool : isProduction ? 'source-map' : 'inline-source-map',
        
        //devserver genrates its own bundle.js file dynamically and does not produce any physical file and serves it up and this is what makes it quicker
        //so even if we delete the bundle.js the app will still run
        //Whenever we want the bundle.js we can run : yarn build (to run webpack)
        devServer : {
            contentBase :  path.join(__dirname, 'public'),
            historyApiFallback : true
            // historyApiFallback : true means that we will be handling the routing using our client side code 
            //We command to serve up index.html everytime and let reat-route figure out routes
        }
}
}
