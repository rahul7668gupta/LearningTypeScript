enum Role {
    Admin = 'mahAdmin',
    User = 'asa',
    Guest = 'das'
}

const person: {
    name: string;
    age: number;
    greet(): void;
    role: Role;
    roles: [string, number]
} = {
    name: 'Max',
    age: 27,
    role: Role.Guest,
    roles: [Role.User, 1],
    greet() {
        console.log('Hi, I am ' + this.name);
    }
}

console.log(person.role);

enum ResultTypes {
    asNumber = 'number',
    asString = 'string',
    asNone = 'none'
}

const n1 = 3;
const n2 = 4;

function combine(n1: number | string, n2: number | string, type: ResultTypes): string | number {
    if (typeof n1 === 'number' && typeof n2 === 'number' && type === ResultTypes.asNumber) {
        return n1 + n2
    } else if (type === ResultTypes.asString) {
        return n1.toString() + n2.toString()
    } else {
        console.error('Type not found')
        return;
    }
}

console.log(
    combine(n1, n2, ResultTypes.asNone)
);

// union alaisation
type Combinable = number | string;

// function return types and callbacks
function printResult(toPrint: string): void {
    console.log('Bella Ciao ' + toPrint)
}

const functionCopy: (a: string) => void = printResult

functionCopy('Bella Ciao Bella Ciao Ciao Ciao')