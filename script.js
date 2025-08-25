const prompt= require("prompt-sync")();
console.log("welcome to the cs hardware quiz");


function quiz(){
    correct_answer = 0;
    const answer1Hello = prompt("What is the main hardware part of a computer system?");
    const correct_answer1 = "cpu" ;
    if ( answer1Hello.toLowerCase() == correct_answer1 ){
        console.log("You got it");
        correct_answer++;
    } else {
        console.log("You got it wrong");
    }

    const answer2Hello = prompt("under which subject is the Lexical Analysis inclusive, compiler to software?");

    const correct_answer2 = "COMPILER" ;


    if ( answer2Hello.toUpperCase() == correct_answer2 ){
        console.log("You got it");
        correct_answer++;
    } else {
        console.log("You got it wrong");
    }


    const answer3Hello = prompt("under which course is compiler designed, csit or bca?");

    const correct_answer3 = "CSIT" ;


    if ( answer3Hello.toUpperCase() == correct_answer3 ){
        console.log("You got it");
        correct_answer++;
    } else {
        console.log("You got it wrong");
    }
    console.log(answer1Hello,answer2Hello,answer3Hello,correct_answer);
    
}

quiz();

