# Sunny Scoop — Ice Cream Website

A complete ice cream website created for an Advanced Web Technology assignment, demonstrating both **Bootstrap** and **Angular** technologies.

## 🎯 Features

### 1. Products Page (Bootstrap 5) - Default Home Page
- **File**: `index.html`
- Responsive product grid using Bootstrap cards
- **Shopping cart functionality** with localStorage persistence
- Add/remove items, adjust quantities
- Real-time cart total calculation
- Product images (SVG icons)

### 2. Brand Page (Modern Angular)
- **Folder**: `angular-brand/`
- Full Angular 17+ standalone application
- Three routed components: Brand story, Products catalog, Contact form
- TypeScript-based with proper component architecture
- Demonstrates Angular routing, services, and components

### 3. Legacy Brand Page (AngularJS)
- **File**: `brand.html`
- Simple AngularJS 1.8 demo with data binding and filtering
- Can run without build steps

## 📁 Project Structure

```
d:\AWT 2\
├── index.html              # Products page (Bootstrap + Cart)
├── brand.html              # AngularJS brand page
├── css/
│   └── styles.css         # Shared styles
├── assets/
│   └── images/            # Product SVG images
├── angular-brand/          # Modern Angular app
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/
│   │   │   │   ├── brand/
│   │   │   │   ├── contact/
│   │   │   │   └── story/
│   │   │   ├── app.component.ts
│   │   │   └── app.routes.ts
│   │   ├── index.html
│   │   ├── main.ts
│   │   └── styles.css
│   ├── angular.json
│   ├── package.json
│   └── tsconfig.json
└── README.md
```

## 🚀 How to Run

### Option 1: Static Pages (Bootstrap + AngularJS)

**Quick start** - Open directly in browser:
```powershell
# Open index.html in your default browser
start index.html
```

**Recommended** - Run with local server:
```powershell
# Using Python
python -m http.server 8000

# Then open http://localhost:8000/
```

The cart functionality will work either way!

**Pages available:**
- http://localhost:8000 - Products page (Bootstrap)
- http://localhost:8000/brand.html - Brand page (AngularJS)

### Option 2: Modern Angular App

**Prerequisites**: Node.js 18+ and npm

1. **Install dependencies**:
```powershell
cd angular-brand
npm install
```

2. **Run development server**:
```powershell
npm start
# or
ng serve
```

3. **Open**: http://localhost:4200/

4. **Build for production** (optional):
```powershell
npm run build
# Output in dist/ folder
```

## 🛒 Shopping Cart Features

The Bootstrap products page includes a full shopping cart:
- ✅ Add products to cart
- ✅ Adjust quantities (+ / - buttons)
- ✅ Remove items
- ✅ Persistent storage (localStorage)
- ✅ Real-time total calculation
- ✅ Cart badge showing item count
- ✅ Modal cart view

## 📚 Technologies Used

| Page/Feature | Technology | Version |
|-------------|------------|---------|
| Products Page | Bootstrap | 5.3.2 (CDN) |
| Shopping Cart | Vanilla JS + localStorage | ES6+ |
| Legacy Brand | AngularJS | 1.8.3 (CDN) |
| Modern Angular App | Angular | 17+ (standalone) |
| Styling | CSS3 | Custom + Bootstrap |

## 🎓 Assignment Requirements

✅ **Bootstrap Page**: `products.html` — Responsive grid, cards, modal, utility classes  
✅ **Angular Page**: `angular-brand/` — Modern Angular with routing and components  
✅ **Bonus**: Shopping cart, product images, multiple Angular components

## 🧪 Testing Checklist

- [ ] Open `index.html` and verify links work
- [ ] Test products page: add items to cart, adjust quantities
- [ ] Refresh page and verify cart persists (localStorage)
- [ ] Clear cart and verify it empties
- [ ] Run Angular app and test all three routes
- [ ] Verify navigation between static and Angular pages

## 📝 Notes

- **AngularJS vs Angular**: Two "brand" pages exist:
  - `brand.html` — Simple AngularJS demo (no build needed)
  - `angular-brand/` — Full modern Angular app (requires Node.js)
  
- **Images**: SVG icons are embedded inline in the HTML for easy deployment

## 🔧 Troubleshooting

**Cart not persisting?**
- Check browser localStorage is enabled
- Try opening in a local server (not file://)

**Angular app won't start?**
- Ensure Node.js 18+ is installed: `node --version`
- Delete `node_modules` and `package-lock.json`, then run `npm install` again
- Check for port conflicts (default 4200)

**Bootstrap styles not loading?**
- Verify internet connection (Bootstrap loaded from CDN)
- Check browser console for errors

## 🚀 Future Enhancements

- [ ] Connect cart to a backend API
- [ ] Add payment integration
- [ ] Implement user authentication
- [ ] Add product search and filtering
- [ ] Create admin panel for managing products
- [ ] Add unit tests and E2E tests
