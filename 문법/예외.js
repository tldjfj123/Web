function doException() {
    throw new Error("Wow! It's an Error!");
}

function noException() {
    return true;
}

function callException(type) {
    if (type === 'do') {
        doException();
    } else {
        noException();
    }

}

function main() {
    try {
        callException();
    } catch(e) {
        console.log(e);
    } finally {
        console.log('done');
    }
    
}

main();