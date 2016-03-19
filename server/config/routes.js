var friends = require('./../controllers/friends_controller.js')

module.exports = function(app){
  app.get('/friends', function(req,res){
    friends.index(req,res);
  })
  app.post('/friends', function(req,res){
    friends.post(req,res);
  });
};
