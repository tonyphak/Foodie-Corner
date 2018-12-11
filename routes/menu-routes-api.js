var db = require("../models");

module.exports = function (app) {
  app.get("/api/menus", function (req, res) {
    db.Menu.findAll({
    }).then(function (dbMenu) {
      res.json(dbMenu);
    });
  });

  app.get("/api/menusrecipe", function (req, res) {
    db.Menu.findAll({
      include:[db.Recipe,db.Category]
    }).then(function (dbMenu) {
      res.json(dbMenu);
    });
  });

  app.get("/api/menus/:id", function (req, res) {
    db.Menu.findOne({
      where: {
        id: req.params.id
      },
    }).then(function (dbMenu) {
      res.json(dbMenu);
    });
  });

  app.post("/api/menus", function (req, res) {
    db.Menu.create(req.body).then(function (dbMenu) {
      res.json(dbMenu);
    });
  });

  app.delete("/api/menus/:id", function (req, res) {
    db.Menu.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbMenus) {
      res.json(dbMenus);
    });
  });

};