const scrambleWord = document.getElementById('scrambleWord');
const hint = document.getElementById('hint');
const input = document.getElementById('input');
const output = document.getElementById('output');
const result = document.getElementById('result');


const scrambleArr = ["PITASCARVJ","LHTM/SSC","TECAR","SPRESSWOD","XOFBEXL","GGBEUDER","TROOPBATSB"];
const hintArr = ["The code that makes web pages interactive.",
"The structure and layout of a web page.",
" A popular JavaScript library for building user interfaces.",
"A popular content management system for creating websites.",
"A responsive design technique for web pages.",
"A version control system commonly used in web development.",
"A popular web development tool for building mobile apps."];
const answerArr = ["JAVASCRIPT","HTML/CSS","REACT","WORDPRESS","FLEXBOX","DEBUGGER","BOOTSTRAP"];


function scrambledWord(){
        let scrambleIndex = Math.floor(Math.random()*7); 
        scrambleWord.innerHTML = scrambleArr[scrambleIndex];
        hint.innerHTML = "HINT:- "+hintArr[scrambleIndex];
        input.classList.remove('wrong');
        input.classList.remove('right');
}
scrambledWord();

function check(){
   
    if(answerArr.includes(input.value.toUpperCase())){
        result.innerHTML = "Correct";
        input.classList.add('right');
    }
    else if(input.value === ""){
        result.innerHTML = "Please enter the answer!!"
    }
    else{
        result.innerHTML = "Incorrect";
        input.classList.add('wrong');
    }
}
function refresh(){
    scrambledWord();
    input.value = "";
}