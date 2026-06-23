# My Portfolio | Blog Site

A minimalist developer portfolio built with Astro and Tailwind CSS.

The site serves as a central place to showcase my projects, technical writing, skills, and engineering journey as I explore backend systems, distributed systems, and data infrastructure.

## Features

* Responsive portfolio website
* Project showcase section
* Technical blog system powered by Markdown
* Custom blog layout
* Dark theme with orange accent palette
* Skills and education sections
* Contact links and resume access
* Custom 404 page
* SEO metadata
* Active navigation state
* Static site generation with Astro

## Tech Stack

### Frontend

* Astro
* TypeScript
* Tailwind CSS

### Content

* Markdown (`.md`) blog posts
* Astro layouts

### Deployment

* Static site hosting (Vercel, Cloudflare Pages, Netlify, etc.)

---

## Project Structure

```text
src/
├── components/
│   ├── BlogCard.astro
│   └── ProjectCard.astro
│
├── data/
│   ├── profile.json
│   └── projects.json
│
├── layouts/
│   ├── Layout.astro
│   └── BlogLayout.astro
│
├── pages/
│   ├── index.astro
│   ├── blogs.astro
│   ├── 404.astro
│   └── blogs/
│       ├── first-post.md
│       └── ...
│
├── styles/
│   └── global.css
│
└── types.ts
```

---

## Local Development

Clone the repository:

```bash
git clone <repository-url>
cd portfolio
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:4321
```

---

## Build

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## Adding a Project

Update:

```text
src/data/projects.json
```

Example:

```json
{
  "title": "VoltStream",
  "description": "Lakehouse-based EV charging analytics platform.",
  "technologies": ["PySpark", "Databricks", "Delta Lake"],
  "github": "https://github.com/username/repository"
}
```

---

## Adding a Blog Post

Create a new Markdown file inside:

```text
src/pages/blogs/
```

Example:

```md
---
layout: ../../layouts/BlogLayout.astro
title: Building a Kafka Consumer
description: Lessons learned while building a Kafka analytics platform.
date: 2026-06-23
---

# Introduction

Your content goes here.
```

The blog will automatically appear on:

* Home page (Latest Writing section)
* Blogs page

---

## Customization

### Personal Information

Update:

```text
src/data/profile.json
```

Includes:

* Name
* Title
* About section
* Skills
* GitHub
* LinkedIn
* Email

### Resume

Replace:

```text
public/resume.pdf
```

with your latest resume.

---

## Version History

### v1.0.0

* Portfolio homepage
* Project showcase
* Markdown blog system
* Custom blog layout
* Dark theme redesign
* Active navigation
* SEO metadata
* Custom 404 page
* Responsive layout

---

## Future Improvements

* Additional technical blog posts
* Project screenshots
* Open Graph image support
* Search functionality
* RSS feed
* Analytics integration
* Custom domain

---

## Author

Monish Gowda

Backend Engineer | Distributed Systems Enthusiast

* GitHub: https://github.com/Monish-K-S
* LinkedIn: https://www.linkedin.com/in/monish-k-s-418772293/

---

Built with Astro.
