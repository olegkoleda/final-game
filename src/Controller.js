import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './css/style.css';
import './jq-ui/jquery-ui.min';

import {
  Monster, Player, TaskMath,
  TaskTranslate, TaskListening, TaskMix,
  Sotrage, Vizualization, TaskSpeaking,
  TaskNumberSequence, TaskWordSequence, TaskComparison,
} from './tasks-and-helpers/index';

export default class Controller {
  constructor() {
    this.monster = new Monster();
    this.player = new Player();
    this.vizualization = new Vizualization();
    this.vizualization.drawKnight();
    this.vizualization.drawMonster();
    this.taskMath = new TaskMath(1, 10);
    this.taskTranslate = new TaskTranslate();
    this.taskListening = new TaskListening();
    this.taskSpeaking = new TaskSpeaking();
    this.taskNumberSequence = new TaskNumberSequence();
    this.taskWordSequence = new TaskWordSequence();
    this.taskComparison = new TaskComparison();
    this.taskMix = new TaskMix();
    this.sotrage = new Sotrage('scoreBoard');
    this.currentTask = '';
    this.score = 0;
    this.addAllButtonListeners();
    this.spell0 = new Audio('assets/sounds/spell0.mp3');
    this.spell1 = new Audio('assets/sounds/spell1.wav');
    this.monsterSpell0 = new Audio('assets/sounds/monster0.wav');
  }

  addAllButtonListeners() {
    const that = this;

    // Task speeking
    $('#taskSpeaking').click(() => {
      this.currentTask = 'Speek';
      $('#spels').modal('hide');
      $('#task').modal({
        keyboard: false,
        backdrop: 'static',
      });
      this.taskSpeaking.getRandomTask();
    });

    // Task NumberSequence
    $('#taskNumbSeq').click(() => {
      this.currentTask = 'NumSeq';
      $('#spels').modal('hide');
      $('#task').modal({
        keyboard: false,
        backdrop: 'static',
      });
      this.taskNumberSequence.getRandomTask();
    });

    // Task WordSequence
    $('#taskWordSeq').click(() => {
      this.currentTask = 'WordSeq';
      $('#spels').modal('hide');
      $('#task').modal({
        keyboard: false,
        backdrop: 'static',
      });
      this.taskWordSequence.getRandomTask();
    });

    // Task Comparison
    $('#taskCompare').click(() => {
      this.currentTask = 'Compar';
      $('#spels').modal('hide');
      $('#task').modal({
        keyboard: false,
        backdrop: 'static',
      });
      this.taskComparison.getRandomTask();
    });

    // Task Math
    $('#taskMath').click(() => {
      this.currentTask = 'Math';
      $('#spels').modal('hide');
      $('#task').modal({
        keyboard: false,
        backdrop: 'static',
      });
      this.taskMath.getRandomTask();
    });

    // Task Translate
    $('#taskTrans').click(() => {
      this.currentTask = 'Trans';
      $('#spels').modal('hide');
      $('#task').modal({
        keyboard: false,
        backdrop: 'static',
      });
      this.taskTranslate.getRandomTask();
    });

    // Task Listening
    $('#taskListen').click(() => {
      this.currentTask = 'Listen';
      $('#spels').modal('hide');
      $('#task').modal({
        keyboard: false,
        backdrop: 'static',
      });
      this.taskListening.getRandomTask();
      this.taskListening.speack();
      $('#repeatWord').click(() => this.taskListening.repeat());
    });

    // Task Mixrd word
    $('#taskMix').click(() => {
      this.currentTask = 'Mix';
      $('#spels').modal('hide');
      $('#task').modal({
        keyboard: false,
        backdrop: 'static',
      });
      this.taskMix.getRandomTask();
      $('#mixedWord').sortable();
    });

    // Add answer button listener
    $('#checkTaskAnsw').click(this.addAnswerListener.bind(that));

    // Registration and rules
    $('#startGame').submit((e) => {
      e.preventDefault();
      const player = $('#nickName').val();
      this.player.name = player;
      $('.modal-registration').addClass('hide-modal');
    });

    // Modal spell choose listenner
    $('#spelChoice').click(() => {
      $('#spels').modal({
        keyboard: false,
        backdrop: 'static',
      });
    });
  }

  // Call back for button Check Ansver
  addAnswerListener() {
    const that = this;
    $('#task').off('hidden.bs.modal');
    let answerIsCorrect = false;
    let spellAtack = false;
    switch (this.currentTask) {
      case 'Math':
        answerIsCorrect = this.taskMath.checkAnswer($('#taskAnsw').val());
        spellAtack = true;
        break;

      case 'NumSeq':
        answerIsCorrect = this.taskNumberSequence.checkAnswer($('#taskAnsw').val());
        break;

      case 'Compar':
        answerIsCorrect = this.taskComparison.checkAnswer($('#taskAnsw').val().trim());
        break;

      case 'WordSeq':
        answerIsCorrect = this.taskWordSequence.checkAnswer($('#taskAnsw').val().toLowerCase());
        spellAtack = true;
        break;

      case 'Trans':
        answerIsCorrect = this.taskTranslate.checkAnswer($('#taskAnsw').val().toLowerCase());
        break;

      case 'Listen':
        answerIsCorrect = this.taskListening.checkAnswer($('#taskAnsw').val().toLowerCase());
        spellAtack = true;
        break;

      case 'Speek':
        answerIsCorrect = this.taskSpeaking.checkAnswer();
        spellAtack = true;
        break;

      case 'Mix':
        answerIsCorrect = this.taskMix.checkAnswer($('#mixedWord').children());
        break;

      default: answerIsCorrect = false;
        break;
    }

    if (answerIsCorrect) {
      $('#task').modal('hide');
      $('#task').on('hidden.bs.modal', () => {
        if (spellAtack) {
          this.spell0.play();
          this.vizualization.setKnightAnimation('attack');
          this.vizualization.drawFireAttack();
          this.vizualization.knight.on('frameIndexChange', () => {
            if (this.vizualization.knight.frameIndex() === 6) {
              setTimeout(() => {
                this.vizualization.setKnightAnimation('idle');
              }, 1000 / this.vizualization.knight.frameRate());
            }
          });
          that.monster.health -= that.player.damage;
        } else {
          this.spell1.play();
          this.vizualization.setKnightAnimation('heal');
          this.vizualization.drawHeal();
          this.vizualization.knight.on('frameIndexChange', () => {
            if (this.vizualization.knight.frameIndex() === 6) {
              setTimeout(() => {
                this.vizualization.setKnightAnimation('idle');
              }, 1000 / this.vizualization.knight.frameRate());
            }
          });
          that.player.health += that.player.damage;
          if (that.player.health > 100) { that.player.health = 100; }
        }
        this.checkWon();
      });
    } else {
      $('#task').modal('hide');
      $('#task').on('hidden.bs.modal', () => {
        this.monsterSpell0.play();
        this.vizualization.drawFireBall();
        that.player.health -= that.monster.damage;
        this.checkWon();
      });
    }
  }

  checkWon() {
    if (this.player.health <= 0) {
      this.sotrage.store(this.player.name, this.score);
      this.showScore();
      return;
    }
    if (this.monster.health <= 0) {
      this.score += 1;
      this.monster = new Monster();
      this.vizualization.monsterLayer.destroyChildren();
      this.vizualization.drawMonster();
      this.monster.damage += 10 * this.score;
    }
  }

  showScore() {
    this.sotrage.get();
    $('#modalScore').addClass('show');
  }
}

