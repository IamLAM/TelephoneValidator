function telephoneCheck(str) {
    // Good luck!
    // let tel = [1, "(", 0, 0, 0, ")", "-", 0, 0, 0, "-", 0, 0, 0, 0];
    let exp = /[\(]\d{3}[\)]\d{3}[\-]\d{4}/gi;
    let val = exp.test(str);
    console.log(val);
}

//total numbers 10 obligatory
//one number optional
//two parenthesis optional
//hyphen optional
// dont matter spaces

telephoneCheck("(665)444-0000");