'use strict'
const User = use('App/Models/User');
class UserController {

    async login({request,auth,response}){
        const email    = request.input('email');
        const password = request.input('password');
        
        try{
            if (await auth.attempt(email, password)) {
                let user  = await User.findBy('email', email);
                let accessToken = await auth.generate(user);
                return response.status(201).json({ "user": user, "access_token": accessToken });
            }
        }catch(error){
            return response.status(401).json({
                "msj":"Necesitas estar registrado",
                "error":error.message
            });
        }
    }

    async register({request,auth,response}){
        const data = request.all();
        try{
            let user = await User.create(data);
            let accessToken = await auth.generate(user);
            return response.status(201).json({ "user": user, "access_token": accessToken });
        }catch(error){
            return response.status(500).json({
                "msj":"ha ocurrido un error al registrarte, intentalo de nuevo",
                "error":error.message
            });
        }
    }

}

module.exports = UserController
