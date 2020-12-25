class Spaceship {
    constructor(name, crew, phasers, shields, cloaked = false, warpDrive = 'disengaged', phasersCharge = "uncharged"){
        this.name = name
        this.crew = crew
        this.phasers = phasers
        this.shields = shields
        this.cloaked = cloaked
        this.warpDrive = warpDrive
        this.phasersCharge = phasersCharge
        this.docked = this.isDocked()
        this.crewCurrentShip()
    }

    isDocked(){
        if (this.crew.length > 0){
            return false
        } else {
            return true
        }
    }

    crewCurrentShip(){
        if (this.crew.length > 0){
            this.crew.forEach(member => member.currentShip = this)
        }
    }
}
