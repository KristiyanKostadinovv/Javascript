const puppeteer = require('puppeteer');
const {generateText} = require("./util");

/*function outPut(){
    const test = generateText("Krist", 22);
    expect(test).toBe("Kris (22 years old!)");
}*/

test("Shout output text and age", () => {
    const test = generateText('Kris', 22);
    expect(test).toBe("Kris (22 years old!)");
    const test2 = generateText("", null);
    expect(test2).toBe(" (null years old!)");
});

test("should click around", async () => {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 80,
        args: ["--windows-size=1920,1080"]

    });
    const page = await browser.newPage();
    await page.goto("http://localhost:63342/Javascript/7th exercise/testing-01-starting-setup/index.html?_ijt=rbqvge4om1pfk516oe8935knmp")
    await page.click("input#name" );
    await page.type("input#name", "Kris");
    await page.click("input#age");
    await page.type("input#age", "22");
    await page.click("#btnAddUser");
});