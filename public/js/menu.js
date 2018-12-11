$(".card-link").on("click", function(event){
  event.preventDefault();
  var dataId = $(this).attr("dataid");
  $.get("/api/recipes", function(data){
    console.log(data[dataId-1].name);
    $("#nameModal").text(data[dataId-1].name);
    $("#ingredientsModal").text(data[dataId-1].ingredients);
    $("#instructModal").text(data[dataId-1].instructions);
    $("#recipeModal").modal("toggle");
  });
});
