import $ from 'jquery';

function random(min, max) {
  return Math.floor(Math.random() * ((max - min) + 1)) + min;
}

export default class TaskWordSequence {
  constructor() {
    this.task = null;
    this.arr = null;
    this.data = [
      ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
      ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь',
        'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь',
        'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    ];
  }
  getRandomTask() {
    this.step = random(0, 1);
    this.task = random(this.data[this.step].length, this.data[this.step].length / 3);
    this.showTask();
    return this.task;
  }

  checkAnswer(answ) {
    return answ === this.data[this.step][this.task].toLowerCase();
  }

  showTask() {
    const html = `
    <ul class="mixed-list">
    <li>${this.data[this.step][this.task - 3]}</li>
    <li>${this.data[this.step][this.task - 2]}</li>
    <li>${this.data[this.step][this.task - 1]}</li>
    </ul>
    <input type="text" name="answer" id="taskAnsw" placeholder="Введите ответ">`;
    $('#taskBody').html(html);
    $('#taskTitle').html('Продолжите последовательность');
  }
}

