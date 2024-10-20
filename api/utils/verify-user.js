import jwt from "jsonwebtoken"

const verifyToken = (token ,secretKey) =>{
    return jwt.verify(token , secretKey);
}

const Authenticate = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1]; // Extract the token from the Authorization header
    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'No token provided',
      });
    }
  
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).json({
          success: false,
          message: 'Failed to authenticate token',
        });
      }
      
      // If the token is valid, attach the user info to req.user
      req.user = decoded; 
      next();
    });
  };
export default Authenticate