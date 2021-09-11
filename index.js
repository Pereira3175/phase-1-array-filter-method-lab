const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, name) {
  let newName = drivers.filter(function(newName){
    return newName.toLowerCase() === name.toLowerCase()
  })
  return newName
}

findMatching(drivers, "Sammy");

function fuzzyMatch(drivers, partName) {
    let beingName = drivers.filter(function(name){
        return name.startsWith(partName)
    })
    return beingName
}

fuzzyMatch(drivers, "Sa")

function matchName (drivers, cb){
    const nameArray = drivers.filter (function(drivers){
        return drivers.name === cb;
    });
    return nameArray;
}
  
matchName (drivers, "Sammy");