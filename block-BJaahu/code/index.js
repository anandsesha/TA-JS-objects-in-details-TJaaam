console.log(`Hii`)

// Prototypal pattern
// let quizMethods = {
//     isAnswerCorrect(index){
//         return index === this.correctAnswerIndex;
//     },
//     getCorrectAnswer(){
//         return this.options[this.correctAnswerIndex];
//     }
// };

// function createQuiz(title,options,correctAnswerIndex){
//     let question = Object.create(quizMethods);
//     question.title = title;
//     question.options = options;
//     question.correctAnswerIndex = correctAnswerIndex;

//     return question;
// }

// let firstQuestion = createQuiz(
//     'Where is the capital of Jamaica',
//     ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
//     2
// );


// Pseudoclassial Pattern
// CreateQuiz.prototype = {
//     isAnswerCorrect(index){
//         return index === this.correctAnswerIndex;
//     },
//     getCorrectAnswer(){
//         return this.options[this.correctAnswerIndex];
//     }
// };

// function CreateQuiz(title,options,correctAnswerIndex){
//     // let question = Object.create(createQuiz.prototype);
    
//     // this = {} created by new automatically
//     this.title = title;
//     this.options = options;
//     this.correctAnswerIndex = correctAnswerIndex;

//     // return question; done by new automatically
// }

// let firstQuestion = new CreateQuiz(
//     'Where is the capital of Jordan',
//     ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
//     1
// )

// firstQuestion.isAnswerCorrect(1) // true
// firstQuestion.getCorrectAnswer() //"Amaan"




// Class Pattern
class Quiz{
    constructor(title,options,correctAnswerIndex){
        this.title = title;
        this.options = options;
        this.correctAnswerIndex = correctAnswerIndex;    
    }
    isAnswerCorrect(index){
        return index === this.correctAnswerIndex;
    }
    getCorrectAnswer(){
        return this.options[this.correctAnswerIndex];
    }
}

let firstQuestion = new Quiz(
    'Where is the capital of Jordan',
    ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    1
)

// Test Cases
// firstQuestion.isAnswerCorrect(1) // true
// firstQuestion.isAnswerCorrect(2) // false
// firstQuestion.getCorrectAnswer() // "Amaan"

let secondQuestion = new Quiz(
    'Where is the capital of Jamaica',
    ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
    2
);