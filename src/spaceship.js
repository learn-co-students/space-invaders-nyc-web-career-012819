class Spaceship {

  constructor(name, crewArray, phasers, shields) {
    this.name = name;
    this.crew = crewArray;
    this.phasers = phasers;
    this.shields = shields;
    this.cloaked = false;
    this.warpDrive = 'disengaged';
    crewArray.length ? this.docked = false : this.docked = true;
    this.phasersCharge = 'uncharged';
    this.crewOnBoard();
  }

  crewOnBoard() {
    this.crew.forEach(member => {member.currentShip = this})
  }

}
