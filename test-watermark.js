const Jimp = require('jimp')
const fs = require('fs')
const jo = require('jpeg-autorotate')

const processImage = async () => {
  console.log(`processImage start`)

  const fileIn = fs.readFileSync('input.jpg')
  const {buffer} = await jo.rotate(fileIn, {quality: 30})

  const image = await Jimp.read(buffer)

  const { width, height } = image.bitmap
  const { imageSize, tags: {ExifImageWidth, ExifImageHeight, Orientation}  } = image._exif
  const debugData = { bitmap: {width, height}, _exif: {imageSize, tags: {ExifImageWidth, ExifImageHeight, Orientation}} }
  console.log(JSON.stringify(debugData, null, 1))

  await image.write('output.jpg')

  console.log(`processImage end`)
}

processImage()