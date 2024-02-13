const output = {
   home: (req, res) => {
        res.sendFile('home.html', {root: './src/views'});
    },
};

//see "./index.js"
module.exports = {
    output,
};