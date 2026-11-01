# RENDZO – Design Mockups

## What this repo is

Static, client-facing **page design mockups** for RENDZO, a rental marketplace in Kochi, Kerala.
The goal of this repo is to show the client what the finished website will look like **before** development starts.
Nothing here is the production build. The production site will later be built on WordPress + WooCommerce (see `project-details/quotation-sended-to-client.md`).

Source documents (read these first when in doubt):

- `project-details/message-from-client.txt` – the client's original brief and required features.
- `project-details/quotation-sended-to-client.md` – our accepted scope, page list, tech stack and timeline (dated 30 Oct 2026).

## The one rule that matters most

**The client wants an exact copy of the reference site, with only small differences.**

Reference: https://www.rentomojo.com/kochi

- Replicate Rentomojo's layout, section order, component shapes, card anatomy and page flow as closely as possible.
- "Little difference" means: RENDZO branding (name, logo, tagline, colors), RENDZO's own product categories, and the extra pages RENDZO needs (owner registration, policies). It does **not** mean redesigning sections, inventing new layouts, or "improving" the UX.
- When unsure whether to deviate from the reference, don't. Match Rentomojo.
- Never use Rentomojo's logo, product photos, copy or brand name in the mockups. Structure and style are copied; assets and text are RENDZO's.

## Brand

| Item | Value |
|---|---|
| Name | RENDZO (uppercase in logo/headings, "Rendzo" acceptable in body copy) |
| Tagline | Everything You Need. Nothing to Own. |
| City | Kochi, Kerala, India (city selector shows "Kochi", like the reference) |
| Currency | ₹ (INR), prices shown as monthly rent, e.g. `₹244/mo` |
| Support | WhatsApp click-to-chat (floating button) + email |

Colors: the reference uses a brand red (`#D83427`), dark text (`#2B2B2B`), greys (`#737373`, `#A3A3A3`), white cards on a light background, and a dark footer. Keep the same roles (one accent color for CTAs/badges/icons, dark neutrals for text, dark footer) but use a RENDZO accent color instead of Rentomojo red. Until the client supplies a logo and palette, use a placeholder accent and a simple text wordmark, and define all colors as CSS variables in one place so they can be swapped in minutes.

## Reference site structure (what to replicate)

### Header
Logo (left) → city selector "Kochi ▾" → search icon → top links → "Login/Signup" (user icon) → cart icon.
Product/category pages use a simpler header (no promo links) plus a breadcrumb.

### Homepage, in order
1. Full-width hero banner (single image, carousel optional).
2. "Explore our Top Categories" – grid of ~15 image tiles + "View More categories" button.
3. Promo strip (reference: "Plans starting at ₹2,499/mo").
4. "More Categories" – ~15 text-only tiles.
5. "Latest & Trending" – horizontal product-card carousel (6 cards).
6. "Checkout our Packages" – promo block with price, CTA button, 2×2 photo collage.
7. Footer.

### Category / listing page
1. Top-level category tabs (reference: Packages, Furniture, Appliances, Baby & Kids, Electronics, Fitness, Others).
2. Sub-category image strip.
3. Left filter sidebar: Product Status (In Stock / Out of Stock with counts), Monthly Budget ranges with counts.
4. H1 "<Category> on Rent in Kochi" + product card grid.
5. Footer.

### Product card (same everywhere)
Badge (Popular / Best Seller / Price Drop / New) → wishlist heart → square image → delivery line ("Delivery in 1-3 days") → product name → "Monthly rent" label + price → two buttons: "Quick View" and "Add to Cart".

### Product detail page
Breadcrumb → gallery (main image + 4 thumbnails) → H1 → price "/mo" → delivery line → tenure dropdown → option groups (size/variant chips) → "100% Refundable Deposit: ₹…" → "Add to Cart" → protection add-on row → express delivery row → accordions (Cancellation & Returns, Extension) → "Features & Specs" → "Trending Rental Products" link list → footer.

### Footer
Four columns (Company links / Information / Policies / Need Help email) + "Download App" badges + copyright line + social icons. Dark background.

## Pages to produce

From the quotation (section I) mapped onto the reference layouts:

| # | Page | Based on reference page |
|---|---|---|
| 1 | Home | /kochi |
| 2 | Product Catalogue (category listing) | /kochi/furniture-on-rent |
| 3 | Product Details | product page |
| 4 | Cart / Checkout (rental dates, price + deposit breakdown, payment) | /checkout/cart |
| 5 | Login / Signup | modal or page |
| 6 | Customer Account (dashboard, booking history, booking detail, profile) | none; match the reference's visual language |
| 7 | Owner Registration | none |
| 8 | Owner Product Submission | none |
| 9 | About Us | /about/aboutus |
| 10 | Contact Us | /contact |
| 11 | FAQ | none |
| 12 | Terms & Conditions, Privacy, Cancellation, Refund | simple policy text pages |

Pages 1–4 are the priority; they are what the client will judge the design on. Build those first, pixel-close to the reference.

### RENDZO-specific additions (the "little differences")
- Rental **date range picker** (start/end) and availability state on the product page and cart. Rentomojo uses tenure-in-months; RENDZO books by dates. Keep the tenure dropdown's visual slot and put the date picker there.
- Price breakdown must show rental charge and refundable deposit **separately** before payment.
- "List your product" / owner entry point in the header or footer.
- WhatsApp floating button.

## Tech for the mockups

- Plain **HTML + CSS (+ minimal vanilla JS)**, one file per page, no build step. The client opens the files in a browser or via a shared link.
- Tailwind CSS via CDN is fine, or a single shared `assets/css/styles.css` with CSS variables for brand colors. Pick one approach and keep it consistent across all pages.
- Shared header and footer: copy the same markup into every page (no templating). If you change the header, change it everywhere.
- Mobile-first and responsive. Check every page at 375px, 768px and 1280px. The brief requires mobile-friendly.
- Placeholder images: use neutral product-style placeholders (picsum/unsplash-style URLs or local SVG placeholders). Do not hotlink rentomojo.com or p.rmjo.in images.
- Dummy product data: furniture and appliances typical for Kochi rentals (sofas, beds, mattresses, fridges, washing machines, ACs, water purifiers, laptops), realistic ₹ monthly rents (₹136–₹2,499/mo) and deposits.

## Suggested layout

```
/
├── CLAUDE.md
├── project-details/          # client brief + quotation (do not edit)
├── index.html                # Home
├── category.html             # Product catalogue / listing
├── product.html              # Product details
├── cart.html                 # Cart & checkout
├── login.html
├── account.html              # Customer dashboard + bookings
├── owner-register.html
├── owner-submit-product.html
├── about.html
├── contact.html
├── faq.html
├── policy.html               # one template for T&C / Privacy / Cancellation / Refund
└── assets/
    ├── css/styles.css
    ├── js/main.js            # menu toggle, carousel, accordion, tabs only
    └── img/                  # logo placeholder, icons, placeholder photos
```

## Working conventions

- Before building a page, re-check the matching reference page and list its sections top-to-bottom. Build in that order.
- Keep copy short and realistic. Use RENDZO's tagline on the hero. No lorem ipsum in client-facing areas.
- Do not add features that are not in the quotation scope (no chat bots, loyalty points, multi-city, etc.).
- Do not build backend, WordPress theme code, or real forms. Buttons and links may be non-functional or link between mockup pages.
- When the client asks for a change, apply it to every page that has that component.
- Deliverable to the client: the set of HTML pages (optionally screenshots/PDF of each page at desktop and mobile widths).
