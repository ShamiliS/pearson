let caps = String.fromCharCode(...Array(123).keys()).slice(65,91);
let alphabet = String.fromCharCode(...Array(123).keys()).slice(97);
let numbers = String.fromCharCode(...Array(123).keys()).slice(48,58);
var result = '';

export function randomgenaratefirstname() {
    for (var i = 0; i < 10; i++) {
        result += alphabet.charAt(Math.floor(Math.random() * 10));
    }
    const firstname = `${result}`
    return firstname
}

export function randomgenaratelastname() {
    for (var i = 0; i < 10; i++) {
        result += alphabet.charAt(Math.floor(Math.random() * 10));
    }
    const lastname = `${result}`
    return lastname
}

export function randomgenarateemailID(length) {
    let randomcharacters = alphabet+caps+numbers
    var charactersLength = randomcharacters.length;
    for (var i = 0; i < length; i++) {
        result += randomcharacters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
