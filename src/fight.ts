import {Fighter, ImprovedFighter} from './classes';


let alliancePilot = new Fighter("X-wing", 20, 1000);
let empirePilot = new ImprovedFighter("TIE Fighter", 25, 800);

let fight = (fighter: Fighter, improvedFighter: ImprovedFighter, ...points: number[]) => {
  let firstMove;
  Math.random() > 0.5 ? firstMove = 1 : firstMove = 0;
  for (let point of points) {
    firstMove ? (fighter.hit(improvedFighter, point), firstMove = 0) : (improvedFighter.doubleHit(fighter, point), firstMove = 1);
    if ((fighter.health <= 0) || (improvedFighter.health <= 0)) {
      firstMove ? console.log(`${improvedFighter.name} wins!`) : console.log(`${fighter.name} wins!`);
      break;
    }
  }
};

fight (alliancePilot, empirePilot, 5, 8, 18, 11, 20, 4);