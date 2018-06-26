import $ from 'jquery';

import Controller from './Controller';

let controller = new Controller();

// Restart game button
function restart() {
  controller = new Controller();
  $('#modalScore').removeClass('show');
  $('.modal-registration').removeClass('hide-modal');
}

$('#restart').click(restart);
