'use strict'
const Activity = use('App/Models/Activity');
class ActivityController {

    async index({params,response}){
        try{
            let user_id = params;
            let activities = await Activity.query().where('user_id','=',user_id).fetch();
            return response.status(201).json(
                {
                    'response':'success',
                    'activities':activities
                }
            )
        }catch(error){
            return response.json(error.message)
        }
    }
    async show({params,response}){
        let id = params.id_ac;
       
        const activity = await Activity.findOrFail(id);
        return response.status(201).json(activity);
    }
    async store({request,response}){
        try{
            let activity = await Activity.create(request.all());
            return response.status(201).json({
                "msg":"creado correctamente",
            });
        }catch(error){
            return response.status(501).json({
                "msg":error.message,
            });
        }
    }

    async update({request,response,params}){
        try{
            let id = params.id_ac;
            const activity = await Activity.findOrFail(id);
            activity.title = request.input('title');
            activity.description = request.input('description');
            activity.save();
            return response.status(201).json(activity);
        }catch(error){
            return response.status(501).json({
                "msg":error.message,
            });
        }
    }

    async delete({params,response}){
        try{
            const activity = await Activity.findOrFail(params.user_id);
            await activity.delete();
            return response.status(201).json({
                "messg":"error creado correctamente"
            });
        }catch(error){
            return response.json(error);
        }
    }
}

module.exports = ActivityController
