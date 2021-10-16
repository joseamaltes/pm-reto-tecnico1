const express = require('express');
const app = express();
const port = 3000;
const evaluation = require('./evaluations/evaluation.json');
const cors = require('cors');
const { json } = require('express');
const solutions = evaluation.correctAnswers;
let answerSubmitted;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {

  res.json(evaluation.questions);
});

app.get('/possibleAns', (req, res) => {

  res.json(evaluation.possibleAnswers);
});

app.get('/gradeMe', (req, res) => {
  res.json(solutions);

});

app.post('/Ans', (req, res) => {

  const body = req.body;
  res.json({
    //message : "submited",
    data : body
  });
  answerSubmitted= body.answerYou;
  console.log(answerSubmitted);
});


app.listen(port, () => {
  console.log('Mi port' + port);
});


