Astrah OS | Technical Execution Demo
This repository serves as a high-fidelity demonstration for the Astrah OS frontend architecture. It is built to exceed the "Linear/Deepgram" standard while maintaining enterprise-grade defensive patterns.

#Tech Stack & Architecture
Framework: Next.js 15 (App Router) with TypeScript.

Styling: Tailwind CSS using CSS Logical Properties (inline-start, ps-, me-) to ensure native, hack-free RTL support.

Motion: Framer Motion utilizing restrained, physics-based easing for an "Ambient OS" feel.

Utilities: tailwind-merge and clsx for conflict-free, defensive class management.

#Defensive Engineering Standards
Drawing from my background in Security Research (CodeQL) and systems integrity, this demo implements the following "zero-trust" frontend patterns:

Direction-Agnostic UI: No physical left or right properties are used. The system is architected to be culturally agnostic from the root.

Magnetic Physics-Based UI: Interactive elements (Buttons) utilize useMotionValue and useSpring to create a "magnetic" attraction to the cursor, providing high-end haptic feedback.

Environment Protection: Strict directory structuring to prevent accidental exposure of sensitive constants or .env variables.

Naming Convention Rigor: Follows a strict feature-based modularity (@/components/hero, @/components/ui) to prevent "Spaghetti State" as the OS scales.

Layout Stability: Implements optimized font-loading and aspect-ratio containment to ensure Zero Cumulative Layout Shift (CLS) during language toggling.

#Performance & Craft
60FPS Animations: All transitions occur on the GPU layer (transform/opacity) to ensure zero CPU jank, even on lower-end devices.

Premium Micro-interactions: Includes "Shine" pass animations and spring-physics tapping feedback, mirroring the macOS/Linear feel.

Optimized Typography: Custom tracking (tracking-tighter) and leading values calibrated for high-density "Retina" displays.

#Getting Started
To audit the codebase or run the high-fidelity demo locally:

1. Clone the Repository
Bash

git clone url
cd astrah-os-core-v1
2. Install Dependencies
Bash

npm install
3. Run Development Server
Bash

npm run dev
Open http://localhost:3000 to view the result.

#Architecture Overview


src/
├── app/            # Next.js 15 App Router (Server-first)
├── components/
│   ├── ui/        # Atomic components (Magnetic Buttons, Toggles)
│   └── hero/      # Feature-specific layout modules
├── lib/           # Defensive utilities (cn helper, logic)
└── styles/        # Global CSS & Design System tokens