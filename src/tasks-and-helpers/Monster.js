import $ from 'jquery';
import getMonsterName from './monsterName';

export default class Monster {
  constructor() {
    this._name = getMonsterName();
    this._health = 100;
    this.damage = 10;
    this.render();
  }

  render() {
    $('#monsterName').html(this.name);
    $('#monsterHp').css('width', `${this.health}%`);
  }

  update() {
    $('#monsterHp').css('width', `${this.health}%`);
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }

  get health() {
    return this._health;
  }

  set health(newHealth) {
    this._health = newHealth;
    this.update();
  }
}

