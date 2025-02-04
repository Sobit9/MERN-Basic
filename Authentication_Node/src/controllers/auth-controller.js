const { register, login } = require("../services/auth-service")

const registerController = async (req, res) => {
    try {
        const response = req.body
        console.log(response)
        const token = await register(response)
        res.status(201).json(
            {
                token,
            }
        )
    } catch (err) {
        res.status(400).json({
            message: err.message,
            stack: err.stack,
        })
    }
}

const loginController = async (req, res) => {
    try {
        const response = req.body
        const token = await login(response)
        res.status(200).json({
            token,
        }) 
    } catch (err) {
        res.status(400).json({
            message: err.message,
            stack: err.stack,
        })
    }
}

module.exports = { 
    loginController,
    registerController,
}