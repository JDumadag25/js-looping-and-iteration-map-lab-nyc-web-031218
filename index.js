// Code your solution in this file.
function lowerCaseDrivers(array) {
  return array.map(function(drivers) {
    return drivers.toLowerCase()
  })
}

function nameToAttributes(names) {
  return names.map(function(driverNames){
    return {firstName: driverNames.split(' ')[0], lastName: driverNames.split(' ')[1]}
  })
}

function attributesToPhrase(drivers) {
  return drivers.map(function(info){
    return `${info.name} is from ${info.hometown}`
  })
}
