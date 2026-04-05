# Journey of Batch 2023-2026

A beautiful, emotional, and modern React-based memory album website celebrating the journey of Batch 2023-2026.

## Features

- **Auto-changing Image Carousel** - Hero section with smooth fade transitions
- **Light/Dark Mode** - Toggle between themes with smooth transitions
- **Timeline Journey** - Year-wise milestone cards with hover effects
- **Media Vault** - Filterable photo/video gallery with modal preview
- **Our Group** - Interactive member cards with hover animations
- **Memory Wall** - Sticky notes style memories with playful rotations
- **Fully Responsive** - Optimized for mobile, tablet, and desktop
- **Smooth Animations** - Fade-in effects, hover states, and transitions
- **Glassmorphism Design** - Modern blur effects and transparency

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Lucide React Icons
- Poppins Font

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Customization Guide

### Replace Placeholder Images

All placeholder images are from Pexels. Replace them with your own:

1. **Home Carousel** - Edit `src/components/Home.tsx` (carouselImages array)
2. **Journey Section** - Edit `src/components/Journey.tsx` (timelineData array)
3. **Media Vault** - Edit `src/components/MediaVault.tsx` (mediaItems array)
4. **Our Group** - Edit `src/components/OurGroup.tsx` (members array)

### Replace Videos

Video placeholders are currently styled divs. To add real videos:

1. Upload videos to your hosting service
2. Replace the placeholder divs with `<video>` tags
3. Add proper video controls and attributes

### Update Member Information

Edit `src/components/OurGroup.tsx`:
- Update names, roles, descriptions
- Change profile images
- Customize extra info text

### Customize Colors

The site uses gradient colors. To change:
- Edit gradient classes in component files
- Default: purple, pink, blue gradients
- Pattern: `from-[color]-400 to-[color]-400`

### Update Memory Notes

Edit `src/components/MemoryWall.tsx`:
- Add/remove memories in the memories array
- Customize text, colors, and icons

## Deployment to Netlify

### Option 1: Drag & Drop

1. Run `npm run build`
2. Upload the `dist` folder to Netlify

### Option 2: Git Integration

1. Push code to GitHub
2. Connect repository to Netlify
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Deploy

### Option 3: Netlify CLI

```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx          # Navigation with theme toggle
│   ├── Home.tsx            # Hero section with carousel
│   ├── Journey.tsx         # Timeline section
│   ├── MediaVault.tsx      # Gallery with filters
│   ├── OurGroup.tsx        # Member cards
│   └── MemoryWall.tsx      # Sticky notes
├── contexts/
│   └── ThemeContext.tsx    # Dark mode management
├── App.tsx                 # Main component
├── index.css               # Global styles & animations
└── main.tsx                # Entry point
```

## Tips for Personalization

1. **Photos**: Use high-quality images (1920px width recommended)
2. **Videos**: Optimize for web (MP4 format, H.264 codec)
3. **Text**: Keep descriptions concise and emotional
4. **Colors**: Maintain consistent gradient theme throughout
5. **Performance**: Compress images before uploading

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for personal use.

---

Made with ❤️ for Batch 2023-2026
