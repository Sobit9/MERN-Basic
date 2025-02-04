const schemaValidator = (schema) => {
    return async (req, res, next) => {
        try {
            const data = await schema.parse(req.body)
            req.body = data
            next()
        } catch (err) {
            res.status(400).json(err)
        }
    }
}

module.exports = schemaValidator