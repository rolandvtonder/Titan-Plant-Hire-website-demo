import type {ImageMetadata} from 'astro';

/**
 * Every photo in src/assets/photos, looked up by file name (without .jpg).
 * Astro turns each into sized WebP files at build time.
 */
const files = import.meta.glob<{default: ImageMetadata}>('../assets/photos/*.jpg', {eager: true});

export const photos: Record<string, ImageMetadata> = Object.fromEntries(
  Object.entries(files).map(([p, m]) => [p.split('/').pop()!.replace('.jpg', ''), m.default]),
);

export function photo(name: string): ImageMetadata {
  const p = photos[name];
  if (!p) throw new Error(`Unknown photo: ${name}`);
  return p;
}

/** Alt text for each photo — describes what is actually in the picture. */
export const alts: Record<string, string> = {
  'tlb-jcb-3cx-with-tipper': 'Titan Plant Hire JCB 3CX TLB parked beside a red tipper truck on a residential site clearing job',
  'tlb-jcb-3cx-front-loader': 'Yellow JCB 3CX TLB with Titan branding lifting a load of sand in its front bucket',
  'crane-truck-container-lift': 'Truck-mounted crane lifting a shipping container off a flatbed truck',
  'tlb-loading-tipper-truck': 'TLB loading soil into a red Mercedes-Benz tipper truck',
  'tipper-truck-sand-delivery': 'Titan tipper truck tipping a load of building sand onto a paved driveway',
  'tipper-truck-stone-delivery': 'Tipper truck tipping crusher stone onto a brick-paved yard',
  'crane-truck-container-bakkie': 'Crane truck lowering a container next to a Titan Plant Hire branded bakkie',
  'crane-truck-container-offload': 'Crew guiding a shipping container off a crane truck into position',
  'skid-steer-jcb-135-rear': 'Rear view of the Titan Plant Hire JCB 135 skid steer loader',
  'skid-steer-jcb-135-yard': 'JCB 135 skid steer with operator on a paved yard',
  'skid-steer-jcb-135-side': 'Side view of the JCB 135 Eco Powerboom skid steer with Titan Plant Hire logo on the cab',
  'skid-steer-jcb-135-operator': 'Operator driving the JCB 135 skid steer loader',
  'building-sand-7-ton-promo': 'Seven ton load of building sand delivered by Titan Plant Hire, from R1100',
  'crusher-stone-7-ton-promo': 'Seven ton load of 13mm and 19mm crusher stone from Titan Plant Hire, from R1350',
  'site-clearing-after': 'Verge in Port Elizabeth after Titan cleared rubble and overgrowth',
  'pool-area-rubble-before-after': 'Before and after: rubble around a swimming pool removed with a skid steer',
  'site-clearing-before': 'Verge in Port Elizabeth covered in rubble and weeds before site clearing',
  'flatbed-truck-timber-load': 'Flatbed truck carrying a strapped-down load of timber',
  'flatbed-truck': 'White Mercedes-Benz flatbed truck parked on a suburban street',
  'tlb-and-skid-steer': 'Titan JCB TLB and JCB skid steer side by side outside a house',
  'excavator-loading-tipper-truck': 'Excavator loading red soil into a Titan Plant Hire tipper truck',
  'plot-clearing-before-bush': 'Overgrown plot covered in bush before clearing',
  'tipper-truck-stone-tipping': 'Titan tipper truck tipping stone onto a residential verge',
  'plot-clearing-promo': 'TLB and tipper trucks on a plot clearing job — need your plot cleared?',
  'tipper-truck-sand-stone-grit-promo': 'Titan tipper truck delivering sand, stone and grit',
  'tipper-truck-earthworks': 'Titan Plant Hire six-wheeler tipper truck being loaded on an earthworks site',
  'plot-clearing-after-house': 'Plot cleared and levelled beside a new house',
  'plot-clearing-before-after-1': 'Before and after: overgrown plot cleared to bare ground',
  'plot-clearing-before-after-2': 'Before and after: plot cleared and scraped level',
  'tlb-jcb-3cx-yard': 'JCB 3CX TLB with Titan branding parked at an industrial yard',
  'plot-clearing-before-after-3': 'Before and after: bushy plot cleared between houses',
  'skid-steer-hire-price-promo': 'Skid steer loader for hire at R2800 per day including driver and diesel',
  'tlb-rubble-removal': 'TLB loading building rubble for removal',
  'tlb-fleet-christmas': 'Two Titan Plant Hire JCB TLBs side by side',
  'tipper-truck-hazard-graphic': 'Titan Plant Hire tipper truck',
  'road-spill-cleanup-1': 'TLB clearing a load spilled across a highway beside a truck',
  'road-spill-cleanup-2': 'Road spill clean-up on a highway with traffic control in place',
  'titan-logo-graphic': 'Titan Plant Hire logo',
  'skid-steer-graphic': 'Titan JCB skid steer',
  'tlb-fleet-graphic': 'Two Titan Plant Hire JCB 3CX TLBs',
  'road-spill-cleanup-3': 'TLB scooping spilled material off a wet road',
  'road-spill-cleanup-4': 'TLB loading spilled material on a coastal highway',
  'water-tanker-side': 'Titan Plant orange water tanker truck, side view',
  'water-tanker-rear-pump': 'Rear of the Titan water tanker showing the pump and hose',
  'water-tanker-front': 'Front of the white Mercedes-Benz water tanker truck',
  'water-tanker-side-2': 'Titan Plant water tanker truck parked in the yard under blue sky',
  'titan-race-car': 'The Titan Plant Hire number 1 race car leading the pack on a dirt speedway track',
  'services-promo': 'Titan Plant Hire: skid steers, TLBs, tipper trucks and water trucks',
  'tlb-for-hire-promo-1': 'TLB for hire — call 072 244 1916',
  'skid-tlb-tipper-promo': 'Skid steer hire, TLB hire and tipper truck hire with sand, stone and grit',
};

export const alt = (name: string) => alts[name] ?? 'Titan Plant Hire';
