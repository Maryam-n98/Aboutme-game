'use strict';

let userName = prompt('what is your name ?');
//console.log(userName);
alert('welcom ' + userName + ' we are happy to have you here :)');

let traveller = prompt(' Do you think I am traveling right now?');
traveller = traveller.toLowerCase();
//console.log(traveller);
if (traveller == 'yes' || 'y') {
    alert('you are wrong');
    //console.log(traveller);
}
else if (traveller=='no'||'n') {

    alert(' You are right');
    //console.log(traveller);

}else{
    alert('please write yes/y or no/n');
}


let loveTraveling = prompt(' do think I like TO travel?');
loveTraveling = loveTraveling.toLowerCase();
// console.log(loveTraveling);
switch (loveTraveling) {
    case loveTraveling = 'yes':
    case loveTraveling = 'y':
        alert('correct');
        break;
    case loveTraveling = 'no':
    case loveTraveling = 'n':
        // console.log(loveTraveling);
        alert('this is not true! ');
        break;
        default:
        alert('please write yes/y or no/n');

}

let travelingNumber = prompt(' Do you think I have traveled more than three times?');
travelingNumber = travelingNumber.toLowerCase();
//console.log(travelingNumber);

switch (travelingNumber) {
    case travelingNumber = 'yes':
    case travelingNumber = 'y':
        //console.log(travelingNumber);
        alert('I hope, but this is not the right answer!');
        break;
    case travelingNumber = 'no':
    case travelingNumber = 'n':
        //console.log(travelingNumber);
        alert('this is correct');
        break;
    default:
        alert('please write yes/y or no/n');
}

let distination = prompt(' Was USA  my last disination?');
distination = distination.toLowerCase();
//console.log(distination);

switch (distination) {
    case distination = 'yes':
    case distination = 'y':
        // console.log(distination);
        alert('wrong, but it is intersting country!');
        break;

    case distination = 'no':
    case distination = 'n':
        //console.log(distination);
        alert(' You are right:(');
        break;
        default:
        alert('please write yes/y or no/n');
}

let cost = prompt(' Do you think my last trip coast me more than $8000?');
cost = cost.toLowerCase();
//console.log(cost);

switch (cost) {
    case cost = 'yes':
    case cost = 'y':
        //console.log(cost);
        alert('correct, traveling can be expensive sometimes ');
        break;

    case cost = 'no':
    case cost = 'n':
        //console.log(cost);
        alert('true, It cost me less');
        break;
        default:
        alert('please write yes/y or no/n');
}

confirm('you are above 18?');

alert('Thank you ' + userName + ' Hope you have great time');
