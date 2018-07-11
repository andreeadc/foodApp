$(document).ready(function(){
    upScroll();
});

function upScroll(){ 
    $("button").click(function(e){
        var button = e.target.id;
        if(button === "arrow"){
                $("html, body").animate({
                    scrollTop: $("#food").offset().top
                }, 2000);
                
            } else if ( ( button === "submit" ) && (formValidator()) ) {
                postUserInfo();
                displayUserInfo();
                //getUserInfo();
                resetForm();
                showUserList();
                $("html, body").animate(
                {scrollTop: 0}, 2000);
                popUp();
            } else {
                validInput();
              };
    });
};

function formValidator(){
    var inputs = $('.target');
    var countEmptyInput = 0;
    inputs.each(function(){
        if ( $(this).val() === "" ){
            $(this).addClass("borders");
            countEmptyInput++;
        }
    });
    
    return countEmptyInput === 0 ? true : false;
}

function validInput(){
    var inputs = $(".target");
        inputs.each(function(){
            $(this).on("click", function(){
                $(this).removeClass("borders");
            });
        });
}

function resetForm(){
    var inputs = $(".target");
    inputs.each(function(){
        $(this).val("");
    });
    var dropDown = $("#dropDown");
    dropDown.prop("selectedIndex",0)
}

function popUp(){
    var popUp = $("#pop-up");
    popUp.removeClass("hide").addClass("show");
    setTimeout(function(){ 
        popUp.removeClass("show").addClass("hide");
    }, 3000);
}

function xBtnOnClick(){
    var xBtn = $("#xBtn");
    xBtn.click( function(){
        var container = $("#container");
        container.removeClass("show").addClass("hide");
    });
}

function showUserList(){
    var showListBtn = $("#show-list");
    showListBtn.click( function(){
        var container = $("#container");
        container.removeClass("hide").addClass("show");
    });
    xBtnOnClick();
}

function postUserInfo(){
    //baseURL = ;
    var name = $("[name=name]").val();
    var food = $("[name=food]").val();
    var dessert = $("[name=dessert]").val();
    var alcoholic = $("[name=alcoholic]").val();
    var nonalcoholic = $("[name=nonalcoholic]").val();
    var suggestion = $("[name=suggestion]").val();
     var userObj={
        name: name,
        food: food,
        dessert: dessert,
        alcoholic: alcoholic,
        nonalcoholic: nonalcoholic,
        suggestion: suggestion,
    }
    console.log(userObj);
    //Submitting(baseURL, userObj);
}

function getUserInfo(){
    getApiInfo(baseURL).then(displayUserInfo);
}

function displayUserInfo(){
    var name = $("[name=name]").val();
    var food = $("[name=food]").val();
    var dessert = $("[name=dessert]").val();
    var alcoholic = $("[name=alcoholic]").val();
    var nonalcoholic = $("[name=nonalcoholic]").val();
    var suggestion = $("[name=suggestion]").val();
    var response =[ {
        name: name,
        food: food,
        dessert: dessert,
        alcoholic: alcoholic,
        nonalcoholic: nonalcoholic,
        suggestion: suggestion
    },
    {   name: "Andreea",
        food: "pizza",
        dessert: "dessert",
        alcoholic: "alcoholic",
        nonalcoholic: "nonalcoholic",
        suggestion: "suggestion"
    }];
    console.log(response);
    for( var i=0; i<response.length; i++){
        // response.each(function(){
        var template = $(".user").clone();
        template.find("span").append(
                        "<h3>User Name: " + response[i].name + "</h3>" + "</br>" +
                        "Favorite food: ", response[i].food + "</br>" + 
                        "Favorite dessert: ", response[i].dessert + "</br>"+
                        "Favorite alcoholic drink: ", response[i].alcoholic + "</br>" +
                        "Favorite nonalcoholic drink: ", response[i].nonalcoholic + "</br>" +
                        "Suggestion", response[i].suggestion + "</br>" );
        $("#container").append(template);
    }             
   
    //});
}