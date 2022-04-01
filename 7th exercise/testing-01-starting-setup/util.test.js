const {generateText} = require("./util");

/*function outPut(){
    const test = generateText("Krist", 22);
    expect(test).toBe("Kris (22 years old!)");
}*/

test("Shout output text and age", ()=>{
    const test = generateText('Kris', 22);
    expect(test).toBe("Kris (22 years old!)");
    const test2 = generateText("", null);
    expect(test2).toBe(" (null years old!)");
});
