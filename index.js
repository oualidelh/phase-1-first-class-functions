function receivesAFunction(thing) {

    return thing();
}
function returnsANamedFunction() {

    return function thing() { };
}
function returnsAnAnonymousFunction() {
    return function () { };
}