import {getAvg} from './averageService';

$('body').css('background-color', 'red');

//let's use some ES6 features
const scores = [90, 50, 40, 78, 60];
const averageScore = "90";
const messageToDisplay = `average score ${averageScore}`;

document.write(messageToDisplay);