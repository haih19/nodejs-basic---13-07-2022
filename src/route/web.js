import express from 'express';


let router = express.Router();

const initWebRoute = (app) => {

    router.get('/about', (req, res) => {
        res.send('This is about route')
    })

    return app.use('/', router)
}

export default initWebRoute;