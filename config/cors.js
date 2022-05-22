module.exports = function(req, res, next) {
    res.header('Acess-Control-Allows-Origin', '*')
    res.header('Acess-Control-Allows-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.header('Acess-Control-Allows-Headers', 'Origin, X- Requested-With, , Content-Type, Accept, Authorization')
    next()
}

