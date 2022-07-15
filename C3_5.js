class ElecticialDevices{
    constructor(name, power) {
        this.name = name;
        this.power = power;
        this.plugged = false;
    }

    plugOn() {
        console.log(`${this.name} включен в розетку`);
        this.plugged = true;
    }

    plugOff() {
        console.log(`${this.name} выключен из розетки`);
        this.plugged = false;
    }
}


class Lamp extends ElecticialDevices {
    constructor(name, brand, power) {
        super(name, power)
        this.brand = brand;
        this.plugged = false;
    }
}

class Pc extends ElecticialDevices {
    constructor(name, brand, power, formFactor) {
        super(name, power)
        this.brand = brand;
        this.formFactor = formFactor;
        this.plugged = false;
    }
}


const myPc = new Pc('MyNotebook', 'Xiaomi', 20, 'notebook');
const tableLamp = new Lamp('Table lamp', 'Rex', 5);

tableLamp.plugOn();
console.log(tableLamp);
tableLamp.plugOff();
console.log(tableLamp);

myPc.plugOn();
console.log(myPc);