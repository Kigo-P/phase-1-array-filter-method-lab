// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers,name){
    return drivers.filter(function(driver) {
        return driver.toLowerCase().includes(name.toLowerCase());
    });
}
console.log(findMatching("bobby"))

function fuzzyMatch(drivers,letters){
    return drivers.filter(function(driver) {
        return driver.startsWith(letters)})
}

function matchName(drivers,name){
    return drivers.filter(function(driver) {
        return driver.name === name;
    });
}

