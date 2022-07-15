function ElecticialDevices(name, power){
    this.name = name;
    this.power = power;
    this.plugged = false;
}
ElecticialDevices.prototype.plugOn = function(){
    console.log(`${this.name} включен в розетку`);
    this.plugged = true;
}

ElecticialDevices.prototype.plugOff = function(){
    console.log(`${this.name} выключен из розетки`);
    this.plugged = false;
}

function Lamp(name, brand, power) {
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.plugged = false;
}

function Pc(name, brand, power, formFactor) {
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.formFactor = formFactor;
    this.plugged = false;
}

Lamp.prototype = new ElecticialDevices();
Pc.prototype = new ElecticialDevices();

const myPc = new Pc('MyNotebook', 'Xiaomi', 20, 'notebook');
const tableLamp = new Lamp('Table lamp', 'Rex', 5);

tableLamp.plugOn();
console.log(tableLamp);
tableLamp.plugOff();
console.log(tableLamp);

myPc.plugOn();
console.log(myPc);