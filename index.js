const puppeteer = require('puppeteer');
    async function main() {
        const browser = await puppeteer.launch({
            headless: false
        });
        const page = await browser.newPage();
        await page.goto('https://www.dpsa.gov.za/psearch/');
        await page.waitForTimeout(5000); // wait for 5 seconds
        await browser.close();
    }
    main();