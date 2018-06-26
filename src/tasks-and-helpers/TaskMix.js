import $ from 'jquery';
import randomWord from './dictionary';

export default class TaskMix {
  constructor() {
    this.task = '';
  }
  getRandomTask() {
    this.task = randomWord();
    this.showTask();
  }

  checkAnswer(answ) {
    return answ.prevObject[0].textContent === this.task.word;
  }

  showTask() {
    const LetterArr = this.task.word.split('').sort(() => 0.5 - Math.random());
    let html = '<ul class="mixed-list" id="mixedWord">';
    LetterArr.forEach((element) => {
      html += `<li>${element}</li>`;
    });
    html += '</ul>';

    $('#taskBody').html(html);
    $('#taskTitle').html('Соберите слово из букв');
  }
}
