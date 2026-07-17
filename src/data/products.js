import { IMG } from './images'

// Laser-Tech style catalog: category (tabs) -> sub-category (sidebar) -> products (grid)
export const CATEGORIES = [
  { id: 'pipes', name: 'Pipes & Tubes', img: IMG.pipes, subs: ['Seamless', 'Welded', 'ERW', 'Hydraulic', 'Instrumentation'] },
  { id: 'flanges', name: 'Flanges', img: IMG.flanges, subs: ['Weld Neck', 'Slip-On', 'Blind', 'Socket Weld'] },
  { id: 'bars', name: 'Round Bars', img: IMG.roundBars, subs: ['Round Bar', 'Hex Bar', 'Square Bar'] },
  { id: 'fasteners', name: 'Fasteners', img: IMG.fasteners, subs: ['Bolts', 'Nuts', 'Studs', 'Washers'] },
  { id: 'dairy', name: 'Dairy Fittings', img: IMG.dairy, subs: ['Ferrule', 'Clamp', 'Valve'] },
  { id: 'beam', name: 'Beam & Channel', img: IMG.beam, subs: ['Beam', 'Channel', 'Angle'] },
]

const BASE_PRODUCTS = [
  // Pipes & Tubes
  { id: 1, name: 'Seamless Pipe', cat: 'pipes', sub: 'Seamless', img: IMG.pipes, standard: 'ASTM A312', size: '1/2"–24"', grade: 'SS 304/316', desc: 'Precision seamless pipes for high-pressure, corrosion-critical piping systems.' },
  { id: 2, name: 'Welded Pipe', cat: 'pipes', sub: 'Welded', img: IMG.pipes, standard: 'ASTM A358', size: '6"–48"', grade: 'SS 304L/316L', desc: 'Large-bore welded pipes for structural and process applications.' },
  { id: 3, name: 'ERW Tube', cat: 'pipes', sub: 'ERW', img: IMG.pipes, standard: 'ASTM A249', size: '1/4"–12"', grade: 'SS 304/321', desc: 'Electric-resistance-welded tubes with consistent wall thickness.' },
  { id: 4, name: 'Boiler Tube', cat: 'pipes', sub: 'Seamless', img: IMG.pipes, standard: 'ASTM A213', size: '1/2"–5"', grade: 'T11 / T22 / T91', desc: 'Seamless alloy boiler & heat-exchanger tubes for high-temperature service.' },
  { id: 5, name: 'Hydraulic Tube', cat: 'pipes', sub: 'Welded', img: IMG.pipes, standard: 'EN 10305', size: '6–60 mm', grade: 'SS 316L', desc: 'Cold-drawn precision tubes for hydraulic and instrumentation lines.' },
  { id: 6, name: 'Square / Rectangular Tube', cat: 'pipes', sub: 'ERW', img: IMG.pipes, standard: 'ASTM A554', size: '20–150 mm', grade: 'SS 304/316', desc: 'Ornamental and structural hollow sections with a fine finish.' },

  // Flanges
  { id: 7, name: 'Weld Neck Flange', cat: 'flanges', sub: 'Weld Neck', img: IMG.flanges, standard: 'ASME B16.5', size: '1/2"–24"', grade: 'A182 F304/F316', desc: 'High-integrity weld neck flanges for critical, high-pressure joints.' },
  { id: 8, name: 'Slip-On Flange', cat: 'flanges', sub: 'Slip-On', img: IMG.flanges, standard: 'ASME B16.5', size: '1/2"–24"', grade: 'A105 / F304', desc: 'Easy-to-align slip-on flanges for low-pressure service lines.' },
  { id: 9, name: 'Blind Flange', cat: 'flanges', sub: 'Blind', img: IMG.flanges, standard: 'ASME B16.5', size: '1/2"–36"', grade: 'A182 / A105', desc: 'Solid blind flanges to seal pipe ends and pressure vessels.' },
  { id: 10, name: 'Socket Weld Flange', cat: 'flanges', sub: 'Socket Weld', img: IMG.flanges, standard: 'ASME B16.5', size: '1/2"–4"', grade: 'A182 F316', desc: 'Compact socket-weld flanges for small-bore, high-pressure lines.' },
  { id: 11, name: 'Spectacle Blind', cat: 'flanges', sub: 'Blind', img: IMG.flanges, standard: 'ASME B16.48', size: '1/2"–24"', grade: 'A516 / F316', desc: 'Figure-8 spectacle blinds for positive line isolation.' },
  { id: 12, name: 'Long Weld Neck', cat: 'flanges', sub: 'Weld Neck', img: IMG.flanges, standard: 'ASME B16.5', size: '1/2"–24"', grade: 'A105 / F304', desc: 'Extended weld-neck flanges for vessel nozzles and barrels.' },

  // Round Bars
  { id: 28, name: 'Round Bar', cat: 'bars', sub: 'Round Bar', img: IMG.roundBars, standard: 'ASTM A276', size: '4–300 mm', grade: 'SS 304/316/410', desc: 'Bright and black round bars for machining and shafting.' },
  { id: 29, name: 'Hex Bar', cat: 'bars', sub: 'Hex Bar', img: IMG.roundBars, standard: 'ASTM A276', size: '5–65 mm', grade: 'SS 303/304', desc: 'Free-machining hex bars for fasteners and turned components.' },
  { id: 30, name: 'Square Bar', cat: 'bars', sub: 'Square Bar', img: IMG.roundBars, standard: 'ASTM A276', size: '6–100 mm', grade: 'SS 304/316', desc: 'Square bars for gates, grilles and structural machining.' },
  { id: 31, name: 'Bright Bar', cat: 'bars', sub: 'Round Bar', img: IMG.roundBars, standard: 'EN 10278', size: '3–160 mm', grade: 'SS 316L / 431', desc: 'Cold-drawn, centreless-ground bright bars with tight tolerance.' },

  // Fasteners
  { id: 32, name: 'Hex Bolt', cat: 'fasteners', sub: 'Bolts', img: IMG.fasteners, standard: 'ASTM A193', size: 'M6–M64', grade: 'B7 / B8 / B8M', desc: 'High-tensile hex bolts and stud bolts for flanged connections.' },
  { id: 33, name: 'Heavy Hex Nut', cat: 'fasteners', sub: 'Nuts', img: IMG.fasteners, standard: 'ASTM A194', size: 'M6–M64', grade: '2H / 8 / 8M', desc: 'Matching heavy hex nuts for high-temperature bolted joints.' },
  { id: 34, name: 'Threaded Stud', cat: 'fasteners', sub: 'Studs', img: IMG.fasteners, standard: 'ASTM A193', size: 'M6–M56', grade: 'B7 / B16', desc: 'Fully and double-end threaded studs for pressure flanges.' },
  { id: 35, name: 'Washer', cat: 'fasteners', sub: 'Washers', img: IMG.fasteners, standard: 'ASME B18.22', size: 'M6–M64', grade: 'SS 304/316', desc: 'Plain, spring and heavy washers for secure bolted assemblies.' },
  { id: 36, name: 'Socket Head Screw', cat: 'fasteners', sub: 'Bolts', img: IMG.fasteners, standard: 'DIN 912', size: 'M3–M36', grade: 'SS A2 / A4', desc: 'Allen socket-head cap screws for precision machinery.' },

  // Dairy Fittings
  { id: 37, name: 'Long Ferrule', cat: 'dairy', sub: 'Ferrule', img: IMG.dairy, standard: 'SMS / DIN / ISO', size: '1/2"–6"', grade: 'SS 304/316L', desc: 'Hygienic tri-clover ferrules for food, dairy and pharma lines.' },
  { id: 38, name: 'Tri-Clamp', cat: 'dairy', sub: 'Clamp', img: IMG.dairy, standard: '3A Sanitary', size: '1/2"–6"', grade: 'SS 304/316L', desc: 'Sanitary clamps and gaskets for quick-release hygienic assembly.' },
  { id: 39, name: 'Butterfly Valve', cat: 'dairy', sub: 'Valve', img: IMG.dairy, standard: '3A Sanitary', size: '1"–4"', grade: 'SS 316L', desc: 'Hygienic butterfly valves for sanitary flow control.' },

  // Beam & Channel
  { id: 40, name: 'ISMB Beam', cat: 'beam', sub: 'Beam', img: IMG.beam, standard: 'IS 2062', size: '100–600 mm', grade: 'E250 / A36', desc: 'Structural I-beams for construction and heavy fabrication.' },
  { id: 41, name: 'ISMC Channel', cat: 'beam', sub: 'Channel', img: IMG.beam, standard: 'IS 2062', size: '75–400 mm', grade: 'E250 / A36', desc: 'C-channels for frames, supports and structural steelwork.' },
  { id: 42, name: 'Equal Angle', cat: 'beam', sub: 'Angle', img: IMG.beam, standard: 'IS 2062', size: '25–200 mm', grade: 'E250 / A36', desc: 'Equal and unequal angles for bracing and structural connections.' },
]

// Demo products — 5 per category, added to each category's first sub-category so the
// default catalog view is tall enough to demonstrate the sticky-sidebar scroll effect.
const DEMO_PRODUCTS = CATEGORIES.flatMap((c, ci) =>
  Array.from({ length: 4 }, (_, i) => ({
    id: 1000 + ci * 10 + i + 1,
    name: `Demo ${i + 1}`,
    cat: c.id,
    sub: c.subs[0],
    img: c.img,
    standard: 'Demo spec',
    size: '—',
    grade: '—',
    desc: `Placeholder ${c.name.toLowerCase()} product for layout preview — replace with a real item.`,
  }))
)

export const PRODUCTS = [...BASE_PRODUCTS, ...DEMO_PRODUCTS]
