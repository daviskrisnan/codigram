const timelineRoute = require('express').Router();
const { TimelineController } = require('../controllers');
const { authentication } = require('../middlewares/authentication')


timelineRoute.get('/', TimelineController.getTimeline);
timelineRoute.get('/usertimelines/', authentication, TimelineController.getTimelineByUserId);
timelineRoute.get('/detail/:id', TimelineController.detailTimeline);

timelineRoute.post('/', authentication, TimelineController.add);

timelineRoute.put('/update/:id', authentication, TimelineController.edit);

timelineRoute.delete('/delete/:id', authentication, TimelineController.deleteTL);


module.exports = timelineRoute;