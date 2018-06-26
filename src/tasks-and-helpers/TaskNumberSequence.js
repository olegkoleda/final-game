import $ from 'jquery';

function random(min, max) {
  return Math.floor(Math.random() * ((max - min) + 1)) + min;
}

export default class TaskNumberSequence {
  constructor() {
    this.task = 0;
    this.step = null;
  }
  getRandomTask() {
    this.task = random(10, 100);
    this.step = random(1, 10);
    this.showTask();
    return this.task;
  }

  checkAnswer(answ) {
    return Math.round(answ) === this.task;
  }

  showTask() {
    const html = `
    <ul class="mixed-list">
      <li>${this.task - (3 * this.step)}</li>
      <li>${this.task - (2 * this.step)}</li>
      <li>${this.task - this.step}</li>
    </ul>
        <input type="text" name="answer" id="taskAnsw" placeholder="Введите ответ">`;
    $('#taskBody').html(html);
    $('#taskTitle').html('Продолжите последовательность чисел');
  }
}

