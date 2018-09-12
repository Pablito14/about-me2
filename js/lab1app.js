'use strict';


var nombre = prompt('Hi there, my name is Pablo. May I please have your name?');
console.log('The user\'s name is ' + nombre);

//The method toUpperCase is for data validation/sanitaion purposes
var properName = nombre.toUpperCase();
console.log('The user\'s normalized name is ' + properName);

alert('Nice to meet you ' + nombre + ', I hope you enjoy your visit to my site!');

var motherLand = prompt('well ' + nombre + ', where are you from?');
console.log('The user\'s is from ' + motherLand);

var properMotherLand = motherLand.toUpperCase();
console.log('The user\'s normalized motherLand is ' + properMotherLand);

alert(motherLand + '?! ' + properMotherLand + '?!');

var age = prompt('Are you really telling me, that you are from ' + motherLand + '?! I have an uncle who lives there! What a small world... How old are you by the way?');
console.log('The user\'s is the age of ' + age);
// number does not require sanatizing

alert(age + ' years of age? Well I have seen older, and I have seen younger, so I guess you\'re not in a bad spot.');

var hobby = prompt('Well, well, well, ' + nombre + ' from ' + motherLand + ', in your ' + age + ' years on Earth, what is your favorite thing to do?');
console.log('The user\'s hobby is ' + hobby);

var properHobby = hobby.toUpperCase();
console.log('The user\'s normalized hobby is ' + properHobby);


alert('I\'m sorry, ' + nombre + '. Now that you have told me that you like to ' + hobby + ', you are ' + age + ' years old, and you hail from the mighty land of ' + motherLand + '. I know enough about you that I can now take over your identity to overthrow the Wakandan Government. \n*teleports behind you* \nNothing Personal kid. \nOmae mou shindeiru!');
