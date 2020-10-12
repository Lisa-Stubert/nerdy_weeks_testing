
export function add(a: number, b: number): number {
    return (a + b)
};

export function subtract(a: number, b: number): number {
    return (a - b)
};

export function select<T>(i: number, items: T[]): T | undefined {
    return items[i]
};

export function randomString(len: number): string {
    var j = 0;
    const source = "ABCD"
    var mystring = "";
    while (j !== len) {
        j = j+1 
        mystring += source.charAt(Math.floor(Math.random() * source.length))
    };
    return mystring
};

// /**
//  * Wirte a function that returns an object with a random number and a random string
//  */
export function randomValues(): { value: number; str: string } {
    const source = "ABCD";
    var mystring = "";
    var j = 0;
    while (j !== 100) {
        j = j+1;
        mystring += source.charAt(Math.floor(Math.random() * source.length))
    }
    let myObject = { 
        "value": Math.random() * 1000,
        "str": mystring
    };
    return myObject;
};

export function somethingShouldBeStatic(): { value: number; str: string } {
    return {
        "value": 1,
        "str": "yiihhaa",}
    }

