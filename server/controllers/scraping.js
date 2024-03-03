const puppeteer = require('puppeteer');

async function getTitleFromYouTubeLink(link) {
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();
  await page.goto(link);
  const headingData = await page.evaluate(() => {
    const allElements = Array.from(document.querySelectorAll('.swiper-slide'))
    const list = allElements.map((each) => {
      return ({
        title: each.querySelector('a span').innerText,
        picUrl: each.querySelector('a img').getAttribute('src')
      })
    })
    return list
  })
  console.log(headingData)
  await browser.close()
}

exports.getInfo = async (req, res) => {
  try {
    const { url } = req.body;
    console.log(url)
    getTitleFromYouTubeLink(url).then(() => {
      console.log('sucess in taking ss')
    }).catch(() => {
      console.log('error in taking ss')
    })
    res.json("sucess")
  } catch (err) {
    console.log(err.message)
  }
}

