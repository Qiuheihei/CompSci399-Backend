/* eslint-disable indent */
const Info = require('../models/Info');

exports.getEmployerDelelteInfo = async (req, res, next) => {
    try {
        await Info.find({}, (error, infos) => {
            const infoList = [];
            infos.forEach((info) => {
                infoList.push(info);
            });
            res.send(infoList);
        });
    } catch (e) {
        next(e);
    }
};
