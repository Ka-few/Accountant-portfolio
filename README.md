# 💼 Mary Nyaguthii Njoroge — Personal Portfolio

A modern, responsive personal portfolio website for **Mary Nyaguthii Njoroge**, a professional Accountant and Financial Administrator based in Nakuru, Kenya.

[![Built with React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://typescriptlang.org)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)](https://vitejs.dev)

---

## 🌐 Live Preview

> Open `http://localhost:5000` after running the dev server.

---

## ✨ Features

- 🎨 **Custom color theme** — Navy Blue, Light Green (accent), and Gold
- 📱 **Fully responsive** — Mobile, tablet, and desktop layouts
- 🎞️ **Smooth animations** — Powered by Framer Motion (scroll-triggered and hover effects)
- 🔗 **Sticky navbar** — With smooth scroll and mobile hamburger menu
- 📩 **Contact form** — With submission state feedback
- ⬇️ **Downloadable CV** button in the Hero section
- 🌟 **Glassmorphism UI** — Frosted glass cards with soft shadows
- ♿ **Accessible** — Semantic HTML, `aria-label` attributes, keyboard-navigable

---

## 📄 Sections

| # | Section | Description |
|---|---------|-------------|
| 1 | **Hero** | Full name, title, tagline, and CTA buttons |
| 2 | **About** | Professional summary with key stats |
| 3 | **Skills** | Core competencies and software proficiency bars |
| 4 | **Experience** | Animated career timeline (4 roles) |
| 5 | **Education** | Degree, CPA, and training cards |
| 6 | **Services** | Bookkeeping, Payroll, Reporting, Compliance |
| 7 | **Contact** | Contact form + location, email, phone |
| 8 | **Footer** | Social links and copyright |

---

## 🛠️ Tech Stack

| Tool | Purpose |
|------|---------|
| [React 18](https://react.dev) | UI framework |
| [TypeScript](https://typescriptlang.org) | Type safety |
| [Vite 8](https://vitejs.dev) | Build tool & dev server |
| [Tailwind CSS v3](https://tailwindcss.com) | Utility-first styling |
| [Framer Motion](https://www.framer.com/motion/) | Animations |
| [Lucide React](https://lucide.dev) | Icon library |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+
- npm v8+

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/Accountant-portfolio.git

# Navigate into the project
cd Accountant-portfolio

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

The site will be available at `http://localhost:5173` (or the next available port).

### Build for Production

```bash
npm run build
```

Built files will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

---

## 📁 Project Structure

```
Accountant-portfolio/
├── public/
│   ├── profile.jpg        # Profile photo (replace with actual image)
│   └── resume.pdf         # Downloadable CV (add here)
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   └── SectionHeading.tsx
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   ├── Education.tsx
│   │   ├── Services.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── lib/
│   │   └── utils.ts       # className merge utility
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css          # Global styles & Tailwind config
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
└── index.html
```

---

## 🖼️ Customization

### Adding a Profile Photo

Place your photo at:
```
public/profile.jpg
```
It will automatically appear in the Hero section.

### Adding a Downloadable CV

Place your CV file at:
```
public/resume.pdf
```
The "Download CV" button in the Hero section will link to it.

### Updating Contact Details

Edit `src/components/Contact.tsx` — find the `contactInfo` array and update the values.

### Updating LinkedIn

Search for `href="#"` in `Contact.tsx` and `Footer.tsx` and replace with your actual LinkedIn URL.

---

## 📬 Contact

**Mary Nyaguthii Njoroge**
- 📧 [bonjour.mary72@gmail.com](mailto:bonjour.mary72@gmail.com)
- 📞 +254 111 402 035
- 📍 Nakuru, Kenya

---

## 📝 License

This project is for personal portfolio use. All rights reserved © 2025 Mary Nyaguthii Njoroge.
