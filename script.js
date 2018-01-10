let cast={
  "characters":[
    {"name":"John Snow",
    "shortCode":"Jon-snow",
    "actor":"Kit Harrington",
    "house":"Stark",
    "location":"The Wall"},

    {"name":"Tyrion Lannister",
    "shortCode":"tyrion",
    "actor":"Peter DInklage",
    "house":"Lannister",
    "location":undefined},

    {"name":"Brienne of Tarth",
    "shortCode":"breinne",
    "actor":"Gwendoline Christie",
    "house":"Clegane",
    "location":null},

    {"name":"Eddard Stark",
    "shortCode":"ned-stark",
    "actor":"Sean Bean",
    "house":"Stark",
    "location":"Winterfell"}


  ]
}


$(document).ready(function(){

let ct = $('#character').html();
let compiled =Handlebars.compile(ct);
//context return is an objetc
console.log(compiled(cast.characters[0]));
$("#main").html(compiled(cast));
});
