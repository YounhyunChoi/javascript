class Animal {
    constructor(animalName) {
        this.animalName = animalName
    }

    run(speed) {
        this.speed = speed
        console.log(this.animalName, this.speed, 'run.')
    }

    stop() {
        this.speed = 0
        console.log(this.animalName, 'stop.')
    }
}

let animal = new Animal('animal')
console.log(animal)

animal.run(10)
console.log(animal)

animal.stop()
console.log(animal)

class Rabbit extends Animal {
    /*
    constructor(...args) {
        super(...args)
    }
    */
    hide() {
        console.log(this.animalName, 'hide')
    }
}

let rabbit = new Rabbit()
console.log(rabbit)

rabbit = new Rabbit('rabbit')
console.log(rabbit)

console.log(rabbit.animalName)
rabbit.run(100)
rabbit.hide()

Rabbit = class extends Animal {
    constructor(rabbitName, color) {
        super(rabbitName)
        this.color = color
    }

    stop() {
        super.stop()
        this.hide()
    }

    hide() {
        console.log(this.animalName, this.color, 'hide.')
    }
}

rabbit = new Rabbit('rabbit', 'black')
rabbit.stop()