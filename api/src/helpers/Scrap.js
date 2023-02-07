const { webkit } = require("playwright");
const fs = require("fs");

async function Scrap () {
    const browser = await webkit.launch({headless: false})
    const page = await browser.newPage()
    await page.goto('https://www.adidas.com.ar/mujer?grid=true')

    const content = await page.evaluate(arg => {
        const extract = document.getElementsByClassName("glass-product-card-container")
        console.log('extract', extract)
        return extract.innerText
    })
    console.log(content)
    await browser.close()
}


module.exports = Scrap()