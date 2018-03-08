function tryCatchDemo(a){
    try {
        var upperCaseWord = a.toUpperCase();
        console.log(upperCaseWord);
    }
    catch(error){
        console.log(error);
    }
}
tryCatchDemo("Hello");
tryCatchDemo("5555");
