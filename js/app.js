'use strict';

var userAns1, userAns2, userAns3, userAns4, userAns5, broken, correct, incorrect;

broken = ('Its a yes or no question. Type y or n. You could even type yes or no. Just not what you did.');
correct = 0;
incorrect = 0;
console.log('Correct and incorrect will track the number of answers and their values. They should both start at 0');
console.log('correct: ' + correct);
console.log('incorrect: ' + incorrect);
console.log('');

alert('Hey I am holding you against your will until you finish this about me minigame');

function q1(){
  userAns1 = prompt('Am I an artistic person?').toLowerCase(); // ask the question through a prompt, and normalize their answer to lower case
  console.log('User answer for question 1 is: ' + userAns1); // created a console log to see the users answer for this question

  if(userAns1 === 'y' || userAns1 === 'yes') // If they answer with 'y' OR 'yes'
  {
    alert('I\'ll give you half points for that, I am really creative and inspired but I have not developed anything into any artistic talent yet!'); // this alert message will appear
    incorrect+= 0.5;
    correct+= 0.5;
  }
  else if(userAns1 === 'n' || userAns1 === 'no')
  {
    alert('I\'ll give you half points for that, I am really creative and inspired but I have not developed anything into any artistic talent yet!');
    incorrect+= 0.5;
    correct+= 0.5;
  }
  else // if the user's answer is anything else other than y/n or yes/no
  {
    alert(broken); // show the broken message in an alert box
    q1(); // ask the question again
  }
}
q1();
showScore();

function q2() {
  userAns2 = prompt('Do you think that I have prior experiance to coding other than at the Code Fellows school?').toLowerCase();
  console.log('User answer for question 2 is: ' + userAns2);

  if(userAns2 === 'y'|| userAns2 === 'yes')
  {
    alert('You are correct! I have some experience in Java that I picked up with Arizona State University in their Principles of Programming and Data Structures courses.');
    correct++;
  }
  else if(userAns2 === 'n' || userAns2 === 'no')
  {
    alert('Unfortunately you guessed incorrectly. I have some experience in Java that I picked up with Arizona State University in their Principles of Programming and Data Structures courses.');
    incorrect++;
  }
  else
  {
    alert(broken);
    q2();
  }
}
q2();
showScore();

function q3() {
  userAns3 = prompt('Do you think I have any tattoos?').toLowerCase();
  console.log('User answer for question 3 is: ' + userAns3);
  if(userAns3 === 'y'|| userAns3 === 'yes')
  {
    alert('That is correct! I currently have one tattoo that is a quote from the closing lines of the poem Invictus. It was written by William Ernest Henley in 1875 and the closing lines are: \n"I am the master of my fate\n I am the captain of my soul."');
    correct++;
  }
  else if(userAns3 === 'n' || userAns3 === 'no')
  {
    alert('You guessed wrong :( \nI currently have one tattoo that is a quote from the closing lines of the poem Invictus. It was written by William Ernest Henley in 1875 and the closing lines are: \n"I am the master of my fate\n I am the captain of my soul."');
    incorrect++;
  }
  else
  {
    alert(broken);
    q3();
  }
}
q3();
showScore();

function q4() {
  userAns4 = prompt('Can I make authentic Mexican food?').toLowerCase();
  console.log('User answer for question 4 is: ' + userAns4);

  if(userAns4 === 'y'|| userAns4 === 'yes')
  {
    alert('Correct! This is something that I actually enjoy to do regularly. I will usually cook with my family and we normally make traditional Mexican recipes.');
    correct++;
  }
  else if(userAns4 === 'n' || userAns4 === 'no')
  {
    alert('Ouch, that is incorrect... I will usually cook with my family and we normally make traditional Mexican recipes.');
    incorrect++;
  }
  else
  {
    alert(broken);
    q4();
  }
}
q4();
showScore();

function q5(){
  userAns5 = prompt('Am I from kentucky?').toLowerCase();
  console.log('User answer for question 5 is: ' + userAns5);

  if(userAns5 === 'y'|| userAns5 === 'yes')
  {
    alert('I am not from Kentucky, I am from Seattle, Washington.');
    incorrect++;
  }
  else if(userAns5 === 'n' || userAns5 === 'no')
  {
    alert('You are correct! I am from Seattle, Washington.');
    correct++;
  }
  else
  {
    alert(broken);
    q5();
  }
}
q5();
showScore();

function showScore(){
  console.log('correct: ' + correct);
  console.log('incorrect: ' + incorrect);
  console.log('');
}
