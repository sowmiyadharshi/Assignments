import { test, expect } from '@playwright/test';

test('Handle confirm alert inside iframe', async ({ page }) => {
  await page.goto('https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm');

  // Handle the confirm popup dialog
  page.on('dialog', async (dialog) => {
    console.log('Dialog message:', dialog.message());
    await dialog.accept(); // or dialog.accept();
     
   
  });

  // Click "Try it" inside the iframe
  const frame=page.frameLocator('#iframeResult')
  await frame.locator('text=Try it').click()

 const resultText = frame.locator('#demo');
  await expect(resultText).toHaveText('You pressed OK!');

  const text=await resultText.textContent()
  console.log("Asserted text is :", text)
})