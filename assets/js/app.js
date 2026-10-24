/* ==========================================================================
   YALLA HABIBI · RESTAURANT & DINNER SHOW — INTERACTIVE APPLICATION LOGIC
   3295 Oxford Dr, Kissimmee, FL 34746 · (407) 507-3991
   ========================================================================== */

const ORDER_URLS = {
  doordash: 'https://www.doordash.com/store/yalla-habibi-kissimmee-kissimmee-39432155/91369146/?pickup=true&rwg_token=AE37R_itTbMKpbYK1_kYOFUnjckwQtKxqdJF6EoWpa2tRBMeok9BpPxOhDRFEuZLDOG2q1v1fxo66HFV6h13Ggjli9ko0-eSbg==&utm_campaign=gpa',
  phone: 'tel:+14075073991',
  instagram: 'https://www.instagram.com/yalla.habiibi',
  maps: 'https://www.google.com/maps/place/Yalla+Habibi/@28.345261,-81.4880631,19z/data=!4m8!3m7!1s0x88dd811609638d4f:0xd0cf2f0702cbf6f8!8m2!3d28.345261!4d-81.4880631!9m1!1b1!16s%2Fg%2F11yr_4rxcg'
};

/* --------------------------------------------------------------------------
   1. HERO INTERACTIVE DISH CAROUSEL (AI STUDIO CUTOUTS + OFFICIAL DISHES)
   -------------------------------------------------------------------------- */
const HERO_DISHES = [
  {
    id: 'lamb-tagine',
    title: 'Moroccan Lamb Tagine',
    subtitle: 'Slow-Braised Lamb · Prunes, Apricots, Toasted Almonds & Pistachios',
    price: '$23.99',
    img: 'assets/images/ai/cutout-lamb-tagine.png',
    badge: 'Chef Mouna’s #1 Specialty'
  },
  {
    id: 'lamb-chops',
    title: 'Grilled Lamb Chops Plate',
    subtitle: '3 Tender Moroccan-Spiced Lamb Chops · Saffron Rice & Grilled Vegetables',
    price: '$24.99',
    img: 'assets/images/ai/cutout-lamb-chops.png',
    badge: '91% Liked on DoorDash'
  },
  {
    id: 'chicken-shawarma-plate',
    title: 'Chicken Shawarma Plate',
    subtitle: 'Slow-Roasted Shawarma · Crispy Pita, Seasoned Potatoes, Garlic Sauce & Almonds',
    price: '$19.99',
    img: 'assets/images/ai/cutout-shawarma-plate.png',
    badge: '#1 Most Ordered on DoorDash'
  },
  {
    id: 'royal-gold-sea',
    title: 'Royal Gold Sea Platter',
    subtitle: 'Crispy Calamari, Jumbo Shrimp & Flaky White Fish on Golden Fish Platter',
    price: '$29.99',
    img: 'assets/images/ai/cutout-royal-seafood.png',
    badge: 'Dinner Show Feast'
  },
  {
    id: 'chicken-pastilla',
    title: 'Moroccan Chicken Pastilla',
    subtitle: 'Crisp Warqa Pastry · Saffron Chicken, Caramelized Almonds, Cinnamon & Sugar',
    price: '$16.99',
    img: 'assets/images/ai/cutout-chicken-pastilla.png',
    badge: 'Authentic Fassi Classic'
  },
  {
    id: 'arayes-plate',
    title: 'Char-Grilled Arayes Plate',
    subtitle: '6 Crispy Pita Pockets Stuffed with Spiced Beef & Lamb · Fries & Tahini',
    price: '$17.99',
    img: 'assets/images/ai/cutout-arayes-plate.png',
    badge: '100% Liked on DoorDash'
  }
];

/* --------------------------------------------------------------------------
   2. COMPLETE MENU DATABASE (ALL 25 DOORDASH ITEMS + IN-HOUSE MOROCCAN MENU)
   -------------------------------------------------------------------------- */
const MENU_ITEMS = [
  // ================= PLATES (DOORDASH) =================
  {
    id: 'chicken-kebab',
    cat: 'plates',
    catLabel: 'Plates · DoorDash',
    title: 'Chicken Kebab',
    price: '$22.99',
    desc: 'Chicken breast blended with Moroccan seasonings and char-grilled, served with grilled vegetables (green beans & cherry tomatoes) and saffron rice.',
    img: 'assets/images/doordash/chicken-kebab.jpg',
    badge: '100% Liked (10) · #2 Most Liked'
  },
  {
    id: 'chicken-shawarma-plate',
    cat: 'plates',
    catLabel: 'Plates · DoorDash',
    title: 'Chicken Shawarma Plate',
    price: '$19.99',
    desc: 'Chicken shawarma mixed with crispy bread, seasoned potatoes, and pickles, drizzled with house garlic sauce and accompanied by fried almonds.',
    img: 'assets/images/doordash/chicken-shawarma-plate.jpg',
    cutoutImg: 'assets/images/ai/cutout-shawarma-plate.png',
    badge: '87% Liked (16) · #1 Most Liked'
  },
  {
    id: 'shish-lamb-kebab',
    cat: 'plates',
    catLabel: 'Plates · DoorDash',
    title: 'Shish Lamb Kebab',
    price: '$24.99',
    desc: 'Tender lamb tawook seasoned with warm herbs and char-grilled over open flame. Served with grilled vegetables (green beans & cherry tomatoes) and rice.',
    img: 'assets/images/doordash/shish-lamb-kebab.jpg',
    badge: '92% Liked (13) · #3 Most Liked'
  },
  {
    id: 'lamb-chops',
    cat: 'plates',
    catLabel: 'Plates · DoorDash',
    title: 'Lamb Chops',
    price: '$24.99',
    desc: '3 pieces of grilled tender lollipop lamb chops with Moroccan spice rub and fresh rosemary. Served with grilled vegetables (green beans & cherry tomatoes) and rice.',
    img: 'assets/images/doordash/lamb-chops.jpg',
    cutoutImg: 'assets/images/ai/cutout-lamb-chops.png',
    badge: '91% Liked (12)'
  },
  {
    id: 'kefta-kebab',
    cat: 'plates',
    catLabel: 'Plates · DoorDash',
    title: 'Kefta Kebab',
    price: '$24.99',
    desc: 'Ground beef seasoned with fresh parsley, onions, and Moroccan spices, skewered and char-grilled. Served with grilled vegetables and saffron rice.',
    img: 'assets/images/doordash/kefta-kebab.jpg',
    badge: '88% Liked (9)'
  },
  {
    id: 'arayes-plate',
    cat: 'plates',
    catLabel: 'Plates · DoorDash',
    title: 'Arayes Plate',
    price: '$17.99',
    desc: '6 crispy grilled pita bread pockets generously stuffed with a savory, spiced mixture of ground beef and lamb. Served with tahini sauce and golden fries.',
    img: 'assets/images/doordash/arayes-plate.jpg',
    cutoutImg: 'assets/images/ai/cutout-arayes-plate.png',
    badge: '100% Liked (5)'
  },

  // ================= SANDWICHES (DOORDASH) =================
  {
    id: 'chicken-shawarma-sandwich',
    cat: 'sandwiches',
    catLabel: 'Sandwiches · DoorDash',
    title: 'Chicken Shawarma Sandwich',
    price: '$11.99',
    desc: 'Tender marinated chicken, slow-cooked and thinly sliced, wrapped in warm pita bread with your choice of fresh toppings, and finished with our creamy garlic sauce.',
    img: 'assets/images/doordash/chicken-shawarma-sandwich.jpg',
    badge: '90% Liked (11)'
  },
  {
    id: 'gyro-sandwich',
    cat: 'sandwiches',
    catLabel: 'Sandwiches · DoorDash',
    title: 'Gyro Sandwich',
    price: '$12.99',
    desc: 'Thinly sliced seasoned lamb wrapped in warm pita bread with your choice of fresh toppings and your favorite house sauce.',
    img: 'assets/images/doordash/gyro-sandwich.jpg',
    badge: '100% Liked (6)'
  },
  {
    id: 'chicken-kebab-sandwich',
    cat: 'sandwiches',
    catLabel: 'Sandwiches · DoorDash',
    title: 'Chicken kebab Sandwich',
    price: '$16.99',
    desc: 'Tender marinated chicken kebab, slow-cooked and wrapped in warm bread with your choice of fresh toppings, finished with our creamy garlic sauce.',
    img: 'assets/images/doordash/chicken-kebab-sandwich.jpg',
    badge: '100% Liked (6)'
  },
  {
    id: 'kefta-sandwich',
    cat: 'sandwiches',
    catLabel: 'Sandwiches · DoorDash',
    title: 'Kefta Sandwich',
    price: '$16.99',
    desc: 'Char-grilled spiced ground beef with parsley and onions in warm French bread, topped with tzatziki sauce, lettuce, onions, and tomatoes.',
    img: 'assets/images/doordash/kefta-sandwich.jpg',
    badge: '85% Liked (7)'
  },
  {
    id: 'falafel-sandwich',
    cat: 'sandwiches',
    catLabel: 'Sandwiches · DoorDash',
    title: 'Falafel Sandwich',
    price: '$11.99',
    desc: 'Crispy herb-seasoned chickpea falafel patties wrapped in warm pita bread with fresh lettuce, tomatoes, onions, and creamy tahini or garlic sauce.',
    img: 'assets/images/doordash/falafel-sandwich.jpg',
    badge: 'Vegetarian Favorite'
  },
  {
    id: 'shish-kebab-sandwich',
    cat: 'sandwiches',
    catLabel: 'Sandwiches · DoorDash',
    title: 'Shish Kebab Sandwich',
    price: '$16.99',
    desc: 'Herb-spiced char-grilled lamb on 8" French bread with cooling tzatziki sauce, served with a choice of crisp lettuce, onions, and tomatoes.',
    img: 'assets/images/doordash/shish-kebab-sandwich.jpg',
    badge: 'Char-Grilled Lamb'
  },

  // ================= APPETIZERS & WINGS (DOORDASH) =================
  {
    id: 'hummus',
    cat: 'appetizers',
    catLabel: 'Appetizers · DoorDash',
    title: 'Hummus',
    price: '$7.99',
    desc: 'Velvety chickpeas dip blended with tahini, extra virgin olive oil, warm Moroccan spices, and served with warm pita bread.',
    img: 'assets/images/doordash/hummus.jpg',
    badge: '75% Liked (4)'
  },
  {
    id: 'falafel',
    cat: 'appetizers',
    catLabel: 'Appetizers · DoorDash',
    title: 'Falafel (6 Pcs)',
    price: '$9.99',
    desc: '6 savory chickpea patties, seasoned with fresh herbs and warm spices, fried crisp and served with creamy tahini sauce for dipping.',
    img: 'assets/images/doordash/falafel.jpg',
    badge: '100% Liked'
  },
  {
    id: 'mozzarella-sticks',
    cat: 'appetizers',
    catLabel: 'Appetizers · DoorDash',
    title: 'Mozzarella Sticks (8 Pcs)',
    price: '$11.99',
    desc: 'Includes 8 deep-fried golden breaded mozzarella sticks served with our homemade zesty marinara sauce on the side.',
    img: 'assets/images/doordash/mozzarella-sticks.jpg',
    badge: '100% Liked (5)'
  },
  {
    id: 'chicken-wings',
    cat: 'appetizers',
    catLabel: 'Chicken Wings · DoorDash',
    title: 'Chicken Wings (8 Pcs)',
    price: '$13.99',
    desc: '8 bone-in wings, fresh, award-winning New York-style wings. Choice of Hot, Honey BBQ, Buffalo, Garlic, or Plain with Ranch or Blue Cheese.',
    img: 'assets/images/doordash/chicken-wings.jpg',
    badge: '85% Liked (7)'
  },

  // ================= MOROCCAN DINNER SHOW & IN-HOUSE SPECIALTIES =================
  {
    id: 'lamb-tagine',
    cat: 'moroccan',
    catLabel: 'In-House Moroccan Menu',
    title: 'Lamb Tagine with Prunes & Almonds',
    price: '$23.99',
    desc: 'Chef Mouna’s signature slow-braised fall-off-the-bone lamb shank tagine simmered with saffron, caramelized prunes, apricots, toasted almonds, and pistachios.',
    img: 'assets/images/gmaps/by_owner_3.jpg',
    cutoutImg: 'assets/images/ai/cutout-lamb-tagine.png',
    badge: 'Mentioned in 4+ Reviews'
  },
  {
    id: 'lemon-chicken-tagine',
    cat: 'moroccan',
    catLabel: 'In-House Moroccan Menu',
    title: 'Lemon Chicken Tagine',
    price: '$17.99',
    desc: 'Traditional Moroccan chicken braised in an earthenware tagine with preserved Meyer lemons, green & purple olives, saffron, ginger, and fresh herbs.',
    img: 'assets/images/ai/lemon-chicken-tagine.jpg',
    badge: 'Chef Mouna’s Classic'
  },
  {
    id: 'royal-gold-sea',
    cat: 'moroccan',
    catLabel: 'In-House Moroccan Menu',
    title: 'Royal Gold Sea Platter',
    price: '$29.99',
    desc: 'Lavish Moroccan seafood feast featuring crispy calamari rings, jumbo shrimp, and golden fish fillets served with herb-crusted lemons and house dipping sauces.',
    img: 'assets/images/gmaps/by_owner_14.jpg',
    cutoutImg: 'assets/images/ai/cutout-royal-seafood.png',
    badge: 'Signature Feast'
  },
  {
    id: 'chicken-pastilla',
    cat: 'moroccan',
    catLabel: 'In-House Tapas & Mezze',
    title: 'Chicken Pastilla',
    price: '$16.99',
    desc: 'Crisp layered Moroccan pastry filled with saffron-braised chicken and caramelized almonds, finished with powdered sugar, cinnamon, and pistachios.',
    img: 'assets/images/gmaps/by_owner_12.jpg',
    cutoutImg: 'assets/images/ai/cutout-chicken-pastilla.png',
    badge: 'Sweet & Savory Tapas'
  },
  {
    id: 'seafood-cigar-pastilla',
    cat: 'moroccan',
    catLabel: 'In-House Tapas & Mezze',
    title: 'Seafood Pastilla / Cigar',
    price: '$16.99',
    desc: 'Golden crisp pastry filled with shrimp, mahi-mahi, clam, calamari, vermicelli rice noodles, mushrooms, and Moroccan olives, crowned with a grilled jumbo prawn.',
    img: 'assets/images/gmaps/by_owner_2.jpg',
    badge: 'House Specialty'
  },
  {
    id: 'pil-pil-shrimp',
    cat: 'moroccan',
    catLabel: 'In-House Tapas & Mezze',
    title: 'Pil-Pil / Habibi Crusted Shrimp',
    price: '$16.99',
    desc: 'Sizzling cast-iron jumbo shrimp with garlic, olive oil, chili flakes, fresh rosemary, parsley, and vibrant house cilantro-garlic sauce.',
    img: 'assets/images/gmaps/gmaps_gallery_4.jpg',
    badge: 'Sizzling Tapas'
  },
  {
    id: 'royal-soup',
    cat: 'moroccan',
    catLabel: 'In-House Dinner Menu',
    title: 'Royal Seafood Soup',
    price: '$21.99',
    desc: 'Rich, velvety Moroccan seafood chowder brimming with plump mussels, tender shrimp, flaky white fish, and calamari.',
    img: 'assets/images/gmaps/stefani_chalkova_review_1.jpg',
    badge: 'Dinner Show Starter'
  },
  {
    id: 'moroccan-mint-tea',
    cat: 'moroccan',
    catLabel: 'In-House Lounge & Tea',
    title: 'Traditional Moroccan Mint Tea (Atay)',
    price: '$6.99',
    desc: 'Authentic gunpowder green tea steeped with fresh spearmint leaves and poured high into ornate gold-filigree glasses.',
    img: 'assets/images/gmaps/khalid_jebbar_review_1.jpg',
    badge: 'Late-Night Ritual'
  },

  // ================= SIDES (DOORDASH) =================
  {
    id: 'steak-fries',
    cat: 'sides',
    catLabel: 'Sides · DoorDash',
    title: 'Steak Fries',
    price: '$3.99',
    desc: 'Thick-cut golden potato wedges lightly seasoned with sea salt.',
    img: 'assets/images/doordash/steak-fries.jpg',
    badge: '85% Liked (7)'
  },
  {
    id: 'rice',
    cat: 'sides',
    catLabel: 'Sides · DoorDash',
    title: 'Rice',
    price: '$5.99',
    desc: 'Fragrant saffron-seasoned Moroccan yellow rice prepared to perfection.',
    img: 'assets/images/doordash/rice.jpg',
    badge: '100% Liked (4)'
  },
  {
    id: 'fries',
    cat: 'sides',
    catLabel: 'Sides · DoorDash',
    title: 'Fries',
    price: '$3.99',
    desc: 'Golden, crispy french fry potato sticks.',
    img: 'assets/images/doordash/fries.jpg',
    badge: 'Classic Side'
  },

  // ================= BEVERAGES (DOORDASH) =================
  {
    id: 'mango-madness-juice',
    cat: 'drinks',
    catLabel: 'Beverages · DoorDash',
    title: 'Mango Madness Juice',
    price: '$4.49',
    desc: 'Refreshing tropical Snapple Mango Madness fruit juice.',
    img: 'assets/images/doordash/mango-madness-juice.jpg',
    badge: '100% Liked'
  },
  {
    id: 'apple-juice',
    cat: 'drinks',
    catLabel: 'Beverages · DoorDash',
    title: 'Apple Juice',
    price: '$4.49',
    desc: 'Crisp, chilled 100% apple juice.',
    img: 'assets/images/doordash/apple-juice.jpg',
    badge: 'Chilled'
  },
  {
    id: 'coca-cola',
    cat: 'drinks',
    catLabel: 'Beverages · DoorDash',
    title: 'Coca Cola',
    price: '$2.49',
    desc: 'Classic ice-cold Coca-Cola.',
    img: 'assets/images/doordash/coca-cola.jpg',
    badge: '100% Liked'
  },
  {
    id: 'coca-cola-zero',
    cat: 'drinks',
    catLabel: 'Beverages · DoorDash',
    title: 'Coca Cola Zero',
    price: '$2.49',
    desc: 'Zero-sugar Coca-Cola with classic taste.',
    img: 'assets/images/doordash/coca-cola-zero.jpg',
    badge: 'Zero Sugar'
  },
  {
    id: 'sprite',
    cat: 'drinks',
    catLabel: 'Beverages · DoorDash',
    title: 'Sprite',
    price: '$2.49',
    desc: 'Crisp lemon-lime soda.',
    img: 'assets/images/doordash/sprite.jpg',
    badge: '90% Liked (10)'
  },
  {
    id: 'water',
    cat: 'drinks',
    catLabel: 'Beverages · DoorDash',
    title: 'water',
    price: '$1.99',
    desc: 'Pure bottled spring water.',
    img: 'assets/images/doordash/water.jpg',
    badge: '100% Liked (5)'
  }
];

/* --------------------------------------------------------------------------
   3. VERIFIED GOOGLE MAPS & DOORDASH REVIEWS
   -------------------------------------------------------------------------- */
const REVIEWS_DATA = [
  {
    name: 'K B',
    badge: 'Google Local Guide · 122 reviews',
    source: 'Google Maps · 5.0★',
    topic: 'tagine',
    text: '“If you are looking for a real Moroccan restaurant in the Orlando/Kissimmee area, this is the place! The manager Sim was so welcoming and Chef Mouna’s Lemon Chicken Tagine & Lamb Tagine were out of this world—fall-off-the-bone tender with balanced flavors.”',
    dishes: ['Lamb Tagine', 'Lemon Chicken Tagine', 'Manager Sim & Chef Mouna']
  },
  {
    name: 'Eve Mand',
    badge: 'Google Local Guide · 24 reviews',
    source: 'Google Maps · 5.0★',
    topic: 'show',
    text: '“What an unforgettable experience! Beautiful red velvet lounge, live Moroccan music and entertainment on stage, and the food is 100% authentic. We stayed late enjoying Moroccan mint tea and the dinner show atmosphere.”',
    dishes: ['Live Moroccan Show', 'Moroccan Mint Tea', 'Dinner Lounge']
  },
  {
    name: 'Stefani Chalkova',
    badge: 'Google Local Guide · 15 reviews',
    source: 'Google Maps · 5.0★',
    topic: 'seafood',
    text: '“We ordered the fried seafood platter (Royal Gold Sea) and Moroccan Zaalouk and everything was super fresh, crispy, and seasoned to perfection. Huge portions and gorgeous presentation on golden platters!”',
    dishes: ['Royal Gold Sea Platter', 'Zaalouk', 'Fresh Seafood']
  },
  {
    name: 'Wail Elbahi',
    badge: 'Verified Guest · Dine-In',
    source: 'Google Maps · 5.0★',
    topic: 'hospitality',
    text: '“Shereen gave us the best customer service! From the moment you walk down the red carpet entrance, they treat you like family. The Lamb Tagine and Chicken Pastilla tasted just like home in Morocco.”',
    dishes: ['Shereen’s Service', 'Lamb Tagine', 'Chicken Pastilla']
  },
  {
    name: 'Seher Sevda',
    badge: 'Google Local Guide · 33 photos',
    source: 'Google Maps · 5.0★',
    topic: 'show',
    text: '“Stunning space with crystal chandeliers, red velvet seating, and a great stage setup. Whether you come for a quiet family dinner early in the evening or the lively music and lounge vibe late at night, Yalla Habibi delivers.”',
    dishes: ['Beautiful Space', 'Stage & Chandeliers']
  },
  {
    name: 'KaitlynH',
    badge: 'Verified DoorDash Customer',
    source: 'DoorDash · 5.0★',
    topic: 'tagine',
    text: '“It was so good I want to gatekeep it! Everything was hot, fresh, and packed with flavor. The Chicken Shawarma Plate with the crispy pita, potatoes, garlic sauce, and toasted almonds is hands-down the best in Kissimmee.”',
    dishes: ['Chicken Shawarma Plate', 'Garlic Sauce']
  },
  {
    name: 'Khalid Jebbar',
    badge: 'Verified Guest · Dine-In',
    source: 'Google Maps · 5.0★',
    topic: 'hospitality',
    text: '“Authentic Moroccan hospitality in the heart of Kissimmee! Finishing dinner with hot Moroccan mint tea in traditional gold glasses while listening to Moroccan music made our night.”',
    dishes: ['Moroccan Mint Tea', 'Authentic Atmosphere']
  },
  {
    name: 'JayM',
    badge: 'Verified DoorDash Customer',
    source: 'DoorDash · 5.0★',
    topic: 'seafood',
    text: '“First time trying and definitely won’t be the last! The Lamb Chops and Shish Lamb Kebab were char-grilled to perfection, juicy, and the saffron rice and green beans were delicious.”',
    dishes: ['Lamb Chops', 'Shish Lamb Kebab', 'Saffron Rice']
  },
  {
    name: 'Mohamed Boumediene',
    badge: 'Google Local Guide',
    source: 'Google Maps · 5.0★',
    topic: 'hospitality',
    text: '“100% Halal, top-tier Moroccan & Mediterranean kitchen, and open late until 2 AM! Big thanks to Simo and the kitchen team for taking such great care of our group.”',
    dishes: ['100% Halal', 'Late-Night Dining', 'Manager Simo']
  }
];

/* --------------------------------------------------------------------------
   4. INITIALIZATION & UI RENDERING
   -------------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  initLiveHoursStatus();
  initStickyHeader();
  initHeroCarousel();
  initMenuSection();
  initReviewsSection();
  initModalHandlers();
  initLanguageToggle();
});

/* Live Open/Closed Status Indicator (Kissimmee ET — America/New_York)
   Hours:
   - Mon: 5:00 PM – 1:00 AM
   - Tue–Thu: 5:00 PM – 2:00 AM
   - Fri: 1:00 PM – 2:00 AM
   - Sat: 2:00 PM – 2:00 AM
   - Sun: 5:00 PM – 12:00 AM
*/
function initLiveHoursStatus() {
  const dot = document.getElementById('liveStatusDot');
  const text = document.getElementById('liveStatusText');
  const pillBtn = document.getElementById('liveStatusBtn');
  const popover = document.getElementById('hoursHudPopover');
  const closeBtn = document.getElementById('hoursHudClose');
  const subText = document.getElementById('hoursHudSub');
  if (!dot || !text) return;

  // Schedule map: [openHour, closeHourNextDay (24+h)]
  const schedule = {
    0: { open: 17, close: 24, label: '5:00 PM – 12:00 AM' }, // Sun
    1: { open: 17, close: 25, label: '5:00 PM – 1:00 AM' },  // Mon
    2: { open: 17, close: 26, label: '5:00 PM – 2:00 AM' },  // Tue
    3: { open: 17, close: 26, label: '5:00 PM – 2:00 AM' },  // Wed
    4: { open: 17, close: 26, label: '5:00 PM – 2:00 AM' },  // Thu
    5: { open: 13, close: 26, label: '1:00 PM – 2:00 AM' },  // Fri
    6: { open: 14, close: 26, label: '2:00 PM – 2:00 AM' }   // Sat
  };

  try {
    const now = new Date();
    const formatter = new Intl.DateTimeFormat('en-US', {
      timeZone: 'America/New_York',
      hour: 'numeric',
      minute: 'numeric',
      weekday: 'short',
      hour12: false
    });
    const parts = formatter.formatToParts(now);
    const hour = parseInt(parts.find(p => p.type === 'hour')?.value || '18', 10);
    const minute = parseInt(parts.find(p => p.type === 'minute')?.value || '0', 10);
    const weekdayStr = parts.find(p => p.type === 'weekday')?.value || 'Fri';

    const dayMap = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
    const dayIdx = dayMap[weekdayStr] ?? 5;
    const prevDayIdx = (dayIdx + 6) % 7;
    const decimalTime = hour + minute / 60;

    // Highlight active day row
    document.querySelectorAll('.hours-row[data-day]').forEach(row => {
      if (parseInt(row.dataset.day, 10) === dayIdx) {
        row.classList.add('today');
      } else {
        row.classList.remove('today');
      }
    });

    const todaySched = schedule[dayIdx];
    const prevSched = schedule[prevDayIdx];

    // Check if open from yesterday's late-night spillover (after midnight)
    const inLateNightSpillover = (prevSched.close > 24) && (decimalTime < (prevSched.close - 24));
    const inTodayWindow = (decimalTime >= todaySched.open) && (decimalTime < Math.min(24, todaySched.close));
    const isOpen = inLateNightSpillover || inTodayWindow;

    if (isOpen) {
      dot.classList.remove('closed');
      text.textContent = `Open Now in Kissimmee · Today ${todaySched.label}`;
      if (subText) subText.textContent = `Currently Open · Today’s Hours: ${todaySched.label} (ET)`;
    } else {
      dot.classList.add('closed');
      const openLabel = todaySched.open > 12 ? `${todaySched.open - 12}:00 PM` : `${todaySched.open}:00 PM`;
      text.textContent = `Opens at ${openLabel} · Late-Night Lounge till 2 AM`;
      if (subText) subText.textContent = `Currently Closed · Today’s Hours: ${todaySched.label} (ET)`;
    }
  } catch (e) {
    text.textContent = 'Open Daily · Late-Night Dinner Show till 2:00 AM';
  }

  if (pillBtn && popover) {
    const toggleHud = (forceState) => {
      const willOpen = typeof forceState === 'boolean' ? forceState : !popover.classList.contains('open');
      popover.classList.toggle('open', willOpen);
      pillBtn.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
      popover.setAttribute('aria-hidden', willOpen ? 'false' : 'true');
    };

    pillBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleHud();
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', () => toggleHud(false));
    }

    document.addEventListener('click', (e) => {
      if (popover.classList.contains('open') && !popover.contains(e.target) && !pillBtn.contains(e.target)) {
        toggleHud(false);
      }
    });
  }
}

function initStickyHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 24);
  }, { passive: true });
}

/* Hero Carousel */
let currentHeroIdx = 0;
let heroInterval = null;

function initHeroCarousel() {
  const switcher = document.getElementById('heroQuickSwitcher');
  if (!switcher) return;

  switcher.innerHTML = HERO_DISHES.map((d, idx) => `
    <button type="button" class="hero-thumb-btn ${idx === 0 ? 'active' : ''}" data-idx="${idx}">
      <img src="${d.img}" alt="${d.title}" loading="lazy">
      <span>${d.title.split(' ').slice(0, 2).join(' ')}</span>
    </button>
  `).join('');

  switcher.querySelectorAll('.hero-thumb-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.dataset.idx, 10);
      setHeroDish(idx);
      resetHeroAutoplay();
    });
  });

  const stageImg = document.getElementById('heroCutoutImg');
  if (stageImg) {
    stageImg.addEventListener('click', () => {
      const dish = HERO_DISHES[currentHeroIdx];
      openDishModal(dish.id);
    });
  }

  resetHeroAutoplay();
}

function setHeroDish(idx) {
  currentHeroIdx = idx;
  const dish = HERO_DISHES[idx];
  const imgEl = document.getElementById('heroCutoutImg');
  const titleEl = document.getElementById('heroDishTitle');
  const subEl = document.getElementById('heroDishSub');
  const priceEl = document.getElementById('heroDishPrice');
  const badgeEl = document.getElementById('heroDishBadge');

  if (imgEl) {
    imgEl.style.opacity = '0.25';
    imgEl.style.transform = 'scale(0.94)';
    setTimeout(() => {
      imgEl.src = dish.img;
      imgEl.alt = dish.title;
      imgEl.style.opacity = '1';
      imgEl.style.transform = '';
    }, 150);
  }
  if (titleEl) titleEl.textContent = dish.title;
  if (subEl) subEl.textContent = dish.subtitle;
  if (priceEl) priceEl.textContent = dish.price;
  if (badgeEl) badgeEl.textContent = dish.badge;

  document.querySelectorAll('.hero-thumb-btn').forEach((b, i) => {
    b.classList.toggle('active', i === idx);
  });
}

function resetHeroAutoplay() {
  if (heroInterval) clearInterval(heroInterval);
  heroInterval = setInterval(() => {
    const next = (currentHeroIdx + 1) % HERO_DISHES.length;
    setHeroDish(next);
  }, 5200);
}

/* Interactive Menu Filtering & Search */
let activeCategory = 'all';
let searchQuery = '';

function initMenuSection() {
  const tabsContainer = document.getElementById('menuCategoryTabs');
  const searchInput = document.getElementById('menuSearchInput');
  if (!tabsContainer) return;

  const categories = [
    { id: 'all', label: 'All Menu Items', count: MENU_ITEMS.length },
    { id: 'plates', label: 'DoorDash Plates', count: MENU_ITEMS.filter(i => i.cat === 'plates').length },
    { id: 'sandwiches', label: 'Sandwiches & Gyros', count: MENU_ITEMS.filter(i => i.cat === 'sandwiches').length },
    { id: 'moroccan', label: 'In-House Moroccan & Tapas', count: MENU_ITEMS.filter(i => i.cat === 'moroccan').length },
    { id: 'appetizers', label: 'Appetizers & Wings', count: MENU_ITEMS.filter(i => i.cat === 'appetizers').length },
    { id: 'sides', label: 'Sides', count: MENU_ITEMS.filter(i => i.cat === 'sides').length },
    { id: 'drinks', label: 'Beverages', count: MENU_ITEMS.filter(i => i.cat === 'drinks').length }
  ];

  tabsContainer.innerHTML = categories.map(c => `
    <button type="button" class="cat-tab ${c.id === 'all' ? 'active' : ''}" data-cat="${c.id}">
      <span>${c.label}</span>
      <span class="cat-count">${c.count}</span>
    </button>
  `).join('');

  tabsContainer.querySelectorAll('.cat-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      activeCategory = tab.dataset.cat;
      tabsContainer.querySelectorAll('.cat-tab').forEach(t => t.classList.toggle('active', t === tab));
      renderMenuGrid();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      renderMenuGrid();
    });
  }

  renderMenuGrid();
}

function renderMenuGrid() {
  const grid = document.getElementById('fullMenuGrid');
  if (!grid) return;

  const filtered = MENU_ITEMS.filter(item => {
    const matchesCat = activeCategory === 'all' || item.cat === activeCategory;
    const matchesSearch = !searchQuery ||
      item.title.toLowerCase().includes(searchQuery) ||
      item.desc.toLowerCase().includes(searchQuery) ||
      item.catLabel.toLowerCase().includes(searchQuery);
    return matchesCat && matchesSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 1rem; background: #FFF; border-radius: 18px; border: 1.5px dashed var(--border-strong);">
        <h3 style="font-family: var(--font-display); margin-bottom: 0.4rem;">No matching dishes found</h3>
        <p style="color: var(--text-secondary); margin-bottom: 1rem;">Try searching for Shawarma, Lamb Chops, Tagine, Kebab, Falafel, Pastilla, or Hummus.</p>
        <button type="button" class="btn btn-outline" onclick="resetMenuFilters()">Show All ${MENU_ITEMS.length} Dishes</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(item => `
    <article class="menu-item-card" onclick="openDishModal('${item.id}')">
      <img
        src="${item.img}"
        alt="${item.title}"
        class="menu-item-thumb"
        loading="lazy"
      >
      <div class="menu-item-info">
        <div class="menu-item-header">
          <div>
            <div class="menu-item-title">${item.title}</div>
          </div>
          <span class="menu-item-price">${item.price}</span>
        </div>
        <p class="menu-item-desc">${item.desc}</p>
        <div class="menu-item-actions">
          <span class="menu-cat-pill">${item.badge || item.catLabel}</span>
          <span class="menu-quick-order">Order on DoorDash →</span>
        </div>
      </div>
    </article>
  `).join('');
}

window.resetMenuFilters = function () {
  activeCategory = 'all';
  searchQuery = '';
  const searchInput = document.getElementById('menuSearchInput');
  if (searchInput) searchInput.value = '';
  document.querySelectorAll('.cat-tab').forEach(t => t.classList.toggle('active', t.dataset.cat === 'all'));
  renderMenuGrid();
};

/* Reviews Filtering */
function initReviewsSection() {
  const chipsContainer = document.getElementById('reviewTopicChips');
  if (!chipsContainer) return;

  chipsContainer.querySelectorAll('.topic-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const topic = chip.dataset.topic;
      chipsContainer.querySelectorAll('.topic-chip').forEach(c => c.classList.toggle('active', c === chip));
      renderReviews(topic);
    });
  });

  renderReviews('all');
}

function renderReviews(topic) {
  const container = document.getElementById('reviewsMasonry');
  if (!container) return;

  const list = topic === 'all'
    ? REVIEWS_DATA
    : REVIEWS_DATA.filter(r => r.topic === topic);

  container.innerHTML = list.map(r => {
    const initials = r.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();
    return `
      <article class="review-card">
        <div>
          <div class="review-top">
            <div class="reviewer-profile">
              <div class="reviewer-avatar">${initials}</div>
              <div>
                <div class="reviewer-name">${r.name}</div>
                <div class="reviewer-badge">${r.badge}</div>
              </div>
            </div>
            <span class="review-source-tag">${r.source}</span>
          </div>
          <div style="color: #F59E0B; font-size: 0.95rem; margin: 0.65rem 0 0.45rem; letter-spacing: 1px;">★★★★★</div>
          <p class="review-text">${r.text}</p>
        </div>
        <div class="review-dish-pills">
          ${r.dishes.map(d => `<span class="review-dish-pill">✓ ${d}</span>`).join('')}
        </div>
      </article>
    `;
  }).join('');
}

/* Dish Detail Modal */
function initModalHandlers() {
  const backdrop = document.getElementById('dishModalBackdrop');
  const closeBtn = document.getElementById('modalCloseBtn');
  if (!backdrop) return;

  closeBtn?.addEventListener('click', closeDishModal);
  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) closeDishModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeDishModal();
  });

  document.querySelectorAll('[data-dish-id]').forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('a')) return;
      openDishModal(card.dataset.dishId);
    });
  });
}

window.openDishModal = function (dishId) {
  const item = MENU_ITEMS.find(i => i.id === dishId) || MENU_ITEMS[0];
  const backdrop = document.getElementById('dishModalBackdrop');
  const content = document.getElementById('dishModalContent');
  if (!backdrop || !content) return;

  const displayImg = item.cutoutImg || item.img;

  content.innerHTML = `
    <div class="modal-dish-layout">
      <div class="modal-img-stage">
        <img src="${displayImg}" alt="${item.title}">
        <span class="dish-tag">${item.badge || item.catLabel}</span>
      </div>
      <div>
        <div style="font-size: 0.76rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.08em; color: var(--yalla-crimson); margin-bottom: 0.25rem;">
          ${item.catLabel} · 100% Halal
        </div>
        <h3 style="font-family: var(--font-display); font-size: 1.65rem; font-weight: 800; line-height: 1.15; margin-bottom: 0.5rem;">
          ${item.title}
        </h3>
        <div style="font-family: var(--font-display); font-size: 1.45rem; font-weight: 800; color: var(--yalla-crimson); margin-bottom: 0.85rem;">
          ${item.price}
        </div>
        <p style="font-size: 0.95rem; color: var(--text-secondary); margin-bottom: 1.35rem; line-height: 1.6;">
          ${item.desc}
        </p>
        <div style="display: flex; flex-direction: column; gap: 0.65rem;">
          <a href="${ORDER_URLS.doordash}" target="_blank" rel="noopener" class="btn btn-doordash" style="width: 100%; justify-content: center;">
            Order Online on DoorDash
          </a>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.6rem;">
            <a href="${ORDER_URLS.phone}" class="btn btn-gold" style="justify-content: center; font-size: 0.85rem;">
              Call (407) 507-3991
            </a>
            <a href="${ORDER_URLS.instagram}" target="_blank" rel="noopener" class="btn btn-outline" style="justify-content: center; font-size: 0.85rem;">
              @yalla.habiibi
            </a>
          </div>
        </div>
      </div>
    </div>
  `;

  backdrop.classList.add('open');
};

window.closeDishModal = function () {
  const backdrop = document.getElementById('dishModalBackdrop');
  backdrop?.classList.remove('open');
};

/* Language Switcher (EN / عربي) */
function initLanguageToggle() {
  const switcher = document.getElementById('langSwitch');
  if (!switcher) return;

  const translations = {
    en: {
      navSignatures: 'Signatures',
      navMenu: 'Full Menu',
      navShow: 'Dinner Show',
      navReviews: 'Reviews',
      navVisit: 'Hours & Map',
      heroCtaOrder: 'Order Online on DoorDash',
      heroCtaMenu: 'Explore Full Menu (33 Items)'
    },
    ar: {
      navSignatures: 'أطباقنا المميزة',
      navMenu: 'القائمة الكاملة',
      navShow: 'عروض السهرة',
      navReviews: 'آراء الضيوف',
      navVisit: 'الموقع والساعات',
      heroCtaOrder: 'اطلب الآن عبر DoorDash',
      heroCtaMenu: 'تصفح القائمة الكاملة'
    }
  };

  let currentLang = 'en';
  switcher.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    switcher.querySelectorAll('.lang-opt').forEach(el => {
      el.classList.toggle('active', el.dataset.lang === currentLang);
    });
    const t = translations[currentLang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (t[key]) el.textContent = t[key];
    });
  });
}
