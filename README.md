# Hrit Shrestha — Portfolio

A minimal, white-themed personal portfolio built with React, Vite and Tailwind CSS.

## 1. Install dependencies

Open a terminal in this folder and run:

```bash
npm install
```

## 2. Run the project

```bash
npm run dev
```

Then open the URL shown in the terminal (usually `http://localhost:5173`).

To build a production-ready version:

```bash
npm run build
```

This creates a `dist/` folder that you can deploy (Vercel, Netlify, GitHub Pages, etc.).

## 3. Where to change your personal information

- **Name, hero text, intro:** `src/components/Hero.jsx`
- **About Me paragraph & education timeline:** `src/components/About.jsx`
- **Footer text:** `src/components/Footer.jsx`
- **Page title / meta description:** `index.html`

## 4. Where to add your certificates

1. Open `src/data/certificates.js`.
2. Add or edit an object in the `certificates` array with `course`, `issuer`, `date`.
3. Put your certificate image file inside `public/certificates/`.
4. Set `image: "/certificates/your-file-name.jpg"`.

Until you add a real image, a clean placeholder is shown automatically.

## 5. Where to add your projects

1. Open `src/data/projects.js`.
2. Add or edit an object with `title`, `description`, `tools` (array), `image`, and `link`.
3. Put a thumbnail image inside `public/projects/` and set `image` to that path (or use any image URL).
4. Set `link` to your live project or GitHub repo URL.

## 6. Where to add your social links

Open `src/components/Contact.jsx` and `src/components/Footer.jsx`, and update the `SOCIALS` array at the top of each file with your real Email, LinkedIn, GitHub and Instagram URLs.

## 7. Editing skills or courses

- Skills: `src/data/skills.js` (split into `creativeSkills` and `technicalSkills`)
- Courses: `src/data/courses.js`

Each skill supports a `logo` (a brand icon slug from [simpleicons.org](https://simpleicons.org)) and a fallback `icon` (an icon name from [lucide.dev/icons](https://lucide.dev/icons)) in case the logo doesn't load.

## Project structure

```text
src/
 ├── components/       → all UI sections (Navbar, Hero, About, Skills, ...)
 ├── data/              → editable content (skills, courses, certificates, projects)
 ├── App.jsx            → assembles all sections
 ├── main.jsx           → React entry point
 └── index.css          → global styles + Tailwind
```

## Notes

- The contact form works fully on the frontend (validation + success message) but is not connected to a real email backend yet. If you'd like it to actually send emails, consider a service like [Formspree](https://formspree.io) or [EmailJS](https://www.emailjs.com/) — both work without you needing to build your own server.
- Colors and fonts can be adjusted in `tailwind.config.js`.
