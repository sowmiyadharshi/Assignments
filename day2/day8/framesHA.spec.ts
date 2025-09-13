import test, { expect } from '@playwright/test'

test("Handle frame with  index Value",async({page})=>{

await page.goto("https://www.leafground.com/frame.xhtml")
//count of frames
const frameCount=page.frames()

console.log("Frame count is "+frameCount.length);
const Frame=frameCount[1]

console.log("Before handle frame: "+await Frame.locator("#Click").innerText());
await Frame.locator("#Click").click()
console.log("After handle frame: "+await Frame.locator("#Click").innerText());

//Nested frame
const nestedFrame=frameCount[4]
console.log("Before handle frame: "+await nestedFrame.locator("#Click").innerText());

await nestedFrame.locator("#Click").click()
const txt=await nestedFrame.locator("#Click").innerText();

  await expect(txt).toMatch('Hurray! You Clicked Me.');
  console.log("text after clicking",txt)

})

