
const mongoose = require('mongoose');

const gallerySchema = new mongoose.Schema({
    name: String,
    user_id: String,
},


    {
        timestamps: true,

        toObject: {
            transform: function (doc, ret, options) {
                ret.id = ret._id;
                delete ret._id;
                delete ret.__v;
                return ret;
            }
        }
    });

module.exports = mongoose.model('Gallery', gallerySchema);
