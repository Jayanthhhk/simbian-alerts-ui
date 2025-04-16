# 🛡️ Simbian Security Alert Comparison

This project is a UI/UX simulation built with **Next.js (App Router)**, **Tailwind CSS**, and **Framer Motion**. It visually compares the difference between a chaotic, manual alert-handling environment and an automated system powered by Simbian.

## 📽️ What It Does

- 🔴 **Without Simbian:** Real-time animated alert cards showing false positives and active threats.
- 🟢 **With Simbian:** Smooth horizontal step flow showing automated triage and resolution.
- Responsive layout with modern UI components, transitions, and dark mode support.

## 💡 Thought Process

This project was designed to visually compare the chaos of unmanaged security alerts ("Without Simbian") with the clarity and efficiency of automated threat resolution ("With Simbian"). I focused on creating a clear narrative flow by using animated alert cards that simulate real-time activity and a horizontal step-by-step visualization to reflect automation benefits. The intention was to make the contrast between the two scenarios immediately obvious to a viewer, even without much context.

The dashboard uses **Framer Motion** as the core animation library for smooth transitions, shaking effects, and component entry/exit. With more time, I would refine the visual hierarchy, enhance responsiveness for smaller screens, and possibly include simulated user interactivity (like toggling views or dragging elements). There are no major known issues, but a polished dark/light toggle switch and backend-driven alert data could improve realism.

## ⚙️ Tech Stack

- **Framework:** Next.js 14 with App Router
- **Styling:** Tailwind CSS (Dark mode supported)
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Utilities:** clsx

## 🚀 Getting Started

1. Clone the repo:
   ```bash
   git clone https://github.com/your-username/simbian-alerts-ui.git
   cd simbian-alerts-ui

   Install dependencies:

bash
Copy
Edit
npm install
Run the development server:

bash
Copy
Edit
npm run dev
Open http://localhost:3000 to view the app.
