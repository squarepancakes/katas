function phone(string, num) {
    // if (string.includes(num) === false) {
    //     return "Error => Not found: nb";
    // }
    const lastSqBkt = string.lastIndexOf("<");
    const firstSqBracket = string.indexOf("<");
    if(firstSqBracket === lastSqBkt) {

        const nameStart = firstSqBracket + 1;
        const nameEnd = string.indexOf(">");
        const name = string.slice(nameStart, nameEnd);
        const strWithoutName = string.replace(`<${name}>`, "")
        return `Phone => ${num}, Name => ${name}`;
    }
    else {
        return "Error => Too many people: nb"
    }
}





module.exports = phone;
