const { loginController, registerController } = require("../controllers/auth-controller")
const schemaValidator = require("../middleware/schema-validator")
const loginSchema = require("../schemas/login-schema")
const registerSchema = require("../schemas/register-schema")


const router = require("express").Router()

router.post("/login",schemaValidator(loginSchema) ,loginController)
router.post("/register",schemaValidator(registerSchema) ,registerController)

module.exports = router