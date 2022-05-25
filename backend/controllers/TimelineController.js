const { timeline, user } = require('../models');

class TimelineController {
    static async getTimeline(req, res) {
        try {
            let timelines = await timeline.findAll({
                include: [user]
            })
            res.status(200).json(timelines)
        } catch(err) {
            res.status(500).json({
                message: `Failed`
            })
        }
    }

    static async getTimelineByUserId(req, res) {
        try {
            const userId = req.userData.id;

            let result = await timeline.findAll({
                include: [user],
                where: { userid }
            })
        } catch(err) {
            res.status(500).json({
                message: `Failed`
            })
        }
    }

    // static async add(req, res) {
    //     try {
    //         const { image, content } = req.body;
    //         const userId = req.userData.id;

    //         let result = await timeline.create({
    //             image, content, userId
    //         })
    //         res.status(200).json(result)
    //     } catch(err) {
    //         res.status(500).json({
    //             message: `Failed`
    //         })
    //     }
    // }

    static async add(req, res) {
        try {
            // const { userId } = +req.body.id;
            // console.log(req);
            const { image, content, userId } = req.body;
            
            let result = await timeline.create({
                userId, image, content
            })
            res.status(200).json(result)
        }catch (err) {
            console.log('asadad', err);
            res.status(404).json({
                message: `Failed`
            })
        }
    }

    static async edit(req, res) {
        try {
            const id = +req.params.id;
            const userId = req.userData.id;
            const { image, content } = req.body;

            let result = await timeline.update({
                image, content
            }, {
                where: { id, userId }
            });

            result[0] === 1 ?
                res.status(200).json(result)
                :
                res.status(404).json({
                    message: `Not Found`
                })
        } catch(err) {
            res.status(500).json({
                message: `Failed`
            })
        }
    }
    
    static async deleteTL(req, res) {
        try {
            const id = +req.params.id;
            const userId = req.userData.id;

            let result = await timeline.destroy({
                where: {id, userId}
            });

            result[0] === 1 ?
                res.status(200).json(result)
                :
                res.status(404).json({
                    message: `Not Found`
                })
        } catch(err) {
            res.status(500).json({
                message: `Failed`
            })
        }
    }
    
    static detailTimeline(req, res) {
        const id = +req.params.id;

        timeline.findByPk(id)
            .then( (result) => {
                res.status(200).json(result)
            })
            .catch( (err) => {
                res.status(505).json({
                    message: `Failed`
                })
            })
    }
}

module.exports = TimelineController;