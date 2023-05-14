let Userdb = require('../model/model')

// create and save new user
exports.create = (req, res) => {
    // Validate the request
    if (!req.body) {
        return res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    // Validate the data
    const { name, password, email, gender, imageurl } = req.body;

    if (!name || typeof name !== 'string' || name.trim().length === 0) {
        return res.status(400).send({
            message: "Invalid name"
        });
    }

    if (!password || typeof password !== 'string' || password.trim().length < 6) {
        return res.status(400).send({
            message: "Password must be at least 6 characters"
        });
    }

    if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return res.status(400).send({
            message: "Invalid email"
        });
    }

    if (gender !== 'male' && gender !== 'female' && gender !== 'other') {
        return res.status(400).send({
            message: "Invalid gender"
        });
    }

    if (imageurl && typeof imageurl !== 'string') {
        return res.status(400).send({
            message: "Invalid imageurl"
        });
    }

    // New user
    const user = new Userdb({
        name: name.trim(),
        password: password.trim(),
        email: email.trim().toLowerCase(),
        gender,
        imageurl: imageurl ? imageurl.trim() : null
    });

    // Save user in the database
    user.save()
        .then(data => {
            res.redirect('/add-user');
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the user."
            });
        });
};


// retreive and return all users
exports.find = (req, res) => {
        if(req.query.id){
            const id = req.query.id
            Userdb.findById(id)
            .then(user => {
                res.send(user)
              })
            .catch(err => {
                  res.status(500).send({
                      message: err.message || "Some error occurred while retrieving the required user."
                  })
              })
        }else{
            Userdb.find()
        .then(user => {
            res.send(user)
          })
        .catch(err => {
              res.status(500).send({
                  message: err.message || "Some error occurred while retrieving users."
              })
          })
        }

}
// Modify above code to suit a login form

// update a new identifed user by user id
exports.update = (req, res) => {
    if(!req.body){
        return res.status(404).send({message: "Data to update can not be empty."});
    }

    const id = req.params.id
    Userdb.findByIdAndUpdate(id, req.body,{useFindAndModify: false})
    .then(data => {
        if(!data){
            res.status(404).send({message: "can not find user"})
        }else{
            res.send(data)
        }
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while updating the user."
        })
    })
}

// delete a user by user id
exports.delete = (req, res) => {
    
    if(!req.body){
        return res.status(404).send({message: "Data to update can not be empty."});
    }

    const id = req.params.id
    Userdb.findByIdAndDelete(id)
    .then(data => {
        if(!data){
            res.status(404).send({message: "can not find user"})
        }else{
            res.send(data)
            // can use messge if required
        }
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while deleting the user."
        })
    })
}