import {IFighter, IImprovedFighter} from './interfaces';

class Fighter implements IFighter {
  name: string;
  power: number;
  health: number

  constructor(name: string = "Unknown ship", power: number = 27, health: number = 500) {
    this.name = name;
    this.power = power;
    this.health = health;
  }

  setDamage(damage: number): void {
    this.health -= damage;
    console.log(`${this.name} health: ${this.health}`);
  }

  hit(enemy: Fighter, point: number): void {
    let damage = point * this.power;
    enemy.setDamage(damage);
  }
}


class ImprovedFighter extends Fighter implements IImprovedFighter {
  doubleHit(enemy: Fighter, point: number): void {
    let doublePoint = point * 2;
    super.hit(enemy, doublePoint);
  }
}

export {Fighter, ImprovedFighter};