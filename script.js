//prompt for name
var petName = prompt("Name your pet");
if(petName === " " | petName === null | petName === undefined){
    prompt("Please give your pet a real name");
}
//initialize stats
var energy = 0;
var happiness = 0;
 
for (let i = 0; i < 6; i++){
    var action = prompt("feed, pet, or walk?");
        if (action === 'feed') {
            energy += 2;  
        }
        else if (action === 'pet') {
            happiness += 1;
        }
        else if (action === 'walk') {
            if (energy <1) {
                alert("Not enough energy to enjoy a walk.")
            }
            else {
                happiness += 2; 
                energy -= 1;
            }
        }
}
console.log(`${petName} has ${happiness} happiness and ${energy} energy.`)
