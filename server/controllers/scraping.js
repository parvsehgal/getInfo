const puppeteer = require('puppeteer')

async function getTitleFromYouTubeLink(link) {
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();
  await page.goto(link);
  const bookData = await page.evaluate(() => {
    const bookpods = Array.from(document.querySelectorAll('.product_pod'))
    const data = bookpods.map((book) => {
      return ({
        title: book.querySelector('h3 a').getAttribute('title')
      })
    })
    return data
  })
  console.log(bookData)
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

