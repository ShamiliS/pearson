let caps = String.fromCharCode(...Array(123).keys()).slice(65,91);
let alphabet = String.fromCharCode(...Array(123).keys()).slice(97);
let numbers = String.fromCharCode(...Array(123).keys()).slice(48,58);

export function randomgenaratefirstname(){
    var result = '';
    for (var i = 0; i < 5; i++) {
        result += alphabet.charAt(Math.floor(Math.random() * 5));
    }
    const firstname = `${result}`
    return firstname
}

export function randomgenaratelastname() {
    var result = '';
    for (var i = 0; i < 5; i++) {
        result += alphabet.charAt(Math.floor(Math.random() * 5));
    }
    const lastname = `${result}`
    return lastname
}

export function randomgenarateemailID(length) {
    var result = '';
    let randomcharacters = alphabet+caps+numbers
    var charactersLength = randomcharacters.length;
    for (var i = 0; i < length; i++) {
        result += randomcharacters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
