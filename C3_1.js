function getOwnProps(obj) {
    for (let prop in obj) {
        if (obj.hasOwnProperty(prop)){
            console.log(prop, obj[prop]);
        }
    }
}

obj1 = {
    a: 5,
    b: 6
}
obj2 = Object.create(obj1);

obj2.r = 42;

getOwnProps(obj2)
