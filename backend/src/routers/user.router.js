import { Router } from "express";
import { sample_users } from "../assets/data.js";
import jwt from 'jsonwebtoken';
const router = Router();
import { Bad_REQUEST } from "../constant/httpStatus.js";

router.post('/login', (req, res) =>{
    const { email, password } = req.body;
        const user = sample_users.find(
            user => user.email === email && user.password === password
        );
    if(user){
         res.send(generateTokenResponse(user));
         return;
    }

    res.status(Bad_REQUEST).send('Username or password is invalid');


});

const generateTokenResponse = user => {

    const token = jwt.sign({
        id: user.id, 
        email: user.email, 
        isAdmin: user.isAdmin,
    },
    'GGG', {
        expiresI:'30d',
    }
);
    return {
        id: user.id, 
        email: user.email, 
        name:user.name,
        address: user.address,
        isAdmin: user.isAdmin,
        token,
    };
};

export default router;