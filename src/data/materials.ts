import type {Entry} from './types';

/**
 * Sand, stone & grit. "From" prices are taken from Titan's own Facebook
 * posts — TODO: confirm they are still current.
 */
export const materials: Entry[] = [
  {
    slug: 'building-sand',
    name: 'Building sand',
    title: 'Building Sand Delivery Port Elizabeth | 7 Ton from R1100',
    description:
      '7 ton building sand delivered in Port Elizabeth (Gqeberha) from R1100. For brickwork, mortar and fill. Titan Plant Hire delivers — call 072 244 1916.',
    eyebrow: '7 ton loads delivered',
    headline: [{t: 'Building sand'}, {t: 'from R1100', i: true}, {t: 'per 7 tons'}],
    intro:
      'Good building sand is the base of strong brickwork. We deliver 7-ton loads of building sand to homes and sites across Nelson Mandela Bay, tipped exactly where you want it.',
    card: '7-ton loads for brickwork, mortar and fill — from R1100.',
    hero: 'tipper-truck-sand-delivery',
    gallery: ['building-sand-7-ton-promo', 'tipper-truck-sand-stone-grit-promo', 'tlb-jcb-3cx-front-loader'],
    price: {from: 1100, unit: 'per 7 ton load'},
    facts: [
      ['Load size', '7 ton'],
      ['Price', 'From R1100 per load'],
      ['Delivery', 'Tipper truck, tipped where you need it'],
      ['Used for', 'Brickwork mortar, bedding and fill'],
      ['Area', 'Port Elizabeth & surrounds'],
    ],
    uses: [
      'Mortar for brick and block laying',
      'Bedding and backfill around foundations',
      'General fill and levelling',
      'Mixing with cement and stone for concrete',
    ],
    body: [
      {
        h: 'How much building sand do I need?',
        p: [
          'As a rough guide, a 7-ton load of building sand is around 4 to 5 cubic metres, depending on moisture. For brickwork, a common mortar mix is about 1 part cement to 4–6 parts sand. A small boundary wall or outbuilding might need a single load; a full house will need several loads over the build.',
          'Not sure? Tell us what you are building — the wall length and height, or the size of the house — and we will help you estimate so you do not over- or under-order.',
        ],
      },
      {
        h: 'Where should we tip it?',
        p: [
          'Choose a firm, flat spot close to where the sand will be used, with space for a tipper truck to reverse and lift its bin. Avoid tipping on new paving if you can, or lay down a tarp or boards first. Look up for overhead wires and branches — the tipper bin rises high when tipping.',
        ],
      },
      {
        h: 'Need it spread?',
        p: [
          'If the sand needs to be moved or spread around the property, book our skid steer for a few hours on delivery day.',
        ],
      },
    ],
    faqs: [
      {q: 'How much does building sand cost in Port Elizabeth?', a: 'Our 7-ton building sand loads are from R1100. The final price depends on your delivery address — call or WhatsApp for an exact quote.'},
      {q: 'How many cubes is 7 tons of sand?', a: 'Roughly 4 to 5 cubic metres, depending on how wet the sand is.'},
      {q: 'Can you deliver on a Saturday?', a: 'Ask us when you book — we will do our best to fit your schedule.'},
      {q: 'Is building sand the same as plaster sand?', a: 'No. Plaster sand is finer and is used for plastering walls. Ask us if you need plaster sand or other materials.'},
    ],
    related: ['/sand-and-stone/crusher-stone/', '/sand-and-stone/grit/', '/plant-hire/skid-steer-hire/'],
  },
  {
    slug: 'crusher-stone',
    name: 'Crusher stone',
    title: 'Crusher Stone Delivery Port Elizabeth | 13mm & 19mm from R1350',
    description:
      '13mm and 19mm crusher stone delivered in 7 ton loads from R1350 across Port Elizabeth. For concrete, drainage and driveways. Call Titan on 072 244 1916.',
    eyebrow: '13mm & 19mm stone',
    headline: [{t: 'Crusher stone'}, {t: 'from R1350', i: true}, {t: 'per 7 tons'}],
    intro:
      'Clean 13mm and 19mm crusher stone for concrete, foundations, drainage and driveways — delivered in 7-ton loads by our own tipper trucks.',
    card: '13mm and 19mm stone for concrete and drainage — from R1350.',
    hero: 'tipper-truck-stone-delivery',
    gallery: ['crusher-stone-7-ton-promo', 'tipper-truck-stone-tipping', 'tipper-truck-sand-stone-grit-promo'],
    price: {from: 1350, unit: 'per 7 ton load'},
    facts: [
      ['Sizes', '13mm and 19mm'],
      ['Load size', '7 ton'],
      ['Price', 'From R1350 per load'],
      ['Used for', 'Concrete, foundations, drainage, driveways'],
      ['Delivery', 'Tipped on site by Titan'],
    ],
    uses: [
      'Concrete for foundations, slabs and footings',
      'French drains and soakaways',
      'Driveways and parking areas',
      'Pipe bedding and drainage layers',
    ],
    body: [
      {
        h: '13mm or 19mm — which stone should I order?',
        p: [
          '19mm stone is the standard choice for structural concrete such as foundations and floor slabs, because the larger stone gives a strong mix. 13mm stone suits thinner concrete work, smaller pours and drainage layers, and gives a slightly smoother finish. If your engineer or builder has specified a size, follow their specification.',
        ],
      },
      {
        h: 'Mixing concrete',
        p: [
          'A common general-purpose concrete mix is roughly 1 part cement, 2 parts sand and 3 parts stone, but the right mix depends on the job and the strength required. For structural work, always follow your engineer’s specification.',
        ],
      },
      {
        h: 'Order sand and stone together',
        p: [
          'Most concrete jobs need both. Ask us about delivering building sand and crusher stone together so everything is on site when your builder needs it.',
        ],
      },
    ],
    faqs: [
      {q: 'How much does crusher stone cost in Port Elizabeth?', a: 'Our 7-ton loads of 13mm or 19mm crusher stone are from R1350, depending on your delivery address.'},
      {q: 'What stone is best for a French drain?', a: '19mm stone is commonly used for French drains and soakaways because it leaves good gaps for water to flow through.'},
      {q: 'Can I get half a load?', a: 'Call us to discuss smaller quantities — we will tell you what is possible for your area.'},
    ],
    related: ['/sand-and-stone/building-sand/', '/sand-and-stone/grit/', '/plant-hire/tipper-truck-hire/'],
  },
  {
    slug: 'grit',
    name: 'Grit',
    title: 'Grit Delivery Port Elizabeth | Paving & Bedding | Titan Plant Hire',
    description:
      'Grit delivered across Port Elizabeth for paving bedding, levelling and fill. 7 ton loads by tipper truck. Call Titan Plant Hire on 072 244 1916 for a price.',
    eyebrow: 'Paving & bedding',
    headline: [{t: 'Grit'}, {t: 'for paving', i: true}, {t: '& levelling'}],
    intro:
      'Grit is the go-to material for bedding paving and building a firm, level base. We deliver it in bulk alongside our sand and stone.',
    card: 'Bedding for paving, levelling and fill — call for a price.',
    hero: 'tipper-truck-stone-tipping',
    gallery: ['tipper-truck-sand-stone-grit-promo', 'skid-tlb-tipper-promo'],
    facts: [
      ['Load size', 'Typically 7 ton'],
      ['Price', 'Call for current price'],
      ['Used for', 'Paving bedding, levelling, fill'],
      ['Delivery', 'Tipped on site by Titan'],
      ['Area', 'Port Elizabeth & surrounds'],
    ],
    uses: [
      'Bedding layer under paving bricks',
      'Levelling uneven ground',
      'Filling around paving and between layers',
      'Base preparation for small slabs and pathways',
    ],
    body: [
      {
        h: 'Getting a paving base right',
        p: [
          'Paving lasts when the base is right. After the area is excavated and compacted, a bedding layer of grit is screeded level so the pavers sit evenly and drain properly. Our skid steer can prepare and level the area before your paver arrives.',
        ],
      },
      {
        h: 'How much grit do I need?',
        p: [
          'Multiply the area in square metres by the bedding depth in metres to get cubic metres, then add a little extra for waste. Send us the size of your paving area and we will help you estimate the right load.',
        ],
      },
    ],
    faqs: [
      {q: 'What is grit used for?', a: 'Mainly as a bedding layer under paving, and for levelling and filling.'},
      {q: 'How much does a load of grit cost?', a: 'Call or WhatsApp us on 072 244 1916 for the current price delivered to your area.'},
    ],
    related: ['/sand-and-stone/building-sand/', '/sand-and-stone/crusher-stone/', '/plant-hire/skid-steer-hire/'],
  },
];
