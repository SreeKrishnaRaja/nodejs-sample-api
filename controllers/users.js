User = require('../models/users');

// List Users
exports.index = function (req, res) {
  User.get(function (err, users) {
      if (err) {
          res.send(err);
      } else {
        res.json({
            status: "success",
            message: "Users retrieved successfully",
            data: users
        });
      }
  });
};

// Create User
exports.new = function (req, res) {
    var user = new User();
    user.username = req.body.username ? req.body.username : user.username;
    user.email = req.body.email;
    user.phone = req.body.phone;
    user.save(function (err) {
      if (err) {
        res.send(err);
      } else {
        res.json({
            status: "success",
            message: 'New user created successfully!',
            data: {
              username: user.username,
              email: user.email,
              phone: user.phone,
            }
        });
      }

    });
    });
};

// View User
exports.view = function (req, res) {
  User.findById(req.params.user_id, function (err, user) {
      if (err) {
        res.send(err);
      } else {
        res.json({
            status: "success",
            message: 'User details fetched successfully!',
            data: user
        });
      }
  });
};

// Update User
exports.update = function (req, res) {
  User.findById(req.params.user_id, function (err, user) {
      if (err) {
        res.send(err);
      }
      user.username = req.body.username ? req.body.username : user.username;
      user.email = req.body.email;
      user.phone = req.body.phone;
      user.save(function (err) {
          if (err) {
            res.json(err);
          } else {
            res.json({
                status: "success",
                message: 'User details updated successfully!',
                data: user
            });
          }
      });
  });
};

// Delete User
exports.delete = function (req, res) {
  User.remove({
      _id: req.params.user_id
  }, function (err, user) {
      if (err) {
        res.send(err);
      } else {
        res.json({
            status: "success",
            message: 'User deleted successfully!'
        });
      }
  });
};
