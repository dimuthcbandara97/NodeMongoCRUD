const express = require('express');
const route = express.Router()

const services = require('../services/render')
const controller = require('../controller/controller')

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

// API routes
route.post('/api/users',controller.create)
route.get('/api/users',controller.find)
route.put('/api/users/:id',controller.update)
route.delete('/api/users/:id',controller.delete)

module.exports = route