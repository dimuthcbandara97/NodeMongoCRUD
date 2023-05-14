let statsdb = require('../model/stats_model');

// create and save new user

exports.create = (req, res) => {
    // Validate the request
    if (!req.body || !req.body.bloodpressure || !req.body.heartrate || !req.body.bmi || !req.body.bodyfat) {
        return res.status(400).send({
            message: "Missing required fields"
        });
    }

    // Validate the data
    const { bloodpressure, heartrate, bmi, bodyfat } = req.body;
    if (typeof bloodpressure !== 'number' || typeof heartrate !== 'number' || typeof bmi !== 'number' || typeof bodyfat !== 'number') {
        return res.status(400).send({
            message: "Invalid data type"
        });
    }

    // New user
    const user = new statsdb({
        bloodpressure,
        heartrate,
        bmi,
        bodyfat
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
            statsdb.findById(id)
            .then(user => {
                res.send(user)
              })
            .catch(err => {
                  res.status(500).send({
                      message: err.message || "Some error occurred while retrieving the required user."
                  })
              })
        }else{
            statsdb.find()
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
   statsdb.findByIdAndUpdate(id, req.body,{useFindAndModify: false})
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
    statsdb.findByIdAndDelete(id)
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