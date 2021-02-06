
class Question{

    constructor(title, choiceA, choiceB){
        this.title = title;
        this.choiceA = choiceA;
        this.choiceB = choiceB;
    }

    format(id){
        return `
        <div class="my-5">
           <p class="lead text-white font-weight-normal">
           ${id+1}. ${this.title}
           </p>
           <div class="form-check my-2 text-white-50">
                <input type="radio" name=${'q' + String(id+1)} value="A" checked>
                <label for="" class="form-check-label">
                    ${this.choiceA}
                </label>
           </div>

           <div class="form-check my-2 text-white-50">
            <input type="radio" name=${'q' + String(id+1)} value="B" >
            <label for="" class="form-check-label">
                ${this.choiceB}
            </label>
            </div>

        </div>`;

    }
}

questions = [
    [`How do you give a ninja directions?`, 'Show them a map', "Don't worry, a ninja will find you"],
    [`If a ninja has 3 apples, then gives one to Mario and one to Yoshi, how may apples does the ninja have left?`, '1 apple', '3 apples, and two corpses'],
    [`How do you know when you met a ninja?`, 'You will recognize the outfit', 'The grim reaper will tell you'],
    [`What is a ninja's favorite array method?`, 'forEach', 'Slice()']
]


insertQuestion = document.querySelector('.insert-question');

questions.forEach((line, idx) => {
    question = new Question(line[0], line[1], line[2]);
    insertQuestion.innerHTML += question.format(idx);
});


const correctAnswers = ['B', 'B', 'B', 'B'];


const result = document.querySelector('.result');

const form = document.querySelector('.quiz-form');

form.addEventListener('submit', e=>{
    e.preventDefault();
    let score = 0;

    const userAnswers = [form.elements.q1.value, form.elements.q2.value, form.elements.q3.value, form.elements.q4.value];

    for(let i=0;i<questions.length;i++){
        if (userAnswers[i] == correctAnswers[i]){
            score += 25;
        }
    }

    // show result 
    scrollTo(0,0);
    // result.querySelector('span').textContent = `${score}%`;
    result.classList.remove('d-none');

    let output = 0;
    const timer = setInterval(()=>{
        result.querySelector('span').textContent = `${output}%`;
        if (output < score){
            output++;
        }else{
            clearInterval(timer);
        }
       
    }, 10);


    
});







// insertQuestion.append(q1.format(1)); // this method will only
// insertQuestion.appendChild(q1.format(2));



