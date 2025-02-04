const User = require("../models/User")
const argon2 = require("argon2")


const hashPassword = async (password) => {
    return argon2.hash(password)
}

const createUser =async (userData) => {
    try{
        const hashedPassword = await hashPassword(userData.password);
        const verificationToken = generateToken()
        const user = new User({
            email: userData.email,
            password: hashedPassword,
            username: userData.username,
            name: userData.name,
            avatar: "default.jpg",
            verificationToken: userData.verificationToken,
        })
        await user.save()
        return user
    } catch(error){
        throw new Error(error)
    }
}

const findUserByEmail = async (email) => {
    return User.findOne({
        email,
    })
}

const getUser = (user) => {
    const {password, verificationToken, resetToken, ...rest} = user
    return rest
}

const generateToken = () => {
    return Math.random().toLocaleString(36).substring(2,8)
}

const verifyUserPassword = async (password, hashedPassword) => {
    return argon2.verify(hashedPassword, password)
}

module.exports = {
    createUser,
    findUserByEmail,
    getUser,
    verifyUserPassword,
}