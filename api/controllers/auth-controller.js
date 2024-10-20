import User from "../modal/user.model.js";
import { errorHandler } from "../utils/error.js";
import bcryptjs from 'bcryptjs'

export const register = async(req,res,next)=>{
    try {
        const {userName , userEmail , password, role } = req.body;
        if(!userName || !userEmail || !password || !role || userName === '' || userEmail === '' || password === '' || role === ''){
            next(errorHandler(403 , 'all fields are required'));
        } 
        //find existing user
        const existingUser = await User.findOne(
            {
              $or:[{ userEmail } , {userName}]
            });
            if(existingUser){
                next(errorHandler(403, 'userName or userEmail already exist'))
            }

            const hashPassword =  bcryptjs.hashSync(password,10);
            const newUser = new User({
                userName, 
                userEmail, 
                password:hashPassword ,
                role,
            });
            await newUser.save();
            return res.status(201).json({
                statue:true,
                messsage:'user register successfully'
            });


    } catch (error) {
        next(error)
    }
}