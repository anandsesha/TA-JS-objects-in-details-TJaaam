let form = document.querySelector('form')
let next = document.querySelector('.next')
let prev = document.querySelector('.prev')
let quizElm = document.querySelector('.quiz')
let showResult = document.querySelector('.show_result') 

// We need an Object insisde data.js to create a class and then add that to Quiz Class


class Question{
    constructor(title,options,correctAnswerIndex){
        this.title = title;
        this.options = options;
        this.correctAnswerIndex = correctAnswerIndex;
    }
    isCorrect(answer){
        return this.options[this.correctAnswerIndex] === answer;
    }
    getCorrectAnswer(){
        return this.options[this.correctAnswerIndex]
    }
}

class Quiz{
    constructor(questions = [],score = 0){
        this.questions = questions;
        this.score = score;
        this.activeIndex = 0;
    }
    incrementScore(){
        this.score = this.score + 1;
    }
    nextQuestion(){
        this.activeIndex = this.activeIndex + 1;
        this.createUI()
    }
    prevQuestion(){
        this.activeIndex = this.activeIndex - 1;
        this.createUI()
    }
    addQuestion(title,options,answerIndex){
        let question = new Question(title,options,answerIndex)
        this.questions.push(question);
    }
    createUI(){
        quizElm.innerHTML = "";
        let activeQuestion = this.questions[this.activeIndex];
        
        let form = document.createElement('form')
        let fieldset = document.createElement('fieldset')
        let legend = document.createElement('legend')
        legend.innerText = activeQuestion.title;
        let optionsElm = document.createElement('div')
        optionsElm.classList.add('options')
        let buttonWrapper = document.createElement('button')
        let button = document.createElement('button')
        button.type = "submit"
        button.innerText = "Submit"
        buttonWrapper.append(button)

        activeQuestion.options.forEach((option,index) => {
            let input = document.createElement('input')
            let div = document.createElement('div')

            input.id = `options-${index}`
            input.type = 'radio';
            input.value = option;
            let label = document.createElement('label')
            label.for = `options-${index}`
            label.innerText = option;

            form.addEventListener('submit',(event) => {
                event.preventDefault();
                if(input.checked){
                 if(activeQuestion.isCorrect(input.value)){
                    this.incrementScore();
                 }   
                }
            })
            div.append(input,label)
            optionsElm.append(div)
        })

        fieldset.append(legend,optionsElm,buttonWrapper)
        form.append(fieldset)
        quizElm.append(form);
    }
}

let quiz = new Quiz();
quizCollection.forEach(question => {
    quiz.addQuestion(question.title,question.options,question.answerIndex)
})
quiz.createUI();


next.addEventListener('click',quiz.nextQuestion.bind(quiz))
prev.addEventListener('click',quiz.prevQuestion.bind(quiz))