let UserDetailDb = require('../model/user_detail_model')

// create and save new user

exports.create = (req, res) => {
    // validate the request
    if(!req.body){
        res.status(400).send({
            message: "Content can not be empty!"
        })
        return 
    }

    // new user
    const user = new UserDetailDb({
        status: req.body.status,
        height: req.body.height,
        weight: req.body.weight,
        age: req.body.age,
        fitness_goal: req.body.fitness_goal,
        email:req.body.email
    })

    // save user in the database
    user.save(user)
      .then(data => {
            // res.send(data)
            res.redirect('/add-user')
        })
      .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the user."
            })
        })
}

// retreive and return all users
exports.find = (req, res) => {
        if(req.query.id){
            const id = req.query.id
            UserDetailDb.findById(id)
            .then(user => {
                res.send(user)
              })
            .catch(err => {
                  res.status(500).send({
                      message: err.message || "Some error occurred while retrieving the required user."
                  })
              })
        }else{
            UserDetailDb.find()
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
    UserDetailDb.findByIdAndUpdate(id, req.body,{useFindAndModify: false})
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
    UserDetailDb.findByIdAndDelete(id)
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