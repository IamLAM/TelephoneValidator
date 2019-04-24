function telephoneCheck(str) {
    // Good luck!
    //total numbers 10 obligatory
    //one number optional
    //two parenthesis optional
    //hyphen optional
    // dont matter spaces
    let exp = /^(1\s|1)?(\(\d{3}\)|\d{3})(-|\s)?\d{3}(-|\s)?\d{4}$/gi;
    let val = exp.test(str);
    if (val == true) {
        console.log("telephone is valid");
        return true;
    } else {
        console.log("telephone is invalid");
        return false;
    }



}



telephoneCheck("555-5555");