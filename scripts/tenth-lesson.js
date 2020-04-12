function Unit(type, health, maxHealth, maxDistance) {
    this.type = type;
    this.health = health;
    this.maxHealth = maxHealth;
    this.maxDistance = maxDistance;
}

Unit.prototype.isReadyToMove = function(distance) {
    return distance >= this.maxDistance;
};

Unit.prototype.isReadyToFight = function() {
    return this.health >= this.maxHealth/2; 
};

Unit.prototype.restore = function() {
    if (this.health < this.maxHealth) {
        this.health = this.maxHealth;        
    }
};

Unit.prototype.clone = function() {
    return Object.assign({}, this);
};

function Army(defaultUnits) {
    this.units = [];
    if (defaultUnits) this.combineUnits(defaultUnits);
}

Army.prototype.isReadyToMove = function(distance) {
    for (const unit of this.units) { 
        if (!unit.isReadyToMove(distance)) return false;
    }
    return true;
};

Army.prototype.isReadyToFight = function() {
    for (const unit of this.units) {
        if (!unit.isReadyToFight()) return false;
    }
    return true;
};

Army.prototype.restore = function() {
    for (const unit of this.units) {
        unit.restore();
    }
};

Army.prototype.getReadyToMoveUnits = function (distance) {
    let movableUnits = [];
    for (const unit of this.units) {
        if(unit.isReadyToMove) {
            movableUnits.push(unit);
        }       
    }
    return movableUnits;
};

Army.prototype.combineUnits = function(unitsArray) {
    for (const unit of unitsArray) {
        this.units.push(unit);        
    }
};

Army.prototype.cloneUnit = function(unitId) {
    return Object.assign({} ,this.units[unitId]);
};