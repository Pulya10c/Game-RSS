// eslint-disable-next-line eslint no-eval
export default function compareNumbers() {
  const task = document.querySelector('#task-to-solve');
  const expressionFirst = `${Math.floor(Math.random() * 100)}`;
  const expressionPast = `${Math.floor(Math.random() * 100)}`;
  task.innerHTML = `<div class="task__condition">
      <p>Сравните числа:</p> <br>
      <p id = "part1">${expressionFirst} </p>
      <input class = "task-1" style = "width: 38px;" type="text">
      <p id = "part2"> ${expressionPast}</p>   
     </div>
     <div className = "task2">
     <input id = "task2__button1" class="task__button" type="button" value="<">
     <input id = "task2__button2" class="task__button" type="button" value=">">
     <input id = "task2__button3" class="task__button" type="button" value="=">
      </div>`;
      console.log(+expressionFirst, +expressionPast);
  return [+expressionFirst, +expressionPast];
}
