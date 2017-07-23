interface IFighter {
  name: string;
  power: number;
  health: number;
  setDamage:(damage: number) => void;
  hit:(enemy: IImprovedFighter, point: number) => void
}

interface IImprovedFighter extends IFighter {
  doubleHit:(enemy: IFighter, point: number) => void
}

export {IFighter, IImprovedFighter};