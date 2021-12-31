const puppeteer = require('puppeteer');
    async function main() {
        // const idNumber = '9005085373082';
        const browser = await puppeteer.launch({
            headless: false
        });
        const page = await browser.newPage();
        await page.goto('https://www.dpsa.gov.za/psearch/');
        await page.type('input[type="text"]', '9005085373082');
        await page.click('input[type="submit"]');

        const spanCount = await page.$$eval('span', (span) => {
            return span[0].textContent});
        await page.waitForTimeout(5000); // wait for 5 seconds
        await browser.close();
    }
    console.log(spanCount);
    main();