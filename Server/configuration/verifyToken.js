import jwt from 'jsonwebtoken';

export const verifyToken = async (req, res, next) => {
    try {
        const token = req.headers['access-token'];
        if(!token) return res.status(401).json({error:'No token'});
        const decoded = jwt.verify(token, process.env.SECRETKEY);
        req.userId = decoded.userId;
        next()
    } catch (error) {
        res.status(401).json({error : 'Not authenticated'})
        console.error(error.message);
    }
}