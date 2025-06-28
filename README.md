# Flower Shop React App

A simple React application for a flower shop, featuring a beautiful home page and navigation to a gallery.

## Features
- Home page with glassmorphism effect
- Navigation using React Router
- Responsive design

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Start the development server:**
   ```bash
   npm start
   ```
3. **Open in browser:**
   Visit [http://localhost:3000](http://localhost:3000)

## Project Structure
- `src/components/Home.jsx` - Home page component
- `src/components/Home.css` - Home page styles
- `src/demo_1.jsx` - Demo component
- `src/App.jsx` - Main app component

## Adding New Pages/Components
- Create a new `.jsx` file in `src/components/` for your component.
- Import and use your component in `App.jsx` or wherever needed.
- For new routes, add them using `react-router-dom` in your main router setup.

## Troubleshooting
- If styles are not applied, check the case sensitivity of your CSS imports.
- Ensure all dependencies are installed with `npm install`.
- If navigation does not work, verify that `react-router-dom` is installed and properly set up.

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## Requirements
- Node.js
- npm

## License
MIT

