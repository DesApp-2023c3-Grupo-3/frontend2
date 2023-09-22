export function carouselTableArray(array : any [], cantDeItems : number) {
    let arrayAux = [];
    for (let i = 0; i < array.length; i += cantDeItems) {
        arrayAux.push(array.slice(i, i + cantDeItems));
    }
    return arrayAux;
}