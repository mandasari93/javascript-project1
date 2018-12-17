const firstName = "Desi";
const lastName = "Mandasari";

const sentence = "Hello " + firstName + " " + lastName + "! How are you!?";
const sentenceWithTemplate = `Hello ${firstName} ${lastName}! How are you!?`;

var transformFont = "this is the uppercase";
var transformFont_1 = "THIS IS THE LOWERCASE";

var toTitleCase = function (titleCase) {
    titleCase = titleCase.toLowerCase().split(' ');
    for (var i = 0; i < titleCase.length; i++) {
        titleCase[i] = titleCase[i].charAt(0).toUpperCase() + titleCase[i].slice(1);
    }
    return titleCase.join(' ');
};

var titleCase = "THis is the titLEcase"
var titleCase = toTitleCase(titleCase);



console.log(sentence)
console.log(sentenceWithTemplate)
console.log(transformFont.toUpperCase())
console.log(transformFont_1.toLowerCase())
console.log(titleCase)
