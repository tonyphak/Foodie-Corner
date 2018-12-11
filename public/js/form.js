// jQuery code for recipe form to post information to database

$(document).ready(function(){
  var $recipeName = $("#name");
  var $descriptions = $("#description");
  var $ingredients = $("#ingredients");
  var $instructions = $("#instruct");
  var $category = $("#category");
  $(document).on("submit", ".recipe-form", insertRecipe);

  //function below to grab values from form and POST to db
  function insertRecipe(event){
    event.preventDefault();
    var newRecipe = {
      name: $recipeName.val().trim(),
      description: $descriptions.val().trim(),
      ingredients: $ingredients.val().trim(),
      instructions: $instructions.val().trim(),
      CategoryId: $category.val()
    };
    $.post("/api/recipes", newRecipe);
    $recipeName.val("");
    $descriptions.val("");
    $ingredients.val("");
    $instructions.val("");
    $category.val("");
    console.log("New Recipe Submitted");
  } 
});