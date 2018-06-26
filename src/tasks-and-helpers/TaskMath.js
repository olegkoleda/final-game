import $ from 'jquery';

function random(min, max) {
  return Math.floor(Math.random() * ((max - min) + 1)) + min;
}

export default class TaskMath {
  constructor(minVal, maxVal) {
    this.maxVal = maxVal;
    this.minVal = minVal;
    this.task = '';
    this.operator = ['+', '-', '*', '/'];
  }
  getRandomTask() {
    this.task = `${random(this.minVal, this.maxVal)} ${this.operator[random(0, this.operator.length - 1)]} ${random(this.minVal, this.maxVal)}`;
    this.showTask();
    return this.task;
  }

  checkAnswer(answ) {
    return Math.round(answ) === Math.round(eval(this.task));
  }

  showTask() {
    const html = `
      <h4 class="task border"> ${this.task} = </h4>
      <input type="text" name="answer" id="taskAnsw" placeholder="Введите ответ">`;
    $('#taskBody').html(html);
    $('#taskTitle').html('Какое значение выражения');
  }
}
