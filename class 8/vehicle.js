const ImportCar = require('./car.js')
const ImportBus = require('./bus.js')

console.log(ImportCar.price(2555))
console.log(ImportBus.price(2565))

var obb ={
    Name:'BMW',
    model:'Unknown',
    Height: '5.6m'
}
    
console.log(ImportCar.details(obb))
console.log(ImportBus.details(obb))