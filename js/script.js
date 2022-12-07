const puppeteer = require('puppeteer');

let username = 'insung_youn';

const script = async username => {
    const browser = await puppeteer.launch({
        args: [
            '--incognito',
        ],
        headless: false
    });
    const page = await browser.newPage();
    await page.goto(`https://www.instagram.com/${username}`, { waitUntil:"networkidle2" });
    let followerCount = await page.evaluate(() => {
        
    })
    return 
}