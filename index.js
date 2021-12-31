const puppeteer = require('puppeteer');
    async function scrapeWebsite(idNumber) {
        const browser = await puppeteer.launch({
            headless: false
        });
        const page = await browser.newPage();
        await page.goto('https://www.dpsa.gov.za/psearch/');
        await page.type('input[type="text"]', idNumber);
        await page.click('input[type="submit"]');

        const spanCount = await page.$$eval('span', (span) => {
            return span[0].textContent});
        console.log(spanCount);
        await page.waitForTimeout(5000);
        await browser.close();
    }
    scrapeWebsite('9005085373082');