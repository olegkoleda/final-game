import $ from 'jquery';

function random(min, max) {
  return Math.floor(Math.random() * ((max - min) + 1)) + min;
}

export default class TaskComparison {
  constructor() {
    this.val1 = null;
    this.val2 = null;
  }
  getRandomTask() {
    this.val1 = random(1000, 10000);
    this.val2 = random(1000, 10000);
    this.showTask();
    return this.task;
  }

  checkAnswer(answ) {
    let result = '';
    if (this.val1 === this.val2) { result = '='; }
    if (this.val1 > this.val2) { result = '>'; } else { result = '<'; }
    return answ === result;
  }

  showTask() {
    const html = `
    <ul class="mixed-list">
    <li>${this.val1}</li>
    <li>?</li>
    <li>${this.val2}</li>
    </ul>
    <input type="text" name="answer" id="taskAnsw" placeholder="Введите ответ">`;
    $('#taskBody').html(html);
    $('#taskTitle').html('Сравните и впишите > < или =');
  }
}
