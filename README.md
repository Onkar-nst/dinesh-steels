# Dinesh Steels — Company Website

A modern, animated marketing website for **Dinesh Steels** (steel & metal stockist, supplier
and global exporter). Built with **React + Vite + Tailwind CSS + Framer Motion**.

The section flow and component styles are modelled on three reference sites:
- **Airkom** — hero carousel, trust strip, materials tiles, why-us, testimonials, logo marquee, CTA, footer
- **Laser Technologies** — about, product catalog (filter + cards), industries grid
- **Famous Dredging Corp** — animated stat counters, service cards, process timeline, FAQ accordion

## Run locally

```bash
npm install      # first time only
npm run dev      # start dev server → http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Structure

```
src/
  App.jsx                 # section order (the full page flow)
  data/
    site.js               # company info, nav, stats, materials, services, industries, FAQ, testimonials…
    products.js           # product catalog (categories, sub-categories, products)
    images.js             # image path map
  components/             # one file per section + shared ui/ helpers
public/img/               # all photos (self-hosted, swap for Dinesh Steels' own)
```

## Sections (top → bottom)

Navbar · Hero (carousel) · Trust badges · Stats · About · Products (filterable catalog) ·
Materials · Services · Industries · Why Choose Us · Process · Testimonials · Client logos ·
Weight Calculator · FAQ · CTA · Contact (quote form) · Footer · floating WhatsApp/scroll-top.

## Notes / TODO before going live

- **Content is placeholder.** Replace company name/phone/email/address in `src/data/site.js`,
  stats, testimonials, and product specs with real Dinesh Steels data.
- **Images are placeholders** sourced from Openverse (commercially-licensed / public-domain).
  Replace the files in `public/img/` with Dinesh Steels' own product & facility photos
  (keep the same filenames and no code changes are needed). Verify licensing/attribution
  for any stock image you keep.
- Forms currently show a success state on submit (no backend). Wire them to an email service
  or CRM (e.g. Formspree, or your own API) when ready.
- The contact map is an OpenStreetMap embed centred on Mumbai — update the coordinates in
  `src/components/Contact.jsx` to the real address.
```
