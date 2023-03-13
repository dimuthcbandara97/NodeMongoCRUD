
const axios = require('axios');

// Add User
exports.add_user = (req, res) => {
    res.render('add_user')
}

// Update User
exports.update_user = (req, res) => {
    axios.get('http://localhost:3000/api/users',{params: {id:req.query.id}})
    .then(function (userData) {
        res.render('update_user',{user:userData.data});
    })
    .catch(err=>{
        res.send(err)
    })
}

// Home Route
exports.homeRoutes = (req,res) => {
    // Make a get request top /api/users
    axios.get('http://localhost:3000/api/users')
    .then(function (response) {
        
        res.render('index',{users: response.data});
    }).catch(err=>{

    })
    
    
}
// Nutrition Route
exports.nutritionRoutes = (req,res) => {
    // Make a get request top /api/users
    axios.get('http://localhost:3000/api/nutrition')
    .then(function (response) {
        
        res.render('index',{users: response.data});
    }).catch(err=>{

    })
    
    
}

// Exercise Route
exports.exerciseRoutes = (req,res) => {
    // Make a get request top /api/users
    axios.get('http://localhost:3000/api/exercise')
   .then(function (response) {
        res.render('index',{users: response.data});
    }).catch(err=>{

    })
    
    
}

// Meditation Routes
exports.meditationRoutes = (req,res) => {
    // Make a get request top /api/users
    axios.get('http://localhost:3000/api/meditation')
  .then(function (response) {
        res.render('index',{users: response.data});
    }).catch(err=>{

    })
    
    
}

// Networking Routes
exports.networkingRoutes = (req,res) => {
    // Make a get request top /api/users
    axios.get('http://localhost:3000/api/networking')
 .then(function (response) {
        // console.log(response.data);
        res.render('index',{users: response.data});
    }).catch(err=>{

    })

}

// Timer Routes
exports.timerRoutes = (req,res) => {
    // Make a get request top /api/users
    axios.get('http://localhost:3000/api/timer')
 .then(function (response) {
        // console.log(response.data);
        res.render('index',{users: response.data});
    }).catch(err=>{

    })

}

// Progress Routes
exports.progressRoutes = (req,res) => {
    // Make a get request top /api/users
    axios.get('http://localhost:3000/api/progress')
 .then(function (response) {
        // console.log(response.data);
        res.render('index',{users: response.data});
    }).catch(err=>{

    })

}
