const quizData = [
       {
        
        question: "Q - 1: Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        
        question: "Q - 2: What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        
        question: "Q - 3: What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        
        question: "Q - 4: What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
     {
        
        question: "Q - 5: In which tag is Javascript is written in HTML document?",
        a: "<style> tag",
        b: "<head> tag",
        c: "<body> tag",
        d: "<script> tag",
        correct: "d",
    },
    {
        
        question: "Q - 6: How do we select an element with an ID of answer in JavaScript?",
        a: "document.getElementById(answer)",
        b: "document.getElementById('answer')",
        c: "document.querySelector('#answer')",
        d: "both b and c",
        correct: "d",
    },
     {
        
        question: "Q - 7: We can use the following tag to create an unordered list?",
        a: "<li> tag",
        b: "<ul> tag",
        c: "<hr> tag",
        d: "<ol> tag",
        correct: "b",
    },
     {
        
        question: "Q - 8: Which of the following properties can we change through JavaScript?",
        a: "CSS styling",
        b: "change the CSS Classes",
        c: "html attributes",
        d: "All of the above",
        correct: "d", 
    },
    {
        
        question: "Q - 9: Which of the following is not a data structure in Javascript?",
        a: "Array",
        b: "Resources",
        c: "Objects",
        d: "Strings",
        correct: "b", 
    },
    {
        
        question: "Q - 10: Which is the correct syntax to change the content of HTML element in Javascript? <p id='demo'>This is a paragraph</p>",
        a: "#demo.innerHTML = 'Hello'",
        b: "document.getElementById('p').innerHTML = 'Hello'",
        c: "document.getElementById('demo').innerHTML = 'Hello'",
        d: "None of the above",
        correct: "c", 
    },
     {
        
        question: "Q - 11: Write the correct syntax for referring to an external script called 'script.js'?",
        a: "<script name='script.js'>",
        b: "<script href='script.js'>",
        c: "<script src='script.js'>",
        d: "None of the above",
        correct: "c", 
    },
    {
        
        question: "Q - 12: How can we start a for loop in Javascript?",
        a: "for i = 1 to 10",
        b: "for (i = 1 upto 10)",
        c: "for (i = 1; i <=10)",
        d: "for (i = 1; i <=10; i++)",
        correct: "d", 
    },
    {
        
        question: "Q - 13: How can we round a no 8.98 to its nearest integer?",
        a: "rond(8.98)",
        b: "Math.pow(8.98)",
        c: "Math.round(8.98)",
        d: "round(8.98)",
        correct: "c", 
    },
    {
        
        question: "Q - 14: How can we create a random number between 0 and 50 in Javascript?",
        a: "random()*49",
        b: "Math.random()*49",
        c: "Math.random()*50",
        d: "Math.random()",
        correct: "c", 
    },
     {
        
        question: "Q - 15: What event occur when the user clicks on an HTML element?",
        a: "onmouseover",
        b: "onchange",
        c: "onkeydown",
        d: "onclick",
        correct: "d", 
    },
    {
        
        question: "Q - 16: What will the following code return Boolean(10 > 9)?",
        a: "false",
        b: "undefined",
        c: "true",
        d: "NaN",
        correct: "c", 
    },{
        
        question: "Q - 17: Which CSS property is used to change the list style of a list?",
        a: "list-type",
        b: "list-style",
        c: "list-range",
        d: "list-change",
        correct: "b", 
    },{
        
        question: "Q - 18: Javascript is case-sensitive.",
        a: "true",
        b: "false",
        c: "None of the above",
        d: "All of the above",
        correct: "a", 
    },{
        
        question: "Q - 19: How do you make each word in a text start with a capital letter?",
        a: "text-transform: uppercase;",
        b: "transform: capitalize;",
        c: "text-transform: lowercase;",
        d: "text-transform: capitalize;",
        correct: "d", 
    },{
        
        question: "Q - 20: Javascript is a _____ language?",
        a: "scripting",
        b: "server side",
        c: "programming",
        d: "markup",
        correct: "c", 
    },
     {
        
        question: "Q - 21: The default color of the Hyperlink is?",
        a: "blue",
        b: "green",
        c: "purple",
        d: "red",
        correct: "a",
    },
    {
        
        question: "Q - 22: Which of the following tag defines a division in an HTML document, and is used to group block elements?",
        a: "<section>",
        b: "<group>",
        c: "<span>",
        d: "<div>",
        correct: "d",
    },
    {
        
        question: "Q - 23: CSS declarations are enclosed in?",
        a: "< >",
        b: "( )",
        c: "' '",
        d: "{ }",
        correct: "d",
    },
    {
        
        question: "Q - 24: What is a variable in Javascript ?",
        a: "Store values so we can use them later and change them from the code.",
        b: "Store values so we can use them but cannot change them.",
        c: "Store values so we can use them once.",
        d: "Store values in containers so we can't use them later",
        correct: "a",
    },
     {
        
        question: "Q - 25: Which is the correct CSS syntax?",
        a: "body:color=black;",
        b: "{body:color=black;}",
        c: "body{color:black;}",
        d: "body color=black;",
        correct: "c",
    },
    {
        
        question: "Q - 26: Which property is used to create spacing between HTML elements?",
        a: "padding",
        b: "border",
        c: "margin",
        d: "line-height",
        correct: "c",
    },
     {
        
        question: "Q - 27:  Which CSS property is used to set the spacing in between lines of text?",
        a: "line-spacing",
        b: "spacing",
        c: "line-height",
        d: "letter spacing",
        correct: "c",
    },
     {
        
        question: "Q - 28: Select the appropriate HTML tag used for the largest heading ?",
        a: "h6",
        b: "p",
        c: "h4",
        d: "h1",
        correct: "d", 
    },
    {
        
        question: "Q - 29: In JavaScript, what element is used to store multiple values in a single variable??",
        a: "Array",
        b: "Resources",
        c: "Boolean",
        d: "Strings",
        correct: "a", 
    },
    {
        
        question: "Q - 30: What is a JavaScript element that represents either TRUE or FALSE values ?",
        a: "Array",
        b: "Number",
        c: "Boolean",
        d: "Objects",
        correct: "c",
    },
     {
        
        question: "Q - 31: What is the full form of PHP?",
        a: "Pre hyper processor",
        b: "Personal home post",
        c: "Post hyper processing",
        d: "None of the above",
        correct: "a", 
    },
    {
        
        question: "Q - 32: What is the full form of SQL?",
        a: "Structured Query Language ",
        b: "Strict Query Loader ",
        c: "Structured Question Language ",
        d: "None of the above",
        correct: "a", 
    },
    {
        
        question: "Q - 33: How can we declare a variable in PHP?",
        a: "#variable",
        b: "&variable ",
        c: "$variable",
        d: "@variable",
        correct: "c", 
    },
    {
        
        question: "Q - 34: Which version of Javascript launched in 2015 is highly regarded as the most modern version of Javascript?",
        a: "ES3",
        b: "ES6",
        c: "ES12",
        d: "ES5",
        correct: "b", 
    },
    {
        
        question: "Q - 35: While establishing connection to database, how many arguments are required in mysqli_connect() function?",
        a: "Only 1 ",
        b: "2 ",
        c: "4 ",
        d: "More than 5 ",
        correct: "c", 
    },
     {
        
        question: "Q - 36: How can we insert an image in HTML?",
        a: "<img href = 'img.png' />",
        b: "<img link = 'img.png' />",
        c: "<img src = 'img.png' />",
        d: "<img url = 'img.png' />",
        correct: "c", 
    },
    {
        
        question: "Q - 37: How can we create a checkbox in HTML?",
        a: "<checkbox>",
        b: "<input type = 'checkbox'>",
        c: "<input type = 'input'>",
        d: "<input type = 'check'>",
        correct: "b", 
    },
    {
        
        question: "Q - 38: By using which property we can add more than one color in background of our element?",
        a: "Gradient",
        b: "Blend",
        c: "Blur",
        d: "none of the above",
        correct: "a", 
    },
    {
        
        question: "Q - 39: In Box Model, how can we determine the width of an element?",
        a: "top margin + top border + top padding + height + bottom margin + bottom border + bottom padding ",
        b: "left margin + left border + left padding + width + right margin + right border + right padding",
        c: "margin + border + padding + height + margin + border + padding",
        d: "None of the above",
        correct: "b", 
    },
     {
        
        question: "Q - 40: Which tag is used to create a dropdown list?",
        a: "<option>",
        b: "<select>",
        c: "<list>",
        d: "<dropdown>",
        correct: "b", 
    },
    {
        
        question: "Q - 41: The <hr> tag in HTML is used for?",
        a: "new line",
        b: "horizontal line",
        c: "vertical line",
        d: "new paragraph",
        correct: "b", 
    },{
        
        question: "Q - 42: Which of the following attribute is used to provide a unique name to an element?",
        a: "id",
        b: "class",
        c: "type",
        d: "name",
        correct: "a", 
    },{
        
        question: "Q - 43:  A program in HTML can be rendered and read by ?",
        a: "server",
        b: "compiler",
        c: "interpreter",
        d: "web browser",
        correct: "d", 
    },{
        
        question: "Q - 44: Which of the following is the container for <tr>, <th>, and <td> tags?",
        a: "<div>",
        b: "<group>",
        c: "<header>",
        d: "<table>",
        correct: "d", 
    },{
        
        question: "Q - 45: Which of the following CSS property is used to specify the space between every letter inside an element?",
        a: "alpha spacing",
        b: "line-spacing",
        c: "letter-spacing",
        d: "line-height",
        correct: "c", 
    },
     {
        
        question: "Q - 46: The CSS property used to specify the transparency of an element is?",
        a: "opacity",
        b: "overlay",
        c: "overflow",
        d: "clearfix",
        correct: "a",
    },
    {
        
        question: "Q - 47: In HTML5, which of the following tag is used to initialize the document type?",
        a: "<Doctype HTML>",
        b: "</Doctype HTML>",
        c: "<!Doctype HTML>",
        d: "<Doctype>",
        correct: "c",
    },
    {
        
        question: "Q - 48: In JavaScript the x===y statement implies that?",
        a: "Both are not equal at all",
        b: "Both are x and y are equal in value and datatype.",
        c: "Both are x and y are equal in value only.",
        d: "Both x and y are equal in value, type and reference address as well",
        correct: "b",
    },
    {
        
        question: "Q - 49: Which CSS property display an element above the other element when they are in same position?",
        a: "z-index",
        b: "position",
        c: "transform",
        d: "none of the above",
        correct: "a",
    },
     {
        
        question: "Q - 50:  Which HTML tag is used to display the power in expression, i.e., (x2 – y2)?",
        a: "<sup> tag",
        b: "<sub> tag",
        c: "<p> tag",
        d: "<section> tag",
        correct: "a",
    },
    {
        
        question: "Q - 51: Which property is used to convert a div into a flexible container?",
        a: "display: flex",
        b: "display: grid",
        c: "display: none",
        d: "display: inline-block",
        correct: "a",
    },
     {
        
        question: "Q - 52: Which of the following is not a measurement unit to be used in CSS?",
        a: "px",
        b: "%",
        c: "rem",
        d: "m",
        correct: "d",
    },
     {
        
        question: "Q - 53: PHP is a ________ language?",
        a: "scripting",
        b: "markup",
        c: "client-side",
        d: "server-side",
        correct: "d", 
    },
    {
        
        question: "Q - 54: Which of the following is not a block element?",
        a: "<p>",
        b: "<a>",
        c: "<div>",
        d: "<h3>",
        correct: "b", 
    },
    {
        
        question: "Q - 55: Which is the correct syntax to hide an element using Javascript",
        a: "document.getElementById(id).style.opacity = 'none'",
        b: "document.getElementById(id).style.display = 'none'",
        c: "document.getElementById(id).style.display = 'block'",
        d: "None of the above",
        correct: "b", 
    },
     {
        
        question: "Q - 56: The HTML attribute used to define the inline styles is?",
        a: "styles",
        b: "style",
        c: "href",
        d: "name",
        correct: "b", 
    },
    
    {
        
        question: "Q - 57: What will the following code return Boolean(10 > 9)?",
        a: "false",
        b: "undefined",
        c: "true",
        d: "NaN",
        correct: "c", 
    },{
        
        question: "Q - 58: Which CSS property is used to change the list style of a list?",
        a: "list-type",
        b: "list-style",
        c: "list-range",
        d: "list-change",
        correct: "b", 
    },{
        
        question: "Q - 59: Javascript is case-sensitive.",
        a: "true",
        b: "false",
        c: "None of the above",
        d: "All of the above",
        correct: "a", 
    },{
        
        question: "Q - 60: Javascript is a _____ language?",
        a: "scripting",
        b: "server side",
        c: "programming",
        d: "markup",
        correct: "c", 
    },

];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a = document.getElementById('a_text')
const b = document.getElementById('b_text')
const c = document.getElementById('c_text')
const d = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

const startBox = document.querySelector('.start-box')

const rulesBox = document.querySelector('.rules')
const startQuiz = document.querySelector('.start-quiz')


const nameInput = document.getElementById('name-input');

let name;



startBox.addEventListener('click', () => {
    startBox.style.display = 'none';
    rulesBox.style.display = 'block';

})

startQuiz.addEventListener('click', () => {
    name = nameInput.value;
  if(name){
      rulesBox.style.display = 'none';
    quiz.style.display = 'block';
    startTimer();
  }
})

console.log(answerEls)
let count;


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        // console.log(score);
        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            clearInterval(count)
            quiz.innerHTML = `<h2>Thank You for taking the test</h2>`;
            localStorage.setItem(name, score);
        }
    }
})


function startTimer(){
   let secEl = 0;
    let minEl = 50;
    count = setInterval(() => {
        secEl-=1;
        document.querySelector('.seconds').innerHTML = secEl;
        if(secEl<10){
            document.querySelector('.seconds').innerHTML = `0${secEl}`;
        }
        if(secEl < 0){
            secEl = 59;
            document.querySelector('.seconds').innerHTML = secEl;
            minEl-=1;
            document.querySelector('.minutes').innerHTML = minEl;

        }
        if(minEl < 10){
            document.querySelector('.minutes').innerHTML = `0${minEl}`;
        }
        if(minEl < 1){
            document.querySelector('.timer').classList.add('red');
        }
        if(minEl==0 && secEl==0){
            
            clearInterval(count);
            quiz.innerHTML = `<h2>Thank You for taking the test</h2>`;
         localStorage.setItem(name, score);
        }
        


    }, 1000);
}
// let currentQuiz = 0;
// let score = 0;

// loadQuiz();

// function loadQuiz(){
//     for(let i=0;i<answerEls.length;i++){
//         if(answerEls[i].checked){
//             answerEls[i].checked = false;
//         }
//     }

     
//     const currentDataQuiz = quizData[currentQuiz];

//     questionEl.innerHTML = currentDataQuiz.question;
//     a_text.innerHTML = currentDataQuiz.a;
//     b_text.innerHTML = currentDataQuiz.b;
//     c_text.innerHTML = currentDataQuiz.c;
//     d_text.innerHTML = currentDataQuiz.d;
    
// }

// submitBtn.addEventListener('click', function(){
    
//     let answer;
//     for(let i=0;i<answerEls.length;i++){
//         if(answerEls[i].checked){
//             answer = answerEls[i].id;
//         }
//     }
//     if(answer === quizData[currentQuiz].correct){
//         score++
//     }
//     currentQuiz++;
//     if(currentQuiz<quizData.length){
//         loadQuiz();
//     }else{
//         quiz.innerHTML = `<h2>Your score is: ${score}</h2>`;
//         localStorage.setItem(name, score);
        
//     }
// })




// loadQuiz();

// function loadQuiz(){
//     for(let i=0;i<answerEls.length;i++){
//         if(answerEls[i].checked){
//             answerEls[i].checked = false;
//         }
//     }

//     const currentQuizData = quizData[currentQuiz];

//     questionEl.innerHTML = currentQuizData.question;

//     a_text.innerHTML = currentQuizData.a;
//     b_text.innerHTML = currentQuizData.b;
//     c_text.innerHTML = currentQuizData.c;
//     d_text.innerHTML = currentQuizData.d;

// }

// submitBtn.addEventListener('click', function(){

//     let answer;
//     for(let i=0;i<answerEls.length;i++){
//         if(answerEls[i].checked){
//             answer = answerEls[i].id
//         }
//     }
//     if(answer === quizData[currentQuiz].correct){
//         score++;

//     }
//     currentQuiz++;
//     if(currentQuiz < quizData.length){
//         loadQuiz();
//     }else{
//         quiz.innerHTML = `
//         <h2>You answered ${score}/${quizData.length} quesions correctly</h2>
//          <button onclick='location.reload()'>Reload</button>
        
//         `;
//     }
// })
// let currentQuiz = 0;

// let score = 0;

// loadQuiz();

// function loadQuiz(){
//     for(let i=0;i<answerEls.length;i++){
//         answerEls[i].checked = false;
//     }


//     const currentQuizData = quizData[currentQuiz];

//     questionEl.innerHTML = currentQuizData.question;


//     a_text.innerHTML = currentQuizData.a;
//     b_text.innerHTML = currentQuizData.b;
//     c_text.innerHTML = currentQuizData.c;
//     d_text.innerHTML = currentQuizData.d;
// }

  
// submitBtn.addEventListener('click', () => {
//      let answer;
//     for(let i=0;i<answerEls.length;i++){
//         if(answerEls[i].checked){
//             answer = answerEls[i].id
//         }
//     }
       
//     if(answer === quizData[currentQuiz].correct){
//         score++;
        
//     }
//     currentQuiz++;
//     if(currentQuiz < quizData.length)  {
//         loadQuiz();
//     }  else{
//         quiz.innerHTML = `
//         <h2>You answered ${score}/${quizData.length} quesions correctly</h2>
//         <button onclick='location.reload()'>Reload</button>
        
//         `
//     }
// })


