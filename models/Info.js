/* eslint-disable indent */
const mongoose = require('mongoose');

const InfoSchema = new mongoose.Schema({

    DeleteReason: {
        type: String,
        trim: true,
        required: 'Reason cannot be blank',
    },

    CompanyName: {
        type: String,
        trim: true,
        default: 'TBA',
    },

    PositionName: {
        type: String,
        trim: true,
        default: 'TBA',
    },

    RequestedEmail: {
        type: String,
        trim: true,
    },

});

InfoSchema.pre('save', async (next) => {
    next();
});

const Info = mongoose.model('Info', InfoSchema);

module.exports = Info;
