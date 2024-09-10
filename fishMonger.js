const { boatInventory } = require("./fishingBoat.js")

const mongerInventory = () => {
    return boatInventory().filter(item => item.amount >= 10 && item.price <= 7.5)
}
//filter mongerInventory for items <= price
const chefInventory = (price) => {
    return mongerInventory().filter(item => item.price <= price) //3.05
    }
        

module.exports = {chefInventory}

