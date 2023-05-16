let exercisedb = require('../model/exercise_model')

// create and save new user

exports.create = (req, res) => {
    // validate the request
    if (!req.body) {
        return res.status(400).send({
            message: "Content can not be empty!"
        })
    }

    // validate request body fields
    const requiredFields = ["exercise_name", "exercise_type", "instructor", "affecting_area"]
    for (const field of requiredFields) {
        if (!req.body[field]) {
            return res.status(400).send({
                message: `${field} is required.`
            })
        }
    }
    if (typeof req.body.exercise_name !== "string") {
        return res.status(400).send({
            message: "exercise_name must be a string."
        })
    }

    // new user
    const user = new exercisedb({
        exercise_name: req.body.exercise_name,
        exercise_type: req.body.exercise_type,
        instructor: req.body.instructor,
        notes: req.body.notes,
        imageurl: req.body.imageurl,
        videourl: req.body.videourl,
        affecting_area: req.body.affecting_area,
        bmi_range: req.body.bmi_range,
        rep_count: req.body.rep_count,
        exercise_time: req.body.exercise_time
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
            exercisedb.findById(id)
            .then(user => {
                res.send(user)
              })
            .catch(err => {
                  res.status(500).send({
                      message: err.message || "Some error occurred while retrieving the required user."
                  })
              })
        }else{
            exercisedb.find()
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
    exercisedb.findByIdAndUpdate(id, req.body,{useFindAndModify: false})
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
    exercisedb.findByIdAndDelete(id)
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