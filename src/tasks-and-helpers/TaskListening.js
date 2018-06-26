import $ from 'jquery';
import randomWord from './dictionary';

export default class TaskListening {
  constructor() {
    this.task = '';
    this.synth = window.speechSynthesis;
    this.voices = [];
    this.utter = '';
  }
  getRandomTask() {
    this.task = randomWord();
    this.showTask();
    this.getVoiceList();
    return this.task;
  }

  checkAnswer(answ) {
    return this.task.word === answ;
  }

  getVoiceList() {
    this.voices = this.synth.getVoices();
  }

  speack() {
    if (this.synth.speaking) {
      return;
    }
    const voice = 4;
    this.utter = new SpeechSynthesisUtterance(this.task.word);
    this.utter.voice = this.voices[voice];
    this.synth.speak(this.utter);
  }

  repeat() {
    this.synth.speak(this.utter);
  }

  showTask() {
    const html = `
    <div class="input-group mb-3 justify-content-center">
      <div class="input-group-prepend">
          <button type="button" id="repeatWord" class="btn btn-success">&#x21ba;</button>
        </div>
          <input type="text" name="answer" id="taskAnsw" placeholder="Введите ответ">
        </div>`;
    $('#taskBody').html(html);
    $('#taskTitle').html('Введите услышаное слово');
  }
}
