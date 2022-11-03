function add7(number){

    number = number + 7;
    console.log(number);
}

function multiply(x,y){
    z = x * y;
    console.log(z);
}

function capitalize(sentence){

    sentence = sentence.toLowerCase();
    sentence = sentence[0].toUpperCase()+sentence.slice(1);
    console.log(sentence);
}

function lastLetter(lastLetterString){
    
    let finalLetter = lastLetterString.slice(-1);
    console.log(finalLetter);
}



add7(10);
multiply(20,30);
capitalize("this is all lower case");
capitalize("THIS IS ALL UPPER CASE");
capitalize("ThIsIs ALL dIFFerenT cAsE");
lastLetter("abcdefg");

