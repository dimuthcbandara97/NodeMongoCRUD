const express = require('express');
const route = express.Router()

const services = require('../services/render')

// importing all controllers
const controller = require('../controller/controller')
const exercise_controller = require('../controller/exercise_controller')
const nutrition_controller = require('../controller/nutrition_controller')
const meditation_controller = require('../controller/meditation_controller')
const networking_controller = require('../controller/networking_controller')
const timer_controller = require('../controller/timer_controller')
const progress_controller = require('../controller/progress_controller')
const stats_controller = require('../controller/stats_controller')
const user_details_controller = require('../controller/userdetailcontroller')
const favourite_exercises = require('../controller/exercise_controller_favourite')

/***
 * 
 * @Description Root route
 * @method GET
 */

route.get('/',services.homeRoutes)
route.get('/',services.nutritionRoutes)
route.get('/',services.networkingRoutes)
route.get('/',services.exerciseRoutes)
route.get('/',services.meditationRoutes)
route.get('/',services.timerRoutes)
route.get('/',services.progressRoutes)
route.get('/',services.statsRoutes)

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

// API routes for users
route.post('/api/users',controller.create)
route.get('/api/users',controller.find)
route.put('/api/users/:id',controller.update)
route.delete('/api/users/:id',controller.delete)

// API routes for Nutrition data
route.post('/api/nutrition',nutrition_controller.create)
route.get('/api/nutrition',nutrition_controller.find)
route.put('/api/nutrition/:id',nutrition_controller.update)
route.delete('/api/nutrition/:id',nutrition_controller.delete)

// API routes for Exercise data
route.post('/api/exercise',exercise_controller.create)
route.get('/api/exercise',exercise_controller.find)
route.put('/api/exercise/:id',exercise_controller.update)
route.delete('/api/exercise/:id',exercise_controller.delete)

// API routes for Meditation data
route.post('/api/meditation',meditation_controller.create)
route.get('/api/meditation',meditation_controller.find)
route.put('/api/meditation/:id',meditation_controller.update)
route.delete('/api/meditation/:id',meditation_controller.delete)

// API routes for Networking data
route.post('/api/networking',networking_controller.create)
route.get('/api/networking',networking_controller.find)
route.put('/api/networking/:id',networking_controller.update)
route.delete('/api/networking/:id',networking_controller.delete)

// API routes for timer 
route.post('/api/timer',timer_controller.create)
route.get('/api/timer',timer_controller.find)
route.put('/api/timer/:id',timer_controller.update)
route.delete('/api/timer/:id',timer_controller.delete)

// API routes for progress
route.post('/api/progress',progress_controller.create)
route.get('/api/progress',progress_controller.find)
route.put('/api/progress/:id',progress_controller.update)
route.delete('/api/progress/:id',progress_controller.delete)

// API routes for stats
route.post('/api/stats',stats_controller.create)
route.get('/api/stats',stats_controller.find)
route.put('/api/stats/:id',stats_controller.update)
route.delete('/api/stats/:id',stats_controller.delete)

// API routes for user  details
route.post('/api/user_details',user_details_controller.create)
route.get('/api/user_details',user_details_controller.find)
route.put('/api/user_details/:id',user_details_controller.update)
route.delete('/api/user_details/:id',user_details_controller.delete)

// API routes for faourite Exercies
route.post('/api/favourites',favourite_exercises.create)
route.get('/api/favourites',favourite_exercises.find)
route.put('/api/favourites/:id',favourite_exercises.update)
route.delete('/api/favourites/:id',favourite_exercises.delete)

module.exports = route


