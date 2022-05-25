const route = require('express').Router();

route.get('/api', (req, res) => {
    res.json({
        message: "Homepage Codigram"
    })
})

const userRoutes = require('./user');
route.use('/api/users', userRoutes);

const timelineRoutes = require('./timeline');
route.use('/api/timelines', timelineRoutes);


module.exports = route;