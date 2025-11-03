# Angular App Installation Guide

## Prerequisites

- **Node.js**: Version 18 or higher
- **npm**: Comes with Node.js

Check your versions:
```powershell
node --version
npm --version
```

## Installation Steps

1. **Navigate to the Angular project folder**:
```powershell
cd angular-brand
```

2. **Install dependencies**:
```powershell
npm install
```

This will download all required packages (~200MB). Takes 2-5 minutes depending on your internet speed.

3. **Start the development server**:
```powershell
npm start
```

or

```powershell
ng serve
```

4. **Open your browser** to:
```
http://localhost:4200
```

## Common Issues

### "ng: command not found"
Solution: Use `npm start` instead, or install Angular CLI globally:
```powershell
npm install -g @angular/cli
```

### Port 4200 already in use
Solution: Use a different port:
```powershell
ng serve --port 4300
```

### Installation fails with permission errors
Solution: Clear npm cache and try again:
```powershell
npm cache clean --force
npm install
```

## Building for Production

```powershell
npm run build
```

Output will be in `dist/angular-brand/` folder. These are static files you can deploy to any web server.

## Project Structure

- `src/app/` - Application components and routing
- `src/app/components/` - Individual page components (brand, products, contact)
- `src/app/app.routes.ts` - Route definitions
- `angular.json` - Angular CLI configuration
- `tsconfig.json` - TypeScript configuration

## Available Routes

Once running, navigate to:
- `/` - Brand story page
- `/products` - Products catalog
- `/contact` - Contact form
