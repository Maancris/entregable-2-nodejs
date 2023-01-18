const AuthService = require ('../services/auth.service');
const jwt = require ('jsonwebtoken');

const userLogin = async (req, res) =>{
    try {
        const { email, password} = req.body;
        const response = await AuthService.login(email, password);
        if (response.isValid)  {
            const data = {
                email: response.result.email,
                username: response.result.username,
                id: response.result.id
            }
            const token = jwt.sign(data, 'sha', {algorithm: 'HS512', expiresIn: '1m'});
            data.token = token;
            console.log (data);
            res.json(data)
        } else{
            res.status(401).json({message: 'Credenciales invalidad'});
        }
        res.json(result);
    } catch (error) {
        // res.status (400).json(error.message);
    }
}
module.exports = {userLogin};