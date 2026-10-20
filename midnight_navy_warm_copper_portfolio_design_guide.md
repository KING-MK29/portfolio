# 🎨 Midnight Navy & Warm Copper — Portfolio Design Guide

This specification document outlines the complete design system, layout, micro-interactions, and content structure for building a modern, high-end portfolio website.

---

## 🎨 Design System & Color Palette

The **Midnight Navy & Warm Copper** palette provides a rich, balanced, and professional contrast that stands out while remaining comfortable to view.

| Element | Palette Role | Hex Code | Usage Guidelines |
| :--- | :--- | :--- | :--- |
| **Main Background** | Deep Midnight Navy | `#0B132B` | Page background, underlying layout canvas. |
| **Cards / Containers** | Muted Slate Navy | `#1C2541` | Cards, sections, modals, dropdowns, input backgrounds. |
| **Primary Accent** | Warm Metallic Copper | `#C87D55` | Primary buttons, active nav states, section header highlights, focused input borders. |
| **Secondary Accent** | Muted Amber / Caramel | `#E0A96D` | Badges, tag chips, skill progress indicators, hover highlights. |
| **Primary Text** | Warm Off-White | `#F5F5F7` | Headings, main paragraph text, primary titles. |
| **Secondary Text** | Muted Slate Gray | `#8D99AE` | Subtitles, captions, dates, meta information. |

---

## 📐 Typography & Micro-Interactions

### Typography
* **Primary Font:** `Poppins` or `Plus Jakarta Sans` (Clean, modern sans-serif for high readability).
* **Code / Tech Stack Font:** `JetBrains Mono` or `Fira Code` (For skill tags, code snippets, or tech badges).

### Micro-Interactions
* **Custom Cursor:** A subtle outer ring tinted in Warm Copper (`#C87D55`) that smoothly follows the pointer.
* **Card Hover States:** Cards elevate slightly (`transform: translateY(-6px)`) with a subtle Copper glow box-shadow on hover (`box-shadow: 0 10px 25px -5px rgba(200, 125, 85, 0.2)`).
* **Scroll Animations:** Sections smooth-fade in and slide up as the user scrolls into view.

---

## 📑 Detailed Layout Specification (7 Core Sections)

---

### 1. 🏠 Home Section (Hero)
* **Visual Concept:** A bold, welcoming hero space with asymmetrical layout and glowing accent backdrops.
* **Layout & Content:**
  * **Status Badge:** A small capsule pill at the top: `✨ Available for New Opportunities` (Bordered in Warm Copper).
  * **Main Title:** Bold heading with your name in Warm Off-White, featuring dynamic accent text in Copper.
  * **Subheading / Role:** Dynamic typing animation listing your main domains (e.g., *Frontend Developer \| UI/UX Enthusiast \| Creative Coder*).
  * **Action Buttons (CTAs):**
    * **Primary:** Solid Copper button (`#C87D55`) with white text reading **"View Projects"**.
    * **Secondary:** Outline button with Copper border reading **"Contact Me"**.
  * **Profile Media:** High-resolution portrait framed inside a rounded circle or squircle with a subtle glowing Warm Copper border.

---

### 2. 👤 About Me Section
* **Visual Concept:** Clean, editorial-style information card built on Muted Slate Navy (`#1C2541`).
* **Layout & Content:**
  * **Bio:** A concise narrative detailing your background, passions, problem-solving approach, and career goals.
  * **Key Highlights Grid (3-4 Quick Counters):**
    * `X+ Years Experience`
    * `Y+ Projects Completed`
    * `Z+ Certifications Earned`
  * **Core Values / Hobbies:** Minimalist tag chips representing soft skills and key strengths.

---

### 3. ⚡ Skills Section
* **Visual Concept:** Categorized grid of interactive skill cards with visual proficiency indicators.
* **Layout & Content:**
  * **Categories:** 
    1. *Frontend Development*
    2. *Backend & Databases*
    3. *Design & Tools*
  * **Card Design:** Each card utilizes the Muted Slate Navy container with Muted Amber icons (`#E0A96D`).
  * **Level Displays:** Clean pill tags (*Advanced*, *Intermediate*) or sleek custom progress bars colored with a gradient from Warm Copper (`#C87D55`) to Muted Amber (`#E0A96D`).

---

### 4. 📜 Certificates Section
* **Visual Concept:** Clean card grid or horizontal carousel with interactive viewing popups.
* **Layout & Content:**
  * **Card Content:** Certificate Title, Issuing Organization (e.g., *Meta, Google, Udemy*), Date Issued, and a verification badge icon.
  * **Interactivity:**
    * Clicking any card triggers a **Glassmorphism Modal Window** overlay (`rgba(11, 19, 43, 0.85)` blur background) displaying the full certificate image alongside a verified credential link.

---

### 5. 🚀 Projects Section
* **Visual Concept:** Filterable portfolio showpiece highlighting key technical and creative projects.
* **Layout & Content:**
  * **Filter Navigation:** Horizontal tab buttons (`All`, `Web Apps`, `UI/UX Design`, `Mobile`).
  * **Project Card Elements:**
    * **Preview Media:** High-quality thumbnail with dark gradient overlay.
    * **Title & Description:** Concise project breakdown emphasizing solved problems and key outcomes.
    * **Tech Stack Pills:** Capsule tags in `#1C2541` background with Copper text (`React`, `Tailwind`, `Node.js`).
    * **Links:** Action buttons for **"Live Demo ↗"** and **"GitHub Code ↗"**.

---

### 6. 📄 Resume Section
* **Visual Concept:** Centralized, distraction-free document presentation card.
* **Layout & Content:**
  * **Card Styling:** Single prominent card in Muted Slate Navy featuring an animated PDF file icon in Warm Copper.
  * **Preview & Action:**
    * Brief sentence outlining CV highlights and recent update date.
    * **Primary Action:** Solid Warm Copper button labeled **"Download Resume (PDF)"** with an animated downward arrow icon on hover.

---

### 7. 📞 Contact Section
* **Visual Concept:** Split 2-column layout balancing direct communication options and a contact form.
* **Layout & Content:**
  * **Left Column (Details & Socials):**
    * Personal email address, current location, and availability status.
    * Interactive social icons (LinkedIn, GitHub, Twitter/X, Email) that illuminate in Warm Copper when hovered.
  * **Right Column (Form):**
    * **Inputs:** `Name`, `Email`, `Subject`, `Message`.
    * **Styling:** Input background `#1C2541` with `#8D99AE` text. On input focus, the border seamlessly transitions into a glowing Warm Copper outline.
    * **Submit Button:** Full-width or prominent solid Warm Copper submit button.

---

## 🛠️ Recommended Tech Stack

* **Structure & Markup:** HTML5 or React (Next.js / Vite)
* **Styling:** Tailwind CSS or Custom CSS Variables
* **Icons:** FontAwesome or Lucide Icons
* **Animations:** Framer Motion (for React) or AOS (Animate On Scroll) / GSAP




RULES:

no emoji spam

no AI reference 

no AI Template

need to create everything in separate section(home , about, skills, certifications, projects, Resume, contact)

need a simple minimalist design

need to use generative Icons and logs

need to use given photo in my asset folder

don't use  or spam any dummy contents and only need to use my contents

 it must be fit in all screens which means phone , desktop, and taplets 

no broken links , console errors , layout shifter dead buttons

ALWAYS DON'T USE EMOJIS IN THE ENTIRE WEBSITE INSTEAD CREATE THE ICON OF THE RESPECTED THING AND USE THEM.

ALWAYS CREATING NEW THINGS WHICH MUST NEED TO MATCH WITH THE EXACT UI/UX.

ALWAYS DON'T USE THE COLOURS WITH IS OUTLIERED FROM THE UI COLOURS.