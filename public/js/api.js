// Add search feature for user to search recipes fromm food2fork api
function foodFork(recipe) {
  var key = "f4ffeed17df32b84b9cf053180ec722a";
  var queryURL = "https://www.food2fork.com/api/search?key=" + key + "&q=" + recipe + "&page=2";
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    var data = JSON.parse(response);
    var dataRecipes = data.recipes;
    $.each(dataRecipes, function (index, value) {
      var recipeTitle = value.title;
      var recipeUrl = value.f2f_url;
      var recipeImage = $("<img class=images>").attr("src", value.image_url);
      var title = $("<h6>").text(recipeTitle).attr("href", recipeUrl).addClass("card-title");
      var recipeLink = $("<a>").text("See Recipe").attr("href", recipeUrl).addClass("btn btn-outline-primary");
      var recipeDiv = $("<div>").append(title, recipeLink).addClass("recipeContent").addClass("card-body");
      var cardDive = $("<div>").addClass("card");
      var recipeCard = cardDive.append(recipeImage, recipeDiv);
      $(".content2").append(recipeCard);
    });
  });
}

//submit button for search
$("#submit").click(function () {
  event.preventDefault();
  $(".content2").empty();

  function validateForm(){
    var isValid = true;
    $(".validate").each(function(){
      if ($(this).val() === ""){
        isValid = false;
      }
    });
    return isValid;
  }

  // var recipeSearch = $("#searchBar").val().toLowerCase().trim();
  if ($("#recipeSearch1").val() === "clearRecipe"){
    $(".content2").empty();
  } else if ($("#recipeSearch1").val() === "searchRecipe" && validateForm() === false) {
    alert("Please Enter Recipe");
  } else {
    var recipeSearch = $(".validate").val().toLowerCase().trim();
    foodFork(recipeSearch);
    $(".row-div").animate({scrollTop: "0px"}, 0);
  }
});

//allow div content2 to scroll
$(".row-div").scroll();
$(".row-div").animate({
  scrollTop: 1000
}, 2000);
