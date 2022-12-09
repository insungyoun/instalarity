const puppeteer = require('puppeteer');

let username = 'insung_youn';
let followerCount = 0;
let followingCount = 0;

const script = async username => {
    const browser = await puppeteer.launch({
        args: [
            '--incognito',
        ],
        headless: false
    });
    const page = await browser.newPage();
    await page.goto(`https://www.instagram.com/${username}/`, { waitUntil:"networkidle2" });
    await page.waitForSelector('//*[@id="mount_0_0_Z7"]/div/div/div/div[1]/div/div/div/div[1]/div[1]/div[2]/section/main/div/ul/li[2]/div/span/span');
    followerCount = page.$x('//*[@id="mount_0_0_Z7"]/div/div/div/div[1]/div/div/div/div[1]/div[1]/div[2]/section/main/div/ul/li[2]/div/span/span');
    let followingCount = page.$x("(//span[@class = '_ac2a _ac2b'])[3]");
    console.log(followerCount);
}

script(username);