var Role;
(function (Role) {
    Role["Admin"] = "mahAdmin";
    Role["User"] = "asa";
    Role["Guest"] = "das";
})(Role || (Role = {}));
var person = {
    name: 'Max',
    age: 27,
    role: Role.Guest,
    roles: [Role.User, 1],
    greet: function () {
        console.log('Hi, I am ' + this.name);
    }
};
console.log(person.role);
var ResultTypes;
(function (ResultTypes) {
    ResultTypes["asNumber"] = "number";
    ResultTypes["asString"] = "string";
    ResultTypes["asNone"] = "none";
})(ResultTypes || (ResultTypes = {}));
var n1 = 3;
var n2 = 4;
function combine(n1, n2, type) {
    if (typeof n1 === 'number' && typeof n2 === 'number' && type === ResultTypes.asNumber) {
        return n1 + n2;
    }
    else if (type === ResultTypes.asString) {
        return n1.toString() + n2.toString();
    }
    else {
        console.error('Type not found');
        return;
    }
}
console.log(combine(n1, n2, ResultTypes.asNone));
// function return types and callbacks
function printResult(toPrint) {
    console.log('Bella Ciao ' + toPrint);
}
var functionCopy = printResult;
functionCopy('Bella Ciao Bella Ciao Ciao Ciao');
