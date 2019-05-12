const Jimp = require('jimp')
const fs = require('fs')

const processImage = async () => {
  console.log(`processImage start`)
  const fileIn = fs.readFileSync('input.jpg')
  const image = await Jimp.read(fileIn)
  const { width, height } = image.bitmap
  const { imageSize, tags: {ExifImageWidth, ExifImageHeight, Orientation}  } = image._exif
  const debugData = { bitmap: {width, height}, _exif: {imageSize, tags: {ExifImageWidth, ExifImageHeight, Orientation}} }
  console.log(JSON.stringify(debugData, null, 1))
  await image.write('output.jpg')
  console.log(`processImage end`)
}

processImage()