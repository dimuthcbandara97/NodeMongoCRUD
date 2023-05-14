let meditationdb = require('../model/meditation_model')

// create and save new user

exports.create = (req, res) => {
    // validate the request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        })
        return
    }

    // validate request body fields
    const { meditation_name, meditation_type, instructor, notes, imageurl, videourl } = req.body
    if (!meditation_name || !meditation_type || !instructor || !imageurl || !videourl) {
        res.status(400).send({
            message: "Missing required fields!"
        })
        return
    }
    if (typeof meditation_name !== 'string' || typeof meditation_type !== 'string' || typeof instructor !== 'string' || typeof notes !== 'string' || typeof imageurl !== 'string' || typeof videourl !== 'string') {
        res.status(400).send({
            message: "Invalid field data type!"
        })
        return
    }
    if (meditation_name.length > 50 || meditation_type.length > 50 || instructor.length > 50 || notes.length > 500 || imageurl.length > 200 || videourl.length > 200) {
        res.status(400).send({
            message: "Invalid field length!"
        })
        return
    }

    // new user
    const user = new meditationdb({
        meditation_name: meditation_name,
        meditation_type: meditation_type,
        instructor: instructor,
        notes: notes,
        imageurl: imageurl,
        videourl: videourl
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
            meditationdb.findById(id)
            .then(user => {
                res.send(user)
              })
            .catch(err => {
                  res.status(500).send({
                      message: err.message || "Some error occurred while retrieving the required user."
                  })
              })
        }else{
            meditationdb.find()
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
    meditationdb.findByIdAndUpdate(id, req.body,{useFindAndModify: false})
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
    meditationdb.findByIdAndDelete(id)
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