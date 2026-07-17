import { IMG } from './images'

export const COMPANY = {
  name: 'Dinesh Steels',
  tagline: 'Precision Steel, Engineered for the World',
  phone: '+91 98200 00000',
  phoneHref: '+919820000000',
  whatsapp: '919820000000',
  email: 'sales@dineshsteels.com',
  email2: 'export@dineshsteels.com',
  address: 'Plot 21, Kalbadevi Industrial Estate, Mumbai, Maharashtra 400002, India',
  website: 'www.dineshsteels.com',
}

// Trust strip (Airkom key-highlights style)
export const TRUST = [
  { icon: 'ShieldCheck', title: 'ISO 9001:2015', sub: 'Certified Quality System' },
  { icon: 'Globe2', title: '65+ Countries', sub: 'Global Export Reach' },
  { icon: 'BadgeCheck', title: 'MTC / EN 10204', sub: '3.1 Documentation' },
  { icon: 'Timer', title: '24-Hour', sub: 'Quotation Response' },
]

// Stats (FDC animated counters)
export const STATS = [
  { value: 25, suffix: '+', label: 'Years of Experience' },
  { value: 8000, suffix: '+', label: 'Products in Stock' },
  { value: 4000, suffix: '+', label: 'Global Clients' },
  { value: 65, suffix: '+', label: 'Countries Served' },
]

// Materials (Airkom hover-zoom tiles)
export const MATERIALS = [
  { name: 'Stainless Steel', grades: '304 / 316 / 321 / 904L / Duplex', img: IMG.stainless },
  { name: 'Carbon Steel', grades: 'A105 / A106 / A234 WPB', img: IMG.carbon },
  { name: 'Brass', grades: 'C26000 / C36000 / Naval Brass', img: IMG.brass },
  { name: 'Aluminium', grades: '5083 / 6061 / 6082 / 7075', img: IMG.aluminium },
  { name: 'Copper', grades: 'C10100 / C11000 / CuNi 90/10', img: IMG.copper },
  { name: 'Nickel Alloys', grades: 'Nickel 200 / 201 / Monel 400', img: IMG.nickel },
  { name: 'Hastelloy', grades: 'C-276 / C-22 / B-2 / X', img: IMG.hastelloy },
  { name: 'Titanium', grades: 'Gr 1 / Gr 2 / Gr 5 / Gr 7', img: IMG.titanium },
]

// Services (FDC icon cards)
export const SERVICES = [
  {
    icon: 'Scissors',
    title: 'Precision Cutting',
    desc: 'CNC sawing, plasma & laser cutting to exact lengths and custom dimensions with tight tolerances.',
  },
  {
    icon: 'FlaskConical',
    title: 'Testing & Inspection',
    desc: 'In-house PMI, hydro, ultrasonic and third-party inspection with full MTC traceability.',
  },
  {
    icon: 'Hammer',
    title: 'Fabrication',
    desc: 'Bevelling, threading, welding and value-added fabrication tailored to project drawings.',
  },
  {
    icon: 'Tag',
    title: 'Marking & Coding',
    desc: 'Hard-stamping, colour coding and heat-number marking as per international standards.',
  },
  {
    icon: 'Ship',
    title: 'Global Logistics',
    desc: 'Sea-worthy packing, container consolidation and door-to-port dispatch to 65+ countries.',
  },
  {
    icon: 'FileCheck2',
    title: 'Documentation',
    desc: 'Complete export documentation — MTC, COO, packing list and compliance certificates.',
  },
]

// Industries (Laser-Tech segment grid)
export const INDUSTRIES = [
  { name: 'Oil & Gas', img: IMG.oilgas, desc: 'Upstream to downstream piping systems' },
  { name: 'Petrochemical', img: IMG.petrochemical, desc: 'Corrosion-resistant process lines' },
  { name: 'Marine & Shipbuilding', img: IMG.marine, desc: 'Sea-grade alloys & fittings' },
  { name: 'Power Generation', img: IMG.power, desc: 'High-temp boiler & turbine grades' },
  { name: 'Construction', img: IMG.construction, desc: 'Structural steel & sections' },
  { name: 'Cement', img: IMG.cement, desc: 'Wear-resistant plates & pipes' },
  { name: 'Aerospace', img: IMG.aerospace, desc: 'Precision titanium & nickel alloys' },
  { name: 'Chemical Processing', img: IMG.chemical, desc: 'Exotic-alloy piping solutions' },
]

// Why Choose Us (Airkom numbered blocks)
export const WHY = [
  {
    title: 'Ready Stock, Global Dispatch',
    desc: 'One of India’s largest ready inventories — 8,000+ product lines dispatched to 65+ countries with minimal lead time.',
  },
  {
    title: 'Certified & Traceable Quality',
    desc: 'Every consignment ships with EN 10204 3.1 MTC, full heat-number traceability and third-party inspection on request.',
  },
  {
    title: 'Engineering-Grade Support',
    desc: 'A dedicated technical team helps you select the right grade, dimension and specification for your project.',
  },
  {
    title: 'On-Time, Every Time',
    desc: 'Sea-worthy packing and a proven export supply chain ensure your material arrives on schedule, in spec.',
  },
]

// Process (FDC milestone timeline)
export const PROCESS = [
  { step: '01', title: 'Enquiry', desc: 'Share your specification, grade and quantity — get a response within 24 hours.' },
  { step: '02', title: 'Quotation', desc: 'Receive a detailed, competitive quote with lead time and documentation scope.' },
  { step: '03', title: 'Inspection', desc: 'Material verified, tested and inspected with full MTC traceability.' },
  { step: '04', title: 'Packing', desc: 'Sea-worthy packing, marking and container consolidation for safe transit.' },
  { step: '05', title: 'Delivery', desc: 'Door-to-port dispatch with complete export documentation, worldwide.' },
]

// Testimonials (Airkom carousel)
export const TESTIMONIALS = [
  {
    quote:
      'Dinesh Steels delivered our duplex flanges ahead of schedule with flawless documentation. Their MTC traceability is the best we have worked with.',
    name: 'Ahmed Al-Rashid',
    role: 'Procurement Head',
    company: 'Gulf Petrochem, UAE',
    rating: 5,
  },
  {
    quote:
      'Consistent quality across every consignment. We have sourced stainless pipes for three years and never had a rejection.',
    name: 'Rajesh Menon',
    role: 'Project Manager',
    company: 'Coastal Power Ltd, India',
    rating: 5,
  },
  {
    quote:
      'Their technical team helped us select the right Hastelloy grade for a critical chemical line. True engineering partners.',
    name: 'Sofia Nilsson',
    role: 'Piping Engineer',
    company: 'Nordic Process AB, Sweden',
    rating: 5,
  },
  {
    quote:
      'Fast quotes, sea-worthy packing and zero damage on arrival at our Houston yard. Highly recommended exporter.',
    name: 'Michael Carter',
    role: 'Supply Chain Lead',
    company: 'TexMarine Fabricators, USA',
    rating: 5,
  },
]

// Client logos (Airkom marquee) — self-hosted brand logos in /public/img/logos.
// Fictional partner brands; swap these SVGs for real client logos when available.
export const CLIENTS = [
  { name: 'PetroGulf', logo: '/img/logos/petrogulf.svg' },
  { name: 'Marine Tech', logo: '/img/logos/marine-tech.svg' },
  { name: 'AlloyWorks', logo: '/img/logos/alloyworks.svg' },
  { name: 'NordProcess', logo: '/img/logos/nordprocess.svg' },
  { name: 'BuildCorp', logo: '/img/logos/buildcorp.svg' },
  { name: 'PowerGrid', logo: '/img/logos/powergrid.svg' },
  { name: 'AeroFab', logo: '/img/logos/aerofab.svg' },
  { name: 'ChemLine', logo: '/img/logos/chemline.svg' },
  { name: 'SteelBridge', logo: '/img/logos/steelbridge.svg' },
  { name: 'OceanRig', logo: '/img/logos/oceanrig.svg' },
  { name: 'CementCo', logo: '/img/logos/cementco.svg' },
  { name: 'TurbineX', logo: '/img/logos/turbinex.svg' },
]

// FAQ (FDC accordion)
export const FAQ = [
  {
    q: 'What products does Dinesh Steels supply?',
    a: 'We stock and export pipes & tubes, flanges, buttweld and forged fittings, fasteners, sheets & plates, round bars, dairy fittings and structural beams & channels across ferrous and non-ferrous metals.',
  },
  {
    q: 'Which materials and grades do you offer?',
    a: 'Stainless steel, carbon steel, brass, aluminium, copper, nickel alloys, Hastelloy and titanium — in all commonly specified grades and, on request, custom specifications.',
  },
  {
    q: 'Do you provide test certificates and documentation?',
    a: 'Yes. Every order ships with EN 10204 3.1 Mill Test Certificates, heat-number traceability and complete export documentation. Third-party inspection can be arranged on request.',
  },
  {
    q: 'Which countries do you export to?',
    a: 'We currently export to 65+ countries across the Middle East, Europe, North America, Africa and Southeast Asia, with sea-worthy packing and door-to-port logistics.',
  },
  {
    q: 'What is your typical lead time?',
    a: 'Ready-stock items are dispatched within days. For custom cutting, fabrication or mill-sourced grades, lead time is confirmed at the quotation stage.',
  },
  {
    q: 'How do I get a quote?',
    a: 'Share your specification, grade, dimension and quantity via the Get a Quote form, email or WhatsApp — you will receive a detailed quotation within 24 hours.',
  },
]

// Navigation
export const NAV = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  {
    label: 'Products',
    href: '#products',
    dropdown: [
      'Pipes & Tubes', 'Flanges', 'Round Bars',
      'Fasteners', 'Dairy Fittings', 'Beam & Channel',
    ],
  },
  {
    label: 'Materials',
    href: '#materials',
    dropdown: [
      'Stainless Steel', 'Carbon Steel', 'Brass', 'Aluminium',
      'Copper', 'Nickel Alloys', 'Hastelloy', 'Titanium',
    ],
  },
  { label: 'Industries', href: '#industries' },
  { label: 'Contact', href: '#contact' },
]
