/* ==========================================================================
   YALLA HABIBI · RESTAURANT & DINNER SHOW — INTERACTIVE ENGINE
   100% Fact-Checked & Bilingual Native English (EN) / Native Arabic (AR / RTL)
   ========================================================================== */

const DOORDASH_URL =
  "https://www.doordash.com/store/yalla-habibi-kissimmee-kissimmee-39432155/91369146/?pickup=true&rwg_token=AE37R_itTbMKpbYK1_kYOFUnjckwQtKxqdJF6EoWpa2tRBMeok9BpPxOhDRFEuZLDOG2q1v1fxo66HFV6h13Ggjli9ko0-eSbg==&utm_campaign=gpa";

let currentLang = "en";
let activeHeroIndex = 0;
let activeCategory = "all";
let searchQuery = "";
let activeReviewTopic = "all";
let heroInterval = null;

/* 1. Complete Static UI Dictionary (EN <-> AR) */
const UI_TEXT = {
  en: {
    halal_badge: "Moroccan & Mediterranean · Dinner Show",
    brand_title: "YALLA HABIBI",
    brand_sub: "Restaurant & Dinner Show · Kissimmee, FL",
    nav_show: "Dinner Show",
    nav_signatures: "Signature Dishes",
    nav_menu: "Full Menu",
    nav_reviews: "Guest Reviews",
    nav_visit: "Hours & Location",
    nav_order_cta: "Order Online",
    mob_show: "Dinner Show",
    mob_signatures: "Signatures",
    mob_menu: "Full Menu",
    mob_printed: "Printed Menus",
    mob_reviews: "Reviews",
    mob_visit: "Hours & Map",

    hero_badge_1: "✨ Live Music & Cabaret Dinner Show",
    hero_badge_2: "★ 33+ Five-Star Google Reviews",
    hero_badge_3: "🇲🇦 Authentic Moroccan & Mediterranean Kitchen",
    hero_title_html:
      'Authentic Moroccan <span class="gold-shimmer">Cuisine</span> &amp; Live <span class="ruby-glow">Dinner Show.</span>',
    hero_lead:
      "Welcome to Yalla Habibi at 3295 Oxford Dr in Kissimmee. Enjoy Chef Mouna’s slow-cooked Lamb Tagine, Lemon Chicken Tagine, flaky Chicken Pastilla, and grilled seafood alongside live music, stage entertainment, Moroccan mint tea, and late-night dining until 2:00 AM.",
    hero_cta_order: "Order Pickup / Delivery",
    hero_cta_vip: "Call for Reservations · (407) 507-3991",
    hero_cta_menu: "Browse Full Menu",
    stat_1_val: "Chef Mouna",
    stat_1_lbl: "Traditional Moroccan Tagines, Pastilla, Couscous & Fresh Seafood",
    stat_2_val: "Open til 2 AM",
    stat_2_lbl: "Late-Night Kitchen, Hookah, Moroccan Mint Tea & Desserts",
    stat_3_val: "Live Show",
    stat_3_lbl: "Live Stage Music, Dancers & Group Celebrations Hosted by Sim",

    marquee_1: "YALLA HABIBI · RESTAURANT & DINNER SHOW",
    marquee_2: "AUTHENTIC MOROCCAN LAMB & LEMON CHICKEN TAGINES",
    marquee_3: "CRISPY SAFFRON & ALMOND CHICKEN PASTILLA",
    marquee_4: "HABIBI CRUSTED SHRIMP & ROYAL SEAFOOD PLATTERS",
    marquee_5: "MOROCCAN MINT TEA, HOOKAH & DESSERTS UNTIL 2 AM",
    marquee_6: "3295 OXFORD DR, KISSIMMEE · (407) 507-3991",

    act1_step: "LUNCH & EARLY DINNER · FROM 1 PM / 5 PM",
    act1_title: "Authentic Moroccan Kitchen",
    act1_desc:
      "Start with warm pita, smoky Baba Ghanouj, Hummus, and Moroccan Zaalouk, followed by slow-simmered Lamb Tagine, Lemon Chicken Tagine, or crispy Chicken Pastilla.",
    act2_step: "DINNER SHOW · NIGHTLY STAGE",
    act2_title: "Live Music & Cabaret Show",
    act2_desc:
      "Our red-carpet stage comes alive with live Arabic vocalists, keyboard music, dancers, and interactive crowd energy—ideal for birthdays, couples, and group nights out.",
    act3_step: "LATE NIGHT · OPEN UNTIL 2:00 AM",
    act3_title: "Midnight Lounge, Mint Tea & Hookah",
    act3_desc:
      "Unwind late into the night over pots of fresh Moroccan mint tea, Red Velvet or Pistachio cake, hookah, and hot plates fresh from the grill.",

    show_eyebrow: "Inside Yalla Habibi · 3295 Oxford Dr, Kissimmee",
    show_title: "Warm Moroccan Hospitality Meets High-Energy Nights",
    show_desc:
      "Whether you are joining us for a quiet, flavorful family dinner or a lively late-night celebration by the stage, Manager Sim, Shereen, and Chef Mouna make every table feel at home.",
    bento_1_badge: "Live On Stage",
    bento_1_title: "Live Singers & Keyboard Music",
    bento_1_sub: "Live Arabic & international stage performances.",
    bento_2_badge: "Main Dining Room",
    bento_2_title: "The Red Carpet Stage",
    bento_2_sub: "Plush seating with clear views of the stage.",
    bento_3_badge: "Celebrations",
    bento_3_title: "Red Carpet Entrance",
    bento_3_sub: "Built for birthdays, date nights, and group dinners.",
    bento_4_badge: "Lounge & Bar",
    bento_4_title: "Gold Moroccan Arches & Bar",
    bento_4_sub: "Cocktails, mocktails, Moroccan tea, and desserts.",

    pillar_1_title: "👑 Hosted by Sim (Simo) & Shereen",
    pillar_1_desc:
      "Guests consistently praise Sim and Shereen for warm, attentive hospitality from the moment you walk through the door.",
    pillar_2_title: "🍲 Chef Mouna’s Moroccan Recipes",
    pillar_2_desc:
      "Real Moroccan cooking—fall-off-the-bone Lamb Tagine, Lemon Chicken Tagine, Chicken Pastilla, and fried Moroccan-style fish.",
    pillar_3_title: "🎉 Birthdays & Nights Out",
    pillar_3_desc:
      "Live music, dancers, and themed nights create an interactive celebration atmosphere for birthdays and groups.",
    pillar_4_title: "🫖 Open Late Until 2:00 AM",
    pillar_4_desc:
      "One of Kissimmee’s favorite late-night spots for dinner, Moroccan mint tea, hookah, and house desserts.",

    sig_eyebrow: "House Specialties · Click Any Dish for Details",
    sig_title: "Signature Moroccan & Mediterranean Dishes",
    sig_desc:
      "Prepared fresh with saffron, preserved lemon, toasted almonds, olive oil, and traditional Moroccan spices.",
    sig_order_btn: "Order on DoorDash",
    sig_inspect_btn: "View Dish",

    menu_eyebrow: "Complete Menu · DoorDash & In-House Dining",
    menu_title: "Explore Our Full Menu",
    menu_desc:
      "Filter by category or search in English or Arabic. Click any dish to inspect details or order online on DoorDash.",
    menu_search_placeholder:
      "Search dishes (e.g., Lamb Tagine, Pastilla, Shrimp, Zaalouk, Shawarma, Arayes)...",
    menu_order_all_btn: "Order Online on DoorDash",
    menu_item_order_label: "Order →",

    printed_eyebrow: "Official Restaurant Menus",
    printed_title: "View Our Printed Lunch & Dinner Show Menus",
    printed_desc:
      "Browse the high-resolution scans of our in-house Lunch Menu (11 AM – 5 PM) and Dinner Show Menu.",
    printed_btn_1: "Lunch Menu (Page 1)",
    printed_btn_2: "Dinner Menu (Page 2)",
    printed_card_1: "Lunch Menu · Starters & Gourmand",
    printed_card_2: "Dinner Menu · Tapas, Mezze & Mains",

    rev_eyebrow: "Real Guest Reviews · Google Maps",
    rev_title: "What Guests Say About Yalla Habibi",
    rev_desc:
      "Verbatim reviews from guests who dined with us in Kissimmee and experienced Chef Mouna’s kitchen and our evening show.",
    rev_banner_title: "33+ Five-Star Google Reviews",
    rev_count_sub: "Verified Google Maps Reviews",
    rev_banner_sub:
      "Praised for Lamb Tagine, Fried Seafood Plate, Habibi Crusted Shrimp, Live Dinner Show, and Manager Sim & Chef Mouna.",
    rev_banner_cta: "Order Online Now",

    loc_eyebrow: "Visit Us · Kissimmee, Florida",
    loc_title: "Location, Hours & Reservations",
    loc_desc:
      "Located at 3295 Oxford Dr in Kissimmee with plenty of free parking. Walk-ins are welcome, or call ahead for group tables.",
    loc_card_title: "Yalla Habibi · Restaurant & Dinner Show",
    loc_address_label: "Address:",
    loc_phone_label: "Phone & Reservations:",
    loc_hours_heading: "Weekly Hours (Eastern Time)",
    amenity_1: "✓ Dine-In, Takeout & Curbside Pickup",
    amenity_2: "✓ Live Music & Dinner Show",
    amenity_3: "✓ Open Late Until 2:00 AM",
    amenity_4: "✓ Free Parking Lot & Street Parking",
    amenity_5: "✓ Wheelchair Accessible",
    amenity_6: "✓ Reservations & Group Seating",
    loc_directions_btn: "Get Directions",
    loc_call_btn: "Call (407) 507-3991",
    map_footer_text: "📍 3295 Oxford Dr, Kissimmee, FL 34746 · Free Parking Lot",
    map_footer_link: "Open in Google Maps →",

    hud_title: "Restaurant & Show Hours",
    hud_sub: "3295 Oxford Dr, Kissimmee · Eastern Time (ET)",
    hud_call: "Call (407) 507-3991",
    hud_order: "Order DoorDash",

    footer_tagline:
      "Authentic Moroccan & Mediterranean Restaurant and Dinner Show in Kissimmee, FL. Home of slow-cooked Tagines, Chicken Pastilla, fresh seafood, and live evening entertainment.",
    footer_col_explore: "Explore",
    footer_col_dishes: "Popular Dishes",
    footer_dish_1: "Lamb Tagine ($23.99)",
    footer_dish_2: "Moroccan Chicken Pastilla ($16.99)",
    footer_dish_3: "Grilled Lamb Chops ($24.99)",
    footer_dish_4: "Royal Gold Sea Platter ($29.99)",
    footer_dish_5: "Chicken Shawarma Plate ($19.99)",
    footer_col_contact: "Contact & Location",
    footer_rights:
      "© 2026 Yalla Habibi Restaurant & Dinner Show · 3295 Oxford Dr, Kissimmee, FL 34746.",
    footer_halal_note: "Moroccan & Mediterranean Cuisine · Kissimmee, FL",
    mob_bar_call: "Call Restaurant",
    mob_bar_order: "Order DoorDash"
  },

  ar: {
    halal_badge: "مطبخ مغربي ومتوسطي · عروض سهرة",
    brand_title: "يلا حبيبي",
    brand_sub: "مطعم وعروض السهرة · كيسيمي، فلوريدا",
    nav_show: "عروض السهرة",
    nav_signatures: "الأطباق المميزة",
    nav_menu: "قائمة الطعام",
    nav_reviews: "آراء الضيوف",
    nav_visit: "الموقع والأوقات",
    nav_order_cta: "اطلب أونلاين",
    mob_show: "عروض السهرة",
    mob_signatures: "الأطباق المميزة",
    mob_menu: "القائمة الكاملة",
    mob_printed: "القائمة المطبوعة",
    mob_reviews: "التقييمات",
    mob_visit: "الأوقات والموقع",

    hero_badge_1: "✨ موسيقى حية وعروض سهرة يومية",
    hero_badge_2: "★ أكثر من ٣٣ تقييم ٥ نجوم على جوجل",
    hero_badge_3: "🇲🇦 مطبخ مغربي ومتوسطي أصيل",
    hero_title_html:
      'مذاق مغربي <span class="gold-shimmer">أصيل</span> وعروض سهرة <span class="ruby-glow">حية.</span>',
    hero_lead:
      "أهلاً بكم في مطعم يلا حبيبي في 3295 Oxford Dr بمدينة كيسيمي. استمتعوا بطاجن اللحم المغربي، وطاجن الدجاج بالليمون، وبسطيلة الدجاج المقرمشة، والمأكولات البحرية الطازجة من إبداع الشيف منى، مع الموسيقى الحية والشاي المغربي بالنعناع والسهر حتى الساعة ٢:٠٠ فجراً.",
    hero_cta_order: "اطلب للاستلام أو التوصيل",
    hero_cta_vip: "اتصل للحجز · 3991-507 (407)",
    hero_cta_menu: "تصفح قائمة الطعام",
    stat_1_val: "الشيف منى",
    stat_1_lbl: "طواجن مغربية أصيلة، بسطيلة، كسكس ومأكولات بحرية طازجة",
    stat_2_val: "مفتوح حتى ٢ فجراً",
    stat_2_lbl: "عشاء متأخر، أتاي مغربي بالنعناع، أرجيلة وحلويات",
    stat_3_val: "عروض حية",
    stat_3_lbl: "غناء وموسيقى حية وأجواء احتفالية بإشراف المدير سيمو",

    marquee_1: "يلا حبيبي · مطعم وعروض سهرة في كيسيمي",
    marquee_2: "طاجن اللحم المغربي وطاجن الدجاج بالليمون",
    marquee_3: "بسطيلة الدجاج المغربية بالزعفران واللوز",
    marquee_4: "روبيان حبيبي المشوي وولائم المأكولات البحرية",
    marquee_5: "شاي مغربي بالنعناع، أرجيلة وحلويات حتى ٢ فجراً",
    marquee_6: "3295 OXFORD DR, KISSIMMEE · (407) 507-3991",

    act1_step: "الغداء والعشاء المبكر · من ١ ظهراً / ٥ مساءً",
    act1_title: "المطبخ المغربي الأصيل",
    act1_desc:
      "ابدأوا مع الخبز الساخن وبابا غنوج والحمص والزعلوك المغربي، ثم استمتعوا بطاجن اللحم أو طاجن الدجاج بالليمون أو بسطيلة الدجاج المقرمشة.",
    act2_step: "عروض السهرة · المسرح الليلي",
    act2_title: "موسيقى حية وعروض استعراضية",
    act2_desc:
      "يتألق المسرح ليلاً مع الغناء الحي وعزف الأورغ والعروض الاستعراضية الحماسية — المكان الأمثل لأعياد الميلاد والسهرات مع الأصدقاء.",
    act3_step: "سهرة آخر الليل · حتى ٢:٠٠ فجراً",
    act3_title: "أتاي مغربي بالنعناع، أرجيلة وعشاء متأخر",
    act3_desc:
      "استمتعوا بأجواء السهر الراقية مع إبريق الشاي المغربي بالنعناع، كيكة الريد فيلفيت أو الفستق، الأرجيلة، وأطباق المشاوي الساخنة.",

    show_eyebrow: "داخل يلا حبيبي · 3295 Oxford Dr, Kissimmee",
    show_title: "كرم الضيافة المغربية وأجمل السهرات في كيسيمي",
    show_desc:
      "سواء كنتم تبحثون عن عشاء عائلي شهي أو سهرة احتفالية ممتعة أمام المسرح، يحرص المدير سيمو وشيرين والشيف منى على تقديم تجربة لا تُنسى.",
    bento_1_badge: "مباشر على المسرح",
    bento_1_title: "غناء حي وعزف موسيقي",
    bento_1_sub: "عروض غنائية وموسيقية حية كل ليلة.",
    bento_2_badge: "القاعة الرئيسية",
    bento_2_title: "مسرح السجادة الحمراء",
    bento_2_sub: "جلسات مريحة بإطلالة مباشرة على المسرح.",
    bento_3_badge: "المناسبات",
    bento_3_title: "استقبال السجادة الحمراء",
    bento_3_sub: "مثالي لأعياد الميلاد والمناسبات الخاصة.",
    bento_4_badge: "الركن الذهبي",
    bento_4_title: "الأقواس المغربية الذهبية والبار",
    bento_4_sub: "مشروبات، كوكتيلات، شاي مغربي وحلويات.",

    pillar_1_title: "👑 ترحيب سيمو (Sim) وشيرين",
    pillar_1_desc:
      "يشيد الضيوف دائماً بحفاوة الاستقبال والخدمة الراقية من المدير سيمو وشيرين منذ لحظة الوصول.",
    pillar_2_title: "🍲 إبداعات الشيف منى",
    pillar_2_desc:
      "أطباق مغربية أصيلة — طاجن اللحم الطري، طاجن الدجاج بالليمون، بسطيلة الدجاج، وطبق السمك المقلي على الطريقة المغربية.",
    pillar_3_title: "🎉 احتفالات أعياد الميلاد والمجموعات",
    pillar_3_desc:
      "موسيقى حية وعروض تفاعلية تصنع أجواءً احتفالية رائعة للأصدقاء والأزواج والعائلات.",
    pillar_4_title: "🫖 مفتوح حتى ٢:٠٠ فجراً",
    pillar_4_desc:
      "الوجهة المفضلة للسهر في كيسيمي لتناول العشاء المتأخر والشاي المغربي بالنعناع والأرجيلة.",

    sig_eyebrow: "أشهر أطباق المطعم · اضغط على أي طبق للتفاصيل",
    sig_title: "الأطباق المغربية والمتوسطية المميزة",
    sig_desc:
      "تُحضر طازجة بالزعفران والليمون المغربي المصير واللوز المحمص وزيت الزيتون والتوابل المغربية الأصيلة.",
    sig_order_btn: "اطلب عبر دورداش",
    sig_inspect_btn: "عرض الطبق",

    menu_eyebrow: "قائمة الطعام الكاملة · طلبات داخلية ودورداش",
    menu_title: "تصفح قائمة الطعام الكاملة",
    menu_desc:
      "صفِّ حسب الفئة أو ابحث بالعربية أو الإنجليزية. اضغط على أي طبق لعرض مكوناته أو طلبه عبر دورداش.",
    menu_search_placeholder:
      "ابحث عن طبق (مثال: طاجن، بسطيلة، روبيان، زعلوك، شاورما، عرايس)...",
    menu_order_all_btn: "اطلب أونلاين عبر دورداش",
    menu_item_order_label: "اطلب ←",

    printed_eyebrow: "قوائم المطعم المطبوعة",
    printed_title: "تصفح قائمة الغداء وقائمة العشاء المطبوعة",
    printed_desc:
      "اضغط على أي صورة لفتح النسخة المطبوعة عالية الدقة لقائمة الغداء (١١ صباحاً – ٥ مساءً) وقائمة العشاء.",
    printed_btn_1: "قائمة الغداء (صفحة ١)",
    printed_btn_2: "قائمة العشاء (صفحة ٢)",
    printed_card_1: "قائمة الغداء · المقبلات والأطباق",
    printed_card_2: "قائمة العشاء · تاباس ومازة وأطباق رئيسية",

    rev_eyebrow: "آراء الضيوف الحقيقية · خرائط جوجل",
    rev_title: "ماذا يقول الضيوف عن يلا حبيبي",
    rev_desc:
      "تقييمات حقيقية موثقة من زوار المطعم الذين جربوا أطباق الشيف منى وأجواء السهرة في كيسيمي.",
    rev_banner_title: "أكثر من ٣٣ تقييم ٥ نجوم على جوجل",
    rev_count_sub: "تقييمات موثقة على خرائط جوجل",
    rev_banner_sub:
      "إشادات واسعة بطاجن اللحم، طبق المأكولات البحرية، روبيان حبيبي المشوي، عروض السهرة، وخدمة سيمو والشيف منى.",
    rev_banner_cta: "اطلب أونلاين الآن",

    loc_eyebrow: "تفضلوا بزيارتنا · كيسيمي، فلوريدا",
    loc_title: "الموقع، أوقات العمل والحجوزات",
    loc_desc:
      "يقع المطعم في 3295 Oxford Dr في كيسيمي مع مواقف سيارات مجانية واسعة. نرحب بكم دائماً أو اتصلوا لحجز طاولتكم.",
    loc_card_title: "يلا حبيبي · مطعم وعروض سهرة",
    loc_address_label: "العنوان:",
    loc_phone_label: "الهاتف والحجوزات:",
    loc_hours_heading: "أوقات العمل الأسبوعية (بتوقيت شرق أمريكا)",
    amenity_1: "✓ جلسات داخلية وخارجية وطلبات خارجية",
    amenity_2: "✓ موسيقى حية وعروض سهرة",
    amenity_3: "✓ مفتوح حتى ٢:٠٠ فجراً",
    amenity_4: "✓ مواقف سيارات مجانية واسعة",
    amenity_5: "✓ مهيأ لذوي الاحتياجات الخاصة",
    amenity_6: "✓ حجوزات وطاولات للمجموعات",
    loc_directions_btn: "احصل على الاتجاهات",
    loc_call_btn: "اتصل: 3991-507 (407)",
    map_footer_text: "📍 3295 Oxford Dr, Kissimmee, FL 34746 · مواقف مجانية متوفرة",
    map_footer_link: "افتح في خرائط جوجل ←",

    hud_title: "أوقات عمل المطعم والعروض",
    hud_sub: "3295 Oxford Dr, Kissimmee · توقيت شرق أمريكا (ET)",
    hud_call: "اتصل: 3991-507 (407)",
    hud_order: "اطلب عبر دورداش",

    footer_tagline:
      "مطعم مغربي ومتوسطي وعروض سهرة في كيسيمي، فلوريدا. نقدم الطواجن المغربية الأصيلة، بسطيلة الدجاج، المأكولات البحرية الطازجة، والسهرات الحية.",
    footer_col_explore: "روابط سريعة",
    footer_col_dishes: "أشهر الأطباق",
    footer_dish_1: "طاجن اللحم المغربي ($23.99)",
    footer_dish_2: "بسطيلة الدجاج المغربية ($16.99)",
    footer_dish_3: "ريش غنم مشوية ($24.99)",
    footer_dish_4: "طبق رويال جولد سي البحري ($29.99)",
    footer_dish_5: "طبق شاورما الدجاج ($19.99)",
    footer_col_contact: "التواصل والموقع",
    footer_rights:
      "© ٢٠٢٦ مطعم وعروض يلا حبيبي · 3295 Oxford Dr, Kissimmee, FL 34746.",
    footer_halal_note: "مطبخ مغربي ومتوسطي · كيسيمي، فلوريدا",
    mob_bar_call: "اتصل بالمطعم",
    mob_bar_order: "اطلب دورداش"
  }
};

/* 2. Hero Pedestal Rotating Cutout Dishes (6 Dishes — Exact Prices & Assets) */
const HERO_DISHES = [
  {
    id: "lamb-tagine",
    enTitle: "Moroccan Lamb Tagine",
    arTitle: "طاجن اللحم المغربي بالبرقوق واللوز",
    enSub: "Slow-Braised Lamb · Prunes, Apricots, Toasted Almonds & Pistachios",
    arSub: "لحم غنم مطهو ببطء · برقوق ومشمش ولوز محمص وفستق",
    price: "$23.99",
    cutoutImg: "assets/images/ai/cutout-lamb-tagine.png",
    realImg: "assets/images/gmaps/by_owner_3.jpg",
    enBadge: "👑 Chef Mouna’s #1 Specialty",
    arBadge: "👑 الطبق الأول للشيف منى",
    enDesc:
      "Chef Mouna’s signature slow-braised fall-off-the-bone lamb tagine simmered with saffron, caramelized prunes, apricots, toasted almonds, and pistachios.",
    arDesc:
      "طاجن اللحم المغربي الشهير من الشيف منى، مطهو ببطء مع الزعفران والبرقوق المعسل والمشمش واللوز المحمص والفستق."
  },
  {
    id: "lamb-chops",
    enTitle: "Grilled Lamb Chops Plate",
    arTitle: "طبق ريش الغنم المشوية",
    enSub: "3 Tender Moroccan-Spiced Lamb Chops · Saffron Rice & Grilled Vegetables",
    arSub: "٣ قطع ريش غنم متبلة · أرز بالزعفران وخضار مشوية",
    price: "$24.99",
    cutoutImg: "assets/images/ai/cutout-lamb-chops.png",
    realImg: "assets/images/doordash/lamb-chops.jpg",
    enBadge: "🔥 91% Liked on DoorDash",
    arBadge: "🔥 ٩١٪ إعجاب على دورداش",
    enDesc:
      "3 pieces of grilled tender lollipop lamb chops with Moroccan spice rub and fresh rosemary, served with grilled vegetables and saffron rice.",
    arDesc:
      "٣ قطع من ريش الغنم الطرية المتبلة بالبهارات المغربية وإكليل الجبل، مشوية وتُقدم مع الخضار المشوية وأرز الزعفران."
  },
  {
    id: "chicken-shawarma-plate",
    enTitle: "Chicken Shawarma Plate",
    arTitle: "طبق شاورما الدجاج",
    enSub: "Slow-Roasted Shawarma · Crispy Pita, Seasoned Potatoes, Garlic Sauce & Almonds",
    arSub: "شاورما دجاج متبلة · خبز مقرمش، بطاطس متبلة، ثومية ولوز",
    price: "$19.99",
    cutoutImg: "assets/images/ai/cutout-shawarma-plate.png",
    realImg: "assets/images/doordash/chicken-shawarma-plate.jpg",
    enBadge: "⭐ #1 Most Ordered on DoorDash",
    arBadge: "⭐ الأكثر طلباً على دورداش",
    enDesc:
      "Chicken shawarma mixed with crispy bread, seasoned potatoes, and pickles, drizzled with house garlic sauce and accompanied by fried almonds.",
    arDesc:
      "شاورما دجاج مع الخبز المقرمش والبطاطس المتبلة والمخلل، مع صلصة الثوم الخاصة واللوز المقلي."
  },
  {
    id: "royal-gold-sea",
    enTitle: "Royal Gold Sea Platter",
    arTitle: "طبق رويال جولد سي البحري",
    enSub: "Crispy Calamari, Jumbo Shrimp & Flaky White Fish on Golden Platter",
    arSub: "كاليماري مقرمش، روبيان جامبو وفيليه سمك ذهبي",
    price: "$29.99",
    cutoutImg: "assets/images/ai/cutout-royal-seafood.png",
    realImg: "assets/images/gmaps/by_owner_14.jpg",
    enBadge: "🦞 Dinner Show Feast",
    arBadge: "🦞 وليمة بحرية فاخرة",
    enDesc:
      "Lavish Moroccan seafood feast featuring crispy calamari rings, jumbo shrimp, and golden fish fillets served with herb-crusted lemons and house dipping sauces.",
    arDesc:
      "وليمة بحرية مغربية تضم حلقات الكاليماري المقرمشة والروبيان الجامبو وفيليه السمك الذهبي مع الليمون المتبل والصلصات الخاصة."
  },
  {
    id: "chicken-pastilla",
    enTitle: "Moroccan Chicken Pastilla",
    arTitle: "بسطيلة الدجاج المغربية باللوز",
    enSub: "Crisp Warqa Pastry · Saffron Chicken, Caramelized Almonds, Cinnamon & Sugar",
    arSub: "رقائق مقرمشة · دجاج بالزعفران ولوز مكرمل وقرفة وسكر ناعم",
    price: "$16.99",
    cutoutImg: "assets/images/ai/cutout-chicken-pastilla.png",
    realImg: "assets/images/gmaps/by_owner_12.jpg",
    enBadge: "✨ Authentic Fassi Classic",
    arBadge: "✨ كلاسيكي فاسي أصيل",
    enDesc:
      "Crisp layered Moroccan pastry filled with saffron-braised chicken and caramelized almonds, finished with powdered sugar, cinnamon, and pistachios.",
    arDesc:
      "رقائق البسطيلة المغربية المقرمشة المحشوة بالدجاج بالزعفران واللوز المكرمل، ومزينة بالسكر الناعم والقرفة والفستق."
  },
  {
    id: "arayes-plate",
    enTitle: "Char-Grilled Arayes Plate",
    arTitle: "طبق عرايس اللحم المشوية",
    enSub: "6 Crispy Pita Pockets Stuffed with Spiced Beef & Lamb · Fries & Tahini",
    arSub: "٦ قطع خبز مقرمش محشو باللحم المتبل · بطاطس وطحينة",
    price: "$17.99",
    cutoutImg: "assets/images/ai/cutout-arayes-plate.png",
    realImg: "assets/images/doordash/arayes-plate.jpg",
    enBadge: "🔥 100% Liked on DoorDash",
    arBadge: "🔥 ١٠٠٪ إعجاب على دورداش",
    enDesc:
      "6 crispy grilled pita bread pockets generously stuffed with a savory, spiced mixture of ground beef and lamb, served with tahini sauce and golden fries.",
    arDesc:
      "٦ قطع من الخبز العربي المقرمش المحشو بخلطة اللحم المفروم المتبل، مشوية وتُقدم مع صلصة الطحينة والبطاطس المقلية."
  }
];

/* 3. Signature Dishes (Moorish Arch Cards — 6 Items) */
const SIGNATURE_DISHES = [
  {
    id: "lamb-tagine",
    enTitle: "Moroccan Lamb Tagine",
    arTitle: "طاجن اللحم المغربي بالبرقوق",
    enSub: "Slow-Braised Lamb · Prunes, Apricots, Toasted Almonds & Pistachios",
    arSub: "لحم غنم مطهو ببطء · برقوق ومشمش ولوز محمص",
    price: "$23.99",
    cutoutImg: "assets/images/ai/cutout-lamb-tagine.png",
    realImg: "assets/images/gmaps/by_owner_3.jpg",
    enBadge1: "👑 #1 Most Mentioned",
    arBadge1: "👑 الطبق الأشهر",
    enBadge2: "Chef Mouna’s Classic",
    arBadge2: "توقيع الشيف منى",
    badge2Class: "crimson",
    enDesc:
      "Chef Mouna’s signature slow-braised fall-off-the-bone lamb tagine simmered with saffron, caramelized prunes, apricots, toasted almonds, and pistachios.",
    arDesc:
      "لحم غنم مطهو على نار هادئة حتى يذوب في الفم مع الزعفران والبرقوق المعسل والمشمش واللوز المحمص والفستق.",
    enQuote:
      "“The Lamb Tagine is a 10/10—it literally falls off the bone.” — Ad Cara, 5★ Google Review",
    arQuote:
      "«طاجن اللحم ١٠/١٠ — اللحم يذوب حرفياً. كل شيء طازج وأصيل.» — Ad Cara، تقييم ★٥"
  },
  {
    id: "chicken-pastilla",
    enTitle: "Moroccan Chicken Pastilla",
    arTitle: "بسطيلة الدجاج المغربية باللوز",
    enSub: "Crisp Flaky Pastry · Saffron Chicken · Caramelized Almonds & Cinnamon",
    arSub: "رقائق مقرمشة · دجاج بالزعفران · لوز مكرمل وقرفة وسكر ناعم",
    price: "$16.99",
    cutoutImg: "assets/images/ai/cutout-chicken-pastilla.png",
    realImg: "assets/images/gmaps/by_owner_12.jpg",
    enBadge1: "✨ Traditional Pastilla",
    arBadge1: "✨ البسطيلة المغربية",
    enBadge2: "Sweet & Savory",
    arBadge2: "المالح والحلو",
    badge2Class: "emerald",
    enDesc:
      "Crisp golden layers of Moroccan pastry filled with saffron-braised chicken and caramelized almonds, finished with powdered sugar, cinnamon, and pistachios.",
    arDesc:
      "طبقات ذهبية مقرمشة محشوة بالدجاج المطهو بالزعفران واللوز المكرمل، ومزينة بالسكر الناعم والقرفة والفستق.",
    enQuote:
      "“The food is truly authentic Moroccan cuisine—rich flavors, perfectly spiced.” — Ikram Merzouk, 5★",
    arQuote:
      "«مأكولات مغربية أصيلة حقاً — نكهات غنية وتوابل متقنة بكل عناية.» — إكرام مرزوق، ★٥"
  },
  {
    id: "lamb-chops",
    enTitle: "Grilled Lamb Chops Plate",
    arTitle: "طبق ريش الغنم المشوية",
    enSub: "3 Tender Lollipop Lamb Chops · Saffron Rice & Grilled Vegetables",
    arSub: "٣ قطع ريش غنم طرية · أرز بالزعفران وخضار مشوية",
    price: "$24.99",
    cutoutImg: "assets/images/ai/cutout-lamb-chops.png",
    realImg: "assets/images/doordash/lamb-chops.jpg",
    enBadge1: "🔥 91% Liked (12)",
    arBadge1: "🔥 ٩١٪ إعجاب",
    enBadge2: "DoorDash Favorite",
    arBadge2: "مفضل دورداش",
    badge2Class: "crimson",
    enDesc:
      "3 pieces of grilled tender lollipop lamb chops with Moroccan spice rub and fresh rosemary, served with grilled green beans, cherry tomatoes, and saffron rice.",
    arDesc:
      "٣ قطع من ريش الغنم المتبلة بالبهارات المغربية وإكليل الجبل الطازج، مشوية وتُقدم مع الخضار المشوية وأرز الزعفران.",
    enQuote:
      "“The flavors were fresh, balanced, and clearly made with care.” — OMR Team, 5★",
    arQuote:
      "«النكهات طازجة ومتوازنة ومحضرة بعناية واضحة.» — OMR Team، ★٥"
  },
  {
    id: "royal-gold-sea",
    enTitle: "Royal Gold Sea Platter",
    arTitle: "طبق رويال جولد سي البحري",
    enSub: "Crispy Calamari · Jumbo Shrimp · Flaky Golden Fish Fillets",
    arSub: "كاليماري مقرمش · روبيان جامبو · فيليه سمك ذهبي",
    price: "$29.99",
    cutoutImg: "assets/images/ai/cutout-royal-seafood.png",
    realImg: "assets/images/gmaps/by_owner_14.jpg",
    enBadge1: "🦞 Seafood Feast",
    arBadge1: "🦞 وليمة بحرية",
    enBadge2: "Fried or Grilled",
    arBadge2: "مقلي أو مشوي",
    badge2Class: "emerald",
    enDesc:
      "Lavish Moroccan seafood platter with crispy calamari, jumbo shrimp, and golden fish fillets served with herb-crusted lemons and house sauces.",
    arDesc:
      "وليمة المأكولات البحرية المغربية مع الكاليماري المقرمش والروبيان الجامبو وفيليه السمك الذهبي والصلصات الخاصة.",
    enQuote:
      "“I ordered the lemon chicken tagine, lamb tagine, and fried seafood plate... Chef Mouna did an incredible job.” — Asiyah Samouh, 5★",
    arQuote:
      "«طلبت طاجن الدجاج بالليمون وطاجن اللحم وطبق المأكولات البحرية.. أبدعت الشيف منى!» — آسية سموح، ★٥"
  },
  {
    id: "chicken-shawarma-plate",
    enTitle: "Chicken Shawarma Plate",
    arTitle: "طبق شاورما الدجاج",
    enSub: "Spiced Shawarma · Crispy Bread · Seasoned Potatoes & Fried Almonds",
    arSub: "شاورما دجاج متبلة · خبز مقرمش وبطاطس متبلة ولوز مقلي",
    price: "$19.99",
    cutoutImg: "assets/images/ai/cutout-shawarma-plate.png",
    realImg: "assets/images/doordash/chicken-shawarma-plate.jpg",
    enBadge1: "⭐ #1 Most Liked (16)",
    arBadge1: "⭐ الأكثر طلباً (١٦)",
    enBadge2: "House Garlic Sauce",
    arBadge2: "مع صلصة الثوم",
    badge2Class: "crimson",
    enDesc:
      "Chicken shawarma mixed with crispy bread, seasoned potatoes, and pickles, drizzled with house garlic sauce and accompanied by fried almonds.",
    arDesc:
      "شاورما دجاج مع الخبز المقرمش والبطاطس المتبلة والمخلل، مع صلصة الثوم الخاصة واللوز المقلي.",
    enQuote:
      "“Authentic food, friendly staff, and a welcoming cozy environment.” — K B, Local Guide, 5★",
    arQuote:
      "«طعام أصيل وطاقم عمل ودود وأجواء دافئة ومريحة للغاية.» — K B، ★٥"
  },
  {
    id: "arayes-plate",
    enTitle: "Char-Grilled Arayes Plate",
    arTitle: "طبق عرايس اللحم المشوية",
    enSub: "6 Crispy Pita Pockets · Spiced Beef & Lamb · Fries & Tahini",
    arSub: "٦ قطع خبز مقرمش محشو باللحم المتبل · بطاطس وطحينة",
    price: "$17.99",
    cutoutImg: "assets/images/ai/cutout-arayes-plate.png",
    realImg: "assets/images/doordash/arayes-plate.jpg",
    enBadge1: "🔥 100% Liked (5)",
    arBadge1: "🔥 ١٠٠٪ إعجاب (٥)",
    enBadge2: "Served w/ Fries",
    arBadge2: "مع البطاطس والطحينة",
    badge2Class: "emerald",
    enDesc:
      "6 crispy grilled pita bread pockets generously stuffed with a savory, spiced mixture of ground beef and lamb, served hot with tahini sauce and golden fries.",
    arDesc:
      "٦ قطع من الخبز العربي المقرمش المحشو بخلطة اللحم المفروم المتبل، مشوية وتُقدم ساخنة مع الطحينة والبطاطس.",
    enQuote:
      "“You will get the best experience ever, especially the food!” — Dali Garbouj, 5★",
    arQuote:
      "«ستحصلون على أفضل تجربة على الإطلاق، وخاصة الطعام الرائع!» — دالي قرقبوج، ★٥"
  }
];

/* 4. Complete 33-Item Menu (All 25 DoorDash Items + 8 In-House Moroccan Menu Specialties) */
const MENU_CATEGORIES = [
  { id: "all", enLabel: "All Dishes", arLabel: "جميع الأطباق" },
  { id: "moroccan", enLabel: "Moroccan Tagines & Dinner Show", arLabel: "الطواجن والأطباق المغربية" },
  { id: "plates", enLabel: "Char-Grilled Plates", arLabel: "الأطباق الرئيسية والمشاوي" },
  { id: "sandwiches", enLabel: "Sandwiches & Wraps", arLabel: "الساندويشات" },
  { id: "appetizers", enLabel: "Appetizers & Wings", arLabel: "المقبلات والأجنحة" },
  { id: "sides", enLabel: "Sides", arLabel: "الأطباق الجانبية" },
  { id: "drinks", enLabel: "Mint Tea & Beverages", arLabel: "الشاي المغربي والمشروبات" }
];

const MENU_ITEMS = [
  // ================= MOROCCAN DINNER SHOW & IN-HOUSE SPECIALTIES (8) =================
  {
    id: "lamb-tagine",
    cat: "moroccan",
    enTitle: "Lamb Tagine with Prunes & Almonds",
    arTitle: "طاجن اللحم المغربي بالبرقوق واللوز",
    price: "$23.99",
    img: "assets/images/gmaps/by_owner_3.jpg",
    enBadge: "👑 Mentioned in 4+ Reviews",
    arBadge: "👑 الطبق المغربي الأشهر",
    enDesc:
      "Chef Mouna’s signature slow-braised fall-off-the-bone lamb tagine simmered with saffron, caramelized prunes, apricots, toasted almonds, and pistachios.",
    arDesc:
      "طاجن اللحم المغربي الشهير من الشيف منى، مطهو ببطء مع الزعفران والبرقوق المعسل والمشمش واللوز المحمص والفستق."
  },
  {
    id: "lemon-chicken-tagine",
    cat: "moroccan",
    enTitle: "Lemon Chicken Tagine",
    arTitle: "طاجن الدجاج بالليمون المصير والزيتون",
    price: "$17.99",
    img: "assets/images/ai/lemon-chicken-tagine.jpg",
    enBadge: "🍋 Chef Mouna’s Classic",
    arBadge: "🍋 كلاسيكي الشيف منى",
    enDesc:
      "Traditional Moroccan chicken braised in an earthenware tagine with preserved Meyer lemons, green & purple olives, saffron, ginger, and fresh herbs.",
    arDesc:
      "دجاج مغربي تقليدي مطهو في الطاجن الفخاري مع الليمون المصير والزيتون الأخضر والأرجواني والزعفران والزنجبيل والأعشاب."
  },
  {
    id: "royal-gold-sea",
    cat: "moroccan",
    enTitle: "Royal Gold Sea Platter",
    arTitle: "طبق رويال جولد سي البحري",
    price: "$29.99",
    img: "assets/images/gmaps/by_owner_14.jpg",
    enBadge: "🦞 Signature Seafood Feast",
    arBadge: "🦞 وليمة المأكولات البحرية",
    enDesc:
      "Lavish Moroccan seafood feast featuring crispy calamari rings, jumbo shrimp, and golden fish fillets served with herb-crusted lemons and house dipping sauces.",
    arDesc:
      "وليمة بحرية مغربية تضم حلقات الكاليماري المقرمشة والروبيان الجامبو وفيليه السمك الذهبي مع الليمون والصلصات الخاصة."
  },
  {
    id: "chicken-pastilla",
    cat: "moroccan",
    enTitle: "Moroccan Chicken Pastilla",
    arTitle: "بسطيلة الدجاج المغربية باللوز والزعفران",
    price: "$16.99",
    img: "assets/images/gmaps/by_owner_12.jpg",
    enBadge: "✨ Sweet & Savory Tapas",
    arBadge: "✨ بسطيلة مغربية أصيلة",
    enDesc:
      "Crisp layered Moroccan pastry filled with saffron-braised chicken and caramelized almonds, finished with powdered sugar, cinnamon, and pistachios.",
    arDesc:
      "رقائق البسطيلة المغربية المقرمشة المحشوة بالدجاج المطهو بالزعفران واللوز المكرمل، ومزينة بالسكر الناعم والقرفة والفستق."
  },
  {
    id: "seafood-cigar-pastilla",
    cat: "moroccan",
    enTitle: "Seafood Pastilla / Cigar",
    arTitle: "سيجار / بسطيلة المأكولات البحرية",
    price: "$16.99",
    img: "assets/images/gmaps/by_owner_2.jpg",
    enBadge: "🦐 House Specialty",
    arBadge: "🦐 لفائف بحرية مقرمشة",
    enDesc:
      "Golden crisp pastry filled with shrimp, mahi-mahi, clam, calamari, vermicelli rice noodles, mushrooms, and Moroccan olives, crowned with a grilled jumbo prawn.",
    arDesc:
      "رقائق ذهبية مقرمشة محشوة بالروبيان وسمك الماهي ماهي والمحار والكاليماري والشعيرية والفطر والزيتون."
  },
  {
    id: "pil-pil-shrimp",
    cat: "moroccan",
    enTitle: "Pil-Pil / Habibi Crusted Shrimp",
    arTitle: "روبيان بيل بيل / روبيان حبيبي المشوي",
    price: "$16.99",
    img: "assets/images/gmaps/gmaps_gallery_4.jpg",
    enBadge: "🌶️ Sizzling Tapas",
    arBadge: "🌶️ بالثوم والكزبرة الطازجة",
    enDesc:
      "Sizzling jumbo shrimp with garlic, olive oil, chili flakes, fresh rosemary, parsley, and vibrant house cilantro-garlic sauce.",
    arDesc:
      "روبيان جامبو ساخن مع الثوم وزيت الزيتون ورقائق الفلفل الحار وإكليل الجبل وصلصة الكزبرة والثوم الخاصة."
  },
  {
    id: "royal-soup",
    cat: "moroccan",
    enTitle: "Royal Seafood Soup",
    arTitle: "شوربة المأكولات البحرية الملكية",
    price: "$21.99",
    img: "assets/images/gmaps/stefani_chalkova_review_1.jpg",
    enBadge: "🍲 Dinner Show Starter",
    arBadge: "🍲 شوربة بحرية كريمية",
    enDesc:
      "Rich, velvety Moroccan seafood chowder brimming with plump mussels, tender shrimp, flaky white fish, and calamari.",
    arDesc:
      "شوربة بحرية كريمية غنية ببلح البحر والروبيان الطري وفيليه السمك الأبيض والكاليماري."
  },
  {
    id: "moroccan-mint-tea",
    cat: "drinks",
    enTitle: "Traditional Moroccan Mint Tea (Atay)",
    arTitle: "أتاي شاي مغربي أصيل بالنعناع",
    price: "$6.99",
    img: "assets/images/gmaps/khalid_jebbar_review_1.jpg",
    enBadge: "🫖 Late-Night Ritual",
    arBadge: "🫖 الضيافة المغربية الأصيلة",
    enDesc:
      "Authentic gunpowder green tea steeped with fresh spearmint leaves and poured high into ornate gold-filigree glasses.",
    arDesc:
      "الشاي الأخضر المغربي الأصيل المحضر بأوراق النعناع الطازجة ويُصب في كؤوس مغربية مزخرفة."
  },

  // ================= CHAR-GRILLED PLATES · DOORDASH (6) =================
  {
    id: "chicken-shawarma-plate",
    cat: "plates",
    enTitle: "Chicken Shawarma Plate",
    arTitle: "طبق شاورما الدجاج",
    price: "$19.99",
    img: "assets/images/doordash/chicken-shawarma-plate.jpg",
    enBadge: "⭐ 87% Liked (16) · #1 Most Ordered",
    arBadge: "⭐ الأكثر طلباً على دورداش",
    enDesc:
      "Chicken shawarma mixed with crispy bread, seasoned potatoes, and pickles, drizzled with house garlic sauce and accompanied by fried almonds.",
    arDesc:
      "شاورما دجاج مع الخبز المقرمش والبطاطس المتبلة والمخلل، مع صلصة الثوم الخاصة واللوز المقلي."
  },
  {
    id: "chicken-kebab",
    cat: "plates",
    enTitle: "Chicken Kebab Plate",
    arTitle: "طبق كباب الدجاج المشوي",
    price: "$22.99",
    img: "assets/images/doordash/chicken-kebab.jpg",
    enBadge: "🔥 100% Liked (10) · #2 Most Liked",
    arBadge: "🔥 ١٠٠٪ إعجاب (١٠)",
    enDesc:
      "Chicken breast blended with Moroccan seasonings and char-grilled, served with grilled vegetables (green beans & cherry tomatoes) and saffron rice.",
    arDesc:
      "صدور دجاج متبلة بالبهارات المغربية ومشوية على الفحم، تُقدم مع الخضار المشوية وأرز الزعفران."
  },
  {
    id: "shish-lamb-kebab",
    cat: "plates",
    enTitle: "Shish Lamb Kebab Plate",
    arTitle: "طبق شيش كباب اللحم المشوي",
    price: "$24.99",
    img: "assets/images/doordash/shish-lamb-kebab.jpg",
    enBadge: "🔥 92% Liked (13) · #3 Most Liked",
    arBadge: "🔥 ٩٢٪ إعجاب (١٣)",
    enDesc:
      "Tender lamb cubes seasoned with warm herbs and char-grilled over open flame, served with grilled vegetables and saffron rice.",
    arDesc:
      "مكعبات لحم غنم طرية متبلة بالأعشاب ومشوية على اللهب، تُقدم مع الخضار المشوية والأرز."
  },
  {
    id: "lamb-chops",
    cat: "plates",
    enTitle: "Grilled Lamb Chops Plate",
    arTitle: "طبق ريش الغنم المشوية",
    price: "$24.99",
    img: "assets/images/doordash/lamb-chops.jpg",
    enBadge: "🔥 91% Liked (12)",
    arBadge: "🔥 ٩١٪ إعجاب (١٢)",
    enDesc:
      "3 pieces of grilled tender lollipop lamb chops with Moroccan spice rub and fresh rosemary, served with grilled vegetables and rice.",
    arDesc:
      "٣ قطع من ريش الغنم الطرية المتبلة بالبهارات المغربية وإكليل الجبل، تُقدم مع الخضار المشوية والأرز."
  },
  {
    id: "kefta-kebab",
    cat: "plates",
    enTitle: "Kefta Kebab Plate",
    arTitle: "طبق كباب كفتة اللحم",
    price: "$24.99",
    img: "assets/images/doordash/kefta-kebab.jpg",
    enBadge: "🔥 88% Liked (9)",
    arBadge: "🔥 ٨٨٪ إعجاب (٩)",
    enDesc:
      "Ground beef seasoned with fresh parsley, onions, and Moroccan spices, skewered and char-grilled. Served with grilled vegetables and saffron rice.",
    arDesc:
      "كفتة لحم مفروم متبلة بالبقدونس والبصل والبهارات المغربية ومشوية على الفحم، تُقدم مع الخضار المشوية وأرز الزعفران."
  },
  {
    id: "arayes-plate",
    cat: "plates",
    enTitle: "Arayes Plate",
    arTitle: "طبق عرايس اللحم المشوية",
    price: "$17.99",
    img: "assets/images/doordash/arayes-plate.jpg",
    enBadge: "🔥 100% Liked (5)",
    arBadge: "🔥 ١٠٠٪ إعجاب (٥)",
    enDesc:
      "6 crispy grilled pita bread pockets generously stuffed with a savory, spiced mixture of ground beef and lamb, served with tahini sauce and golden fries.",
    arDesc:
      "٦ قطع من الخبز العربي المقرمش المحشو بخلطة اللحم المتبل، مشوية وتُقدم مع الطحينة والبطاطس المقلية."
  },

  // ================= SANDWICHES · DOORDASH (6) =================
  {
    id: "chicken-shawarma-sandwich",
    cat: "sandwiches",
    enTitle: "Chicken Shawarma Sandwich",
    arTitle: "ساندويش شاورما الدجاج",
    price: "$11.99",
    img: "assets/images/doordash/chicken-shawarma-sandwich.jpg",
    enBadge: "🌯 90% Liked (11)",
    arBadge: "🌯 ٩٠٪ إعجاب (١١)",
    enDesc:
      "Tender marinated chicken, slow-cooked and thinly sliced, wrapped in warm pita bread with fresh toppings and creamy garlic sauce.",
    arDesc:
      "شرائح شاورما الدجاج المتبلة ملفوفة في خبز دافئ مع الخضار الطازجة وصلصة الثوم الكريمية."
  },
  {
    id: "gyro-sandwich",
    cat: "sandwiches",
    enTitle: "Gyro Sandwich",
    arTitle: "ساندويش جيرو اللحم",
    price: "$12.99",
    img: "assets/images/doordash/gyro-sandwich.jpg",
    enBadge: "🌯 100% Liked (6)",
    arBadge: "🌯 ١٠٠٪ إعجاب (٦)",
    enDesc:
      "Thinly sliced seasoned lamb wrapped in warm pita bread with fresh toppings and house sauce.",
    arDesc:
      "شرائح لحم الغنم المتبل ملفوفة في خبز دافئ مع الخضار الطازجة والصلصة الخاصة."
  },
  {
    id: "chicken-kebab-sandwich",
    cat: "sandwiches",
    enTitle: "Chicken Kebab Sandwich",
    arTitle: "ساندويش كباب الدجاج",
    price: "$16.99",
    img: "assets/images/doordash/chicken-kebab-sandwich.jpg",
    enBadge: "🥖 100% Liked (6)",
    arBadge: "🥖 ١٠٠٪ إعجاب (٦)",
    enDesc:
      "Tender marinated chicken kebab wrapped in warm bread with fresh toppings and finished with creamy garlic sauce.",
    arDesc:
      "كباب دجاج متبل ومشوي في خبز دافئ مع الخضار الطازجة وصلصة الثوم الكريمية."
  },
  {
    id: "kefta-sandwich",
    cat: "sandwiches",
    enTitle: "Kefta Sandwich",
    arTitle: "ساندويش كباب الكفتة",
    price: "$16.99",
    img: "assets/images/doordash/kefta-sandwich.jpg",
    enBadge: "🥖 85% Liked (7)",
    arBadge: "🥖 ٨٥٪ إعجاب (٧)",
    enDesc:
      "Char-grilled spiced ground beef with parsley and onions in warm French bread, topped with tzatziki sauce, lettuce, onions, and tomatoes.",
    arDesc:
      "كفتة لحم مشوية على الفحم بالبقدونس والبصل في خبز فرنسي دافئ مع صلصة تزاتزيكي والخس والطماطم."
  },
  {
    id: "falafel-sandwich",
    cat: "sandwiches",
    enTitle: "Falafel Sandwich",
    arTitle: "ساندويش الفلافل المقرمشة",
    price: "$11.99",
    img: "assets/images/doordash/falafel-sandwich.jpg",
    enBadge: "🌱 Vegetarian Favorite",
    arBadge: "🌱 خيار نباتي شهي",
    enDesc:
      "Crispy herb-seasoned chickpea falafel patties wrapped in warm pita bread with fresh lettuce, tomatoes, onions, and creamy tahini.",
    arDesc:
      "أقراص الفلافل المقرمشة بالحمص والأعشاب في خبز دافئ مع الخس والطماطم والبصل والطحينة."
  },
  {
    id: "shish-kebab-sandwich",
    cat: "sandwiches",
    enTitle: "Shish Kebab Sandwich",
    arTitle: "ساندويش شيش كباب اللحم",
    price: "$16.99",
    img: "assets/images/doordash/shish-kebab-sandwich.jpg",
    enBadge: "🔥 Char-Grilled Lamb",
    arBadge: "🔥 لحم غنم مشوي",
    enDesc:
      "Herb-spiced char-grilled lamb on 8\" French bread with cooling tzatziki sauce, crisp lettuce, onions, and tomatoes.",
    arDesc:
      "قطع لحم الغنم المشوية بالأعشاب في خبز فرنسي مع صلصة التزاتزيكي والخس والبصل والطماطم."
  },

  // ================= APPETIZERS & WINGS · DOORDASH (4) =================
  {
    id: "hummus",
    cat: "appetizers",
    enTitle: "Classic Hummus",
    arTitle: "حمص بالطحينة وزيت الزيتون",
    price: "$7.99",
    img: "assets/images/doordash/hummus.jpg",
    enBadge: "🌱 Served w/ Warm Pita",
    arBadge: "🌱 يُقدم مع الخبز الدافئ",
    enDesc:
      "Velvety chickpea dip blended with tahini, extra-virgin olive oil, and warm Moroccan spices, served with warm pita bread.",
    arDesc:
      "حمص كريمي ممزوج مع الطحينة وزيت الزيتون البكر والتوابل المغربية، يُقدم مع الخبز العربي الدافئ."
  },
  {
    id: "falafel",
    cat: "appetizers",
    enTitle: "Crispy Falafel (6 Pcs)",
    arTitle: "فلافل مقرمشة (٦ قطع)",
    price: "$9.99",
    img: "assets/images/doordash/falafel.jpg",
    enBadge: "🌱 100% Liked",
    arBadge: "🌱 ١٠٠٪ إعجاب",
    enDesc:
      "6 savory chickpea patties seasoned with fresh herbs and warm spices, fried crisp and served with creamy tahini sauce.",
    arDesc:
      "٦ أقراص فلافل متبلة بالأعشاب الطازجة والبهارات، مقلية ومقرمشة وتُقدم مع صلصة الطحينة."
  },
  {
    id: "mozzarella-sticks",
    cat: "appetizers",
    enTitle: "Mozzarella Sticks (8 Pcs)",
    arTitle: "أصابع الموزاريلا المقلية (٨ قطع)",
    price: "$11.99",
    img: "assets/images/doordash/mozzarella-sticks.jpg",
    enBadge: "🧀 100% Liked (5)",
    arBadge: "🧀 ١٠٠٪ إعجاب (٥)",
    enDesc:
      "8 deep-fried golden breaded mozzarella sticks served with homemade zesty marinara sauce on the side.",
    arDesc:
      "٨ قطع من أصابع جبنة الموزاريلا الذهبية المقرمشة تُقدم مع صلصة المارينارا الخاصة."
  },
  {
    id: "chicken-wings",
    cat: "appetizers",
    enTitle: "Chicken Wings (8 Pcs)",
    arTitle: "أجنحة دجاج مقرمشة (٨ قطع)",
    price: "$13.99",
    img: "assets/images/doordash/chicken-wings.jpg",
    enBadge: "🍗 85% Liked (7)",
    arBadge: "🍗 ٨٥٪ إعجاب (٧)",
    enDesc:
      "8 bone-in fresh wings with your choice of Hot, Honey BBQ, Buffalo, Garlic, or Plain with Ranch or Blue Cheese.",
    arDesc:
      "٨ قطع من أجنحة الدجاج الطازجة مع اختيارك من الصوص الحار، باربكيو العسل، بافلو، أو الثوم."
  },

  // ================= SIDES · DOORDASH (3) =================
  {
    id: "steak-fries",
    cat: "sides",
    enTitle: "Thick-Cut Steak Fries",
    arTitle: "بطاطس ستيك مقرمشة",
    price: "$3.99",
    img: "assets/images/doordash/steak-fries.jpg",
    enBadge: "🍟 85% Liked (7)",
    arBadge: "🍟 ٨٥٪ إعجاب (٧)",
    enDesc: "Thick-cut golden potato wedges lightly seasoned with sea salt.",
    arDesc: "ودجز البطاطس الذهبية السميكة المتبلة بملح البحر."
  },
  {
    id: "rice",
    cat: "sides",
    enTitle: "Moroccan Saffron Yellow Rice",
    arTitle: "أرز أصفر مغربي بالزعفران",
    price: "$5.99",
    img: "assets/images/doordash/rice.jpg",
    enBadge: "🌾 100% Liked (4)",
    arBadge: "🌾 ١٠٠٪ إعجاب (٤)",
    enDesc: "Fragrant saffron-seasoned Moroccan yellow rice prepared to perfection.",
    arDesc: "أرز مغربي أصفر عطري متبل بالزعفران."
  },
  {
    id: "fries",
    cat: "sides",
    enTitle: "Classic Golden French Fries",
    arTitle: "بطاطس مقلية كلاسيكية",
    price: "$3.99",
    img: "assets/images/doordash/fries.jpg",
    enBadge: "🍟 Classic Side",
    arBadge: "🍟 مقرمشة وساخنة",
    enDesc: "Golden, crispy French fry potato sticks.",
    arDesc: "أصابع البطاطس المقلية الذهبية المقرمشة."
  },

  // ================= BEVERAGES · DOORDASH (6) =================
  {
    id: "mango-madness-juice",
    cat: "drinks",
    enTitle: "Mango Madness Juice",
    arTitle: "عصير مانجو مادنس الاستوائي",
    price: "$4.49",
    img: "assets/images/doordash/mango-madness-juice.jpg",
    enBadge: "🥭 100% Liked",
    arBadge: "🥭 بارد ومنعش",
    enDesc: "Refreshing tropical Mango Madness fruit juice.",
    arDesc: "عصير فواكه المانجو الاستوائي البارد والمنعش."
  },
  {
    id: "apple-juice",
    cat: "drinks",
    enTitle: "Chilled Apple Juice",
    arTitle: "عصير تفاح طبيعي بارد",
    price: "$4.49",
    img: "assets/images/doordash/apple-juice.jpg",
    enBadge: "🍎 Chilled",
    arBadge: "🍎 عصير تفاح",
    enDesc: "Crisp, chilled 100% apple juice.",
    arDesc: "عصير تفاح نقي وبارد ١٠٠٪."
  },
  {
    id: "coca-cola",
    cat: "drinks",
    enTitle: "Coca-Cola",
    arTitle: "كوكاكولا",
    price: "$2.49",
    img: "assets/images/doordash/coca-cola.jpg",
    enBadge: "🥤 100% Liked",
    arBadge: "🥤 بارد",
    enDesc: "Classic ice-cold Coca-Cola.",
    arDesc: "مشروب كوكاكولا الكلاسيكي المثلج."
  },
  {
    id: "coca-cola-zero",
    cat: "drinks",
    enTitle: "Coca-Cola Zero",
    arTitle: "كوكاكولا زيرو",
    price: "$2.49",
    img: "assets/images/doordash/coca-cola-zero.jpg",
    enBadge: "🥤 Zero Sugar",
    arBadge: "🥤 بدون سكر",
    enDesc: "Zero-sugar Coca-Cola with classic taste.",
    arDesc: "كوكاكولا زيرو بدون سكر."
  },
  {
    id: "sprite",
    cat: "drinks",
    enTitle: "Sprite",
    arTitle: "سبرايت",
    price: "$2.49",
    img: "assets/images/doordash/sprite.jpg",
    enBadge: "🥤 90% Liked (10)",
    arBadge: "🥤 بارد ومنعش",
    enDesc: "Crisp lemon-lime soda.",
    arDesc: "مشروب سبرايت بنكهة الليمون المنعشة."
  },
  {
    id: "water",
    cat: "drinks",
    enTitle: "Bottled Spring Water",
    arTitle: "مياه معدنية معبأة",
    price: "$1.99",
    img: "assets/images/doordash/water.jpg",
    enBadge: "💧 100% Liked (5)",
    arBadge: "💧 مياه نقية",
    enDesc: "Pure bottled spring water.",
    arDesc: "مياه ينابيع نقية معبأة."
  }
];

/* 5. Real Verbatim Google Reviews & Topic Filters (100% Bilingual EN & AR) */
const REVIEW_TOPICS = [
  { id: "all", enLabel: "All 5★ Reviews (9)", arLabel: "جميع تقييمات ★٥ (٩)" },
  { id: "tagine", enLabel: "🍲 Tagines & Chef Mouna", arLabel: "🍲 الطواجن والشيف منى" },
  { id: "seafood", enLabel: "🍤 Seafood & Fish", arLabel: "🍤 السمك والمأكولات البحرية" },
  { id: "show", enLabel: "✨ Dinner Show & Late Night", arLabel: "✨ عروض السهرة وآخر الليل" },
  { id: "hospitality", enLabel: "👑 Sim & Shereen’s Service", arLabel: "👑 ضيافة سيمو وشيرين" }
];

const REVIEWS_DATA = [
  {
    name: "Asiyah Samouh",
    initials: "AS",
    enBadge: "5★ Google Review · Dine-In",
    arBadge: "تقييم ★٥ على جوجل · عشاء داخلي",
    topics: ["tagine", "seafood", "hospitality"],
    enText:
      "“From the moment we arrived we were welcomed by the manager Sim. The hospitality was welcoming from start to finish. The ambiance was so lovely and dinner was fantastic. I ordered the lemon chicken tagine, lamb tagine, and fried seafood plate, which included shrimp, calamari, and fish fillets. Chef Mouna did an incredible job.”",
    arText:
      "«منذ لحظة وصولنا استقبلنا المدير سيمو بكل حفاوة وترحيب من البداية للنهاية. الأجواء جميلة جداً والعشاء كان رائعاً. طلبت طاجن الدجاج بالليمون، وطاجن اللحم، وطبق المأكولات البحرية المقلي الذي شمل الروبيان والكاليماري وفيليه السمك. الشيف منى قامت بعمل مذهل!»",
    enDishes: ["Lemon Chicken Tagine", "Lamb Tagine", "Fried Seafood Plate"],
    arDishes: ["طاجن الدجاج بالليمون", "طاجن اللحم", "طبق المأكولات البحرية"]
  },
  {
    name: "Ad Cara",
    initials: "AC",
    enBadge: "5★ Google Review · Dinner",
    arBadge: "تقييم ★٥ على جوجل · عشاء",
    topics: ["tagine", "show"],
    enText:
      "“Forget the theme park food, this is a total hidden gem. The Lamb Tagine is a 10/10—it literally falls off the bone. Even the couscous tastes like a grandma's home cooking. Everything is fresh, authentic, and worth every penny. I really recommend.”",
    arText:
      "«انسوا طعام المتنزهات السياحية، هذا المكان جوهرة حقيقية! طاجن اللحم ١٠/١٠ — اللحم يذوب حرفياً. حتى الكسكس طعمه مثل طبخ البيت المغربي الأصيل. كل شيء طازج وأصيل ويستحق كل دولار.»",
    enDishes: ["Lamb Tagine", "Moroccan Couscous"],
    arDishes: ["طاجن اللحم المغربي", "الكسكس المغربي"]
  },
  {
    name: "Khalid Jebbar",
    initials: "KJ",
    enBadge: "5★ Google Review · Verified Guest",
    arBadge: "تقييم ★٥ على جوجل · ضيف موثق",
    topics: ["seafood", "hospitality"],
    enText:
      "“I'm a Moroccan and the food here is as good as you can get. Great customer service, very clean place. The fried fish Moroccan style was good and generous. Honestly I want to thank the owners and the chef. I can't say we don't have a good Moroccan restaurant in town anymore 🙏”",
    arText:
      "«أنا مغربي والطعام هنا في قمة الأصالة والجودة. خدمة عملاء ممتازة ومكان نظيف جداً. السمك المقلي على الطريقة المغربية كان شهياً ووفيراً. أود أن أشكر أصحاب المطعم والشيف!»",
    enDishes: ["Moroccan-Style Fried Fish", "Authentic Moroccan Cuisine"],
    arDishes: ["السمك المقلي على الطريقة المغربية", "مطبخ مغربي أصيل"]
  },
  {
    name: "Eve Mand",
    initials: "EM",
    enBadge: "5★ Google Review · Dinner Show",
    arBadge: "تقييم ★٥ على جوجل · عروض السهرة",
    topics: ["show"],
    enText:
      "“Seriously, the energy here is unmatched! I came for the food but stayed for the show. The dancers are incredible and they actually get the whole crowd involved—it’s like one big party. If you want a boring, quiet dinner, this isn't it. It’s loud, wild, and basically the best night out in Kissimmee.”",
    arText:
      "«بصراحة الطاقة والحماس هنا لا مثيل لهما! جئت من أجل الطعام وبقيت من أجل العرض الفني. العروض الاستعراضية مذهلة وتشرك الجمهور بالكامل وكأنها حفلة كبيرة. أفضل سهرة ليلية في كيسيمي بلا منازع!»",
    enDishes: ["Live Dinner Show", "Late-Night Lounge"],
    arDishes: ["عروض السهرة الحية", "سهرة كيسيمي"]
  },
  {
    name: "Sofia",
    initials: "SF",
    enBadge: "5★ Google Review · Birthday & Date Night",
    arBadge: "تقييم ★٥ على جوجل · احتفال وسهرة",
    topics: ["show", "hospitality"],
    enText:
      "“I’d 100% recommend this spot to anyone celebrating a birthday or a big night out with friends. It’s also great for couples who want a fun, interactive date instead of just sitting at a table staring at their phones. Just a heads-up: it gets LOUD at night, but the cabaret show is so good you won’t even care.”",
    arText:
      "«أنصح بهذا المكان ١٠٠٪ لأي شخص يحتفل بعيد ميلاد أو سهرة مميزة مع الأصدقاء، كما أنه رائع للأزواج الذين يبحثون عن أمسية تفاعلية ممتعة. العرض الليلي رائع ومبهر للغاية!»",
    enDishes: ["Cabaret Dinner Show", "Birthday Celebrations"],
    arDishes: ["عرض المسرح الليلي", "احتفالات أعياد الميلاد"]
  },
  {
    name: "Ad Charif",
    initials: "AC",
    enBadge: "5★ Google Review · Late-Night Lounge",
    arBadge: "تقييم ★٥ على جوجل · سهرة متأخرة",
    topics: ["show"],
    enText:
      "“Machaalah best spot in Kissimmee for night owls since they’re open until 2:00 AM. I’d recommend this to friends who want to hang out over hookah and mint tea long after the other restaurants have closed up.”",
    arText:
      "«ما شاء الله أفضل مكان في كيسيمي لعشاق السهر لأنه يفتح حتى الساعة ٢:٠٠ فجراً. أنصح به للأصدقاء الراغبين في السهر والاستمتاع بالأرجيلة والشاي المغربي بالنعناع بعد إغلاق المطاعم الأخرى.»",
    enDishes: ["Moroccan Mint Tea", "Hookah & Late-Night Dining"],
    arDishes: ["أتاي مغربي بالنعناع", "أرجيلة وسهر حتى ٢ فجراً"]
  },
  {
    name: "nik “nukelaloosh” laluk",
    initials: "NL",
    enBadge: "5★ Google Review · Verified Guest",
    arBadge: "تقييم ★٥ على جوجل · ضيف موثق",
    topics: ["seafood", "tagine"],
    enText:
      "“Stopped in here while in town for business and it did not disappoint. The Habibi Crusted Shrimp and Lamb Tagine were phenomenal.”",
    arText:
      "«توقفت هنا أثناء رحلة عمل ولم يخب ظني أبداً. روبيان حبيبي المشوي وطاجن اللحم كانا فوق الوصف!»",
    enDishes: ["Habibi Crusted Shrimp", "Lamb Tagine"],
    arDishes: ["روبيان حبيبي المشوي", "طاجن اللحم"]
  },
  {
    name: "Ikram Merzouk",
    initials: "IM",
    enBadge: "Local Guide · 5★ Google Review",
    arBadge: "مرشدة محلية · تقييم ★٥ على جوجل",
    topics: ["tagine", "hospitality"],
    enText:
      "“Yalla Habibi is an absolute gem! The food is truly authentic Moroccan cuisine—rich flavors, perfectly spiced, and clearly made with care and tradition. The ambiance is just as impressive: warm, inviting, and beautifully curated.”",
    arText:
      "«يلا حبيبي جوهرة حقيقية! الطعام مغربي أصيل بكل معنى الكلمة — نكهات غنية وتوابل موزونة بعناية. والأجواء دافئة ومصممة بذوق رفيع جداً.»",
    enDishes: ["Authentic Moroccan Cuisine", "Curated Ambiance"],
    arDishes: ["مأكولات مغربية أصيلة", "أجواء مغربية راقية"]
  },
  {
    name: "Zohra Collections & Dali Garbouj",
    initials: "ZC",
    enBadge: "5★ Google Reviews · VIP Service",
    arBadge: "تقييم ★٥ على جوجل · خدمة مميزة",
    topics: ["hospitality"],
    enText:
      "“I love this place, everything beyond expectations—food and customer service amazing, especially Shereen, she's the best!! Make sure to check out Simo, he’ll definitely get you right 🔥”",
    arText:
      "«أحب هذا المكان، كل شيء فاق التوقعات — الطعام وخدمة العملاء مذهلة وخاصة شيرين وسيمو، قمة في الرقي والاهتمام!»",
    enDishes: ["Hosted by Simo & Shereen", "5-Star Service"],
    arDishes: ["ضيافة سيمو وشيرين", "خدمة ٥ نجوم"]
  }
];

/* 6. Weekly Hours Schedule (Kissimmee ET — Exact Google Maps Hours) */
const WEEKLY_HOURS = [
  {
    dayIndex: 1,
    enDay: "Monday",
    arDay: "الإثنين",
    enHours: "5:00 PM – 1:00 AM",
    arHours: "٥:٠٠ مساءً – ١:٠٠ فجراً",
    openH: 17,
    closeH: 25
  },
  {
    dayIndex: 2,
    enDay: "Tuesday",
    arDay: "الثلاثاء",
    enHours: "5:00 PM – 2:00 AM",
    arHours: "٥:٠٠ مساءً – ٢:٠٠ فجراً",
    openH: 17,
    closeH: 26
  },
  {
    dayIndex: 3,
    enDay: "Wednesday",
    arDay: "الأربعاء",
    enHours: "5:00 PM – 2:00 AM",
    arHours: "٥:٠٠ مساءً – ٢:٠٠ فجراً",
    openH: 17,
    closeH: 26
  },
  {
    dayIndex: 4,
    enDay: "Thursday",
    arDay: "الخميس",
    enHours: "5:00 PM – 2:00 AM",
    arHours: "٥:٠٠ مساءً – ٢:٠٠ فجراً",
    openH: 17,
    closeH: 26
  },
  {
    dayIndex: 5,
    enDay: "Friday",
    arDay: "الجمعة",
    enHours: "1:00 PM – 2:00 AM",
    arHours: "١:٠٠ ظهراً – ٢:٠٠ فجراً",
    openH: 13,
    closeH: 26
  },
  {
    dayIndex: 6,
    enDay: "Saturday",
    arDay: "السبت",
    enHours: "2:00 PM – 2:00 AM",
    arHours: "٢:٠٠ ظهراً – ٢:٠٠ فجراً",
    openH: 14,
    closeH: 26
  },
  {
    dayIndex: 0,
    enDay: "Sunday",
    arDay: "الأحد",
    enHours: "5:00 PM – 12:00 AM",
    arHours: "٥:٠٠ مساءً – ١٢:٠٠ منتصف الليل",
    openH: 17,
    closeH: 24
  }
];

/* ==========================================================================
   RENDERING FUNCTIONS (100% BILINGUAL EN / AR)
   ========================================================================== */

/* A. Hero Pedestal Dish & Switcher */
function renderHeroDish(index) {
  activeHeroIndex = index;
  const dish = HERO_DISHES[index];
  const imgEl = document.getElementById("heroCutoutImg");
  const titleEl = document.getElementById("heroDishTitle");
  const subEl = document.getElementById("heroDishSub");
  const priceEl = document.getElementById("heroDishPrice");
  const badgeEl = document.getElementById("heroDishBadge");

  if (!imgEl || !titleEl) return;

  imgEl.style.opacity = "0.25";
  setTimeout(() => {
    imgEl.src = dish.cutoutImg;
    imgEl.alt = currentLang === "en" ? dish.enTitle : dish.arTitle;
    titleEl.textContent = currentLang === "en" ? dish.enTitle : dish.arTitle;
    subEl.textContent = currentLang === "en" ? dish.enSub : dish.arSub;
    priceEl.textContent = dish.price;
    if (badgeEl) {
      badgeEl.textContent = currentLang === "en" ? dish.enBadge : dish.arBadge;
    }
    imgEl.style.opacity = "1";
  }, 110);

  document.querySelectorAll(".hero-thumb-btn").forEach((btn, idx) => {
    btn.classList.toggle("active", idx === index);
  });
}

function renderHeroSwitcher() {
  const container = document.getElementById("heroQuickSwitcher");
  if (!container) return;

  container.innerHTML = HERO_DISHES.map((dish, idx) => {
    const label = currentLang === "en" ? dish.enTitle : dish.arTitle;
    const shortLabel = label.length > 22 ? label.slice(0, 20) + "…" : label;
    return `
      <button type="button" class="hero-thumb-btn ${idx === activeHeroIndex ? "active" : ""}" data-hero-idx="${idx}">
        <img src="${dish.cutoutImg}" alt="${label}" loading="lazy" />
        <span>${shortLabel}</span>
      </button>
    `;
  }).join("");

  container.querySelectorAll(".hero-thumb-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const idx = parseInt(btn.getAttribute("data-hero-idx"), 10);
      renderHeroDish(idx);
      resetHeroAutoRotate();
    });
  });
}

function resetHeroAutoRotate() {
  if (heroInterval) clearInterval(heroInterval);
  heroInterval = setInterval(() => {
    const nextIdx = (activeHeroIndex + 1) % HERO_DISHES.length;
    renderHeroDish(nextIdx);
  }, 5600);
}

/* B. Signature Dishes Grid (Moorish Arch Cards) */
function renderSignatureDishes() {
  const grid = document.getElementById("signatureGrid");
  if (!grid) return;

  const dict = UI_TEXT[currentLang];

  grid.innerHTML = SIGNATURE_DISHES.map((dish) => {
    const title = currentLang === "en" ? dish.enTitle : dish.arTitle;
    const sub = currentLang === "en" ? dish.enSub : dish.arSub;
    const b1 = currentLang === "en" ? dish.enBadge1 : dish.arBadge1;
    const b2 = currentLang === "en" ? dish.enBadge2 : dish.arBadge2;
    const desc = currentLang === "en" ? dish.enDesc : dish.arDesc;
    const quote = currentLang === "en" ? dish.enQuote : dish.arQuote;

    return `
      <article class="sig-card" data-dish-id="${dish.id}">
        <div class="sig-visual-stage">
          <div class="sig-top-badges">
            <span class="dish-tag">${b1}</span>
            <span class="dish-tag ${dish.badge2Class}">${b2}</span>
          </div>
          <img src="${dish.cutoutImg}" alt="${title}" class="sig-card-img" loading="lazy" />
        </div>
        <div class="sig-body">
          <div class="sig-title-row">
            <h3 class="sig-title-pt">${title}</h3>
            <span class="sig-price">${dish.price}</span>
          </div>
          <p class="sig-title-en">${sub}</p>
          <p class="sig-desc">${desc}</p>
          <blockquote class="sig-quote-snippet">${quote}</blockquote>
          <div class="sig-footer">
            <a href="${DOORDASH_URL}" target="_blank" rel="noopener" class="btn btn-doordash sig-order-btn" onclick="event.stopPropagation()">
              ${dict.sig_order_btn} · ${dish.price}
            </a>
          </div>
        </div>
      </article>
    `;
  }).join("");

  grid.querySelectorAll(".sig-card").forEach((card) => {
    card.addEventListener("click", () => {
      const id = card.getAttribute("data-dish-id");
      openDishModal(id);
    });
  });
}

/* C. Interactive Full Menu Vault */
function renderCategoryTabs() {
  const tabsEl = document.getElementById("menuCategoryTabs");
  if (!tabsEl) return;

  tabsEl.innerHTML = MENU_CATEGORIES.map((cat) => {
    const count =
      cat.id === "all"
        ? MENU_ITEMS.length
        : MENU_ITEMS.filter((item) => item.cat === cat.id).length;
    const label = currentLang === "en" ? cat.enLabel : cat.arLabel;
    return `
      <button type="button" class="cat-tab ${activeCategory === cat.id ? "active" : ""}" data-cat="${cat.id}">
        <span>${label}</span>
        <span class="cat-count">${count}</span>
      </button>
    `;
  }).join("");

  tabsEl.querySelectorAll(".cat-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      activeCategory = tab.getAttribute("data-cat");
      renderCategoryTabs();
      renderFullMenu();
    });
  });
}

function renderFullMenu() {
  const gridEl = document.getElementById("fullMenuGrid");
  if (!gridEl) return;

  const q = searchQuery.trim().toLowerCase();
  const filtered = MENU_ITEMS.filter((item) => {
    const matchesCat = activeCategory === "all" || item.cat === activeCategory;
    if (!matchesCat) return false;
    if (!q) return true;
    return (
      item.enTitle.toLowerCase().includes(q) ||
      item.arTitle.toLowerCase().includes(q) ||
      item.enDesc.toLowerCase().includes(q) ||
      item.arDesc.toLowerCase().includes(q) ||
      item.enBadge.toLowerCase().includes(q) ||
      item.arBadge.toLowerCase().includes(q)
    );
  });

  if (filtered.length === 0) {
    const emptyMsg =
      currentLang === "en"
        ? "No dishes matched your search. Try 'Tagine', 'Pastilla', 'Shrimp', or 'Shawarma'."
        : "لم يتم العثور على أطباق مطابقة لبحثك. جرب البحث عن «طاجن» أو «شاورما» أو «بسطيلة».";
    gridEl.innerHTML = `<div style="grid-column: 1 / -1; text-align:center; padding: 2rem; color: var(--gold-light); font-weight: 700;">${emptyMsg}</div>`;
    return;
  }

  const orderLabel = UI_TEXT[currentLang].menu_item_order_label;

  gridEl.innerHTML = filtered
    .map((item) => {
      const title = currentLang === "en" ? item.enTitle : item.arTitle;
      const desc = currentLang === "en" ? item.enDesc : item.arDesc;
      const badge = currentLang === "en" ? item.enBadge : item.arBadge;
      return `
        <article class="menu-item-card" data-item-id="${item.id}">
          <img src="${item.img}" alt="${title}" class="menu-item-thumb" loading="lazy" />
          <div class="menu-item-info">
            <div class="menu-item-header">
              <h3 class="menu-item-title">${title}</h3>
              <span class="menu-item-price">${item.price}</span>
            </div>
            <p class="menu-item-desc">${desc}</p>
            <div class="menu-item-actions">
              <span class="menu-cat-pill">${badge}</span>
              <span class="menu-quick-order">${orderLabel}</span>
            </div>
          </div>
        </article>
      `;
    })
    .join("");

  gridEl.querySelectorAll(".menu-item-card").forEach((card) => {
    card.addEventListener("click", () => {
      const id = card.getAttribute("data-item-id");
      openDishModal(id);
    });
  });
}

/* D. Verified Reviews & Topic Chips */
function renderReviewTopics() {
  const container = document.getElementById("reviewTopicChips");
  if (!container) return;

  container.innerHTML = REVIEW_TOPICS.map((topic) => {
    const label = currentLang === "en" ? topic.enLabel : topic.arLabel;
    return `
      <button type="button" class="topic-chip ${activeReviewTopic === topic.id ? "active" : ""}" data-topic="${topic.id}">
        ${label}
      </button>
    `;
  }).join("");

  container.querySelectorAll(".topic-chip").forEach((btn) => {
    btn.addEventListener("click", () => {
      activeReviewTopic = btn.getAttribute("data-topic");
      renderReviewTopics();
      renderReviews();
    });
  });
}

function renderReviews() {
  const grid = document.getElementById("reviewsMasonry");
  if (!grid) return;

  const list =
    activeReviewTopic === "all"
      ? REVIEWS_DATA
      : REVIEWS_DATA.filter((r) => r.topics.includes(activeReviewTopic));

  grid.innerHTML = list
    .map((rev) => {
      const badge = currentLang === "en" ? rev.enBadge : rev.arBadge;
      const text = currentLang === "en" ? rev.enText : rev.arText;
      const dishes = currentLang === "en" ? rev.enDishes : rev.arDishes;
      return `
        <article class="review-card">
          <div>
            <div class="review-top">
              <div class="reviewer-profile">
                <div class="reviewer-avatar">${rev.initials}</div>
                <div>
                  <div class="reviewer-name">${rev.name}</div>
                  <div class="reviewer-badge">${badge}</div>
                </div>
              </div>
              <span class="review-source-tag">★★★★★</span>
            </div>
            <p class="review-text" style="margin-top: 0.75rem;">${text}</p>
          </div>
          <div class="review-dish-pills">
            ${dishes.map((d) => `<span class="review-dish-pill">🍽️ ${d}</span>`).join("")}
          </div>
        </article>
      `;
    })
    .join("");
}

/* E. Live Kissimmee Hours Status & Schedule Lists (EN & AR) */
function initLiveHoursStatus() {
  const now = new Date();
  const etString = now.toLocaleString("en-US", {
    timeZone: "America/New_York"
  });
  const etDate = new Date(etString);
  const day = etDate.getDay();
  const hourFloat = etDate.getHours() + etDate.getMinutes() / 60;

  const prevDay = (day + 6) % 7;
  const prevSched = WEEKLY_HOURS.find((d) => d.dayIndex === prevDay);
  const todaySched = WEEKLY_HOURS.find((d) => d.dayIndex === day);

  let isOpen = false;
  let statusTextEn = "";
  let statusTextAr = "";

  if (prevSched && prevSched.closeH > 24 && hourFloat < prevSched.closeH - 24) {
    isOpen = true;
    const closeTimeStr = prevSched.closeH === 25 ? "1:00 AM" : "2:00 AM";
    const closeTimeAr = prevSched.closeH === 25 ? "١:٠٠ فجراً" : "٢:٠٠ فجراً";
    statusTextEn = `Open Now · Kitchen & Lounge til ${closeTimeStr}`;
    statusTextAr = `مفتوح الآن · المطبخ والسهرة حتى ${closeTimeAr}`;
  } else if (todaySched && hourFloat >= todaySched.openH && hourFloat < todaySched.closeH) {
    isOpen = true;
    const closeLabelEn = todaySched.enHours.split("–")[1].trim();
    const closeLabelAr = todaySched.arHours.split("–")[1].trim();
    statusTextEn = `Open Now · Open Tonight til ${closeLabelEn}`;
    statusTextAr = `مفتوح الآن · يستقبل الضيوف حتى ${closeLabelAr}`;
  } else if (todaySched) {
    const openLabelEn = todaySched.enHours.split("–")[0].trim();
    const openLabelAr = todaySched.arHours.split("–")[0].trim();
    statusTextEn = `Opens Today at ${openLabelEn}`;
    statusTextAr = `يفتح اليوم الساعة ${openLabelAr}`;
  }

  const dotEl = document.getElementById("liveStatusDot");
  const textEl = document.getElementById("liveStatusText");
  if (dotEl) {
    dotEl.classList.toggle("closed", !isOpen);
  }
  if (textEl) {
    textEl.textContent = currentLang === "en" ? statusTextEn : statusTextAr;
  }

  const renderHoursRows = (ulId) => {
    const ul = document.getElementById(ulId);
    if (!ul) return;
    ul.innerHTML = WEEKLY_HOURS.map((h) => {
      const isToday = h.dayIndex === day;
      const dayLabel = currentLang === "en" ? h.enDay : h.arDay;
      const hoursLabel = currentLang === "en" ? h.enHours : h.arHours;
      const todayBadge =
        isToday
          ? currentLang === "en"
            ? " (Today)"
            : " (اليوم)"
          : "";
      return `
        <li class="hours-row ${isToday ? "today" : ""}">
          <span>${dayLabel}${todayBadge}</span>
          <span>${hoursLabel}</span>
        </li>
      `;
    }).join("");
  };

  renderHoursRows("hoursHudList");
  renderHoursRows("locationHoursList");
}

/* F. Bilingual Dish Detail Modal */
function openDishModal(dishId) {
  const modal = document.getElementById("dishModalBackdrop");
  const content = document.getElementById("dishModalContent");
  if (!modal || !content) return;

  const sig = SIGNATURE_DISHES.find((d) => d.id === dishId);
  const menu = MENU_ITEMS.find((m) => m.id === dishId);
  const item = sig || menu;
  if (!item) return;

  const title = currentLang === "en" ? item.enTitle : item.arTitle;
  const desc = currentLang === "en" ? item.enDesc : item.arDesc;
  const badge = sig
    ? currentLang === "en"
      ? sig.enBadge1
      : sig.arBadge1
    : currentLang === "en"
      ? item.enBadge
      : item.arBadge;
  const imgSrc = sig ? sig.cutoutImg : item.img;

  const orderBtnText =
    currentLang === "en"
      ? `Order on DoorDash · ${item.price}`
      : `اطلب عبر دورداش · ${item.price}`;
  const callBtnText =
    currentLang === "en"
      ? "Call Restaurant · (407) 507-3991"
      : "اتصل بالمطعم · 3991-507 (407)";
  const kitchenNote =
    currentLang === "en"
      ? "✓ Prepared fresh to order in Chef Mouna’s kitchen · Dine-In & Takeout"
      : "✓ يُحضر طازجاً عند الطلب في مطبخ الشيف منى · للصالات والطلبات الخارجية";

  content.innerHTML = `
    <div class="modal-dish-layout">
      <div class="modal-img-stage">
        <span class="dish-tag">${badge}</span>
        <img src="${imgSrc}" alt="${title}" />
      </div>
      <div>
        <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:0.75rem; margin-bottom:0.65rem;">
          <h3 style="font-family:var(--font-display); font-size:1.4rem; color:var(--gold-light); line-height:1.2;">${title}</h3>
          <span class="sig-price">${item.price}</span>
        </div>
        <p style="color:var(--text-champagne); font-size:0.92rem; line-height:1.6; margin-bottom:0.9rem;">${desc}</p>
        <p style="font-size:0.8rem; color:#6EE7B7; font-weight:700; margin-bottom:1.2rem;">${kitchenNote}</p>
        <div style="display:flex; flex-direction:column; gap:0.6rem;">
          <a href="${DOORDASH_URL}" target="_blank" rel="noopener" class="btn btn-doordash" style="width:100%;">
            ${orderBtnText}
          </a>
          <a href="tel:+14075073991" class="btn btn-outline" style="width:100%;">
            ${callBtnText}
          </a>
        </div>
      </div>
    </div>
  `;

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
}

function closeDishModal() {
  const modal = document.getElementById("dishModalBackdrop");
  if (!modal) return;
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
}

/* G. Full Page Language Switcher (EN <-> AR with Native RTL) */
function applyLanguageStrings() {
  const dict = UI_TEXT[currentLang];

  document.documentElement.lang = currentLang === "en" ? "en" : "ar";
  document.documentElement.dir = currentLang === "en" ? "ltr" : "rtl";

  document.querySelectorAll(".lang-opt").forEach((opt) => {
    const langCode = opt.getAttribute("data-lang");
    opt.classList.toggle("active", langCode === currentLang);
  });

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const key = el.getAttribute("data-i18n-html");
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key]) {
      el.setAttribute("placeholder", dict[key]);
    }
  });

  renderHeroDish(activeHeroIndex);
  renderHeroSwitcher();
  renderSignatureDishes();
  renderCategoryTabs();
  renderFullMenu();
  renderReviewTopics();
  renderReviews();
  initLiveHoursStatus();
}

/* ==========================================================================
   INITIALIZATION
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  applyLanguageStrings();
  resetHeroAutoRotate();

  const langSwitch = document.getElementById("langSwitch");
  if (langSwitch) {
    langSwitch.addEventListener("click", (e) => {
      const targetOpt = e.target.closest(".lang-opt");
      if (targetOpt) {
        const selected = targetOpt.getAttribute("data-lang");
        if (selected && selected !== currentLang) {
          currentLang = selected;
          applyLanguageStrings();
        }
      } else {
        currentLang = currentLang === "en" ? "ar" : "en";
        applyLanguageStrings();
      }
    });
  }

  const heroCutoutImg = document.getElementById("heroCutoutImg");
  if (heroCutoutImg) {
    heroCutoutImg.addEventListener("click", () => {
      const dish = HERO_DISHES[activeHeroIndex];
      if (dish) openDishModal(dish.id);
    });
  }

  const searchInput = document.getElementById("menuSearchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value || "";
      renderFullMenu();
    });
  }

  const statusTrigger = document.getElementById("liveStatusTrigger");
  const hudPopover = document.getElementById("hoursHudPopover");
  const hudClose = document.getElementById("hoursHudClose");

  if (statusTrigger && hudPopover) {
    statusTrigger.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = hudPopover.classList.toggle("open");
      statusTrigger.setAttribute("aria-expanded", String(isOpen));
      hudPopover.setAttribute("aria-hidden", String(!isOpen));
    });

    if (hudClose) {
      hudClose.addEventListener("click", () => {
        hudPopover.classList.remove("open");
        statusTrigger.setAttribute("aria-expanded", "false");
        hudPopover.setAttribute("aria-hidden", "true");
      });
    }

    document.addEventListener("click", (e) => {
      if (!hudPopover.contains(e.target) && !statusTrigger.contains(e.target)) {
        hudPopover.classList.remove("open");
        statusTrigger.setAttribute("aria-expanded", "false");
        hudPopover.setAttribute("aria-hidden", "true");
      }
    });
  }

  const modalCloseBtn = document.getElementById("dishModalClose");
  const modalBackdrop = document.getElementById("dishModalBackdrop");
  if (modalCloseBtn) {
    modalCloseBtn.addEventListener("click", closeDishModal);
  }
  if (modalBackdrop) {
    modalBackdrop.addEventListener("click", (e) => {
      if (e.target === modalBackdrop) closeDishModal();
    });
  }
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeDishModal();
  });

  const header = document.getElementById("siteHeader");
  window.addEventListener(
    "scroll",
    () => {
      if (header) {
        header.classList.toggle("scrolled", window.scrollY > 24);
      }
    },
    { passive: true }
  );
});
