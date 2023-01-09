class Device {
constructor(name) {
    this.name = name,
    this.wattage = 0,
    this.active = false,
    this.useRoom = 'kitchen'
    }

    switchOn () {
    this.active = true
    }
    switchOff() {
    this.active = false
    }
}

// Teapot
class Teapot extends Device {
    constructor(company, model, color, wattage) {
    super(),
    this.name = 'Чайник',
    this.company = company,
    this.model = model,
    this.color = color,
    this.wattage = wattage
    }

    mode(mode) {
    this.mode = mode,
    this.wattage *= mode
    }
}


//Fridge
class Fridge extends Device {
    constructor(company, model, color, wattage) {
    super()
    this.name = 'Холодильник',
    this.company = company,
    this.model = model,
    this.color = color,
    this.wattage = wattage
    }

    mode(mode) {
    this.mode = mode,
    this.wattage *= mode
    }
}

//Television
class Television extends Device{
    constructor(company, model, color, wattage) {
    super()
    this.name = 'Телевизор',
    this.company = company,
    this.model = model,
    this.color = color,
    this.wattage = wattage
    }
    
    worktime(worktime) {
    this.worktime = worktime,
    this.wattage *= worktime
    }
}

//Instances
const teapot1 = new Teapot('Kitfort', 'Best tea', 'Silver', 1200)
const fridge1 = new Fridge('Samsung', 'Cold2000', 'White', 120)
const fridge2 = new Fridge('Electrolux', 'Ice', 'White', 150)
const television1 = new Television('Philips', 'wh33310', 'Black', 100)

teapot1.switchOff()
teapot1.mode(2)
fridge1.switchOn()
fridge1.mode(3)
fridge2.switchOn()
fridge2.mode(2)
television1.switchOn()
television1.worktime(5)

console.log(sumWattage([teapot1, fridge1, fridge2, television1]))

function sumWattage(devises) {
    let result = 'Включенные электроприборы на кухне: \n'
    let wattage = 0

    devises.forEach((element) => {
        if (element.active) {
            result += element.name + ' \"' + element.company + ' ' + element.model + ' ' + element.color + '\" ' + 'потребляет : ' + element.wattage + ' Вт \n'
            wattage += element.wattage
        }
    })
    result += 'Общее потребление электроэнергии : ' + wattage + ' Вт'
    return result
}