'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.get('activities/:user_id','ActivityController.index');
Route.post('activities/','ActivityController.store');
Route.put('activities/:user_id','ActivityController.delete');
Route.get('activity/:id_ac','ActivityController.show');
Route.put('activity/:id_ac','ActivityController.update');

Route.get('todo/:activityId','TodoController.index');
Route.post('todo/:activityId','TodoController.store');

Route.post('login','UserController.login');
Route.post('register','UserController.register');
