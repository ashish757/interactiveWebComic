# Master Architecture & Context Guide

## 📌 Project Overview
This project is an **Interactive Web Comic Engine** being built for a hackathon event. The primary constraint and goal of this project is to maximize the technical engineering score (the "Website" portion of the grading criteria) while minimizing the need for manual, freehand art. 

The application utilizes a **"Scrollytelling" (The Boat-style)** paradigm. The user advances the story natively by scrolling down a tall page. Backgrounds remain fixed, while dialogue, text bubbles, and interactive logic puzzles scroll over the frame and activate dynamically.

### ⚙️ Core Tech Stack
*   **Framework:** React + Vite + TypeScript
*   **Styling:** Tailwind CSS v4 (CSS-first configuration, no `tailwind.config.js`)
*   **State Management:** Zustand (`useStore.ts`)
*   **Animation & Tracking:** Framer Motion (Used specifically for viewport tripwires, *not* forced scroll translation)

---

## 🏗️ Architectural Paradigms (CRITICAL FOR AGENTS)

### 1. The Scroll Engine (Native Scroll + CSS Transitions)
Do **not** implement scroll-hijacking, auto-scrolling, or complex `useTransform` mathematical Y-translations. The scroll engine relies 100% on the browser's native scrollbar to move elements.
*   **`ScrollyScene.tsx`**: Creates a massive vertical track (e.g., `300vh`). It uses a `sticky`, `100vh` background layer (The Stage) and an `absolute` layer for the content (The Actors).
*   **`ScrollBubble.tsx`**: Uses Framer Motion purely as an *invisible tripwire* (`onViewportEnter`) to detect when an element reaches the middle 40% of the viewport. It triggers a state change in Zustand, and pure CSS handles a slow (1000ms) opacity fade-in/fade-out based on that active state.

### 2. Config-Driven Design
The UI components are entirely story-agnostic. They are designed to act as Lego blocks that will eventually be fed data from a JSON configuration file, keeping the React logic clean from hardcoded story text.

---

## 📁 Component Library Breakdown

### `src/ui/` (The Building Blocks)
These components utilize a `cn` utility function (`clsx` + `tailwind-merge`) to allow flexible class overriding.
*   **`ComicText.tsx`**: The master typography renderer. Accepts `variant` props (`dialogue`, `boom`, `caption`, `title`) to apply specific fonts and heavy comic-book drop shadows. 
*   **`ComicButton.tsx`**: A stylized, interactive button with active translation states and custom hover shadows.
*   **`SpeechBubble.tsx`**: A wrapper that places any content inside a comic-style bubble, rendering a directional tail (`bottom-left` or `bottom-right`) using a rotated square.

### `src/comic/` (The Engine)
*   **`ScrollyScene.tsx`**: The master chapter container controlling the scroll track height and sticky background.
*   **`ScrollBubble.tsx`**: The scroll-aware wrapper for dialogue and puzzles.

### Routing & Entry
*   **`LandingPage.tsx`**: The initial view providing the story context and a start button that triggers the Zustand store.
*   **`App.tsx`**: Conditionally renders either the `LandingPage` or the `ScrollyScene` based on the global state.

---

## 🎨 Global Styling & Theme (`index.css`)
Because this uses Tailwind v4, all global variables are set directly in the CSS file via `@theme`. 
*   Custom Fonts: `var(--font-boom)` (Bangers) and `var(--font-dialogue)` (Comic Neue).
*   Custom Shadows: Hard, solid black offsets mimicking comic inking (`--shadow-comic` and `--shadow-comic-hover`).
*   A utility class `.text-shadow-comic` is available for heavy text outlines.

---

## 🚀 Expectations & Next Steps for AI Agent
When modifying this codebase, the agent should prioritize the following:
1.  **Maintain Separation of Concerns:** Visual animations must not fight the user's scroll. Do not re-introduce `whileInView` opacity snaps in the `ScrollBubble`.
2.  **Build Interactive Puzzles:** The next major phase is designing encapsulated mini-games (e.g., terminal hacking, logic gates) that can be passed as `children` into a `ScrollBubble`.
3.  **JSON Data Structure:** The agent should help design a TypeScript interface/JSON schema to map out chapters, background images, and dialogue coordinates so `App.tsx` can map through the data dynamically rather than hardcoding components.