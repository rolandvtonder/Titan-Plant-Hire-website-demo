import type {Entry} from './types';

/** Site clearing, rubble and earthworks services. */
export const services: Entry[] = [
  {
    slug: 'plot-clearing',
    name: 'Plot & site clearing',
    title: 'Plot Clearing Port Elizabeth | Site Clearing | Titan Plant Hire',
    description:
      'Plot and site clearing in Port Elizabeth: bush, overgrowth and rubble cleared and carted away so you can build. See before and after photos. 072 244 1916.',
    eyebrow: 'Bush, overgrowth & rubble',
    headline: [{t: 'Plot clearing'}, {t: 'from bush', i: true}, {t: 'to build-ready'}],
    intro:
      'Bought a plot that’s turned into bush? We clear vegetation, rubble and dumped material with our TLBs and skid steer, load it into our own tipper trucks and leave you with a clean, scraped site ready for the surveyor and builder.',
    card: 'Overgrown plots cleared, scraped and carted away — build-ready.',
    hero: 'tlb-loading-tipper-truck',
    gallery: ['plot-clearing-after-house', 'plot-clearing-before-after-1', 'plot-clearing-before-after-2', 'plot-clearing-before-after-3', 'plot-clearing-before-bush', 'plot-clearing-promo', 'tlb-jcb-3cx-with-tipper'],
    facts: [
      ['Machines', 'TLB, skid steer and tipper trucks'],
      ['Removes', 'Bush, overgrowth, rubble and dumped material'],
      ['Result', 'A clean, scraped plot'],
      ['Quote', 'Free, from photos or a site visit'],
      ['Area', 'Nelson Mandela Bay'],
    ],
    uses: [
      'Clearing vacant plots before building',
      'Clearing for municipal compliance on overgrown erven',
      'Removing illegally dumped rubble',
      'Preparing sites for surveyors and engineers',
      'Clearing for fencing and boundary walls',
    ],
    body: [
      {
        h: 'Why clear your plot properly',
        p: [
          'Overgrown plots attract illegal dumping, create fire risk and can lead to municipal notices. If you are planning to build, the site has to be cleared before it can be surveyed, set out and dug. Doing it with the right machines is faster, cheaper and leaves the ground in better condition than hand clearing.',
        ],
      },
      {
        h: 'How a plot clearing job works',
        list: [
          'Send us your plot address and a few photos on WhatsApp',
          'We quote based on the size, the vegetation and how much needs carting away',
          'The TLB or skid steer clears and loads; our tippers take the material away',
          'The site is scraped neat and left clean',
        ],
      },
      {
        h: 'Before and after',
        p: [
          'Scroll through the photos on this page — every one is a Titan job around Port Elizabeth, from bush-covered plots to rubble-strewn verges, cleared down to clean ground.',
        ],
      },
      {
        h: 'Trees and protected vegetation',
        p: [
          'Some indigenous trees and vegetation are protected, and some estates have their own rules. Check with your estate or the municipality before clearing large trees, and let us know about anything that must be kept so we can work around it.',
        ],
      },
    ],
    faqs: [
      {q: 'How much does it cost to clear a plot in Port Elizabeth?', a: 'It depends on the plot size, the thickness of the vegetation and how many tipper loads need removing. Send us photos and the address on WhatsApp for a quick quote.'},
      {q: 'How long does it take?', a: 'An average residential plot is often cleared in a day. Larger or very overgrown plots can take longer.'},
      {q: 'Do you remove everything you clear?', a: 'Yes. We load the cleared material into our own tipper trucks and take it away.'},
      {q: 'Can you level the plot as well?', a: 'Yes. We can scrape and roughly level the plot after clearing. See our earthworks and levelling service for more.'},
    ],
    related: ['/site-clearing/rubble-removal/', '/site-clearing/earthworks-and-levelling/', '/plant-hire/tlb-hire/'],
  },
  {
    slug: 'rubble-removal',
    name: 'Rubble removal',
    title: 'Rubble Removal Port Elizabeth | Loaded & Carted | Titan Plant Hire',
    description:
      'Rubble removal in Port Elizabeth: building rubble, concrete and bricks loaded by TLB or skid steer and carted away by tipper truck. Call 072 244 1916.',
    eyebrow: 'Loaded & carted away',
    headline: [{t: 'Rubble removal'}, {t: 'gone', i: true}, {t: 'in one trip'}],
    intro:
      'Renovation finished, wall demolished, or a pile left by the last contractor? We bring the machine to load it and the tipper truck to take it away — usually the same day.',
    card: 'Building rubble loaded by machine and carted away by tipper.',
    hero: 'tlb-jcb-3cx-with-tipper',
    gallery: ['pool-area-rubble-before-after', 'tlb-rubble-removal', 'site-clearing-before', 'site-clearing-after', 'tlb-loading-tipper-truck'],
    facts: [
      ['Loading', 'TLB or skid steer'],
      ['Removal', 'Titan tipper trucks'],
      ['Materials', 'Concrete, bricks, plaster, tiles, soil'],
      ['Access', 'Skid steer for tight yards'],
      ['Timing', 'Often same-day removal'],
    ],
    uses: [
      'Renovation and demolition rubble',
      'Old concrete slabs, paving and driveways',
      'Rubble around pools, outbuildings and gardens',
      'Builders’ rubble at the end of a project',
      'Illegally dumped rubble on verges and plots',
    ],
    body: [
      {
        h: 'Loaded by machine, not by hand',
        p: [
          'Loading rubble by hand into a bakkie takes all day and many trips. Our TLB or skid steer loads a tipper in minutes, and the tipper takes it all away in one go. For tight back gardens and pool areas, the compact JCB skid steer carries the rubble out to the truck.',
        ],
      },
      {
        h: 'What we can and can’t take',
        p: ['Standard building rubble is no problem. Please tell us beforehand if the load contains:'],
        list: [
          'Asbestos roof sheets or pipes (needs specialised removal)',
          'Chemicals, paint or oil',
          'Tyres',
          'Large amounts of garden refuse mixed with rubble',
        ],
      },
      {
        h: 'Get a quick quote',
        p: [
          'Send a photo of the rubble pile and the access on WhatsApp to 072 244 1916. We will tell you which machine, how many loads and the price.',
        ],
      },
    ],
    faqs: [
      {q: 'How much does rubble removal cost?', a: 'Price depends on the volume, the type of rubble and access. Send us a photo on WhatsApp for a quick quote.'},
      {q: 'Can you get into a back garden?', a: 'Usually, yes. Our compact skid steer fits through most gates and side passages.'},
      {q: 'Do you clean up afterwards?', a: 'We load cleanly and leave the area tidy and scraped.'},
    ],
    related: ['/plant-hire/skid-steer-hire/', '/plant-hire/tipper-truck-hire/', '/site-clearing/plot-clearing/'],
  },
  {
    slug: 'earthworks-and-levelling',
    name: 'Earthworks & levelling',
    title: 'Earthworks & Levelling Port Elizabeth | Titan Plant Hire',
    description:
      'Earthworks in Port Elizabeth: excavation, trenching, cut and fill, levelling and backfilling with TLBs, skid steer, tippers and water truck. 072 244 1916.',
    eyebrow: 'Dig, cart, level',
    headline: [{t: 'Earthworks'}, {t: '& levelling', i: true}, {t: 'done right'}],
    intro:
      'From service trenches and foundations to cutting, filling and levelling a site, Titan brings the full set — TLBs to dig, tippers to cart, a skid steer to shape and a water truck for compaction.',
    card: 'Excavation, trenching, cut and fill, levelling and backfill.',
    hero: 'tipper-truck-earthworks',
    gallery: ['excavator-loading-tipper-truck', 'tlb-loading-tipper-truck', 'plot-clearing-after-house', 'water-tanker-side', 'tlb-jcb-3cx-front-loader'],
    facts: [
      ['Machines', 'TLBs, skid steer, tippers, water truck'],
      ['Work', 'Excavation, trenching, cut & fill, levelling'],
      ['Compaction water', 'From our own water truck'],
      ['Spoil', 'Carted away by Titan tippers'],
      ['Quote', 'From plans, photos or a site visit'],
    ],
    uses: [
      'Excavating foundations and footings',
      'Trenching for plumbing, drainage and electrical',
      'Cut and fill on sloping sites',
      'Levelling for slabs, driveways, lawns and paving',
      'Backfilling after foundations and services',
      'Stockpiling and moving bulk material',
    ],
    body: [
      {
        h: 'The whole earthworks package from one company',
        p: [
          'Earthworks go wrong when the digger, the trucks and the water arrive on different days. Titan schedules its own machines together so that excavated material is loaded straight out, fill is brought in and the water truck is on hand for compaction.',
        ],
      },
      {
        h: 'Levelling for paving, lawns and slabs',
        p: [
          'A properly levelled and compacted base stops paving from sinking and water from pooling. We cut down high spots, fill low spots and shape falls so water drains away from buildings.',
        ],
      },
      {
        h: 'Plans and engineers',
        p: [
          'For structural foundations and large cut-and-fill work, we follow your engineer’s or architect’s levels and specifications. Send us the plans with your quote request.',
        ],
      },
    ],
    faqs: [
      {q: 'Do you do excavation for foundations?', a: 'Yes. Our TLBs dig foundations and footings, and our tippers cart the spoil away.'},
      {q: 'Can you supply fill material?', a: 'We deliver sand, stone and grit. Ask us about fill for your specific job.'},
      {q: 'Do you compact the ground?', a: 'Tell us about your compaction requirements when you request a quote, and we will advise on the right approach and the water truck.'},
    ],
    related: ['/plant-hire/tlb-hire/', '/plant-hire/water-tanker-hire/', '/plant-hire/tipper-truck-hire/'],
  },
  {
    slug: 'road-spill-cleanup',
    name: 'Road & spill clean-up',
    title: 'Road Spill Clean-up Port Elizabeth | Titan Plant Hire',
    description:
      'Road spill and load clean-up in Port Elizabeth. TLBs and tippers to clear spilled loads from roads and highways quickly and safely. Call 072 244 1916.',
    eyebrow: 'Spilled loads & verges',
    headline: [{t: 'Road clean-up'}, {t: 'fast', i: true}, {t: 'when it counts'}],
    intro:
      'When a truck sheds its load on a highway, every minute of closed road counts. Titan has cleared spilled material from major roads around the Bay with our TLBs and tippers, working alongside traffic officials to reopen lanes quickly.',
    card: 'Spilled loads cleared from roads and highways, fast.',
    hero: 'road-spill-cleanup-4',
    gallery: ['road-spill-cleanup-1', 'road-spill-cleanup-2', 'road-spill-cleanup-3', 'site-clearing-before', 'site-clearing-after'],
    facts: [
      ['Machines', 'TLB and tipper trucks'],
      ['Jobs', 'Spilled loads, verge clearing, dumped rubble'],
      ['Works with', 'Traffic officials and transport companies'],
      ['Contact', 'Call 072 244 1916'],
      ['Area', 'Nelson Mandela Bay roads'],
    ],
    uses: [
      'Clearing spilled loads from roads and highways',
      'Verge and road-reserve clearing',
      'Removing dumped rubble from public areas',
      'Clean-up support for transport companies and insurers',
    ],
    body: [
      {
        h: 'Spills cleared and roads reopened',
        p: [
          'A TLB is ideal for spills: it scoops, loads and pushes material off the road surface, and it drives to the scene on its own wheels. Our tipper trucks then remove the material completely. We work under the direction of traffic officials on the scene.',
        ],
      },
      {
        h: 'Verges and public spaces',
        p: [
          'We also clear overgrown and rubble-strewn verges, road reserves and open spaces — see the before and after photos of a Port Elizabeth verge on this page.',
        ],
      },
    ],
    faqs: [
      {q: 'Who do I call for a load spill?', a: 'Call us on 072 244 1916. Tell us the location, what was spilled and roughly how much.'},
      {q: 'Can transport companies and insurers book you?', a: 'Yes. Call us to discuss how we can support your clean-up.'},
    ],
    related: ['/plant-hire/tlb-hire/', '/plant-hire/tipper-truck-hire/', '/site-clearing/rubble-removal/'],
  },
];
