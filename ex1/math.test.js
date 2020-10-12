// @ts-check
// lesson is shamelessly plugged from testingjsvascript.com
const { sum, subtract, sumAsync, subtractAsync } = require("./math.js");

// test       a + b  = c
// test       a - b  = c
// async test a + b  = c
// async test a - b  = c

// by running assertions on the functions above

function expect(actual) {
    return{
        toBe(expected) {
            if (actual !== expected) {
            throw new Error(`${actual} is not  a ${expected}`);
        }
    },
};
}
async function test(title, callback) {
    try {
        await callback();
        console.log(`Alles gut ${title}`);
    } catch (error) {
        console.error(`Fehler ${title}`);
        console.error(error);
    }
}

test("should add 3 + 7 and give us 10", async () => {
    expect(await sumAsync(3, 7)).toBe(10);
});

test("should substract 5 and 2 and give us 3", async () => {
    expect(await subtractAsync(5, 2)).toBe(3);
});
