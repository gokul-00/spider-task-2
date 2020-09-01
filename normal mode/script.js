const question = document.getElementById('question')
const options = document.getElementById('options-container')
const startBtn = document.getElementById('start-btn')
const nextBtn = document.getElementById('next-btn')
const prevBtn = document.getElementById('prev-btn')
const status = document.getElementById('status')
const submit = document.getElementById('submit')
const scoreCard = document.getElementById('score-card')
const quizContainer = document.querySelector('.quiz-container')
const restartBtn = document.getElementById('restart')
let random_questions, currentIndex = 0;
let score = 0;

restartBtn.addEventListener('click', () => {
    location.reload()
})

submit.addEventListener('click', () => {
    quizContainer.classList.add('hide')
    restartBtn.classList.remove('hide')
    scoreCard.innerHTML = `Your Score : ${score}/${questions.length}`
})

startBtn.addEventListener('click', () => {
    question.classList.remove('hide')

    question.innerHTML = random_questions[currentIndex].question
    showOption(currentIndex)
    startBtn.classList.add('hide')
    nextBtn.classList.remove('hide')
    submit.classList.remove('hide')
})

nextBtn.addEventListener('click', () => {
    clearOptions()
    if(currentIndex < questions.length - 1){
        question.innerHTML = random_questions[++currentIndex].question
        showOption(currentIndex)
        prevBtn.classList.remove('hide')
    }else {
      
        question.innerHTML = random_questions[currentIndex].question
        showOption(currentIndex)
        nextBtn.classList.add('hide')
        prevBtn.classList.remove('hide')
    }

})

prevBtn.addEventListener('click', () => {
    clearOptions()
    if(currentIndex > 0){
        question.innerHTML = random_questions[--currentIndex].question
        showOption(currentIndex)
        
        if(currentIndex != 0){
            prevBtn.classList.remove('hide')     
        } else {
            prevBtn.classList.add('hide')
        }  
        nextBtn.classList.remove('hide')
    }else {
        question.innerHTML = random_questions[currentIndex].question
        showOption(currentIndex)
       
        prevBtn.classList.add('hide')
        nextBtn.classList.remove('hide')
    }

})

const showOption = (index) => {

    questions[index].answers.forEach(option => {
        
        const button = document.createElement('button')
        button.innerText = option.text
        button.classList.add('btn')
        if (option.correct) {
        button.dataset.correct = option.correct  
        }
        if (option.correct) {
            button.classList.add('correct')
        } else {
            button.classList.add('wrong')
        }

        button.addEventListener('click', (e) => {
            const selectedButton = e.target
            const correct = selectedButton.dataset.correct
            const correctOption = document.getElementsByClassName('correct')
            const wrongOption = document.getElementsByClassName('wrong')

            
            for(let i=0;i<correctOption.length;i++){
                correctOption[i].style.backgroundColor = 'rgb(78, 184, 78)'
            }
            for(let j=0;j<wrongOption.length;j++){
                wrongOption[j].style.backgroundColor = 'rgb(245, 87, 87)'
            }
            if(correct){
                status.innerHTML = ' Your Answer is correct🎉'
                if(!option.answered){
                 score++   
                }

            }else{
                status.innerHTML = ' Your Answer is wrong😔'
            }
            
            if(questions[index].answered){
            let nodes = options.getElementsByTagName('*');
            for(let i = 0; i < nodes.length; i++){
                nodes[i].disabled = true;
            }
            }else{
               questions[index].answered = true 
            }

        })

        options.appendChild(button)
    })
    if(questions[index].answered){
        let nodes = options.getElementsByTagName('*');
        for(let i = 0; i < nodes.length; i++){
            nodes[i].disabled = true;
        }
        status.innerHTML = 'You already answered this question...'
    }
}

const clearOptions = () => {
    while (options.firstChild) {
        options.removeChild(options.firstChild)
    }
    status.innerHTML = ''
}

const questions = [
    {
      question: 'The first case of novel coronavirus was identified in .....',
      answers: [
        { text: 'Beijing', correct: false },
        { text: 'Shanghai', correct: false },
        { text: 'Wuhan, Hubei', correct: true },
        { text: 'Tianjin', correct: false }
      ],
      answered: false
    },
    {
      question: 'Which of the following diseases are related to coronavirus?',
      answers: [
        { text: 'MERS', correct: false },
        { text: 'SARS', correct: false },
        { text: 'Both A and B', correct: true },
        { text: 'Neither A nor B', correct: false }
      ],
      answered: false
    },
    {
      question: 'Mild Symptoms of Novel coronavirus are:',
      answers: [
        { text: 'Fever', correct: false },
        { text: 'Cough', correct: false },
        { text: 'Shortness of breath', correct: false },
        { text: 'All the above', correct: true }
      ],
      answered: false
    },
    {
      question: 'From where coronavirus got its name?',
      answers: [
        { text: 'Due to their crown-like projections', correct: true },
        { text: 'Due to their leaf-like projections', correct: false },
        { text: 'Due to their surface structure of bricks', correct: false },
        { text: 'None of the above', correct: false }
      ],
      answered: false
    },
    {
      question: 'What are the precautions that need to be taken to protect from the coronavirus',
      answers: [
        { text: 'Cover your nose and mouth when sneezing', correct: true },
        { text: 'Add more garlic into your diet', correct: false },
        { text: 'Visit your doctor for antibiotics treatment', correct: false },
        { text: 'Wash your hands after every hour', correct: false }
      ],
      answered: false
    },
    {
      question: 'World Health Organisation on 11 February, 2020 announced an official name for the disease that is causing the 2019 novel coronavirus outbreak? What is the new name of the disease?',
      answers: [
        { text: 'COVID-19', correct: true },
        { text: 'COVn-19', correct: false },
        { text: 'COnV-20', correct: false },
        { text: 'COnVID-19', correct: false }
      ],
      answered: false
    },
    {
      question: 'What is Coronavirus?',
      answers: [
        { text: 'It is a large family of viruses', correct: false },
        { text: 'It belongs to the family of Nidovirus', correct: false },
        { text: 'Both A and B are correct', correct: true },
        { text: 'Only A is correct', correct: false }
      ],
      answered: false
    },
    {
      question: 'In which age group the COVID-19 spreads?',
      answers: [
        { text: 'COVID-19 occur in all age groups', correct: false },
        { text: 'Coronavirus infection is mild in children', correct: false },
        { text: 'Older person and persons with pre-existing medical conditions are at high risk to develop serious illness', correct: false },
        { text: 'All the above are correct', correct: true }
      ],
      answered: false
    },
    {
      question: 'What happens to a person suffering from COVID-19?',
      answers: [
        { text: 'Around 80% of the people will require no treatment as such and will recover on their own', correct: false },
        { text: 'Around <20% or a small proportion may need hospitalisation', correct: false },
        { text: 'A very small proportion basically suffering from chronic illness may need admission in an Intensive Care Unit (ICU)', correct: false },
        { text: 'All the above are correct', correct: true }
      ],
      answered: false
    },
    {
      question: 'Name the vaccine that is jointly developed by the German company BioNTech and US pharma giant Pfizer for COVID-19?',
      answers: [
        { text: 'BNT162', correct: true },
        { text: 'PICOVACC', correct: false },
        { text: 'Both A and B', correct: false },
        { text: 'Neither A nor B', correct: false }
      ],
      answered: false
    }
  ]

window.addEventListener('load',() => {
    random_questions = questions.sort(() => Math.random() - 0.5)
})