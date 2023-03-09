
const axios = require('axios');

exports.homeRoutes = (req,res) => {
    // Make a get request top /api/users
    axios.get('http://localhost:3000/api/users')
    .then(function (response) {
        // console.log(response.data);
        res.render('index',{users: response.data});
    }).catch(err=>{

    })
    
    
}



exports.add_user = (req, res) => {
    res.render('add_user')
}

exports.update_user = (req, res) => {
    axios.get('http://localhost:3000/api/users',{params: {id:req.query.id}})
    .then(function (userData) {
        res.render('update_user',{user:userData.data});
    })
    .catch(err=>{
        res.send(err)
    })
}

// Nutrition

exports.nutritionRoutes = (req,res) => {
    // Make a get request top /api/users
    axios.get('http://localhost:3000/api/nutrition')
    .then(function (response) {
        // console.log(response.data);
        res.render('index',{users: response.data});
    }).catch(err=>{

    })
    
    
}
