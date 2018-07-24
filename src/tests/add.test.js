const add = (a,b) => a+b;
const generateGreeting  = (name) => `Welcome ${name}`;

//Declaring test function, 2 arguments : (test name, callback method where we will perform the testing)
test("TEST that adds 2 numbers", () => {
    const result = add(3,4);

    //This thing below is an assertion
    // if(result != 7){
    //     throw new Error(`Added result : ${result}, expected : '7'`)
    // }

    //Jest provides us with assertion functions make tasks easier
    expect(result).toBe(7);
})

test("TEST that Greets", () => {
    const result = generateGreeting('Shubham')
    expect(result).toBe('Welcome Shubham')
})