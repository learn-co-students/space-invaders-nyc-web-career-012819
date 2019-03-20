class Spaceship {
  constructor(name, members, phasers, shields) {
    this.name = name;
    this.phasers = phasers;
    this.shields = shields;
    this.cloaked = false;
    this.warpDrive = 'disengaged';
    this.phasersCharge = 'uncharged';
    this.crew = members;

    if (!this.docked) {
      for (let member of this.crew) {
        member.currentShip = this;
      }
    }
  }

  get docked() {
    return (this.crew.length === 0) ? true : false
  }
}
