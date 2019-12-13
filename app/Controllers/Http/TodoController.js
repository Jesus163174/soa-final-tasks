'use strict'
const ToDo = use('App/Models/ToDo');
class TodoController {
    async index({params,response}){
        try {
            let activity = params.activityId;
            let todoList = await ToDo.query().where('activity_id','=',activity).fetch();
            return response.status(201).json(todoList); 
        }catch(error) {
            return response.status(501).json(error.message);
        }
    }
    async store({params,request,response}){
        try {
            let activity = params.activityId;
            let todoList = await ToDo.create(request.all());
            return response.status(201).json(todoList); 
        }catch(error) {
            return response.status(501).json(error.message);
        }
    }
}

module.exports = TodoController
