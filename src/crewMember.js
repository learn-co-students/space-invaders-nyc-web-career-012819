class CrewMember {
  constructor(position) {
    this.position = position;
    this._currentShip = undefined;
  }

  get currentShip() {
    return (this._currentShip === undefined) ? 'Looking for a Rig' : this._currentShip
  }

  set currentShip(spaceship) {
    this._currentShip = spaceship;
  }

  chargePhasers() {
    if (this._currentShip === undefined) { return 'had no effect'; }

    if (this.position === 'Gunner') {
      this._currentShip.phasersCharge = 'charged';
    }
  }

  engageWarpDrive() {
    if (this._currentShip === undefined) { return 'had no effect'; }

    if (this.position === 'Pilot') {
      this._currentShip.warpDrive = 'engaged';
    }
  }

  setsInvisibility() {
    if (this._currentShip === undefined) { return 'had no effect'; }
    
    if (this.position === 'Defender') {
      this._currentShip.cloaked = true;
    }
  }
}
