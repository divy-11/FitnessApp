const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ActivitySchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    activityType: {
        type: String,
        required: true
    },
    duration: { type: Number },
    caloriesBurned: { type: Number },
    timestamp: {
        type: Date,
        default: Date.now
    }
});

const Activity = mongoose.model('Activity', ActivitySchema)
module.exports = Activity;
