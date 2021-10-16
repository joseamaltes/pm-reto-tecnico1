const urlString = "http://localhost:3000/";
const url = new URL(urlString);
const url2 = new URL(urlString + "possibleAns");
let questionArray = [];
let possibleAnswersArray = [];
let count = 0;
let answers = [];
let answerReceived = [];
let score = 0;
let sePuede = [];


const container = document.getElementById('container-json');
const button = document.getElementById('first-button');
const button2 = document.getElementById('second-button');
button2.disabled = true ;



const counting = () => {

    if (count < 4){
    iniciarTodo();
    count ++
    } else {
      receiveAnswers();
      turnOff();
    }
};

const grade3 = (x,y) => {
  for(let i =0; i < x.length;i++){
    if(x[i] === y[i]){
      score++
    }
  }
 };

const showResults = () => {
  const finalGrade = (score / answers.length) * 100;
  alert(`SACASTE ${finalGrade} obtuviste ${score} correctas`);
 };

button.addEventListener("click", counting);
button2.addEventListener("click",showResults);

const showQuestions = (questions, answers)=> {
  var form = document.createElement("form");
  container.appendChild(form)


  let questionTitle = document.createElement("p");
  form.appendChild(questionTitle)
  questionTitle.innerHTML = questions
  for(let i in answers){
    let input = document.createElement("input");
    let label = document.createElement("label");
    input.name = "selection";
    input.value = answers[i];
    label.innerHTML = answers[i];
    form.appendChild(input).type = "radio";
    form.appendChild(label);

  }
};

async function getQuestions (a) {
  const response = await fetch(a);
  const data = await response.json();
  questionArray.push(data);
};

async function getPossibleAns (a) {
  const responseAns = await fetch(a);
  const dataResponse = await responseAns.json();
  possibleAnswersArray.push(dataResponse);
};

async function getGrades () {
  let url3 = new URL(urlString + "gradeMe");
  const reponseGrades = await fetch (url3);
  const dataGrades = await reponseGrades.json();
  answerReceived.push(dataGrades);
  grade3(answerReceived[0],answers);

};

async function postAnswers () {
  const url4 = new URL(urlString + "Ans");
  let bodyContent = {
    answerYou: answers,
  };
  const settings = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json'
    },
    body: JSON.stringify(bodyContent)
  };
    const resposePost = await fetch(url4,settings);
    const dataFromPost = await resposePost.json();
    sePuede.push(dataFromPost);
    //gradeMe(answers,sePuede[0]["data"].answerYou);
};

async function iniciarTodo () {
   await getQuestions(url);
   await getPossibleAns(url2);
   showQuestions(questionArray[0][count-1], possibleAnswersArray[0][count-1])
  };

const receiveAnswers = () => {
  const radios = document.querySelectorAll('input[type = radio][name = selection]');
  for (let i of radios) {
    if(i.checked){
      answers.push(i.value);
    }
  };
};

const turnOff = () => {
  button.disabled = true ;
  button2.disabled = false;
  postAnswers();
  getGrades();
};
















