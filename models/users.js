var mongoose = require('mongoose');

// Schema
var userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: String,
    create_date: {
        type: Date,
        default: Date.now
    }
});

// Export User model
var User = module.exports = mongoose.model('user', userSchema);

module.exports.get = function (callback, limit) {
    User.find(callback).limit(limit);
}
