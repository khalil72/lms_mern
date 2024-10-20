import jwt from 'jsonwebtoken'
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


export const login = async(req,res,next)=>{
    const {userEmail , password} = req.body;
    // console.log("reqbody" , req.body);
    if(!userEmail || !password || userEmail === '' || password === ''){
        return next(errorHandler(401 , 'all field are required'));
    }
    const  checkuser = await User.findOne({userEmail});
    if(!checkuser) {
        return next(errorHandler(401, 'user is not exit'))
    }
    const validPassword = bcryptjs.compareSync(password , checkuser.password);
    if(!validPassword) {
        return next(errorHandler(401, 'password  is not exit'))
    }
    //accessToken
    const accessToken = jwt.sign(
        {
            id:checkuser._id,
            userName:checkuser.userName,
            userEmail: checkuser.userName,
            role:checkuser.role
        },
        "JWT_SECRET", {expiresIn: '120m'}
    );
    res.status(200).json({
        success:true,
        messsage:"Loggin successfully",
        data: {
            accessToken,
            user:{
                _id:checkuser._id,
                userName:checkuser.userName,
                userEmail: checkuser.userName,
                role:checkuser.role
            }
        }
    })
}