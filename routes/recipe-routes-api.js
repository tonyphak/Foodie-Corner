var db = require("../models");

module.exports = function (app) {
  // get all recipes
  app.get("/api/recipes", function (req, res) {
    db.Recipe.findAll({
    }).then(function (dbRecipe) {
      res.json(dbRecipe);
    });
  });

  app.get("/api/recipes/member/:id", function (req, res) {
    db.Recipe.findAll({
      include:[{
        model: db.Category
      }],
      where: {
        MemberId: req.params.id
      },
      order: [
        ["CategoryId", "ASC"],
      ],
    }).then(function (dbRecipe) {
      //console.log(JSON.stringify(dbRecipe));
      res.json(dbRecipe);
    });
  });

  // find a recipes
  app.get("/api/recipes/:id", function (req, res) {
    db.Recipe.findOne({
      where: {
        id: req.params.id
      },
    }).then(function (dbRecipe) {
      res.json(dbRecipe);
    });
  });

  app.post("/api/recipes", function (req, res) {
    console.log(req.body);
    db.Recipe.create({
      name: req.body.name,
      description: req.body.description,
      ingredients: req.body.ingredients,
      instructions: req.body.instructions
    }).then(function (dbRecipe) {
      res.json(dbRecipe);
    });
  });

  app.delete("/api/recipes/:id", function (req, res) {
    db.Member.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbRecipe) {
      res.json(dbRecipe);
    });
  });

};