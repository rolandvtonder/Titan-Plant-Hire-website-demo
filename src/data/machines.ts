import type {Entry} from './types';

/**
 * Plant & machine hire. Prices and inclusions only appear where Titan has
 * published them (the skid steer day rate). Everything else is "call for a
 * quote" until confirmed.
 */
export const machines: Entry[] = [
  {
    slug: 'tlb-hire',
    name: 'TLB hire',
    title: 'TLB Hire Port Elizabeth | JCB 3CX Backhoe | Titan Plant Hire',
    description:
      'Hire a JCB 3CX TLB in Port Elizabeth (Gqeberha) for trenching, digging, loading and site clearing. Fast booking with Titan Plant Hire — call 072 244 1916.',
    eyebrow: 'JCB 3CX backhoe loader',
    headline: [{t: 'TLB hire'}, {t: 'that digs in', i: true}, {t: 'on day one'}],
    intro:
      'Our JCB 3CX TLBs are the workhorses of the Titan fleet: a loader shovel on the front, a backhoe on the back and the power to trench, dig, load and clear on residential, commercial and civil sites across Nelson Mandela Bay.',
    card: 'JCB 3CX backhoe loaders for trenching, digging, loading and clearing.',
    hero: 'tlb-jcb-3cx-front-loader',
    gallery: ['tlb-jcb-3cx-yard', 'tlb-jcb-3cx-with-tipper', 'tlb-loading-tipper-truck', 'tlb-fleet-graphic', 'road-spill-cleanup-3', 'tlb-and-skid-steer'],
    facts: [
      ['Machine', 'JCB 3CX TLB (backhoe loader)'],
      ['Front', 'Loader shovel for loading, levelling and moving material'],
      ['Rear', 'Backhoe for trenches, foundations and excavation'],
      ['Fleet', 'More than one TLB available'],
      ['Booking', 'Half day, full day or longer — call for rates'],
    ],
    uses: [
      'Trenching for water, sewer, stormwater and electrical lines',
      'Digging foundations and footings',
      'Loading tipper trucks with soil, rubble or spoil',
      'Site and plot clearing',
      'Backfilling and levelling after building work',
      'Stump and rock removal',
      'Road and verge clean-ups',
      'Moving sand, stone and topsoil around site',
    ],
    body: [
      {
        h: 'Why a TLB is usually the right first machine',
        p: [
          'A TLB (tractor-loader-backhoe) does the work of two machines. The front shovel loads, carries and levels, while the rear backhoe digs trenches and holes with precision. For most building, plumbing and landscaping jobs that means one machine on site instead of two, which keeps your costs down and your site less crowded.',
          'The JCB 3CX is one of the most widely used backhoe loaders in South Africa because it is reliable, easy to service and quick between tasks. It runs on rubber tyres, so it can drive between nearby sites on the road and will not chew up paving the way a tracked machine can.',
        ],
      },
      {
        h: 'Typical TLB jobs we do around Port Elizabeth',
        p: [
          'Most of our TLB work is in and around Gqeberha: new house foundations in Kragga Kamma and Theescombe, sewer and stormwater trenches, clearing overgrown plots before building, removing building rubble after renovations and loading tipper trucks on earthworks sites. We also help with roadside clean-ups and spills where a fast-moving loader is needed.',
        ],
        list: [
          'Residential: foundations, pool and septic excavations, driveways, rubble removal',
          'Commercial: site preparation, service trenches, loading and stockpiling',
          'Civil and municipal: verge clearing, road spill clean-ups, drainage work',
        ],
      },
      {
        h: 'Planning your TLB hire',
        p: [
          'Tell us what you are digging, roughly how much and where. We will tell you whether a TLB is the right fit or whether a skid steer, tipper truck or a combination will finish the job faster. If spoil needs to leave site, we can book a tipper truck at the same time so the TLB loads straight into it — no double-handling.',
          'Before any digging, make sure you know where existing underground services (water, electricity, fibre, gas) run. Mark them out or let us know about them so the operator can work around them safely.',
        ],
      },
      {
        h: 'Access and site conditions',
        p: [
          'A TLB needs reasonable access — typically a standard driveway gate or wider. If access is tight, for example a back garden or between walls, our JCB skid steer is the better choice. If you are not sure, send us a photo or video of the access on WhatsApp and we will advise.',
        ],
      },
    ],
    faqs: [
      {q: 'What is the difference between a TLB and an excavator?', a: 'A TLB has a loader shovel on the front and a backhoe on the back, and runs on wheels. It is ideal for mixed digging, loading and levelling. An excavator only digs, but can dig deeper and heavier. For most residential and light commercial jobs, a TLB is the more cost-effective choice.'},
      {q: 'Can I hire a TLB for half a day?', a: 'Call us on 072 244 1916 to discuss your job. We will recommend the hire period that suits the amount of work, and give you a clear quote before we arrive.'},
      {q: 'Does the TLB come with an operator?', a: 'Tell us about your job when you call and we will confirm the operator arrangement and what is included in your quote.'},
      {q: 'Can you take the soil away as well?', a: 'Yes. We run our own tipper trucks, so we can load and remove soil, rubble and spoil in one booking.'},
      {q: 'How soon can you be on site?', a: 'Availability changes daily. Call or WhatsApp us and we will give you the earliest slot — often the same week, sometimes the next day.'},
    ],
    related: ['/plant-hire/skid-steer-hire/', '/plant-hire/tipper-truck-hire/', '/site-clearing/rubble-removal/'],
  },
  {
    slug: 'skid-steer-hire',
    name: 'Skid steer hire',
    title: 'Skid Steer Hire Port Elizabeth | Bobcat Hire | Titan Plant Hire',
    description:
      'JCB 135 skid steer (Bobcat) hire in Port Elizabeth from R2800 per day including driver and diesel. Ideal for tight access, rubble and landscaping. 072 244 1916.',
    eyebrow: 'JCB 135 Eco Powerboom',
    headline: [{t: 'Skid steer'}, {t: 'hire', i: true}, {t: 'for tight'}, {t: 'spaces', i: true}],
    intro:
      'Compact, quick and strong for its size, our JCB 135 skid steer gets into back gardens, narrow driveways and between buildings where bigger machines can’t — and it comes with an experienced driver and fuel included.',
    card: 'Compact JCB 135 loader for tight access — from R2800/day incl. driver & diesel.',
    hero: 'skid-steer-jcb-135-side',
    gallery: ['skid-steer-jcb-135-rear', 'skid-steer-jcb-135-operator', 'skid-steer-jcb-135-yard', 'pool-area-rubble-before-after', 'tlb-and-skid-steer', 'skid-steer-hire-price-promo'],
    price: {from: 2800, unit: 'per day'},
    facts: [
      ['Machine', 'JCB 135 Eco Powerboom skid steer loader'],
      ['Day rate', 'From R2800 per day'],
      ['Included', 'Driver and diesel'],
      ['Best for', 'Tight access, levelling, loading and rubble'],
      ['Also called', 'Bobcat, skid loader, mini loader'],
    ],
    uses: [
      'Rubble removal from back gardens and courtyards',
      'Levelling ground before paving or lawn',
      'Spreading sand, stone, topsoil and compost',
      'Clearing around swimming pools and outbuildings',
      'Loading bakkies, trailers and tipper trucks',
      'Landscaping and garden makeovers',
      'Cleaning up after building and renovation work',
      'Moving pallets and materials on site',
    ],
    body: [
      {
        h: 'Skid steer hire from R2800 per day — driver and diesel included',
        p: [
          'Our skid steer day rate starts at R2800 and includes an experienced driver and the diesel. There is no fuel bill at the end of the day and no need for you to find or train an operator — you tell us what needs to move and we get it done.',
          'Prices can change and travel to outlying areas may be extra, so always confirm your quote when you book.',
        ],
      },
      {
        h: 'When to choose a skid steer over a TLB',
        p: [
          'The JCB 135 is far smaller than a TLB, turns on the spot and is gentle on paving. That makes it the right machine when access is through a normal gate, along the side of a house or into a walled yard. It is also excellent for jobs that are mostly about moving and levelling material rather than digging deep.',
          'If your job needs both digging and tight access, we can bring the skid steer and a TLB together — the TLB works where there is room, and the skid steer carries material out from the tight spots.',
        ],
      },
      {
        h: 'Popular skid steer jobs in Gqeberha',
        list: [
          'Clearing rubble left behind after a renovation or demolition',
          'Preparing a level base for paving, a patio or a driveway',
          'Spreading a 7-ton load of sand or stone exactly where you need it',
          'Clearing overgrown corners of a property',
          'Loading rubble into a tipper truck for removal',
        ],
      },
      {
        h: 'Getting the most out of your day',
        p: [
          'Have the work area clear of cars, furniture and loose items before the machine arrives, and decide where material should go. If rubble is leaving site, book a tipper truck for the same day so the skid steer can load directly into it. Send us a photo of the access and the job on WhatsApp and we will tell you roughly how long it should take.',
        ],
      },
    ],
    faqs: [
      {q: 'How much does skid steer hire cost in Port Elizabeth?', a: 'Our JCB skid steer is from R2800 per day, including a driver and diesel. Confirm the current rate and any travel charge when you book.'},
      {q: 'Is a skid steer the same as a Bobcat?', a: 'Yes. Bobcat is a brand name that many people use for any skid steer loader. Ours is a JCB 135 Eco Powerboom.'},
      {q: 'Will a skid steer fit through my gate?', a: 'A skid steer is compact and fits through most driveway gates and many side passages. Send us a photo or the gate width on WhatsApp and we will confirm.'},
      {q: 'Will it damage my paving or lawn?', a: 'Our driver works carefully and the machine runs on rubber tyres, but any loaded machine can mark soft lawn or loose paving. We will discuss the best route on site with you before starting.'},
      {q: 'Can you remove the rubble too?', a: 'Yes. We can bring a tipper truck so rubble is loaded and removed in the same booking.'},
    ],
    related: ['/plant-hire/tlb-hire/', '/site-clearing/rubble-removal/', '/sand-and-stone/'],
  },
  {
    slug: 'tipper-truck-hire',
    name: 'Tipper truck hire',
    title: 'Tipper Truck Hire Port Elizabeth | Titan Plant Hire',
    description:
      'Tipper truck hire in Port Elizabeth for rubble removal, earthworks and sand and stone deliveries. Mercedes-Benz tippers with drivers. Call 072 244 1916.',
    eyebrow: 'Mercedes-Benz tippers',
    headline: [{t: 'Tipper trucks'}, {t: 'that move', i: true}, {t: 'mountains'}],
    intro:
      'Titan runs its own Mercedes-Benz tipper trucks for carting rubble, soil and spoil off site and delivering sand, stone and grit onto it — loaded by our own TLBs and skid steers so the whole job runs on one booking.',
    card: 'Rubble, soil and spoil carted away — and sand and stone delivered.',
    hero: 'tipper-truck-earthworks',
    gallery: ['tipper-truck-sand-delivery', 'tipper-truck-stone-tipping', 'tipper-truck-stone-delivery', 'excavator-loading-tipper-truck', 'tlb-loading-tipper-truck', 'tipper-truck-hazard-graphic'],
    facts: [
      ['Trucks', 'Mercedes-Benz tippers, including a six-wheeler'],
      ['Driver', 'Supplied by Titan'],
      ['Loads', 'Rubble, soil, spoil, sand, stone and grit'],
      ['Material loads', 'Typically 7 ton'],
      ['Pairs with', 'Our TLBs and skid steer for loading'],
    ],
    uses: [
      'Rubble removal after building and renovations',
      'Carting away soil from excavations and foundations',
      'Earthworks and bulk material movement',
      'Delivering building sand, crusher stone and grit',
      'Plot and site clearing',
      'Garden refuse and overgrowth removal from clearing jobs',
    ],
    body: [
      {
        h: 'One company for the machine and the truck',
        p: [
          'The slowest part of many jobs is waiting for a truck. Because Titan owns both the loading machines and the tipper trucks, we schedule them together: the TLB or skid steer loads directly into the tipper and the material leaves site the same day. No piles left on your property overnight and no chasing two different contractors.',
        ],
      },
      {
        h: 'What we cart',
        list: [
          'Building rubble: bricks, concrete, plaster and tiles',
          'Soil and spoil from foundations, trenches and pools',
          'Cleared bush and overgrowth from plot clearing',
          'Bulk material between sites',
        ],
        p: [
          'Please let us know in advance if any load contains asbestos, chemicals, tyres or other hazardous waste — these cannot go in a standard load and need specialised disposal.',
        ],
      },
      {
        h: 'Deliveries of sand, stone and grit',
        p: [
          'The same tippers deliver building sand, 13mm and 19mm crusher stone and grit across Nelson Mandela Bay, usually in 7-ton loads. See our sand and stone page for prices and advice on how much to order.',
        ],
      },
    ],
    faqs: [
      {q: 'How much rubble fits in a tipper truck?', a: 'It depends on the truck and the material — heavy concrete fills a truck by weight long before it is full by volume. Describe or photograph the pile and we will tell you how many loads to expect.'},
      {q: 'Can you load the truck for us?', a: 'Yes. We usually send a TLB or skid steer with the tipper so the loading is done for you.'},
      {q: 'Where does the rubble go?', a: 'We take loads to appropriate disposal or reuse sites. Let us know about anything unusual in the load beforehand.'},
      {q: 'Do you deliver sand and stone with the tippers?', a: 'Yes — building sand, crusher stone and grit, usually in 7-ton loads. See the sand and stone page for prices.'},
    ],
    related: ['/site-clearing/rubble-removal/', '/sand-and-stone/', '/plant-hire/tlb-hire/'],
  },
  {
    slug: 'water-tanker-hire',
    name: 'Water tanker hire',
    title: 'Water Tanker Hire Port Elizabeth | Water Truck | Titan Plant Hire',
    description:
      'Water truck and tanker hire in Port Elizabeth for dust suppression, compaction and construction water. Titan Plant Hire — call 072 244 1916.',
    eyebrow: 'Mercedes-Benz water truck',
    headline: [{t: 'Water tanker'}, {t: 'hire', i: true}, {t: 'for dust & compaction'}],
    intro:
      'Our bright orange Titan water truck brings construction water to site with its own pump and hose — for dust suppression, compacting layer works, washing down and keeping your project moving when the taps can’t keep up.',
    card: 'Construction water with an on-board pump for dust and compaction.',
    hero: 'water-tanker-side-2',
    gallery: ['water-tanker-side', 'water-tanker-rear-pump', 'water-tanker-front'],
    facts: [
      ['Truck', 'Mercedes-Benz six-wheeler water tanker'],
      ['Equipment', 'On-board pump and hose'],
      ['Use', 'Construction water'],
      ['Driver', 'Supplied by Titan'],
      ['Booking', 'Single loads or regular site supply'],
    ],
    uses: [
      'Dust suppression on building sites and gravel roads',
      'Water for compacting fill and layer works',
      'Washing down roads, yards and equipment',
      'Filling site tanks and mixing water',
      'Supporting earthworks, roadworks and civil contracts',
    ],
    body: [
      {
        h: 'Keep dust down and compaction right',
        p: [
          'Dust from earthworks is a safety risk, upsets neighbours and can lead to complaints and fines. Regular wetting with a water truck keeps it under control. Water is also essential for achieving proper compaction of fill and base layers — too dry and the layers will not reach density.',
          'Our water tanker carries its own pump, so it can spray, fill tanks or feed equipment without needing a separate pump on site.',
        ],
      },
      {
        h: 'Construction water — please note',
        p: [
          'Our tanker is a construction vehicle and carries construction water. If you need water for drinking or household use, ask us first and we will tell you honestly whether we can help.',
        ],
      },
      {
        h: 'One-off loads or ongoing supply',
        p: [
          'Book a single load for a specific job, or arrange regular deliveries for the length of a contract. Tell us your site location, how often you need water and what it is for, and we will put together a schedule and quote.',
        ],
      },
    ],
    faqs: [
      {q: 'Is the water drinkable?', a: 'The tanker supplies construction water. If you need drinking water, please ask us first rather than assuming.'},
      {q: 'Does the truck have a pump?', a: 'Yes, the tanker has an on-board pump and hose.'},
      {q: 'Can I book the water truck for a whole contract?', a: 'Yes. We can supply water daily or on a set schedule for the length of your project. Call us to arrange it.'},
    ],
    related: ['/plant-hire/tipper-truck-hire/', '/site-clearing/earthworks-and-levelling/', '/plant-hire/tlb-hire/'],
  },
  {
    slug: 'crane-truck-hire',
    name: 'Crane truck hire',
    title: 'Crane Truck Hire Port Elizabeth | Container Moves | Titan Plant Hire',
    description:
      'Crane truck hire in Port Elizabeth for moving shipping containers, site offices and heavy loads. Lift, transport and place in one trip. Call 072 244 1916.',
    eyebrow: 'Truck-mounted crane',
    headline: [{t: 'Crane truck'}, {t: 'lift, move', i: true}, {t: '& place'}],
    intro:
      'Need a shipping container moved, a site office set down or heavy materials offloaded? Our truck-mounted crane lifts, carries and places the load in one visit — no separate crane, no separate truck.',
    card: 'Truck-mounted crane for containers, site offices and heavy lifts.',
    hero: 'crane-truck-container-lift',
    gallery: ['crane-truck-container-offload', 'crane-truck-container-bakkie'],
    facts: [
      ['Truck', 'Flatbed truck with mounted crane'],
      ['Ideal for', 'Shipping containers and site offices'],
      ['Service', 'Lift, transport and place'],
      ['Crew', 'Driver and rigging assistance'],
      ['Booking', 'Call for a site check and quote'],
    ],
    uses: [
      'Moving and placing shipping containers',
      'Delivering and setting down site offices and storage units',
      'Offloading heavy materials and equipment',
      'Relocating containers between properties',
    ],
    body: [
      {
        h: 'Container moves made simple',
        p: [
          'Shipping containers are a popular way to add storage, a workshop or a site office. Moving one usually means a truck plus a crane. Our crane truck does both: it lifts the container onto its own deck, drives it to the new location and sets it down where you want it.',
        ],
      },
      {
        h: 'What we need to know',
        list: [
          'Pick-up and drop-off addresses',
          'Size of the container or load (for example 6 m / 20 ft)',
          'Whether the unit is empty',
          'Access to the drop-off spot: gate width, overhead wires, trees and slope',
          'The ground the container will sit on',
        ],
        p: [
          'Overhead power lines and soft ground are the two biggest risks with crane work. A quick WhatsApp video of the site lets us check before the day.',
        ],
      },
    ],
    faqs: [
      {q: 'Can you move a 6 m shipping container?', a: 'Our crane truck is regularly used to move containers. Tell us the size, whether it is empty, and both addresses, and we will confirm and quote.'},
      {q: 'Does the container need to be empty?', a: 'In most cases, yes. The weight of contents adds up fast and shifting contents are dangerous during a lift. Ask us about your specific load.'},
      {q: 'What if there are overhead power lines?', a: 'Let us know in advance. Lines near the drop zone can make a lift unsafe, and we will plan around them or suggest another position.'},
    ],
    related: ['/plant-hire/flatbed-truck-hire/', '/plant-hire/tipper-truck-hire/', '/contact/'],
  },
  {
    slug: 'flatbed-truck-hire',
    name: 'Flatbed truck hire',
    title: 'Flatbed Truck Hire Port Elizabeth | Transport | Titan Plant Hire',
    description:
      'Flatbed truck hire and transport in Port Elizabeth for timber, building materials and equipment. Loads strapped and delivered by Titan. Call 072 244 1916.',
    eyebrow: 'Transport & cartage',
    headline: [{t: 'Flatbed'}, {t: 'transport', i: true}, {t: 'strapped & sorted'}],
    intro:
      'For timber, building materials, pallets and equipment that need a flat deck rather than a tipper, our Mercedes-Benz flatbed truck collects, straps down and delivers across the metro.',
    card: 'Flat-deck transport for timber, materials and equipment.',
    hero: 'flatbed-truck-timber-load',
    gallery: ['flatbed-truck', 'crane-truck-container-bakkie'],
    facts: [
      ['Truck', 'Mercedes-Benz flatbed'],
      ['Loads', 'Timber, materials, pallets, equipment'],
      ['Securing', 'Ratchet straps on every load'],
      ['Driver', 'Supplied by Titan'],
      ['Area', 'Nelson Mandela Bay and surrounds'],
    ],
    uses: [
      'Timber and roofing material deliveries',
      'Building materials from supplier to site',
      'Moving equipment between sites',
      'Collecting salvaged or second-hand materials',
    ],
    body: [
      {
        h: 'When a tipper isn’t the right truck',
        p: [
          'Tippers are perfect for loose material, but long timber, palletised bricks, roofing sheets and equipment need a flat deck and proper tie-downs. Our flatbed truck carries these safely, strapped down with ratchet straps, from yard to site or between properties.',
        ],
      },
      {
        h: 'Booking transport',
        p: [
          'Send us what needs moving, roughly how much, and the pick-up and drop-off points. If the load needs lifting on or off, ask about our crane truck instead.',
        ],
      },
    ],
    faqs: [
      {q: 'Can you collect from a supplier and deliver to my site?', a: 'Yes. Give us both addresses and what is being collected and we will quote.'},
      {q: 'Who loads the truck?', a: 'Tell us what is being moved when you book. For heavy items that need lifting, our crane truck may be a better fit.'},
    ],
    related: ['/plant-hire/crane-truck-hire/', '/plant-hire/tipper-truck-hire/', '/contact/'],
  },
];
