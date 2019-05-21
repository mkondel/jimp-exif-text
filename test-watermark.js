const Jimp = require('jimp')
const fs = require('fs')
const jo = require('jpeg-autorotate')

const processImage = async () => {
  console.log(`processImage start`)

  const fileIn = fs.readFileSync('input.jpg')
  const image = await Jimp.read(fileIn)
  await image.write('output.jpg')

  console.log(`processImage end`)
}

const processImageFixed = async () => {
  console.log(`processImageFixed start`)

  const fileIn = fs.readFileSync('input.jpg')
  const {buffer} = await jo.rotate(fileIn, {quality: 30})
  const image = await Jimp.read(buffer)
  await image.write('output-fixed.jpg')

  console.log(`processImageFixed end`)
}

processImage()

processImageFixed()
