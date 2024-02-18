import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) return {error : "Unauthorized User"}
    jwt.verify(token, process.env.JWTSECRETKEY, (error, decoded) => {
        if (error) return {error : "Token is not Valid"}
        req.username = decoded.username;
        next()
    })
}