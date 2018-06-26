import $ from 'jquery';
import randomWord from './dictionary';

const SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
const SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
const SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;


export default class TaskSpeaking {
  constructor() {
    this.task = '';
  }
  getRandomTask() {
    this.task = randomWord();
    this.showTask();
    $('#speechStart').click(this.testSpeech.bind(this));
    return this.task;
  }

  checkAnswer() {
    return $('#wordResult').text() === 'Верно!';
  }

  testSpeech() {
    $('#speechStart').prop('disabled', true);
    $('#speechStart').text('Произнесите слово');
    const grammar = `#JSGF V1.0; grammar phrase; public <phrase> = ${this.task.word};`;
    const recognition = new SpeechRecognition();
    const speechRecognitionList = new SpeechGrammarList();
    speechRecognitionList.addFromString(grammar, 1);
    recognition.grammars = speechRecognitionList;
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.start();

    recognition.onresult = (event) => {
      const speechResult = event.results[0][0].transcript;
      $('#speechResult').text(`Вы сказали: ${speechResult}.`);
      if (speechResult === this.task.word) {
        $('#wordResult').text('Верно!');
      } else {
        $('#wordResult').text('Неверно!');
      }
      console.log(`Confidence: ${event.results[0][0].confidence}`);
    };

    recognition.onspeechend = () => {
      recognition.stop();
      // $('#speechStart').prop( "disabled", false );
      $('#speechStart').text('Нажмите кнопку ответить');
    };

    recognition.onerror = (event) => {
      $('#speechStart').prop('disabled', false);
      $('#speechStart').text('Начать');
      $('#wordResult').text = `Ошибка в распозовании: ${event.error}`;
    };
  }

  showTask() {
    const html = `
    <h4 class="task border speaking"> ${this.task.word}</h4>
    <button type="button" id="speechStart" class="btn btn-success">Начать</button>
    <h4 class=" " id="wordResult"></h4>
    <h4 class=" " id="speechResult"></h4>`;

    $('#taskBody').html(html);
    $('#taskTitle').html('Нажмите кнопку начать и произенесите написаное слово');
  }
}
