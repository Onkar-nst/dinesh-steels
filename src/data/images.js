// Self-hosted, topically-relevant images (in /public/img).
// Sourced from Openverse (commercially-licensed / public-domain) and stored
// locally so they always load and can be swapped for Jyothi Steels' own photos.
// The img() helper keeps the (name, width) call-signature the components use;
// widths are ignored for local files (they are already optimised).
export const img = (path) => path

const P = (name) => `/img/${name}.jpg`

export const IMG = {
  // Hero slides
  heroPipes: P('heroPipes'),
  heroFactory: P('heroFactory'),
  heroMolten: P('heroMolten'),
  // Generic
  warehouse: P('warehouse'),
  showcase: P('showcase'),
  whyChoose: P('whyChoose'),

  // Products
  pipes: P('pipes'),
  flanges: P('flanges'),
  buttweld: P('buttweld'),
  roundBars: P('roundBars'),
  fasteners: P('fasteners'),
  dairy: P('dairy'),
  beam: P('beam'),

  // Materials
  stainless: P('stainless'),
  carbon: P('carbon'),
  brass: P('brass'),
  aluminium: P('aluminium'),
  copper: P('copper'),
  nickel: P('nickel'),
  hastelloy: P('hastelloy'),
  titanium: P('titanium'),

  // Industries
  oilgas: P('oilgas'),
  petrochemical: P('petrochemical'),
  marine: P('marine'),
  power: P('power'),
  construction: P('construction'),
  cement: P('cement'),
  aerospace: P('aerospace'),
  chemical: P('chemical'),
}
