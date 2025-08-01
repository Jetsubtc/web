# Images Folder Structure

This folder contains all the images for your Axie Cord website.

## Folder Structure:

- **`hero/`** - Hero section images, banners, main visuals
- **`nfts/`** - NFT collection images, individual Axie images
- **`team/`** - Team member photos, profile pictures
- **`backgrounds/`** - Background images, textures, patterns
- **`logos/`** - Logo files, brand assets

## How to Use:

1. **Add your images** to the appropriate folder
2. **Reference them in your code** like this:
   ```jsx
   <img src="/images/hero/your-image.jpg" alt="Description" />
   ```

## Recommended Image Formats:
- **JPG/JPEG** - For photos and complex images
- **PNG** - For images with transparency
- **WebP** - For better compression (modern browsers)
- **SVG** - For logos and simple graphics

## Image Optimization Tips:
- **Hero images**: 1920x1080px or larger
- **NFT images**: 800x800px or 1000x1000px
- **Team photos**: 400x400px or 500x500px
- **Logos**: 200x200px or smaller

## Example Usage:
```jsx
// In your React components
import Image from 'next/image'

<Image 
  src="/images/nfts/axie-001.jpg" 
  alt="Axie Cord #001"
  width={400}
  height={400}
/>
``` 