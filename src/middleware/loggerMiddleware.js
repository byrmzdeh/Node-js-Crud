export const myLogger = function (req, res, next) {
    console.log('Time:', new Date(Date.now()))
    next()
}

