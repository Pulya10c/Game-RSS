
import question from './json/questions.json';

export default function questions() {
  const task = document.querySelector('#task-to-solve');
//   const question = require('../tasks/json/questions.json');
  const questionItem = question[Math.floor(Math.random() * 30)];
  task.innerHTML = `<div class="task__condition">
      <p>Верно ли утверждение:</p>
      </div>
      <div class = "word task9">
      <p class = "wordTask9" style = "color: green;margin: 0 0 30px;">${questionItem.question}</p>
      </div>
      <div className = "task9">
      <input id = "task9__button1" class="task__button" type="button" value="правда">
      <input id = "task9__button2" class="task__button" type="button" value="ложь">
      </div>`;
  return questionItem.answer;
}
