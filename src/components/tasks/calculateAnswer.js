export default function calculateAnswer() {
  const task = document.querySelector('#task-to-solve');
  const operator = ['-', '+', '/', '*'];
  let expression = '1.5';
  // eslint-disable-next-line no-bitwise
  while ((eval(expression) ^ 0) !== eval(expression)) {
    expression = `${Math.floor(Math.random() * 60)}`
          + ` ${operator[Math.floor(Math.random() * 4)]} `
          + `${Math.floor(Math.random() * 9 + 1)}`;
  }
  task.innerHTML = `<div class="task__condition">
      <p>Решите пример:</p>
      <p class = "conditionTask">${expression} =</p> <input autofocus class = "task-1" style = "width: 60px" type="text" >   
     </div>
     <input id = "task1__button"  class="task__button" type="button" value="Ответить">`;
  return eval(expression);
}
