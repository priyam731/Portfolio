# Portfolio Website

This repository contains my personal portfolio website  source code . It is structured as a lightweight, static single-page application aimed at performance and ease of maintenance.

## Technical Architecture

The project is built on standard web technologies without a complex build chain.

### core stack

- **HTML5**: Semantic markup ensuring accessibility and proper document structure.
- **CSS3**: Utilizes CSS Custom Properties (Variables) for a scalable theming system.
- **JavaScript (ES6+)**: Handles user interaction, DOM manipulation, and state management for visual preferences.

### dependencies

- **ScrollReveal.js**: Manages scroll-triggered visibility animations.
- **GSAP (GreenSock Animation Platform)**: Handles more complex, timeline-based animation sequences.
- **FontAwesome**: External CDN linkage for iconography.

## Project Structure

The codebase is organized as follows:

- `index.html`: Primary entry point. Contains all content modification areas.
- `port.css`: Global styles. Sectioned into resets, variable definitions (theming), layout, and responsive media queries.
- `port.js`: Application logic. Key responsibilities include:
- Theme toggling (persistence via localStorage).
- Initialization of GSAP and ScrollReveal instances.
- Event listeners for interactive elements (custom cursor, navigation).
- `images/`: Directory for static binary assets.

### Custom Cursor

The UI includes a custom cursor implementation consisting of a lead pointer (`.cursor-dot`) and a following ring (`.cursor-ring`). These elements are absolutely positioned and updated via `mousemove` event listeners in the JavaScript layer to create a fluid input feel.
