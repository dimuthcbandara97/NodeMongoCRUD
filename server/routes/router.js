const express = require('express');
const route = express.Router()

const services = require('../services/render')


/***
 * 
 * @Description Root route
 * @method GET
 */

route.get('/',services.homeRoutes)


/***
 * 
 * @Description add users
 * @method GET / add-user
 */

route.get('/add-user',services.add_user)

/***
 * 
 * @Description update user
 * @method GET / update user
 */
route.get('/update-user',services.update_user)



module.exports = route