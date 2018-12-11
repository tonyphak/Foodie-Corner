var db = require("../models");
var bcrypt = require("bcrypt");

var saltRounds = 10;

module.exports = function (app) {
  app.get("/api/members", function (req, res) {
    db.Member.findAll({
      include: [db.Recipe]
    }).then(function (dbMember) {
      res.json(dbMember);
    });
  });

  app.post("/api/members/login", function (req, res) {

    db.Member.findOne({
      where: {
        email:req.body.email        
      },
      //include: [db.Recipe]
    }).then(function (dbMember) {
       
      bcrypt.compare(req.body.password, dbMember.password, function(err, response) {
        if (response) {
          console.log("good");
          res.json(dbMember);
        }
        else {
          res.json({error: "wrong passwd"});
        }
      });
    });
  });

  app.get("/api/members/:id", function (req, res) {
    db.Member.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Recipe]
    }).then(function (dbMember) {
      res.json(dbMember);
    });
  });

  app.post("/api/members", function (req, res) {
    console.log("***");
    console.log(req.body.email);
    console.log(req.body.password);
    
    bcrypt.genSalt(saltRounds, function(err, salt) {
      bcrypt.hash(req.body.password, salt, function(err, hash) {
        console.log(hash);
        req.body.password = hash;
        db.Member.create(req.body)
          .then(function (dbMember) {
            res.json(dbMember);
          })
          .catch(function(errors) {
            console.log(errors);
            res.json({errors: errors.errors});
          });
      });
    });

  });

  app.delete("/api/members/:id", function (req, res) {
    db.Member.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbMember) {
      res.json(dbMember);
    });
  });

};