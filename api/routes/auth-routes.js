import express from 'express'
import { login, register } from '../controllers/auth-controller.js';
import Authenticate from '../utils/verify-user.js';

const router = express.Router();

router.post('/register' ,register);
router.post('/login', login);

router.get('/checkAuth', Authenticate, (req,res) =>{
    const user = req.user;
    res.status(200).json({
            success: true,
            message:"Authenticated user!",
            data: {
              user,
            },
        });
});


export default router;