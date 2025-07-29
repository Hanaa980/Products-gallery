
````markdown
# Products Gallery

A modern and responsive product gallery web application built with React, TypeScript, and Vite. It features product browsing, searching, sorting, detailed views, and interactive ratings.

## 🔗 Live Demo

🌐 [Visit the App](https://hanaa980.github.io/Products-gallery/)


---

## Features

- Search products by keyword
- Sort products by price and rating
- Product cards with images, titles, prices, and ratings
- Product details page with extended information
- Interactive ratings displayed via stars
- Responsive design for desktop and mobile
- UI styled with Tailwind CSS
- Hosted on GitHub Pages

---

## Technologies Used

| Category       | Stack                                   |
| -------------- | ----------------------------------------|
| Frontend       | React 18 + Vite 4                       |
| Language       | TypeScript                              |
| Styling        | Tailwind CSS                            |
| Routing        | React Router DOM v6                     |
| HTTP Client    | Axios                                   |
| UI Components  | React Toastify, Custom Rating Components|
| Dev Tools      | ESLint, Prettier                        |

---

## Getting Started

### Clone and Install

```bash
git clone https://github.com/Hanaa980/Products-gallery.git
cd Products-gallery
npm install
````

### Start Development Server

```bash
npm run dev
```

---

## Available Scripts

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Run app in development mode          |
| `npm run build`   | Create a production-ready build      |
| `npm run preview` | Preview the production build locally |
| `npm run lint`    | Run ESLint on the codebase           |
| `npm run deploy`  | Deploy the build to GitHub Pages     |

---

## Project Structure

```
Products-gallery/
├── public/
├── src/
│   ├── components/
│   │   ├── Footer/
│   │   ├── Home/
│   │   │   ├── SearchBar/
│   │   │   ├── SortDropdown/
│   │   │   └── Home.tsx
│   │   ├── Layout/
│   │   ├── Navbar/
│   │   ├── NotFound/
│   │   ├── ProductCard/
│   │   ├── ProductDetails/
│   │   └── rating/
│   ├── interfaces/
│   ├── App.tsx
│   └── main.tsx
├── .eslintrc
├── tailwind.config.js
├── vite.config.ts
├── package.json
└── README.md
```

---

## Search & Sort Flow

1. User types a keyword in the SearchBar component.
2. Products list filters dynamically based on the search term.
3. User can sort the filtered products using SortDropdown by price or rating.

---

## Product Interaction Flow

1. Products displayed as cards on the Home page.
2. Clicking a product navigates to the Product Details page.
3. Users see extended info including ratings and description.

---

## Deployment

This app is deployed via `gh-pages`.

To deploy manually:

```bash
npm run build
npm run deploy
```

## 👤 Author

Developed by [Hanaa Ragab](https://github.com/Hanaa980)
