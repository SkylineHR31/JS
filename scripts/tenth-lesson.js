function Unit(type, health, maxHealth, maxDistance) {
    this.type = type;
    this.health = health;
    this.maxHealth = maxHealth;
    this.maxDistance = maxDistance;
}

Unit.prototype.isReadyToMove = function(distance) {
    if (distance < this.maxDistance) return false; 
    return true;
};

Unit.prototype.isReadyToFight = function() {
    if (this.health < this.maxHealth/2) return false;
    return true; 
};

Unit.prototype.restore = function() {
    if (this.health < this.maxHealth) {
        this.health = this.maxHealth;        
    }
};

Unit.prototype.clone = function() {
    return Object.assign(this);
};

function Army(defaultUnits) {
    this.units = [];
    if (defaultUnits) this.combineUnits(defaultUnits);
}

Army.prototype.isReadyToMove = function(distance) {
    for (const iterator of this.units) {
        if (distance < this.units[iterator].maxDistance) return false; 
    }
    return true;
};

Army.prototype.isReadyToFight = function() {
    for (const iterator of this.units) {
        if (this.units[iterator].health < this.units[iterator].maxHealth/2) return false; 
    }
    return true;
};

Army.prototype.restore = function() {
    for (const iterator of this.units) {
        if (this.units[iterator].health < this.units[iterator].maxHealth) {
            this.units[iterator].health = this.units[iterator].maxHealth;        
        }
    }
};

Army.prototype.getReadyToMoveUnits = function (distance) {
    let movableUnits = [];
    for (const iterator of this.units) {
        if (distance < this.units[iterator].maxDistance) continue;
        movableUnits.push(this.units[iterator]);        
    }
    return movableUnits;
};

Army.prototype.combineUnits = function(unitsArray) {
    for (const iterator of unitsArray) {
        this.units.push(unitsArray[iterator]);        
    }
};

Army.prototype.cloneUnit = function(unitId) {
    return Object.assign(this.units[unitId]);
};