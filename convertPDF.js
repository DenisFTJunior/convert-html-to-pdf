const reader = require('./reader')
const handlebars = require('handlebars')
const puppeteer = require('puppeteer')

async function converter() {
   try{
    let info = {}
    const data = await reader(`./experiment.html`)
    const template = await handlebars.compile(data, { strict: true });
    const html =  await template(info);

    const browser = await puppeteer.launch();
    const page = await browser.newPage()

    await page.setContent(html)

    await page.pdf({ path: `test.pdf`, format: 'A4' })
    await browser.close();  
    console.log("convertido")
   }catch(err){
        console.log(err)
   }

}

module.exports = converter()