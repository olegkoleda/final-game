import $ from 'jquery';
import randomWord from './dictionary';

export default class TaskTranslate {
  constructor() {
    this.task = '';
  }
  getRandomTask() {
    this.task = randomWord();
    this.showTask();
    return this.task;
  }

  checkAnswer(answ) {
    return this.task.trans.some(el => answ === el);
  }

  showTask() {
    const html = `
        <h4 class="task border"> ${this.task.word}</h4>
        <input type="text" name="answer" id="taskAnsw" placeholder="Введите ответ">`;
    $('#taskBody').html(html);
    $('#taskTitle').html('Переведите на русский язык');
  }
}
