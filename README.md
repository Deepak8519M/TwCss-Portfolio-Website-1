# Portfolio Website

A personal portfolio website built by following Great Stack YouTube tutorials on Tailwind CSS and JavaScript. This project showcases responsive design, clean UI, and modern front-end development practices using utility-first CSS with Tailwind.


![GitHub repo size](https://img.shields.io/github/repo-size/Deepak8519M/TailwindCss-Master-Class)

---

## About This Project

This portfolio website was created as a practical way to learn and apply Tailwind CSS and JavaScript concepts by Great Stack tutorials. The focus is on building a visually appealing, responsive, and easy-to-maintain site using:

- **Tailwind CSS** for utility-first styling and responsiveness  
- **JavaScript** for interactivity and enhancements  
- Modular folder structure for scalable development  
- Clean and minimal design emphasizing content  

---

## How It Was Built

- Started with a base HTML structure for the portfolio pages  
- Used **Tailwind CSS** for fast, responsive styling using utility classes  
- Organized CSS source in `src/input.css`, where Tailwind directives are added  
- Compiled Tailwind CSS into `dist/output.css` using build tools  
- JavaScript files added in `dist/app.js` and `dist/app1.js` for interactivity  
- Project dependencies managed with **npm** and the `package.json` file  
- Version control handled through **Git** (inside the `.git` folder)  
- Image assets placed inside `dist/images` for easy reference in the HTML  

This approach ensures the project is maintainable and easily extendable with minimal CSS overrides.

---

## Folder Structure



```bash

📁 .
├── .git/ 🔧 Git version control files and history
├── dist/ 📦 Compiled and production-ready files
│ ├── app.js 📄 Main JavaScript bundle for the website
│ ├── app1.js 📄 Additional JavaScript file (optional features)
│ ├── images/ 🖼️ Static image assets used throughout the site
│ ├── index.html 🌐 Main HTML file used for deployment
│ ├── output.css 🎨 Compiled Tailwind CSS file for styling
│ └── sign_transparent.png 🖼️ Image asset (e.g., logo or icon)
├── node_modules/ 📦 Project dependencies installed via npm
├── package-lock.json 📜 Auto-generated file locking package versions
├── package.json ⚙️ Project metadata and npm scripts
├── src/ 📂 Source files for development and customization
│ └── input.css 🎨 Tailwind CSS input file (where you define styles)
```


---

## How to Use

- If your project has a `package.json` file, to start development or build, run:

  ```bash
  npm install    # installs dependencies (run only once)
  npm run dev    # starts dev server and rebuilds on changes
  
  For simpler setups without build tools (like folders containing only index.html and CSS), simply open the index.html file directly in your browser.
  ```


## Features

 - Fully responsive layout powered by Tailwind CSS

 - Modular and clean folder structure for easy maintenance

 - Modern utility-first styling for rapid development

 - Simple, accessible UI perfect for showcasing portfolio projects 

 - Ready for deployment or further customization
 - 
## Future Improvements

 - Add more interactive JavaScript features

 - Implement light/dark mode toggle

 - Include contact form with validation

 - Optimize images and assets for faster loading

 - Integrate CMS or backend for dynamic content


  
