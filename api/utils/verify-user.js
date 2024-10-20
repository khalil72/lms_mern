import { Jwt } from "jsonwebtoken"

const verifyToken = (token ,secretKey) =>{
    return Jwt.verify(token , secretKey);
}

const Authenticate = (req,res,next)=>{
    const authHeader = req.headers.authorization;
    console.log('authHeader==>', authHeader);
    if(!authHeader){
        return res.status(401).json({
            success:false,
            message: "user is not authenticated"
        })
    }
    const token = authHeader.split(" ")[1];
    try {
        const payload = verifyToken(token, 'JWT_SECRET');
        req.user = payload;
        next();

        
    } catch (error) {
        return res.status(401).json({
            success:false,
            message: "invalid Token"
        })
    }
}
export default Authenticate