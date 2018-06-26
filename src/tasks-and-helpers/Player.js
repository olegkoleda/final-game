import $ from 'jquery';

export default class Player {
  constructor() {
    this._name = 'userName';
    this._health = 100;
    this.damage = 20;
    this.render();
  }

  render() {
    $('#heroName').html(this.name);
    $('#heroHp').css('width', `${this.health}%`);
  }

  update() {
    $('#heroName').html(this.name);
    $('#heroHp').css('width', `${this.health}%`);
  }

  get health() {
    return this._health;
  }

  set health(newHealth) {
    this._health = newHealth;
    this.update();
  }
  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
    this.update();
  }
}

