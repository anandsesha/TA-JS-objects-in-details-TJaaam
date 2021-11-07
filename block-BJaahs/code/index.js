console.log('Hii')

// I. Without using object (all separate variables and Functions used) 

// Data for quiz1
let title1 = 'Harry Potter';
let options1 = ['Sam Gooding','Stephen King','J.K. Rowling'];
let correctAnswerIndex = 2;
// Functions used for quiz1
function isAnswerCorrect(index){
    if(index === correctAnswerIndex){
        console.log(`The answer is correct!!`)
        return true;
    }else{
        console.log(`The answer is In-correct :(`)
        return false;
    }
}
function getCorrectAnswer(){
    return options[correctAnswerIndex];
}


// II.  Organized the same above using Object

let quiz1 = {
    title1 : "Harry Potter",
    options1 : ['Sam Gooding','Stephen King','J.K. Rowling'],
    correctAnswerIndex : 2,

    isAnswerCorrect(index){
        if(index === quiz1.correctAnswerIndex){
            console.log(`The answer is correct!!`)
            return true;
        }else{
            console.log(`The answer is In-correct :(`)
            return false;
        }
    },

    getCorrectAnswer(){
        return quiz1.options1[quiz1.correctAnswerIndex];
    }
};

// III. Using a Function to automate the creation of the above object for multiple quiz

function createQuiz(title,options,correctAnswerIndex){
    let quiz = {};
    
    quiz.title = title;
    quiz.options = options;
    quiz.correctAnswerIndex = correctAnswerIndex;
    
    quiz.isAnswerCorrect = function(index){
        if(index === quiz.correctAnswerIndex){
            console.log(`The answer is correct!!`)
            return true;
        }else{
            console.log(`The answer is In-correct :(`)
            return false;
        }
    },

    quiz.getCorrectAnswer = function(){
        return quiz.options[quiz.correctAnswerIndex];
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
    
    quiz.isAnswerCorrect = function(index){
        if(index === this.correctAnswerIndex){
            console.log(`The answer is correct!!`)
            return true;
        }else{
            console.log(`The answer is In-correct :(`)
            return false;
        }
    },

    quiz.getCorrectAnswer = function(){
        return this.options[this.correctAnswerIndex];
    }

    return quiz;
}

// let quiz1 = createQuiz('Harry Potter',['Sam Gooding','Stephen King','J.K. Rowling'],1)
let quiz2 = createQuiz('Harry Potter',['Sam Gooding','Stephen King','J.K. Rowling'],2)
let quiz3 = createQuiz('Where is the capital of Jordan',['Kuwait City', 'Amaan', 'Tashkent', 'Nairobi'],1)
