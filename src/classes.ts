interface IFighter {
  name: string;
  health: number;
  setDamage:(damage: number) => void;
  hit:(enemy: IImprovedFighter, point: number) => void
}

interface IImprovedFighter extends IFighter {
  doubleHit:(enemy: IFighter, point: number) => void
}


class Fighter implements IFighter {
  name: string;
  protected power: number;
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

  hit(enemy: IFighter, point: number): void {
    let damage = point * this.power;
    enemy.setDamage(damage);
  }
}


class ImprovedFighter extends Fighter implements IImprovedFighter {
  doubleHit(enemy: IFighter, point: number): void {
    let doublePoint = point * 2;
    super.hit(enemy, doublePoint);
  }
}

export {IFighter, IImprovedFighter, Fighter, ImprovedFighter};