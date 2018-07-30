const express = require ('express');
const path = require ('path');
const app = express(); //Now we have an express application
const publicPath = path.join(__dirname,'..','public');
//setting a dynamic/static(if heroku server doesnt exist) variable 
//heroku serves a env variable : PORT 
const port = process.env.PORT || 4000;

//setting up middleware i.e code that serves up assests from public folder for any request that is made
//nd this code is : express.static()
app.use(express.static(publicPath))

//* for any sort of unmatched routes giving a 404, we can use '/create' if need to be specific
app.get('*', (request,response) =>{
    response.sendFile(path.join(publicPath, 'index.html'))
});
app.listen(port, () => {
    //a callback function called if the server is setup on the port mentioned : 4000
    console.log("Server is UP!")
});