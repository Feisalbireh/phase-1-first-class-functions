function receivesAFunction(callback){
    return callback() 
}
receivesAFunction();

function returnsANamedFunction(){
    return function returnsANamedFunction() {
        return (`a named function`)
    }
}

function returnsAnAnonymousFunction(){
    return function(){
        return(`Anonymous Function`)
    }
}