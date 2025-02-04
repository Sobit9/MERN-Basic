const jwt = require("jsonwebtoken")
const { createUser, findUserByEmail, verifyUserPassword, getUser } = require("./user-service")


const register = async (userData) => {
    const user = await findUserByEmail(userData.email)
    if (user) {
        throw new Error("User already exists")
    }
    const newUser = await createUser(userData)
    return generateJWT(newUser)
}

const generateJWT = (user) => {
    const userData = getUser(user)
    return jwt.sign(userData, "secret", {expiresIn: "1d"} )
}

const login = async (userData) => {
    const user = await findUserByEmail(userData.email)
    if(!user) {
        throw new Error("User not found")
    }
    const isPasswordValid = await verifyUserPassword(
        userData.password,
        user.password,
    )
    if (!isPasswordValid) {
        throw new Error("Invalid password")
    }
    return generateJWT(user)
}

module.exports ={
    register,
    login,
}