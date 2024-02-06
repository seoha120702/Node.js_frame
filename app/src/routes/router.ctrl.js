const output = {
   home: (req, res) => {
        //if you want view engine === ejs
        res.render('home');
        /*or
        res.sendFile('../views/home.html')*/
    },
};

//see "./index.js"
module.exports = {
    output,
};