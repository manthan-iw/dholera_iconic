# Project Context: Dholera Iconic

This file tracks the pages, section structures, and styles of the Dholera Iconic website. It is updated automatically during refinements.

## Directory Structure
- `index.html`: Home Page
- `about.html`: About Page
- `services.html`: Projects Page
- `why-dholera.html`: Why Dholera Page
- `amenities.html`: Amenities Page
- `location.html`: Location Page
- `contact.html`: Contact Page
- `components/`: Shared templates
  - `header.html`: Navbar header
  - `footer.html`: Footer content
- `assets/`: Styling, scripts, and assets
  - `css/`: style.css, components.css, animations.css, responsive.css
  - `js/`: navbar.js, animations.js, app.js
  - `images/`: Compressed image files

## Section-wise Page Structure (Figma Wireframe)

### 1. Header (Navbar)
- Logo: Left-aligned
- Nav Links: Center-aligned (About Iconic, Projects, Why Dholera, Location, Contact)
- Direct Call Info & Action: Right-aligned ("Call us: +91 8511 33 22 00", "Enquire Now" button)
- Transparency Rule: Transparent on Home page, white background on all other pages.

### 2. Home Page (`index.html`)
- **Hero Banner**: Large headline, CTA button, bottom curved transition.
- **About Us Section**: Text overview, 2-column description, statistics counts.
- **Smart Infrastructure**: Grid of smart features (power, ICT, water).
- **Stats Counter**: Large numerical highlights (e.g. 920 Sq. Km, etc.).
- **Spaces Section**: Commercial office, showroom, and retail space offerings.
- **Architecture Section**: Building specs and visuals.
- **CTA Section**: SITE VISIT enquiry request.

### 3. About Page (`about.html`)
- **Hero Section**: Plain headline, solid curved bottom.
- **Address & Details**: Physical smart city zones.
- **Developer Profile**: Shyam Group developer credentials.
- **Timeline Journey**: Horizontal/vertical milestones.
- **Design Philosophy**: Creative inspiration text.
- **Core Values**: Trust, Quality, Innovation grid.
- **CTA Section**: site visit booking.

### 4. Projects Page (`services.html`)
- **Hero Section**: Floor plan introductory title.
- **Specifications Table**: Architectural specifications.
- **Floor Plans System**: Interactive tabbed floor selector.
- **CTA & Footer**: Shared footer CTA.

### 5. Why Dholera Page (`why-dholera.html`)
- **Hero Section**: "Why Dholera?" overview.
- **Blank Canvas Concept**: Masterplan introduction.
- **Infrastructure Slide Deck**: Interactive feature carousel.
- **Smart Comparison Grid**: Dholera vs. traditional cities.
- **Committed Investors**: Logo grid.

### 6. Amenities Page (`amenities.html`)
- **Hero Section**: High-end interior preview.
- **Grand Entrance Lobby**: Double height specs.
- **Amenities Grid**: DG Backup, AC, parking, elevators, etc.
- **Premium Finishes**: Facade and materials lists.
- **Technical Specs**: Tabbed specification database.

### 7. Location Page (`location.html`)
- **Hero Section**: Map view introduction.
- **Strategic Advantage**: 3-card advantages.
- **Connectivity Landmarks**: Airport, expressways, distance counters.
- **Smart Infrastructure Map**: Map overlay.
- **Neighbourhood Brands**: Corporate logos.

### 8. Contact Page (`contact.html`)
- **Hero Section**: Direct helpline introductory banner.
- **Enquiry Form**: budget, plot size, message inputs.
- **Office Location**: Address, phone, hours info cards.
- **FAQ Accordion**: 3-item collapsible FAQ.

## Recent Refinements (2026-07-30)
- **Global Container System**: Integrated customized responsive `.container` properties overriding Bootstrap rules. Desktop has max-width: 1600px. Mobile (<=991px) scales container dynamically to `calc(100% - 60px)` with 30px lateral margins for a clean responsive layout.
- **Header Transparency Logic**: Annotations added via `<body>` class bindings (`home-page` vs `inner-page`). Main page navbar is transparent overlaying the sky backdrop, transitioning to solid white-blurred sticky box on scroll. All other pages retain solid white headers throughout.
- **Custom Drawer Navigation System**: Removed standard vertical collapses, implementing a custom CSS/JS-toggled sliding drawer menu overlay for high-end look on mobile and tablet viewports, preventing item wrapping and text squishing on laptops.

- **About Section Layout Swap**: Modified right-column elements in the About section on the Home page, placing the visual building visual image (`about_right.jpg`) on top, and the text description + CTA button below, to match Figma design specifications.
- **Symmetric & Responsive Heights**: Configured a synchronized `580px` layout height for the left image slider and right columns on desktop, transitioning to stacked automatic heights with scaling card paddings on mobile viewports.
- **Hero Curve Corrections**: Updated the bottom curve border radius from `60% 60% 0 0` to a flat, wide `800px 800px 0 0` transition to align with Figma and other pages.

- **Slider Dots Relocation**: Relocated slide dots control to the top-right of the text block inside the white card overlay, adding a thin horizontal separator line next to them to exactly match Figma design.
- **Active Slide Number Sizing**: Set active number typography to `120px` with a line-height of `0.9` for a prominent visual focus inside the slider card.
- **Panoramic Image Ratio**: Standardized the right-side image to `aspect-ratio: 2.5 / 1` to maintain its wide panoramic form across all viewports.
- **Minimal Button Border**: Updated `.btn-cta` border color to a minimal light gray (`#E2E8F0`) to ensure a premium, minimal aesthetic.

- **Smart Infrastructure Layout Alignment**: Swapped heading elements to left-aligned (`text-start`) to match Figma specifications.
- **Section Background Shift**: Shifted background style from `bg-light` (`#F8F9FA`) to `bg-white` (`#FFFFFF`), rendering top and bottom borders cleanly without blending.
- **Border Sizing & Coloring**: Applied `#CBD5E1` border colors internally across row and column boundaries, preventing overlapping borders.
- **Gold Rounded Star Badges**: Integrated double-square overlay CSS rotation trick to create rounded 8-point gold gradients behind white icon paths.

- **Stats Wave Graph Layout**: Rebuilt Stats section layout using alternating vertical height offsets (`stat-low` with `80px` margin and `100px` lines, `stat-high` with `0` margin and `180px` lines) to match Figma wave graph.
- **Vertical Line & Dot Indicators**: Integrated individual vertical timeline lines with top solid dot indicators next to left-aligned numbers and descriptions, replacing the centered column separator styling.
- **Dynamic Plus Suffixes**: Set all stats counter targets to include the `+` suffix (`48+`, `52+`, `2.3b+`, `18m+`) matching the Figma values.

- **Dashed Outer Dot Circles**: Added a CSS pseudo-element `::after` to `.stat-graph-dot` to render a white dashed border outline circle surrounding the solid inner dot.
- **Infinite Vertical Graph Lines**: Updated `.stat-graph-line` to stretch `500px` vertically so it extends past the text blocks and runs cleanly all the way to the bottom edge of the section.
- **Aligned Starting Offset**: Set the line wrapper `padding-top` to `32px` to center the dot horizontally with the upper part of the numbers.

- **Superscript Suffix formatting**: Configured JS counter inside `animations.js` and CSS styles in `index.html` to output the `+` sign as a clean superscript `<sup>` element at the top right of the count-up figures.
- **Forced Label Line Breaks**: Added `<br>` line breaks to all four stat labels to wrap them into two lines exactly as styled in Figma, keeping the text layout compact next to the graph lines.
- **Line Collapse Prevention**: Applied `flex-shrink: 0` to both the line wrapper and the vertical line element, and shifted from gradient background to a solid semi-transparent background (`rgba(255,255,255,0.35)`) to guarantee the 1px line remains fully visible on all browsers.

- **Premium Amenities Section**: Added the missing premium amenities interactive slider section with `assets/images/amenities_hero.jpg` background, white content card overlay, and custom sliding animation script (`initAmenitiesSlider()`) for Cafe, Lobby, Elevators, and Boardrooms, complete with custom arrow/dot controls.

- **Footer Rounded Curves & Overlap**: Set `#footer-placeholder` globally with `border-radius: 40px 40px 0 0` and `margin-top: -40px` to pull the white footer overlay on top of preceding sections, matching the Figma footer curve overlap.
- **Gold Social Circles**: Changed `.social-circle` default border and color to `var(--secondary)` (gold/brown) to match the page's secondary style palette and corrected the hover states.

- **Architecture Icons Realignment**: Aligned the Architecture cards icons with the Figma circle design by changing `.arch-icon-wrapper` to render a thin gold border (`border: 1px solid var(--secondary)`) with a transparent background by default, replacing the blue border and white fill.
- **Centered Layout**: Verified the tag capsule, heading, description, and feature cards are all centered (`text-center`) in accordance with the correct Figma design layout.

- **Global Responsive Scaling Overhaul**: Overhauled `responsive.css` to systematically scale typography, paddings, section margins, card dimensions, button sizes, and logo heights across distinct desktop/laptop breakpoints: `@media (max-width: 1600px)`, `@media (max-width: 1440px)`, `@media (max-width: 1366px)`, and `@media (max-width: 1280px)`.
- **Proportional Scaling**: Ensures the design matches the proportions of the 1920px Figma frame at smaller desktop sizes (such as 1366x768 and 1280x800) without looking oversized, enlarged, or zoomed.

- **Header White Gradient Overlay**: Replaced the plain dark overlay on the hero section of the Home page in `index.html` with a dual-gradient system: a soft white-to-transparent gradient (`rgba(255, 255, 255, 0.95)` to transparent over `240px` height) at the top of the hero, and a transparent-to-black gradient (`rgba(0, 0, 0, 0.76)`) at the bottom. This ensures high contrast and readability for the logo and navigation links against the sky background, matching the Figma spec perfectly.

- **Proportional Container Margins**: Overrode `.container` and `.max-width-container` widths across laptop breakpoints to preserve identical proportional margins on the left/right sides of the screen (1600px -> `1340px`, 1440px -> `1200px`, 1366px -> `1140px`, 1280px -> `1080px`). This keeps layout elements aligned with the Figma margins instead of stretching to the screen edges.

- **Pure HTML/CSS Migration & Package Cleanup**: Removed all local npm/node dependencies (`node_modules`, `package.json`, `package-lock.json`, `.gitignore`) and deleted local asset libraries (`assets/bootstrap`, `assets/bootstrap-icons`) to keep the codebase pure HTML + CSS.
- **Bootstrap CDN Integration**: Replaced local asset imports in all 7 HTML files (`index.html`, `about.html`, `why-dholera.html`, `amenities.html`, `services.html`, `location.html`, `contact.html`) with standard Bootstrap 5.3.3 and Bootstrap Icons 1.11.3 CDN links, enabling zero-dependency standalone page migration (e.g. for Laravel integration).

- **Container Max-Width Adjustments**: Increased container sizes across breakpoints to utilize space better and reduce excessive side margins:
  - `@media (max-width: 1600px)` (covers 1600x900 and 1680x1050): increased container max-width to `1440px`.
  - `@media (max-width: 1440px)`: increased container max-width to `1300px`.
  - `@media (max-width: 1366px)`: increased container max-width to `1220px`.
  - `@media (max-width: 1280px)`: increased container max-width to `1140px`.
- **Global Padding Decreased (1366px & 1280px)**: Reduced vertical section padding globally to `60px 0` on laptop viewports to reduce excessive top/bottom gaps, removing section-specific duplicates to keep stylesheets clean.
- **Button & Slider Responsive Scaling (1366px & 1280px)**: Added styling rules to scale down the CTA button (`.btn-cta`) alongside the Enquire button (`.btn-enquire`) to match laptop ratios. Scaled down the About Us slider card (`padding: 24px`, font size adjustments) to prevent visual overcrowding.
- **About Section Alignment Adjustments**: Coordinated explicit heights for the left portrait image wrapper (`.about-left-wrapper`) and right landscape image wrapper (`.about-right-img-wrapper`) across all breakpoints (desktop: `680px`/`500px`, 1600px: `580px`/`420px`, 1440px: `520px`/`380px`, 1366px: `480px`/`340px`, 1280px: `440px`/`310px`). This keeps the columns perfectly aligned at the top (capsule vs right image) and bottom (left card vs right button) on every screen size.

---
*Last Updated: 2026-07-31*
