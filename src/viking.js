// Soldier
class Soldier {
  constructor(health, strength){
    this.health = health;
    this.strength = strength;     
  }

  attack(){
    return this.strength;
  };

  receiveDamage(theDamage){
    this.health = this.health - theDamage;
  };

}


// Viking
class Viking extends Soldier{
  constructor(name, health, strength ){
    super(health,strength);
    this.name = name;
  };

  receiveDamage(theDamage){
    super.receiveDamage(theDamage);
    if(this.health > 0){
      return `${this.name} has received ${theDamage} points of damage`;
    }
    return `${this.name} has died in act of combat`;
  }

  battleCry(){
    return "Odin Owns You All!";
  };

};

// Saxon
class Saxon extends Soldier {   
  super.receiveDamage(theDamage){
    if(this.health > 0){
      return `A Saxon has received ${theDamage} points of damage`;
    }
    return `A Saxon has died in combat`;
  }   
}


// War
class War {
    constructor(){
        this.vikingArmy = []
        this.saxonArmy = []
    }
    addViking(viking){
        this.vikingArmy.push(viking)
    }
    addSaxon(saxon){
        this.saxonArmy.push(saxon)
    }
    vikingAttack(){
        let randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length)
        let randomViking = this.vikingArmy[randomVikingIndex]   //qual viking que é 
        let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length)   //sorteio um index de um saxon
        let randomSaxon = this.saxonArmy[randomSaxonIndex]      //qual saxon é
        //acima foram escolhidos aleatoriamente o viking e o saxon que estao lutando

        let fight = randomSaxon.receiveDamage(randomViking.attack())
        if(randomSaxon.health <= 0){
            this.saxonArmy.splice(randomSaxonIndex, 1)
        }
        return fight
    }
    saxonAttack(){
        let randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length)
        let randomViking = this.vikingArmy[randomVikingIndex]   //qual viking que é 
        let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length)   //sorteio um index de um saxon
        let randomSaxon = this.saxonArmy[randomSaxonIndex]      //qual saxon é
        //acima foram escolhidos aleatoriamente o viking e o saxon que estao lutando

        let fight = randomViking.receiveDamage(randomSaxon.attack())
        if(randomViking.health <= 0){
            this.vikingArmy.splice(randomVikingIndex, 1)
        }
        return fight
    }
    showStatus(){
        if(this.vikingArmy.length > 0 && this.saxonArmy.length > 0){
            return `Vikings and Saxons are still in the thick of battle.`
        } else if(this.vikingArmy.length === 0){
            return `Saxons have fought for their lives and survived another day...`
        } else {
            return `Vikings have won the war of the century!`
        }
    }


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
