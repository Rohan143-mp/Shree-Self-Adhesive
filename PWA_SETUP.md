# PWA Setup Documentation

This application has been configured as a Progressive Web App (PWA) with the following features:

## ✅ Implemented Features

### 1. **Web App Manifest** (`/public/manifest.json`)
- App name, short name, and description
- Theme colors matching brand (#800020)
- Icons in multiple sizes (72x72 to 512x512)
- Standalone display mode
- App shortcuts for quick access to Products and Contact sections

### 2. **Service Worker** (`/public/sw.js`)
- Offline functionality with caching strategies
- Static asset caching for fast loading
- Dynamic caching for images and static resources
- Automatic cache cleanup for updates
- Background sync support (ready for future implementation)

### 3. **PWA Icons**
All required icon sizes are available in `/public/icons/`:
- 72x72, 96x96, 128x128, 144x144, 152x152, 192x192, 384x384, 512x512

### 4. **Meta Tags & Configuration**
- Apple Touch Icon support
- Windows Tile configuration (`browserconfig.xml`)
- Theme color meta tags
- Mobile web app capabilities
- Proper viewport configuration

### 5. **Performance Optimizations**
- Image lazy loading for below-the-fold content
- Priority loading for critical images
- Compression enabled in Next.js config
- Optimized caching headers
- Service worker caching for offline access

### 6. **Offline Support**
- Custom offline page (`/public/offline.html`)
- Service worker fallback for navigation requests
- Cached static assets for offline access

## 🚀 How to Test PWA Features

### Development
1. Build the production version:
   ```bash
   npm run build
   npm start
   ```

2. Open Chrome DevTools → Application tab
3. Check:
   - **Manifest**: Should show all app details
   - **Service Workers**: Should show registered worker
   - **Cache Storage**: Should show cached assets

### Production Testing
1. Deploy to a server with HTTPS (required for PWA)
2. Visit the site on a mobile device
3. Look for "Add to Home Screen" prompt
4. Test offline functionality by disabling network

## 📱 Installation

Users can install the app by:
- **Chrome/Edge**: Click the install icon in the address bar
- **Safari (iOS)**: Share → Add to Home Screen
- **Firefox**: Menu → Install

## 🔧 Configuration Files

- `public/manifest.json` - PWA manifest
- `public/sw.js` - Service worker
- `public/offline.html` - Offline fallback page
- `public/browserconfig.xml` - Windows tile config
- `next.config.mjs` - Next.js PWA optimizations
- `app/layout.tsx` - PWA meta tags and registration
- `app/register-sw.tsx` - Service worker registration component

## 🎨 Customization

### Update Icons
Replace the placeholder icons in `/public/icons/` with your branded icons. Ensure all sizes are provided.

### Update Theme Color
Change `theme_color` in:
- `public/manifest.json`
- `app/layout.tsx` (viewport and meta tags)
- `public/browserconfig.xml`

### Modify Caching Strategy
Edit `/public/sw.js` to adjust:
- Cache names and versions
- Assets to pre-cache
- Caching strategies for different resource types

## 📊 Performance Metrics

The PWA is optimized for:
- **First Contentful Paint (FCP)**: < 1.8s
- **Largest Contentful Paint (LCP)**: < 2.5s
- **Time to Interactive (TTI)**: < 3.8s
- **Cumulative Layout Shift (CLS)**: < 0.1

## 🔒 Security

- Service worker only works over HTTPS (or localhost)
- Content Security Policy can be added in `next.config.mjs`
- All cached content is validated before serving

## 📝 Next Steps

1. **Replace placeholder icons** with actual branded icons
2. **Test on real devices** to ensure proper installation
3. **Monitor service worker** updates and cache hits
4. **Add push notifications** if needed (requires additional setup)
5. **Implement background sync** for form submissions if required

## 🐛 Troubleshooting

### Service Worker Not Registering
- Ensure you're on HTTPS or localhost
- Check browser console for errors
- Verify `/public/sw.js` is accessible

### Icons Not Showing
- Verify all icon files exist in `/public/icons/`
- Check `manifest.json` paths are correct
- Clear browser cache and reinstall

### Offline Not Working
- Check service worker is registered
- Verify assets are being cached
- Test in production build (not dev mode)

## 📚 Resources

- [MDN: Progressive Web Apps](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)
- [Web.dev: PWA Checklist](https://web.dev/pwa-checklist/)
- [Next.js Documentation](https://nextjs.org/docs)
