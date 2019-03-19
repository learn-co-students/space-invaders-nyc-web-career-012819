class CrewMember {

  constructor(position) {
    this.position = position;
    // array.length ? this.docked = false : this.docked = true;
    this.currentShip = 'Looking for a Rig';
    // new Spaceship(attributes)
  }

  engageWarpDrive() {
    return this.position === 'Pilot' && this.currentShip !== 'Looking for a Rig'
    ? (this.currentShip.warpDrive = 'engaged')
    : 'had no effect';
  }

  setsInvisibility() {
    return this.position === 'Defender' && this.currentShip !== 'Looking for a Rig'
    ? (this.currentShip.cloaked = true)
    : 'had no effect';
  }

  chargePhasers() {
    return this.position === 'Gunner' && this.currentShip !== 'Looking for a Rig'
    ? (this.currentShip.phasersCharge = 'charged')
    : 'had no effect';
  }

}
