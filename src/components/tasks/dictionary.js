
import words from './json/dictionary.json';

export default function dictionary() {
  const task = document.querySelector('#task-to-solve');
//   const words = require('../tasks/json/dictionary.json');
  const wordTask = words[Math.floor(Math.random() * 30)];
  task.innerHTML = `<div class="task__condition">
      <p>Переведите слово:</p>
      </div>
      <div class = "word task8">
      <p class = "wordTask8" style = "color: green;margin: 0 0 30px;">${wordTask.word}</p>
      <input autofocus class = "task-8" type="text" style = 'text-align: center;width: 300px;border: 2px solid red;'>
      </div>
     <input id = "task8__button" class="task__button" type="button" value="Ответить">`;
  return wordTask.translation;
}
