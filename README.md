# jimp-exif-text
Demonstrate a bug with EXIF rotated images

# Steps to reproduce
1. checkout this repo
2. `yarn`
3. `yarn start`

# Original image
![](input.jpg)
This image should be in a protrait orientation (height > width). Note that your browser/github might still show it as landscape here! Download the file and open it in GIMP, Photoshop or a similar program.

# Output that is broken
![](output.jpg)
This is the output.jpg that JIMP produces. There are black bars on the right and left, and the image is actually in landscape this time.
