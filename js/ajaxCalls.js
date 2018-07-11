function Submitting(baseURL, userObj){
    var URL = baseURL + "";
    return $.post(URL, userObj, function(){
        console.log("The call was successful.");
    })
}

function getApiInfo(baseURL){
    var URL = baseURL + "";
    return $.getJSON(URL, function(obj){
        name = obj.name;
        food = obj.food;
        dessert = obj.dessert;
        alcoholic = obj.alcoholic;
        nonalcoholic = obj.nonalcoholic;
        suggestion = obj.suggestion;
    })
}