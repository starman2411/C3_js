function hasProp(prop, obj) {
    return prop in obj;
}

obj1 = {
    a: 5,
    b: 6,
    'age': 21
}

console.log(hasProp('a', obj1))