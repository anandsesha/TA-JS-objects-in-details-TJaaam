console.log('Hii')

// I. Without using object (all separate variables and Functions used) 

// Data for quiz1
let title1 = 'Harry Potter';
let options1 = ['Sam Gooding','Stephen King','J.K. Rowling'];
let correctAnswerIndex = 0;
// Functions used for quiz1
function isAnswerCorrect(correctAnswerIndex){
    if(correctAnswerIndex === 2){
        console.log(`The answer is correct!!`)
        return true;
    }else{
        console.log(`The answer is In-correct :(`)
        return false;
    }
}
function getCorrectAnswer(){
    return options[2];
}


// II.  Organized the same above using Object

let quiz1 = {
    title1 : "Harry Potter",
    options1 : ['Sam Gooding','Stephen King','J.K. Rowling'],

    isAnswerCorrect(correctAnswerIndex){
        if(correctAnswerIndex === 2){
            console.log(`The answer is correct!!`)
            return true;
        }else{
            console.log(`The answer is In-correct :(`)
            return false;
        }
    },

    getCorrectAnswer(){
        return quiz1.options1[2];
    },
};

// III. Using a Function to automate the creation of the above object for multiple quiz

function createQuiz(title,options,correctAnswerIndex){
    let quiz = {};
    
    quiz.title = title;
    quiz.options = options;
    quiz.correctAnswerIndex = correctAnswerIndex;
    
    quiz.isAnswerCorrect = function(correctAnswerIndex){
        if(correctAnswerIndex === 2){
            console.log(`The answer is correct!!`)
            return true;
        }else{
            console.log(`The answer is In-correct :(`)
            return false;
        }
    },

    quiz.getCorrectAnswer = function(){
        return quiz.options[2];
    }

    return quiz;
}

let quiz1 = createQuiz('Harry Potter',['Sam Gooding','Stephen King','J.K. Rowling'],1)
let quiz2 = createQuiz('Harry Potter',['Sam Gooding','Stephen King','J.K. Rowling'],2)
let quiz3 = createQuiz('Where is the capital of Jordan',['Kuwait City', 'Amaan', 'Tashkent', 'Nairobi'],1)


// IV. Convert the above function to use "this" keyword 


function createQuiz(title,options,correctAnswerIndex){
    let quiz = {};
    
    quiz.title = title;
    quiz.options = options;
    quiz.correctAnswerIndex = correctAnswerIndex;
    
    quiz.isAnswerCorrect = function(correctAnswerIndex){
        if(correctAnswerIndex === 2){
            console.log(`The answer is correct!!`)
            return true;
        }else{
            console.log(`The answer is In-correct :(`)
            return false;
        }
    },

    quiz.getCorrectAnswer = function(){
        return this.options[2];
    }

    return quiz;
}

let quiz1 = createQuiz('Harry Potter',['Sam Gooding','Stephen King','J.K. Rowling'],1)
let quiz2 = createQuiz('Harry Potter',['Sam Gooding','Stephen King','J.K. Rowling'],2)
let quiz3 = createQuiz('Where is the capital of Jordan',['Kuwait City', 'Amaan', 'Tashkent', 'Nairobi'],1)
