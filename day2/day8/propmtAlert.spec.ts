   import test from '@playwright/test'
test.only("prompt Alert with page.on",async({page})=>{
 

    page.on('dialog',type=>{
const alertName=type.type()
//alert name=> alert,confirm,prompt
console.log(alertName)
console.log(type.message())


if(alertName==='confirm'){
    //alert===confirm
    //confirm===confirm
    type.accept()
    
}else{
    type.accept("sowmiya")
}
    })


    await page.goto("https://www.leafground.com/alert.xhtml")
 
    await page.locator("//span[text()='Show']").nth(4).click()
     await page.waitForTimeout(10000)
})