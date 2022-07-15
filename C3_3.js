function createEmptyWithoutProte() {
    return Object.create(null);
}

obj = createEmptyWithoutProte()
console.log(obj)