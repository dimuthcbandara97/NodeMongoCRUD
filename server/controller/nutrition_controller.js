
let foodDB = require('../model/nutrition_model')

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
    const user = new foodDB({
        food_name: req.body.food_name, 
        value: req.body.value, 
        recomended_by: req.body.recomended_by,
        why_recomended: req.body.why_recomended,
        imageurl: req.body.imageurl,
        videourl:req.body.videourl,
        fitness_goal: req.body.fitness_goal
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
            foodDB.findById(id)
            .then(user => {
                res.send(user)
              })
            .catch(err => {
                  res.status(500).send({
                      message: err.message || "Some error occurred while retrieving the required user."
                  })
              })
        }else{
            foodDB.find()
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

// update a new identifed user by user id
exports.update = (req, res) => {
    if(!req.body){
        return res.status(404).send({message: "Data to update can not be empty."});
    }

    const id = req.params.id
    foodDB.findByIdAndUpdate(id, req.body,{useFindAndModify: false})
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
    foodDB.findByIdAndDelete(id)
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

