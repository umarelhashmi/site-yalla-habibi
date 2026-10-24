/* ==========================================================================
   YALLA HABIBI · RESTAURANT & DINNER SHOW — INTERACTIVE ENGINE
   100% Bilingual Native English (EN) & Native Arabic (AR / RTL)
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
    halal_badge: "100% Zabiha Halal · Dinner Show Nightly",
    brand_title: "YALLA HABIBI",
    brand_sub: "Restaurant & Royal Dinner Show · Kissimmee",
    nav_show: "The Show",
    nav_signatures: "Royal Dishes",
    nav_menu: "Full Menu (33)",
    nav_reviews: "Reviews (4.7★)",
    nav_visit: "Visit & VIP",
    nav_order_cta: "Order Online",
    mob_show: "Dinner Show",
    mob_signatures: "Royal Dishes",
    mob_menu: "33-Item Menu",
    mob_printed: "Printed Menus",
    mob_reviews: "4.7★ Reviews",
    mob_visit: "Hours & Map",

    hero_badge_1: "🔥 Live Belly Dance & Oud Musicians Nightly",
    hero_badge_2: "★ 4.7 Google Rating (177+ Reviews)",
    hero_badge_3: "✓ 100% Halal Moroccan & Lebanese Kitchen",
    hero_title_html:
      'Marrakech <span class="gold-shimmer">After Dark.</span><br>Feast Like <span class="ruby-glow">Royalty.</span>',
    hero_lead:
      "Step onto our red-carpet velvet stage in Kissimmee. Savor Chef Mouna’s 8-hour clay-pot Lamb Tagine, sizzling flame-grilled Mashawi skewers, and flaky golden Pastilla while live belly dancers, darbouka percussionists, and Arabic vocalists ignite the night until 2 AM.",
    hero_cta_order: "Order Pickup / Delivery",
    hero_cta_vip: "Reserve VIP Stage Table · (407) 507-3991",
    hero_cta_menu: "Explore 33-Dish Menu",
    stat_1_val: "4.7 ★ Rated",
    stat_1_lbl: "177+ Verified Reviews across Google & DoorDash",
    stat_2_val: "Live til 2 AM",
    stat_2_lbl: "Belly Dance, Live Oud, Violin & Arabic DJ Sets",
    stat_3_val: "Chef Mouna",
    stat_3_lbl: "Authentic Moroccan Tagines, Couscous & Charcoal Grill",

    marquee_1: "LIVE BELLY DANCE & ARABIC CONCERT NIGHTLY",
    marquee_2: "8-HOUR BRAISED MOROCCAN LAMB TAGINE",
    marquee_3: "CRISPY ALMOND & SAFFRON CHICKEN PASTILLA",
    marquee_4: "100% ZABIHA HALAL CHARCOAL GRILL",
    marquee_5: "ROYAL SEAFOOD BOIL & LOBSTER EXTRAVAGANZA",
    marquee_6: "OPEN LATE UNTIL 2:00 AM TUE–SAT",

    act1_step: "ACT I · 5:00 PM – 8:30 PM",
    act1_title: "The Royal Moroccan Feast",
    act1_desc:
      "Begin your evening beneath glowing brass lanterns with warm homemade khobz, smoky Baba Ghanoush, crispy golden Pastilla, and steaming clay-pot tagines.",
    act2_step: "ACT II · 8:30 PM – 11:30 PM",
    act2_title: "The Cabaret & Belly Dance Show",
    act2_desc:
      "The stage lights blaze crimson and gold. Live violinists, keyboardists, darbouka drummers, and dazzling belly dancers turn every table into a front-row celebration.",
    act3_step: "ACT III · 11:30 PM – 2:00 AM",
    act3_title: "Midnight Lounge & Late-Night Grill",
    act3_desc:
      "High-energy Arabic & international club beats, ceremonial poured Moroccan mint tea, charcoal-seared skewers, and VIP bottle & birthday celebrations.",

    show_eyebrow: "Tonight On Stage · Kissimmee’s #1 Nightlife Feast",
    show_title: "More Than Dinner. A Full Arabian Spectacle.",
    show_desc:
      "Hosted by manager Sim (Simo) and culinary visionary Chef Mouna, Yalla Habibi fuses high-fashion Moroccan cabaret energy with Old-World North African and Levantine hospitality.",
    bento_1_badge: "Live On Stage Nightly",
    bento_1_title: "Live Arabic Musicians, Singers & Belly Dance",
    bento_1_sub:
      "Electrifying stage performances with live keyboard, percussion, and guest interaction.",
    bento_2_badge: "Red Carpet Runway",
    bento_2_title: "The Crimson Velvet & Gold Stage",
    bento_2_sub:
      "Every booth and table enjoys unobstructed sightlines to our illuminated stage.",
    bento_3_badge: "VIP Arrival",
    bento_3_title: "Red Carpet Stanchions & Photo Wall",
    bento_3_sub: "Dress to impress — built for unforgettable birthdays and VIP nights.",
    bento_4_badge: "Golden Geometric Bar",
    bento_4_title: "Craft Mocktails, Arabic Coffee & Mint Tea",
    bento_4_sub: "Plush ruby velvet seating beneath bespoke Moroccan geometric arches.",

    pillar_1_title: "👑 Hosted by Sim (Simo)",
    pillar_1_desc:
      "Legendary table-side warmth — Sim personally greets every table to ensure VIP treatment from arrival to last song.",
    pillar_2_title: "🍲 Chef Mouna’s Kitchen",
    pillar_2_desc:
      "Hand-rolled couscous, saffron-braised meats, and authentic Moroccan spices simmered fresh daily.",
    pillar_3_title: "💃 Interactive Celebrations",
    pillar_3_desc:
      "Celebrating a birthday or anniversary? Our dancers and musicians bring the spotlight straight to your table.",
    pillar_4_title: "🔥 Late-Night Halal Kitchen",
    pillar_4_desc:
      "Full dinner and grill menu served late into the night alongside live music and lounge vibes.",

    sig_eyebrow: "Chef Mouna’s Crown Jewels · Click Any Dish to Inspect",
    sig_title: "Royal Moroccan & Levantine Signatures",
    sig_desc:
      "Crafted to order with imported saffron, preserved Meyer lemons, Damascus rosewater, and prime Zabiha Halal cuts.",
    sig_order_btn: "Order on DoorDash",
    sig_inspect_btn: "View Dish",

    menu_eyebrow: "Complete 33-Item Culinary Vault",
    menu_title: "Explore Our Full Menu",
    menu_desc:
      "Filter by category or search in English or Arabic. Click any dish to view full preparation details or order directly for pickup & delivery.",
    menu_search_placeholder:
      "Search all 33 dishes (e.g., Tagine, Lamb Chops, Pastilla, Shawarma, Seafood)...",
    menu_order_all_btn: "Order Full Menu on DoorDash",
    menu_item_order_label: "Order Now →",

    printed_eyebrow: "Official In-House Menus",
    printed_title: "Inspect Our Physical Lunch & Dinner Show Menus",
    printed_desc:
      "Prefer to browse our traditional printed restaurant menus before you arrive or order? Click either menu page to open the full high-resolution scan.",
    printed_btn_1: "Open Page 1 · Lunch, Salads & Sandwiches",
    printed_btn_2: "Open Page 2 · Tagines, Couscous & Royal Feasts",
    printed_card_1: "Page 1 · Appetizers & Sandwiches",
    printed_card_2: "Page 2 · Tagines, Grill & Drinks",

    rev_eyebrow: "Verified Guest Acclaim · 4.7★ Across 177+ Reviews",
    rev_title: "Why Kissimmee & Orlando Rave About Yalla Habibi",
    rev_desc:
      "Real unedited praise from families, nightlife lovers, and food critics who experienced Chef Mouna’s kitchen and Sim’s legendary hospitality.",
    rev_banner_title: "Rated 4.7 Out of 5 Stars",
    rev_count_sub: "177+ Google & DoorDash Reviews",
    rev_banner_sub:
      "Praised for Authentic Moroccan Tagines, Live Belly Dance Energy, and Manager Sim & Chef Mouna’s VIP Service.",
    rev_banner_cta: "Order Online Now",

    loc_eyebrow: "Visit The Lounge · Kissimmee, Florida",
    loc_title: "Reserve Your Stage Table or Order Online",
    loc_desc:
      "Located right off West Vine Street (US-192) at 3295 Oxford Dr with plenty of free parking. Walk-ins welcome or call ahead for VIP stage seating.",
    loc_card_title: "Yalla Habibi · Restaurant & Dinner Show",
    loc_address_label: "Address:",
    loc_phone_label: "VIP Reservations & Takeout:",
    loc_hours_heading: "Weekly Show & Kitchen Hours (Eastern Time)",
    amenity_1: "✓ 100% Zabiha Halal",
    amenity_2: "✓ Live Belly Dance & Music",
    amenity_3: "✓ Late-Night Dining til 2 AM",
    amenity_4: "✓ Free On-Site Lot & Street Parking",
    amenity_5: "✓ Wheelchair Accessible",
    amenity_6: "✓ Birthday & VIP Group Tables",
    loc_directions_btn: "Get Google Maps Directions",
    loc_call_btn: "Call (407) 507-3991",
    map_footer_text: "📍 3295 Oxford Dr, Kissimmee, FL 34746 · Free Parking On-Site",
    map_footer_link: "Open in Google Maps →",

    hud_title: "Show & Kitchen Schedule",
    hud_sub: "3295 Oxford Dr, Kissimmee · Eastern Time (ET)",
    hud_call: "Call (407) 507-3991",
    hud_order: "Order DoorDash",

    footer_tagline:
      "Kissimmee & Orlando’s premier Moroccan & Middle Eastern Restaurant and Live Cabaret Dinner Show. Authentic clay-pot Tagines, charcoal Mashawi, and unforgettable nights.",
    footer_col_explore: "Explore",
    footer_col_dishes: "Top Royal Dishes",
    footer_dish_1: "Royal Moroccan Lamb Tagine ($27.99)",
    footer_dish_2: "Moroccan Chicken Pastilla ($21.99)",
    footer_dish_3: "Charcoal Halal Lamb Chops ($29.99)",
    footer_dish_4: "Royal Seafood Extravaganza ($59.99)",
    footer_dish_5: "Chicken Shawarma Platter ($25.99)",
    footer_col_contact: "Location & VIP",
    footer_rights:
      "© 2026 Yalla Habibi Restaurant & Dinner Show · 3295 Oxford Dr, Kissimmee, FL 34746. All Rights Reserved.",
    footer_halal_note: "100% Zabiha Halal · Live Entertainment Nightly",
    mob_bar_call: "Call VIP Table",
    mob_bar_order: "Order DoorDash"
  },

  ar: {
    halal_badge: "حلال ذبيحة ١٠٠٪ · عروض فنية وسهرات يومية",
    brand_title: "يلا حبيبي",
    brand_sub: "مطعم وعروض السهرة الملكية · كيسيمي",
    nav_show: "عروض السهرة",
    nav_signatures: "الأطباق الملكية",
    nav_menu: "القائمة الكاملة (٣٣)",
    nav_reviews: "آراء الضيوف (★٤.٧)",
    nav_visit: "الموقع والحجز",
    nav_order_cta: "اطلب الآن",
    mob_show: "عروض السهرة",
    mob_signatures: "الأطباق الملكية",
    mob_menu: "القائمة (٣٣ طبق)",
    mob_printed: "القائمة المطبوعة",
    mob_reviews: "التقييمات ★٤.٧",
    mob_visit: "الأوقات والموقع",

    hero_badge_1: "🔥 عروض رقص شرقي وطرب عربي حي كل ليلة",
    hero_badge_2: "★ تقييم ٤.٧ على جوجل (+١٧٧ تقييم موثق)",
    hero_badge_3: "✓ مطبخ مغربي ولبناني حلال ١٠٠٪",
    hero_title_html:
      'ليالي مراكش <span class="gold-shimmer">الساحرة.</span><br>وليمة تليق <span class="ruby-glow">بالملوك.</span>',
    hero_lead:
      "عيشوا أجمل السهرات العربية على السجادة الحمراء في كيسيمي. تذوقوا طاجن اللحم بالبرقوق المطهو على نار هادئة لمدة ٨ ساعات من إبداع الشيف منى، والمشاوي المشوية على الفحم، والبسطيلة المغربية المقرمشة، وسط عروض الرقص الشرقي وإيقاعات الدربوكة والطرب الأصيل حتى الساعة ٢ فجراً.",
    hero_cta_order: "اطلب للاستلام أو التوصيل",
    hero_cta_vip: "احجز طاولة VIP أمام المسرح · 3991-507 (407)",
    hero_cta_menu: "تصفح القائمة الكاملة (٣٣ طبق)",
    stat_1_val: "★ ٤.٧ تقييم",
    stat_1_lbl: "أكثر من ١٧٧ تقييم موثق على جوجل ودورداش",
    stat_2_val: "سهرة حتى ٢ فجراً",
    stat_2_lbl: "رقص شرقي، عزف حي، كمان وأجواء طربية راقية",
    stat_3_val: "الشيف منى",
    stat_3_lbl: "طواجن مغربية أصيلة، كسكس ملكي ومشاوي على الفحم",

    marquee_1: "عروض رقص شرقي وطرب عربي حي كل ليلة",
    marquee_2: "طاجن لحم مغربي بالبرقوق واللوز المحمص",
    marquee_3: "بسطيلة الدجاج المغربية بالزعفران واللوز",
    marquee_4: "مشاوي مشكلة على الفحم حلال ١٠٠٪",
    marquee_5: "وليمة المأكولات البحرية الملكية واللوبستر",
    marquee_6: "مفتوح حتى الساعة ٢:٠٠ فجراً من الثلاثاء للسبت",

    act1_step: "الفصل الأول · ٥:٠٠ مساءً – ٨:٣٠ مساءً",
    act1_title: "الوليمة المغربية واللبنانية الفاخرة",
    act1_desc:
      "ابدأوا أمسيتكم تحت وهج الفوانيس النحاسية مع الخبز المغربي الساخن، المتبل المدخن، البسطيلة الذهبية المقرمشة، والطواجن الفخارية الأصيلة.",
    act2_step: "الفصل الثاني · ٨:٣٠ مساءً – ١١:٣٠ مساءً",
    act2_title: "عرض المسرح والرقص الشرقي الحي",
    act2_desc:
      "تتألق أضواء المسرح باللونين الياقوتي والذهبي مع عازفي الكمان والأورغ وإيقاعات الدربوكة وعروض الرقص الشرقي المبهرة التي تحول كل طاولة إلى احتفال ملكي.",
    act3_step: "الفصل الثالث · ١١:٣٠ مساءً – ٢:٠٠ فجراً",
    act3_title: "أجواء السهر والمشاوي المتأخرة",
    act3_desc:
      "أنغام عربية وعالمية حماسية، طقوس صب أتاي الشاي المغربي بالنعناع، مشاوي ساخنة على الفحم، واحتفالات أعياد الميلاد وطاولات كبار الشخصيات VIP.",

    show_eyebrow: "الليلة على المسرح · الوجهة الأولى للسهر والمذاق العربي في كيسيمي",
    show_title: "أكثر من مجرد عشاء.. ليلة فنية عربية متكاملة",
    show_desc:
      "بإشراف المدير المتألق سيمو (Sim) وإبداعات الشيف منى، يجمع مطعم يلا حبيبي بين فخامة السهرات المغربية الأصيلة وكرم الضيافة العربية.",
    bento_1_badge: "عروض حية يومياً",
    bento_1_title: "مطربون وعازفون وعروض رقص شرقي",
    bento_1_sub: "أجواء فنية ساحرة مع عزف حي وتفاعل مباشر مع الضيوف.",
    bento_2_badge: "المسرح الملكي",
    bento_2_title: "مسرح المخمل الأحمر والذهب الموريسكي",
    bento_2_sub: "تصميم فريد يضمن رؤية واضحة للمسرح من جميع الطاولات والجلسات.",
    bento_3_badge: "استقبال VIP",
    bento_3_title: "السجادة الحمراء ومنصة التصوير الملكية",
    bento_3_sub: "المكان الأمثل للاحتفال بأعياد الميلاد والمناسبات الخاصة التي لا تُنسى.",
    bento_4_badge: "الركن الذهبي",
    bento_4_title: "كوكتيلات منعشة، قهوة عربية وشاي مغربي بالنعناع",
    bento_4_sub: "جلسات مخملية فاخرة تحت الأقواس والزخارف المغربية المذهبة.",

    pillar_1_title: "👑 ترحيب خاص من سيمو (Sim)",
    pillar_1_desc:
      "حفاوة استقبال استثنائية — يحرص المدير سيمو شخصياً على الترحيب بكل طاولة لضمان تجربة ملكية من لحظة الوصول.",
    pillar_2_title: "🍲 مطبخ الشيف منى الأصيل",
    pillar_2_desc:
      "كسكس مغربي مفتول يدوياً، لحوم مطهوة بالزعفران الحر، وتوابل مغربية أصيلة تُحضر طازجة كل يوم.",
    pillar_3_title: "💃 احتفالات أعياد الميلاد والمناسبات",
    pillar_3_desc:
      "تحتفلون بمناسبة خاصة؟ فرقتنا الاستعراضية والموسيقية تجعل طاولتكم نجمة السهرة.",
    pillar_4_title: "🔥 مطبخ حلال مفتوح لآخر الليل",
    pillar_4_desc:
      "قائمة العشاء والمشاوي الكاملة متوفرة حتى ساعات الفجر الأولى على أنغام الموسيقى الحية.",

    sig_eyebrow: "روائع الشيف منى · اضغط على أي طبق للتفاصيل",
    sig_title: "أشهر الأطباق الملكية المغربية والشرقية",
    sig_desc:
      "تُحضر عند الطلب بالزعفران المغربي الفاخر، الليمون المصير، ماء الورد الدمشقي، وأجود اللحوم الحلال.",
    sig_order_btn: "اطلب عبر دورداش",
    sig_inspect_btn: "تفاصيل الطبق",

    menu_eyebrow: "القائمة الكاملة · ٣٣ طبقاً شهياً",
    menu_title: "استكشف قائمة الطعام الكاملة",
    menu_desc:
      "صفِّ حسب الفئة أو ابحث بالعربية أو الإنجليزية. اضغط على أي طبق لعرض مكوناته وتفاصيله أو طلبه مباشرة للاستلام والتوصيل.",
    menu_search_placeholder:
      "ابحث في ٣٣ طبقاً (مثال: طاجن، ريش غنم، بسطيلة، شاورما، سي فود)...",
    menu_order_all_btn: "اطلب من القائمة عبر دورداش",
    menu_item_order_label: "اطلب الآن ←",

    printed_eyebrow: "قوائم المطعم المطبوعة الرسمية",
    printed_title: "تصفح قوائم الغداء والعشاء المطبوعة عالية الدقة",
    printed_desc:
      "هل تفضلون الإطلاع على القائمة الورقية الرسمية للمطعم قبل زيارتكم؟ اضغطوا على أي صفحة لفتحها بدقة عالية كاملة.",
    printed_btn_1: "افتح الصفحة ١ · الغداء، السلطات والساندويشات",
    printed_btn_2: "افتح الصفحة ٢ · الطواجن، الكسكس والولائم الملكية",
    printed_card_1: "الصفحة ١ · المقبلات والساندويشات",
    printed_card_2: "الصفحة ٢ · الطواجن والمشاوي والمشروبات",

    rev_eyebrow: "تقييمات الضيوف الموثقة · ★٤.٧ من أكثر من ١٧٧ تقييم",
    rev_title: "ماذا يقول زوار كيسيمي وأورلاندو عن يلا حبيبي",
    rev_desc:
      "شهادات حقيقية من العائلات وعشاق السهر والذواقة الذين جربوا إبداعات الشيف منى وكرم ضيافة المدير سيمو.",
    rev_banner_title: "تقييم ٤.٧ من ٥ نجوم",
    rev_count_sub: "+١٧٧ تقييم على جوجل ودورداش",
    rev_banner_sub:
      "إشادات واسعة بالطواجن المغربية الأصيلة، عروض الرقص الشرقي الحية، وخدمة سيمو والشيف منى الراقية.",
    rev_banner_cta: "اطلب عبر الإنترنت الآن",

    loc_eyebrow: "تفضلوا بزيارتنا · كيسيمي، فلوريدا",
    loc_title: "احجز طاولتك أمام المسرح أو اطلب أونلاين",
    loc_desc:
      "يقع المطعم بالقرب من شارع West Vine (طريق US-192) في 3295 Oxford Dr مع مواقف سيارات مجانية واسعة. نرحب بكم دائماً أو اتصلوا مسبقاً لحجز طاولات VIP.",
    loc_card_title: "يلا حبيبي · مطعم وعروض سهرة",
    loc_address_label: "العنوان:",
    loc_phone_label: "حجوزات VIP والطلبات الخارجية:",
    loc_hours_heading: "أوقات العمل والعروض الأسبوعية (بتوقيت شرق أمريكا)",
    amenity_1: "✓ حلال ذبيحة ١٠٠٪",
    amenity_2: "✓ عروض رقص شرقي وموسيقى حية",
    amenity_3: "✓ عشاء وسهر حتى ٢ فجراً",
    amenity_4: "✓ مواقف سيارات مجانية متوفرة",
    amenity_5: "✓ مهيأ لذوي الاحتياجات الخاصة",
    amenity_6: "✓ طاولات VIP وأعياد ميلاد",
    loc_directions_btn: "احصل على الاتجاهات في خرائط جوجل",
    loc_call_btn: "اتصل على 3991-507 (407)",
    map_footer_text: "📍 3295 Oxford Dr, Kissimmee, FL 34746 · مواقف مجانية متوفرة",
    map_footer_link: "افتح في خرائط جوجل ←",

    hud_title: "جدول أوقات المطبخ والعروض",
    hud_sub: "3295 Oxford Dr, Kissimmee · توقيت شرق أمريكا (ET)",
    hud_call: "اتصل: 3991-507 (407)",
    hud_order: "اطلب عبر دورداش",

    footer_tagline:
      "الوجهة الأولى في كيسيمي وأورلاندو للمأكولات المغربية والشرقية وعروض السهرة الحية. طواجن فخارية أصيلة، مشاوي على الفحم، وليالٍ لا تُنسى.",
    footer_col_explore: "روابط سريعة",
    footer_col_dishes: "أشهر الأطباق الملكية",
    footer_dish_1: "طاجن اللحم المغربي بالبرقوق ($27.99)",
    footer_dish_2: "بسطيلة الدجاج المغربية باللوز ($21.99)",
    footer_dish_3: "ريش غنم حلال مشوية على الفحم ($29.99)",
    footer_dish_4: "وليمة المأكولات البحرية الملكية ($59.99)",
    footer_dish_5: "طبق شاورما الدجاج الشامية ($25.99)",
    footer_col_contact: "الموقع وحجوزات VIP",
    footer_rights:
      "© ٢٠٢٦ مطعم وعروض يلا حبيبي · 3295 Oxford Dr, Kissimmee, FL 34746. جميع الحقوق محفوظة.",
    footer_halal_note: "حلال ذبيحة ١٠٠٪ · عروض فنية وسهرات يومية",
    mob_bar_call: "حجز طاولة VIP",
    mob_bar_order: "اطلب دورداش"
  }
};

/* 2. Hero Pedestal Rotating Cutout Dishes (6 Dishes) */
const HERO_DISHES = [
  {
    id: "lamb-tagine",
    enTitle: "Royal Moroccan Lamb Tagine",
    arTitle: "طاجن اللحم المغربي الملكي بالبرقوق",
    enSub: "8-Hour Saffron Braised Shank · Sweet Prunes · Toasted Almonds",
    arSub: "موزات غنم مطهوة ٨ ساعات بالزعفران · برقوق معسل · لوز محمص",
    price: "$27.99",
    cutoutImg: "assets/images/ai/cutout-lamb-tagine.png",
    realImg: "assets/images/doordash/lamb_tagine.jpg",
    enBadge: "👑 #1 Most Ordered",
    arBadge: "👑 الطبق الأكثر طلباً",
    enDesc:
      "Tender halal lamb slow-braised in a traditional clay tagine with saffron threads, caramelized prunes, toasted almonds, sesame seeds, and warm Moroccan khobz.",
    arDesc:
      "لحم غنم حلال طري مطهو ببطء في الطاجن الفخاري التقليدي مع خيوط الزعفران، البرقوق المعسل، اللوز المحمص، السمسم والخبز المغربي الساخن."
  },
  {
    id: "lamb-chops",
    enTitle: "Flame-Kissed Halal Lamb Chops",
    arTitle: "ريش غنم حلال مشوية على اللهب",
    enSub: "4 French-Cut Rack Chops · Moroccan Herb Marinade · Saffron Rice",
    arSub: "٤ قطع ريش غنم فاخرة · تتبيلة الأعشاب المغربية · أرز بالزعفران",
    price: "$29.99",
    cutoutImg: "assets/images/ai/cutout-lamb-chops.png",
    realImg: "assets/images/doordash/lamb_chops.jpg",
    enBadge: "🔥 Grill Masterpiece",
    arBadge: "🔥 تحفة المشاوي على الفحم",
    enDesc:
      "Four thick-cut Halal lamb chops marinated 24 hours in garlic, rosemary, cumin, and olive oil, flame-seared to juicy perfection over saffron basmati rice.",
    arDesc:
      "أربع قطع من ريش الغنم الحلال المتبلة لمدة ٢٤ ساعة بالثوم وإكليل الجبل والكمون وزيت الزيتون، مشوية على الفحم وتُقدم مع أرز البسمتي بالزعفران."
  },
  {
    id: "chicken-pastilla",
    enTitle: "Golden Moroccan Chicken Pastilla",
    arTitle: "بسطيلة الدجاج المغربية الذهبية باللوز",
    enSub: "Crispy Warqa Pastry · Saffron Chicken · Roasted Almonds & Cinnamon",
    arSub: "ورق بسطيلة مقرمش · دجاج بالزعفران · لوز محمص وقرفة وسكر ناعم",
    price: "$21.99",
    cutoutImg: "assets/images/ai/cutout-chicken-pastilla.png",
    realImg: "assets/images/doordash/moroccan_chicken_pastilla.jpg",
    enBadge: "✨ Chef Mouna’s Specialty",
    arBadge: "✨ إبداع الشيف منى الخاص",
    enDesc:
      "Fez’s crown jewel savory-sweet pie: ultra-crisp flaky pastry stuffed with saffron-braised chicken, toasted cinnamon almonds, and dusted with powdered sugar.",
    arDesc:
      "جوهرة المطبخ الفاسي التي تجمع بين المالح والحلو: رقائق مقرمشة محشوة بالدجاج المطهو بالزعفران واللوز المحمص بالقرفة ومزينة بالسكر الناعم."
  },
  {
    id: "royal-seafood",
    enTitle: "Royal Seafood Extravaganza",
    arTitle: "وليمة المأكولات البحرية الملكية",
    enSub: "Whole Lobster Tail · Jumbo Shrimp · Mussels · Calamari · Corn & Potatoes",
    arSub: "ذيل لوبستر · روبيان جامبو · بلح البحر · كاليماري · أرز بالزعفران",
    price: "$59.99",
    cutoutImg: "assets/images/ai/cutout-royal-seafood.png",
    realImg: "assets/images/doordash/royal_seafood_extravaganza.jpg",
    enBadge: "🦞 VIP Table Feast",
    arBadge: "🦞 وليمة طاولات كبار الشخصيات",
    enDesc:
      "A show-stopping coastal Moroccan feast overflowing with lobster, jumbo shrimp, mussels, calamari, sweet corn, baby potatoes, and chermoula garlic butter.",
    arDesc:
      "وليمة بحرية ملكية فاخرة تضم اللوبستر، الروبيان الجامبو، بلح البحر، الكاليماري، الذرة والبطاطس مع صلصة الشرمولة المغربية بالزبدة والثوم."
  },
  {
    id: "shawarma-plate",
    enTitle: "Levantine Chicken Shawarma Platter",
    arTitle: "طبق شاورما الدجاج الشامية المشوية",
    enSub: "Rotisserie Spiced Chicken · Garlic Toum · Pickles · Basmati Rice",
    arSub: "شاورما دجاج متبلة · ثومية كريمية · مخللات · أرز بسمتي أو بطاطس",
    price: "$25.99",
    cutoutImg: "assets/images/ai/cutout-shawarma-plate.png",
    realImg: "assets/images/doordash/chicken_shawarma_plate.jpg",
    enBadge: "⭐ Crowd Favorite",
    arBadge: "⭐ المفضل لدى الجميع",
    enDesc:
      "Thinly carved, spice-marinated rotisserie chicken shawarma served with whipped garlic toum, turnip pickles, crisp salad, and fragrant yellow rice.",
    arDesc:
      "شرائح شاورما الدجاج المتبلة والمشوية بعناية، تُقدم مع كريم الثوم الشامي والمخللات والسلطة الطازجة وأرز البسمتي بالزعفران."
  },
  {
    id: "arayes-plate",
    enTitle: "Charcoal-Grilled Beef Arayes",
    arTitle: "عرايس اللحم المشوية على الفحم",
    enSub: "Crispy Pita Quarters · Spiced Kafta Beef · Tahini & Sumac Onions",
    arSub: "خبز عربي مقرمش محشو بلحم الكفتة المتبل · طحينة وبصل بالسماق",
    price: "$24.99",
    cutoutImg: "assets/images/ai/cutout-arayes-plate.png",
    realImg: "assets/images/doordash/arayes_plate.jpg",
    enBadge: "🔥 Crispy & Juicy",
    arBadge: "🔥 مقرمشة وغنية بالنكهة",
    enDesc:
      "Golden char-grilled pita pockets stuffed with seasoned minced beef, parsley, and warm Levantine spices, brushed with olive oil and served with crispy fries.",
    arDesc:
      "أرباع الخبز العربي المقرمش المحشوة بلحم الكفتة المتبل بالبقدونس والبهارات الشامية والمشوية على الفحم مع زيت الزيتون والبطاطس المقرمشة."
  }
];

/* 3. Signature Dishes (Moorish Arch Cards — 6 Items) */
const SIGNATURE_DISHES = [
  {
    id: "lamb-tagine",
    enTitle: "Royal Moroccan Lamb Tagine",
    arTitle: "طاجن اللحم المغربي بالبرقوق واللوز",
    enSub: "8-Hour Saffron Braised Lamb · Caramelized Prunes · Toasted Almonds",
    arSub: "لحم غنم مطهو ٨ ساعات بالزعفران · برقوق معسل · لوز محمص وسمسم",
    price: "$27.99",
    cutoutImg: "assets/images/ai/cutout-lamb-tagine.png",
    realImg: "assets/images/doordash/lamb_tagine.jpg",
    enBadge1: "👑 #1 Best Seller",
    arBadge1: "👑 الأكثر مبيعاً #١",
    enBadge2: "Chef Mouna’s Classic",
    arBadge2: "توقيع الشيف منى",
    badge2Class: "crimson",
    enDesc:
      "Fall-off-the-bone halal lamb slow-simmered in our traditional earthenware cone with saffron, ginger, cinnamon, sweet plums, and crunchy roasted almonds.",
    arDesc:
      "لحم غنم حلال يذوب في الفم، مطهو ببطء في الطاجن الفخاري المغربي مع الزعفران والزنجبيل والقرفة والبرقوق الحلو واللوز المحمص المقرمش.",
    enQuote:
      "“The lamb tagine was tender, rich, and deeply flavorful, with spices that felt warm and authentic.” — Ayoub M., 5★",
    arQuote:
      "«طاجن اللحم كان طرياً وغنياً جداً بالنكهات والتوابل المغربية الدافئة والأصيلة.» — أيوب م.، ★٥"
  },
  {
    id: "chicken-pastilla",
    enTitle: "Moroccan Chicken Pastilla",
    arTitle: "بسطيلة الدجاج المغربية باللوز والزعفران",
    enSub: "Crisp Flaky Warqa · Saffron Chicken · Cinnamon Almond Filling",
    arSub: "رقائق الورقة المقرمشة · دجاج بالزعفران · حشوة اللوز والقرفة",
    price: "$21.99",
    cutoutImg: "assets/images/ai/cutout-chicken-pastilla.png",
    realImg: "assets/images/doordash/moroccan_chicken_pastilla.jpg",
    enBadge1: "✨ Fez Royal Pie",
    arBadge1: "✨ الفطيرة الفاسية الملكية",
    enBadge2: "Sweet & Savory",
    arBadge2: "مزيج المالح والحلو",
    badge2Class: "emerald",
    enDesc:
      "Delicate layers of paper-thin pastry baked golden and filled with shredded saffron chicken, aromatic herbs, and crushed roasted almonds Lattice-dusted with cinnamon.",
    arDesc:
      "طبقات رقيقة ومقرمشة من عجينة الورقة الذهبية محشوة بالدجاج المطهو بالزعفران والأعشاب العطرية واللوز المحمص المطحون ومزينة بالقرفة والسكر الناعم.",
    enQuote:
      "“Chicken Pastilla and Royal Couscous were delicious — truly authentic Moroccan home cooking!” — Verified Guest, 5★",
    arQuote:
      "«بسطيلة الدجاج والكسكس الملكي كانا في قمة اللذة — طعم مغربي أصيل يفوق الوصف!» — ضيف موثق، ★٥"
  },
  {
    id: "lamb-chops",
    enTitle: "Charcoal-Grilled Lamb Chops",
    arTitle: "ريش الغنم المشوية على الفحم",
    enSub: "4 Prime Halal Chops · Garlic Herb Chermoula · Saffron Basmati",
    arSub: "٤ قطع ريش غنم فاخرة · تتبيلة الشرمولة والأعشاب · أرز بسمتي",
    price: "$29.99",
    cutoutImg: "assets/images/ai/cutout-lamb-chops.png",
    realImg: "assets/images/doordash/lamb_chops.jpg",
    enBadge1: "🔥 Flame-Seared",
    arBadge1: "🔥 مشوية على اللهب",
    enBadge2: "100% Zabiha Halal",
    arBadge2: "حلال ذبيحة ١٠٠٪",
    badge2Class: "crimson",
    enDesc:
      "Four thick French-cut lamb chops marinated overnight in Moroccan herbs and garlic, seared over open flame for a smoky crust and tender pink center.",
    arDesc:
      "أربع قطع سميكة من ريش الغنم المتبلة طوال الليل بالأعشاب المغربية والثوم، مشوية على اللهب المباشر لقشرة مدخنة شهية وقلب طري عصاري.",
    enQuote:
      "“The grill meats and lamb chops came out sizzling hot and bursting with flavor.” — Sofia, 5★",
    arQuote:
      "«المشاوي وريش الغنم قُدمت ساخنة جداً وغنية بنكهة الشواء الفاخرة.» — صوفيا، ★٥"
  },
  {
    id: "royal-seafood",
    enTitle: "Royal Seafood Extravaganza",
    arTitle: "وليمة المأكولات البحرية الملكية",
    enSub: "Lobster Tail · Shrimp · Mussels · Calamari · Saffron Rice & Corn",
    arSub: "ذيل لوبستر · روبيان · بلح البحر · كاليماري · أرز بالزعفران وذرة",
    price: "$59.99",
    cutoutImg: "assets/images/ai/cutout-royal-seafood.png",
    realImg: "assets/images/doordash/royal_seafood_extravaganza.jpg",
    enBadge1: "🦞 Showstopper Platter",
    arBadge1: "🦞 وليمة استعراضية فاخرة",
    enBadge2: "Shares 2–3 Guests",
    arBadge2: "تكفي ٢–٣ أشخاص",
    badge2Class: "emerald",
    enDesc:
      "Our grandest platter built for celebrations: succulent lobster tail, jumbo shrimp, steamed mussels, golden calamari, sweet corn, potatoes, and citrus-garlic butter.",
    arDesc:
      "أفخم أطباقنا المخصصة للاحتفالات: ذيل لوبستر طري، روبيان جامبو، بلح البحر، كاليماري ذهبي، ذرة حلوة وبطاطس مع زبدة الثوم والليمون.",
    enQuote:
      "“Every dish comes out looking like royalty. Best Middle Eastern & Moroccan spot in Central Florida!” — Eve M., 5★",
    arQuote:
      "«كل طبق يُقدم وكأنه لوحة ملكية. أفضل مطعم مغربي وعربي في وسط فلوريدا!» — إيف م.، ★٥"
  },
  {
    id: "shawarma-plate",
    enTitle: "Chicken Shawarma Platter",
    arTitle: "طبق شاورما الدجاج الشامية",
    enSub: "Spiced Rotisserie Chicken · Whipped Toum · Pickles · Yellow Rice",
    arSub: "شاورما دجاج متبلة · ثومية كريمية · مخللات · أرز أصفر بالزعفران",
    price: "$25.99",
    cutoutImg: "assets/images/ai/cutout-shawarma-plate.png",
    realImg: "assets/images/doordash/chicken_shawarma_plate.jpg",
    enBadge1: "⭐ Top Takeout Pick",
    arBadge1: "⭐ الأكثر طلباً للتوصيل",
    enBadge2: "House Garlic Toum",
    arBadge2: "مع الثومية الشامية",
    badge2Class: "crimson",
    enDesc:
      "Juicy strips of vertical-roasted chicken shawarma seasoned with cardamom, cloves, and paprika, plated with saffron rice, crisp fries, and house garlic toum.",
    arDesc:
      "شرائح شهية من شاورما الدجاج المتبلة بالهيل والقرنفل والبابريكا، تُقدم مع أرز الزعفران والبطاطس المقرمشة وكريم الثوم المحضر في المطعم.",
    enQuote:
      "“Ordered the Chicken Shawarma and Hummus — huge portions and incredible seasoning!” — DoorDash Verified, 5★",
    arQuote:
      "«طلبت شاورما الدجاج والحمص — كميات وفيرة جداً وتتبيلة لا تُقاوم!» — عميل دورداش موثق، ★٥"
  },
  {
    id: "arayes-plate",
    enTitle: "Charcoal-Grilled Beef Arayes",
    arTitle: "عرايس اللحم المشوية على الفحم",
    enSub: "Stuffed Crispy Pita · Seasoned Kafta Beef · Fries & Tahini",
    arSub: "خبز مقرمش محشو بالكفتة المتبلة · بطاطس مقلية وصلصة الطحينة",
    price: "$24.99",
    cutoutImg: "assets/images/ai/cutout-arayes-plate.png",
    realImg: "assets/images/doordash/arayes_plate.jpg",
    enBadge1: "🔥 Levantine Street King",
    arBadge1: "🔥 ملك المشاوي الشامية",
    enBadge2: "Char-Crisped Pita",
    arBadge2: "مقرمش على الفحم",
    badge2Class: "emerald",
    enDesc:
      "Fresh pita bread stuffed edge-to-edge with spiced ground beef, onions, tomatoes, and parsley, brushed with olive oil and char-grilled until golden and crunchy.",
    arDesc:
      "خبز عربي طازج محشو بالكامل بلحم الكفتة المتبل مع البصل والطماطم والبقدونس، مدهون بزيت الزيتون ومشوي على الفحم حتى يصبح ذهبياً ومقرمشاً.",
    enQuote:
      "“Crispy on the outside, juicy spiced beef on the inside. Impossible to stop at one piece!” — Verified Guest, 5★",
    arQuote:
      "«مقرمش من الخارج ولحم طري متبل من الداخل. مستحيل أن تكتفي بقطعة واحدة!» — ضيف موثق، ★٥"
  }
];

/* 4. Complete 33-Item Menu Categories & Items (100% Bilingual EN & AR) */
const MENU_CATEGORIES = [
  { id: "all", enLabel: "All Dishes", arLabel: "جميع الأطباق" },
  { id: "tagines", enLabel: "Tagines & Couscous", arLabel: "الطواجن والكسكس المغربي" },
  { id: "grill", enLabel: "Charcoal Grill & Platters", arLabel: "المشاوي والأطباق الرئيسية" },
  { id: "seafood", enLabel: "Royal Seafood", arLabel: "المأكولات البحرية" },
  { id: "appetizers", enLabel: "Mezze, Soups & Salads", arLabel: "المقبلات والشوربات والسلطات" },
  { id: "sandwiches", enLabel: "Wraps & Sandwiches", arLabel: "الساندويشات والشاورما" },
  { id: "drinks", enLabel: "Mint Tea, Desserts & Drinks", arLabel: "أتاي مغربي، حلويات ومشروبات" }
];

const MENU_ITEMS = [
  // TAGINES & COUSCOUS (6)
  {
    id: "lamb-tagine",
    cat: "tagines",
    enTitle: "Royal Lamb Tagine with Prunes & Almonds",
    arTitle: "طاجن اللحم المغربي بالبرقوق واللوز",
    price: "$27.99",
    img: "assets/images/doordash/lamb_tagine.jpg",
    enBadge: "👑 #1 Best Seller",
    arBadge: "👑 الأكثر مبيعاً",
    enDesc:
      "Slow-braised Halal lamb in saffron, ginger, and cinnamon broth topped with sweet caramelized prunes, roasted almonds, and sesame seeds.",
    arDesc:
      "لحم غنم حلال مطهو ببطء في مرق الزعفران والزنجبيل والقرفة، مزين بالبرقوق المعسل واللوز المحمص وبذور السمسم."
  },
  {
    id: "lemon-chicken-tagine",
    cat: "tagines",
    enTitle: "Chicken Tagine with Preserved Lemon & Olives",
    arTitle: "طاجن الدجاج بالليمون المصير والزيتون",
    price: "$24.99",
    img: "assets/images/ai/lemon-chicken-tagine.jpg",
    enBadge: "🍋 Moroccan Classic",
    arBadge: "🍋 كلاسيكي مغربي أصيل",
    enDesc:
      "Half chicken braised in a clay tagine with saffron, garlic, tangy preserved Meyer lemons, purple Moroccan olives, and fresh cilantro.",
    arDesc:
      "دجاج مطهو في الطاجن الفخاري مع الزعفران الحر والثوم والليمون المغربي المصير والزيتون والكزبرة الطازجة."
  },
  {
    id: "kefta-egg-tagine",
    cat: "tagines",
    enTitle: "Kefta Meatball & Poached Egg Tagine",
    arTitle: "طاجن الكفتة المغربية بصلصة الطماطم والبيض",
    price: "$23.99",
    img: "assets/images/gmaps/by_owner_1.jpg",
    enBadge: "🍳 Bubbling Clay Pot",
    arBadge: "🍳 يقدم ساخناً في الفخار",
    enDesc:
      "Spiced Moroccan beef meatballs simmered in rich cumin-tomato charmoula sauce, crowned with farm eggs and served with warm khobz.",
    arDesc:
      "كرات كفتة اللحم المتبلة المطهوة في صلصة الطماطم والشرمولة الغنية بالكمون، مع البيض والخبز المغربي الساخن."
  },
  {
    id: "royal-couscous",
    cat: "tagines",
    enTitle: "Royal Seven-Vegetable & Meat Couscous",
    arTitle: "كسكس ملكي مغربي باللحم والسبع خضار",
    price: "$28.99",
    img: "assets/images/gmaps/by_owner_2.jpg",
    enBadge: "🌾 Hand-Steamed Semolina",
    arBadge: "🌾 كسكس مغربي بالتفاية",
    enDesc:
      "Fluffy steamed couscous topped with braised lamb, chicken, merguez sausage, seven seasonal vegetables, chickpeas, and sweet caramelized onion tfaya.",
    arDesc:
      "سميد الكسكس المفور الهش مع اللحم والدجاج والمرقاز وسبعة أنواع من الخضار والحمص والتفاية المغربية بالبصل المكرمل والزبيب."
  },
  {
    id: "chicken-pastilla",
    cat: "tagines",
    enTitle: "Moroccan Chicken & Almond Pastilla",
    arTitle: "بسطيلة الدجاج المغربية باللوز والزعفران",
    price: "$21.99",
    img: "assets/images/doordash/moroccan_chicken_pastilla.jpg",
    enBadge: "✨ Chef Mouna’s Gem",
    arBadge: "✨ جوهرة الشيف منى",
    enDesc:
      "Crisp golden warqa pastry filled with saffron-spiced shredded chicken, scrambled herb eggs, and toasted cinnamon almonds dusted with sugar.",
    arDesc:
      "رقائق الورقة المقرمشة المحشوة بالدجاج المتبل بالزعفران واللوز المحمص بالقرفة والمزينة بالسكر الناعم."
  },
  {
    id: "rfissa-royal",
    cat: "tagines",
    enTitle: "Traditional Moroccan Chicken Rfissa",
    arTitle: "الرفيسة المغربية التقليدية بالدجاج البلدي",
    price: "$26.99",
    img: "assets/images/gmaps/by_owner_3.jpg",
    enBadge: "👑 Celebration Dish",
    arBadge: "👑 طبق المناسبات الملكي",
    enDesc:
      "Shredded msemen pastry soaked in aromatic ras el hanout, fenugreek, and saffron broth, topped with slow-cooked chicken and lentils.",
    arDesc:
      "رقائق المسمن المسقية بمرق رأس الحانوت والزعفران والعدس والحلبة مع الدجاج المحمر على الطريقة المغربية التقليدية."
  },

  // CHARCOAL GRILL & PLATTERS (7)
  {
    id: "lamb-chops",
    cat: "grill",
    enTitle: "Charcoal-Grilled Halal Lamb Chops (4 pcs)",
    arTitle: "ريش غنم حلال مشوية على الفحم (٤ قطع)",
    price: "$29.99",
    img: "assets/images/doordash/lamb_chops.jpg",
    enBadge: "🔥 Grill Favorite",
    arBadge: "🔥 نجم المشاوي",
    enDesc:
      "Four prime Halal lamb rack chops marinated in Moroccan herbs and garlic, flame-grilled to order and served with saffron rice and grilled vegetables.",
    arDesc:
      "أربع قطع من ريش الغنم الحلال المتبلة بالأعشاب المغربية والثوم، مشوية على اللهب وتُقدم مع أرز الزعفران والخضار المشوية."
  },
  {
    id: "shawarma-plate",
    cat: "grill",
    enTitle: "Chicken Shawarma Platter",
    arTitle: "طبق شاورما الدجاج الشامية مع الأرز",
    price: "$25.99",
    img: "assets/images/doordash/chicken_shawarma_plate.jpg",
    enBadge: "⭐ Top Ordered",
    arBadge: "⭐ الأكثر طلباً",
    enDesc:
      "Flame-roasted marinated chicken shawarma served over fragrant basmati rice with crisp fries, house garlic toum, and Levantine pickles.",
    arDesc:
      "شاورما دجاج متبلة ومشوية، تُقدم فوق أرز البسمتي العطري مع البطاطس المقلية والثومية الشامية والمخللات."
  },
  {
    id: "kafta-kebab-platter",
    cat: "grill",
    enTitle: "Charcoal Beef Kafta Kebab Platter",
    arTitle: "طبق كباب كفتة اللحم المشوي على الفحم",
    price: "$25.99",
    img: "assets/images/doordash/kafta_kebab.jpg",
    enBadge: "🔥 Skewered Fresh",
    arBadge: "🔥 مشوي طازج على الفحم",
    enDesc:
      "Two juicy skewers of hand-minced Halal beef blended with parsley, onions, and seven spices, char-grilled over saffron rice with grilled tomato.",
    arDesc:
      "سيخان من كفتة اللحم الحلال المفروم مع البقدونس والبصل والسبع بهارات، مشويان على الفحم مع أرز الزعفران والطماطم المشوية."
  },
  {
    id: "shish-tawook-platter",
    cat: "grill",
    enTitle: "Shish Tawook Chicken Kebab Platter",
    arTitle: "طبق شيش طاووق الدجاج المشوي",
    price: "$24.99",
    img: "assets/images/doordash/chicken_kebab.jpg",
    enBadge: "🧄 Garlic & Lemon",
    arBadge: "🧄 تتبيلة الثوم والليمون",
    enDesc:
      "Tender cubes of chicken breast marinated in yogurt, lemon, garlic, and saffron, skewered with bell peppers and served with rice and garlic sauce.",
    arDesc:
      "مكعبات صدور الدجاج الطرية المتبلة بالزبادي والليمون والثوم والزعفران، مشوية مع الفلفل الملون وتُقدم مع الأرز والثومية."
  },
  {
    id: "arayes-plate",
    cat: "grill",
    enTitle: "Charcoal-Grilled Beef Arayes Platter",
    arTitle: "طبق عرايس اللحم المشوية على الفحم",
    price: "$24.99",
    img: "assets/images/doordash/arayes_plate.jpg",
    enBadge: "🔥 Crispy Pita Pockets",
    arBadge: "🔥 خبز مقرمش محشو باللحم",
    enDesc:
      "Four crispy olive-oil brushed pita quarters stuffed with spiced kafta beef, flame-grilled and served with golden fries, pickles, and tahini.",
    arDesc:
      "أربع قطع من الخبز العربي المقرمش المدهون بزيت الزيتون والمحشو بلحم الكفتة المتبل، مشوية على الفحم مع البطاطس والطحينة."
  },
  {
    id: "chicken-tenders-fries",
    cat: "grill",
    enTitle: "Crispy Golden Chicken Tenders & Fries",
    arTitle: "تندر الدجاج المقرمش مع البطاطس المقلية",
    price: "$15.99",
    img: "assets/images/doordash/chicken_tenders_with_fries.jpg",
    enBadge: "🍟 Family Favorite",
    arBadge: "🍟 مفضل للعائلات والأطفال",
    enDesc:
      "All-white Halal chicken tenders battered and fried golden-crisp, served with seasoned French fries and honey mustard or garlic dip.",
    arDesc:
      "قطع صدور الدجاج الحلال المقرمشة الذهبية، تُقدم مع البطاطس المقلية المتبلة وصلصة الثوم أو الخردل بالعسل."
  },
  {
    id: "royal-mixed-grill",
    cat: "grill",
    enTitle: "Yalla Habibi Royal Mixed Grill (Mashawi)",
    arTitle: "مشاوي يلا حبيبي الملكية المشكلة",
    price: "$36.99",
    img: "assets/images/gmaps/by_owner_4.jpg",
    enBadge: "👑 Feast of Skewers",
    arBadge: "👑 تشكيلة مشاوي ملكية",
    enDesc:
      "A grand combination of lamb chops, beef kafta kebab, shish tawook chicken, and chicken shawarma over saffron rice with grilled vegetables and dips.",
    arDesc:
      "تشكيلة ملكية تجمع بين ريش الغنم، كباب الكفتة، شيش طاووق الدجاج، وشاورما الدجاج فوق أرز الزعفران مع الخضار المشوية والمقبلات."
  },

  // ROYAL SEAFOOD (3)
  {
    id: "royal-seafood",
    cat: "seafood",
    enTitle: "Royal Seafood Extravaganza Platter",
    arTitle: "وليمة المأكولات البحرية الملكية الفاخرة",
    price: "$59.99",
    img: "assets/images/doordash/royal_seafood_extravaganza.jpg",
    enBadge: "🦞 Ultimate Feast",
    arBadge: "🦞 الوليمة البحرية الكبرى",
    enDesc:
      "Lobster tail, jumbo shrimp, green-lipped mussels, crispy calamari, corn on the cob, potatoes, and saffron rice drenched in Moroccan chermoula butter.",
    arDesc:
      "ذيل لوبستر، روبيان جامبو، بلح البحر، كاليماري مقرمش، ذرة وبطاطس وأرز بالزعفران مع زبدة الشرمولة المغربية."
  },
  {
    id: "fried-shrimp-basket",
    cat: "seafood",
    enTitle: "Crispy Golden Jumbo Shrimp & Fries",
    arTitle: "روبيان جامبو مقرمش مع البطاطس",
    price: "$21.99",
    img: "assets/images/doordash/fried_shrimp.jpg",
    enBadge: "🍤 Coastal Crunch",
    arBadge: "🍤 روبيان ذهبي مقرمش",
    enDesc:
      "Butterflied jumbo shrimp lightly seasoned with Moroccan spices, fried golden, and served with seasoned fries, lemon wedges, and cocktail/tartar sauce.",
    arDesc:
      "روبيان جامبو متبل بالبهارات المغربية ومقلي حتى القرمشة الذهبية، يُقدم مع البطاطس المقلية والليمون والصلصة الخاصة."
  },
  {
    id: "fried-calamari",
    cat: "seafood",
    enTitle: "Crispy Mediterranean Calamari Rings",
    arTitle: "كاليماري البحر المتوسط المقرمش",
    price: "$18.99",
    img: "assets/images/doordash/fried_calamari.jpg",
    enBadge: "🍋 Light & Crisp",
    arBadge: "🍋 خفيف ومقرمش",
    enDesc:
      "Tender squid rings lightly dusted in seasoned flour and flash-fried, served with zesty marinara, garlic aioli, and fresh lemon.",
    arDesc:
      "حلقات الكاليماري الطرية المتبلة والمقلية بعناية، تُقدم مع صلصة المارينارا وصلصة الثوم والليمون الطازج."
  },

  // MEZZE, SOUPS & SALADS (9)
  {
    id: "hummus",
    cat: "appetizers",
    enTitle: "Creamy Levantine Hummus with Olive Oil",
    arTitle: "حمص شامي كريمي بزيت الزيتون البكر",
    price: "$10.99",
    img: "assets/images/doordash/hummus.jpg",
    enBadge: "🌱 Vegan Mezze",
    arBadge: "🌱 مقبلات نباتية",
    enDesc:
      "Velvety chickpeas whipped with artisanal tahini, fresh lemon juice, and garlic, drizzled with extra-virgin olive oil and served with warm pita.",
    arDesc:
      "حمص ناعم مخفوق مع الطحينة الفاخرة وعصير الليمون الطازج والثوم، مزين بزيت الزيتون البكر ويُقدم مع الخبز الساخن."
  },
  {
    id: "baba-ghanoush",
    cat: "appetizers",
    enTitle: "Fire-Roasted Baba Ghanoush",
    arTitle: "بابا غنوج (متبل باذنجان مشوي على الحطب)",
    price: "$10.99",
    img: "assets/images/doordash/baba_ghanoush.jpg",
    enBadge: "🔥 Smoky Eggplant",
    arBadge: "🔥 باذنجان مدخن شهي",
    enDesc:
      "Char-roasted eggplant blended with sesame tahini, garlic, lemon, and pomegranate seeds, finished with olive oil and warm pita bread.",
    arDesc:
      "باذنجان مشوي على اللهب ممزوج مع الطحينة والثوم والليمون وحبات الرمان وزيت الزيتون، يُقدم مع الخبز العربي الساخن."
  },
  {
    id: "stuffed-grape-leaves",
    cat: "appetizers",
    enTitle: "Hand-Rolled Stuffed Grape Leaves (Warak Enab)",
    arTitle: "ورق عنب محشي بالخلطة الشامية (يلنجي)",
    price: "$11.99",
    img: "assets/images/doordash/stuffed_grape_leaves_6_pcs.jpg",
    enBadge: "🍋 Lemon & Olive Oil",
    arBadge: "🍋 بدبس الرمان وزيت الزيتون",
    enDesc:
      "Six tender vine leaves stuffed with herbed rice, tomatoes, parsley, mint, and lemon-olive oil glaze.",
    arDesc:
      "ست قطع من ورق العنب الطري المحشو بالأرز والأعشاب والطماطم والبقدونس والنعناع مع زيت الزيتون والليمون."
  },
  {
    id: "kibbeh-rolls",
    cat: "appetizers",
    enTitle: "Crispy Levantine Beef Kibbeh (4 pcs)",
    arTitle: "كبة شامية مقلية محشوة باللحم والصنوبر (٤ قطع)",
    price: "$13.99",
    img: "assets/images/doordash/kibbeh_rolls.jpg",
    enBadge: "🥩 Spiced Beef & Pine Nuts",
    arBadge: "🥩 لحم متبل ومقرمش",
    enDesc:
      "Golden bulgur-wheat shells stuffed with sautéed spiced ground beef, caramelized onions, and toasted nuts, served with cool yogurt-tahini dip.",
    arDesc:
      "أقراص الكبة الذهبية المقرمشة المحشوة باللحم المفروم المتبل والبصل المكرمل والمكسرات، تُقدم مع صلصة الطحينة واللبن."
  },
  {
    id: "harira-soup",
    cat: "appetizers",
    enTitle: "Traditional Moroccan Harira Soup",
    arTitle: "شوربة الحريرة المغربية الأصيلة",
    price: "$10.99",
    img: "assets/images/doordash/harira_soup.jpg",
    enBadge: "🍲 Ramadan & Nightly Classic",
    arBadge: "🍲 الشوربة المغربية الشهيرة",
    enDesc:
      "Rich velvety Moroccan soup slow-simmered with tender beef bits, chickpeas, lentils, fresh herbs, ginger, and aromatic saffron-tomato broth.",
    arDesc:
      "شوربة الحريرة المغربية الغنية المطهوة ببطء مع قطع اللحم والحمص والعدسوالكزبرة والكرفس والزعفران."
  },
  {
    id: "moroccan-salad",
    cat: "appetizers",
    enTitle: "Fresh Chopped Moroccan Salad (Chlada)",
    arTitle: "سلطة مغربية منعشة (شلادة)",
    price: "$10.99",
    img: "assets/images/doordash/moroccan_salad.jpg",
    enBadge: "🥗 Crisp & Zesty",
    arBadge: "🥗 طازجة ومنعشة",
    enDesc:
      "Finely diced vine tomatoes, crisp cucumbers, red onions, roasted peppers, and cilantro tossed in lemon-cumin olive oil dressing.",
    arDesc:
      "طماطم طازجة وخيار وبصل أحمر وفلفل مشوي وكزبرة مفرومة ناعماً مع تتبيلة زيت الزيتون والليمون والكمون."
  },
  {
    id: "tabbouleh-salad",
    cat: "appetizers",
    enTitle: "Beirut Parsley & Lemon Tabbouleh",
    arTitle: "تبولة لبنانية بالبقدونس الطازج وزيت الزيتون",
    price: "$12.99",
    img: "assets/images/doordash/tabbouleh_salad.jpg",
    enBadge: "🌿 Fresh Herbs",
    arBadge: "🌿 خضار طازجة يومياً",
    enDesc:
      "Finely hand-chopped flat-leaf parsley, mint, diced tomatoes, green onions, and fine bulgur dressed in fresh lemon juice and extra-virgin olive oil.",
    arDesc:
      "بقدونس طازج مفروم يدوياً مع النعناع والطماطم والبصل الأخضر والبرغل الناعم المتبل بعصير الليمون وزيت الزيتون."
  },
  {
    id: "yalla-habibi-salad",
    cat: "appetizers",
    enTitle: "Yalla Habibi Royal House Salad",
    arTitle: "سلطة يلا حبيبي الملكية الخاصة",
    price: "$14.99",
    img: "assets/images/doordash/yalla_habibi_salad.jpg",
    enBadge: "👑 Chef’s Garden Bowl",
    arBadge: "👑 سلطة الشيف الخاصة",
    enDesc:
      "Crisp greens, sweet corn, beets, tomatoes, cucumbers, olives, heart of palm, and house vinaigrette arranged in a vibrant Moroccan garden platter.",
    arDesc:
      "تشكيلة غنية من الخضار الطازجة والذرة والشمندر والطماطم والخيار والزيتون وقلوب النخيل مع تتبيلة المطعم الخاصة."
  },
  {
    id: "french-fries",
    cat: "appetizers",
    enTitle: "Golden Seasoned French Fries",
    arTitle: "بطاطس مقلية ذهبية مقرمشة",
    price: "$6.99",
    img: "assets/images/doordash/french_fries.jpg",
    enBadge: "🍟 Crispy Side",
    arBadge: "🍟 مقرمشة وساخنة",
    enDesc: "Hot, crispy golden potato fries lightly dusted with house Moroccan spice salt.",
    arDesc: "أصابع البطاطس الذهبية المقرمشة المتبلة بملح البهارات المغربية الخاصة."
  },

  // WRAPS & SANDWICHES (3)
  {
    id: "shawarma-sandwich",
    cat: "sandwiches",
    enTitle: "Chicken Shawarma Saj Wrap with Fries",
    arTitle: "ساندويش شاورما دجاج بخبز الصاج مع البطاطس",
    price: "$16.99",
    img: "assets/images/doordash/chicken_shawarma_sandwich.jpg",
    enBadge: "🌯 Toasted Wrap",
    arBadge: "🌯 محمص على الصاج",
    enDesc:
      "Rotisserie chicken shawarma, whipped garlic toum, and crunchy pickles wrapped in toasted flatbread and served with golden fries.",
    arDesc:
      "شاورما دجاج متبلة مع كريم الثوم والمخلل ملفوفة في خبز محمص مقرمش وتُقدم مع البطاطس المقلية."
  },
  {
    id: "kafta-sandwich",
    cat: "sandwiches",
    enTitle: "Charcoal Beef Kafta Sandwich with Fries",
    arTitle: "ساندويش كباب كفتة اللحم المشوي مع البطاطس",
    price: "$16.99",
    img: "assets/images/doordash/kafta_sandwich.jpg",
    enBadge: "🔥 Flame-Grilled Beef",
    arBadge: "🔥 مشوي على الفحم",
    enDesc:
      "Flame-grilled spiced beef kafta skewer wrapped in warm bread with hummus, sumac onions, tomatoes, tahini, and a side of fries.",
    arDesc:
      "كفتة لحم مشوية على الفحم ملفوفة في الخبز الساخن مع الحمص والبصل بالسماق والطماطم والطحينة، وتُقدم مع البطاطس."
  },
  {
    id: "chicken-tenders-sandwich",
    cat: "sandwiches",
    enTitle: "Crispy Chicken Sub Sandwich with Fries",
    arTitle: "ساندويش دجاج كرسبي مقرمش مع البطاطس",
    price: "$16.99",
    img: "assets/images/doordash/chicken_tenders_sandwich.jpg",
    enBadge: "🥖 Loaded Brioche Roll",
    arBadge: "🥖 خبز طري ومقرمش",
    enDesc:
      "Crispy golden chicken tenders layered in a toasted sub roll with lettuce, tomatoes, pickles, house sauce, and seasoned French fries.",
    arDesc:
      "قطع الدجاج المقرمشة الذهبية في خبز محمص مع الخس والطماطم والمخلل والصلصة الخاصة والبطاطس المقلية."
  },

  // MINT TEA, DESSERTS & DRINKS (5)
  {
    id: "moroccan-mint-tea",
    cat: "drinks",
    enTitle: "Royal Ceremonial Moroccan Mint Tea (Atay)",
    arTitle: "أتاي مغربي ملكي بالنعناع الطازج (إبريق نحاسي)",
    price: "$12.99",
    img: "assets/images/ai/moroccan-mint-tea-service.jpg",
    enBadge: "🫖 Poured High at Table",
    arBadge: "🫖 يُصب على الطريقة المغربية",
    enDesc:
      "Traditional silver teapot brewed with gunpowder green tea, fresh spearmint leaves, and orange blossom aroma, served with Moroccan almond cookies.",
    arDesc:
      "إبريق الشاي المغربي الفضي التقليدي المحضر بالشاي الأخضر الفاخر وأوراق النعناع الطازجة، يُقدم في كؤوس مزخرفة."
  },
  {
    id: "strawberry-mojito",
    cat: "drinks",
    enTitle: "Fresh Strawberry Mint Mojito (Zero-Proof)",
    arTitle: "موهيتو الفراولة والنعناع الطازج المنعش",
    price: "$9.99",
    img: "assets/images/doordash/strawberry_mojito.jpg",
    enBadge: "🍓 Lounge Mocktail",
    arBadge: "🍓 كوكتيل السهرة المنعش",
    enDesc:
      "Muddled fresh strawberries, garden mint, freshly squeezed lime, and sparkling soda over crushed ice.",
    arDesc:
      "فراولة طازجة مع أوراق النعناع وعصير الليمون الأخضر والمياه الغازية الفوارة مع الثلج المجروش."
  },
  {
    id: "lemon-mint-juice",
    cat: "drinks",
    enTitle: "Frozen Levantine Lemon & Mint Refresher",
    arTitle: "عصير ليمون بالنعناع الطازج المثلج",
    price: "$8.99",
    img: "assets/images/doordash/lemon_with_mint.jpg",
    enBadge: "🌿 Ice-Blended",
    arBadge: "🌿 طبيعي ومنعش ١٠٠٪",
    enDesc:
      "Freshly squeezed lemons blended with vibrant green mint leaves and crushed ice — the ultimate pairing with charcoal grill dishes.",
    arDesc:
      "عصير ليمون طازج مخفوق مع أوراق النعناع الأخضر والثلج المجروش — المشروب الأمثل مع المشاوي والطواجن."
  },
  {
    id: "orange-juice",
    cat: "drinks",
    enTitle: "100% Fresh-Squeezed Florida Orange Juice",
    arTitle: "عصير برتقال فلوريدا طبيعي طازج ١٠٠٪",
    price: "$7.99",
    img: "assets/images/doordash/orange_juice.jpg",
    enBadge: "🍊 Pressed to Order",
    arBadge: "🍊 يُعصر عند الطلب",
    enDesc: "Sweet Florida oranges cold-pressed to order with zero added sugar.",
    arDesc: "برتقال فلوريدا الحلو المعصور طازجاً عند الطلب بدون أي سكريات مضافة."
  },
  {
    id: "hawaij-soda",
    cat: "drinks",
    enTitle: "Imported Moroccan Hawai Tropical Soda / Soft Drinks",
    arTitle: "مشروب هاواي المغربي المستورد / مشروبات غازية",
    price: "$3.99",
    img: "assets/images/doordash/soda.jpg",
    enBadge: "🇲🇦 Moroccan Import",
    arBadge: "🇲🇦 مشروب مغربي أصيل",
    enDesc:
      "Choose from iconic Moroccan Hawai tropical soda, Pom’s apple soda, Coke, Diet Coke, or Sprite.",
    arDesc:
      "اختر من مشروب هاواي المغربي الاستوائي الشهير، أو بومس بالتفاح، أو كوكاكولا وسبرايت."
  }
];

/* 5. Verified Guest Reviews & Topics (100% Bilingual EN & AR) */
const REVIEW_TOPICS = [
  { id: "all", enLabel: "All 5★ Reviews (9)", arLabel: "جميع تقييمات ★٥ (٩)" },
  { id: "show", enLabel: "💃 Belly Dance & Live Show", arLabel: "💃 الرقص الشرقي والعروض الحية" },
  { id: "tagine", enLabel: "🍲 Tagines & Chef Mouna", arLabel: "🍲 الطواجن وإبداعات الشيف منى" },
  { id: "hospitality", enLabel: "👑 Manager Sim’s VIP Service", arLabel: "👑 ضيافة المدير سيمو (Sim)" },
  { id: "grill", enLabel: "🔥 Halal Grill & Late Night", arLabel: "🔥 المشاوي الحلال والسهر" }
];

const REVIEWS_DATA = [
  {
    name: "Ayoub M.",
    initials: "AM",
    enBadge: "Local Guide · Verified Google Review",
    arBadge: "مرشد محلي · تقييم موثق على جوجل",
    topics: ["tagine", "hospitality"],
    enText:
      "“The lamb tagine was tender, rich, and deeply flavorful, with spices that felt warm and authentic. The Moroccan mint tea at the end was the perfect finishing touch. Sim made us feel like family from the second we walked in!”",
    arText:
      "«طاجن اللحم كان طرياً وغنياً جداً بالنكهات والتوابل المغربية الدافئة والأصيلة. وكان أتاي الشاي المغربي بالنعناع في نهاية العشاء مسك الختام. المدير سيمو جعلنا نشعر وكأننا في بيتنا منذ اللحظة الأولى!»",
    enDishes: ["Royal Lamb Tagine", "Moroccan Mint Tea"],
    arDishes: ["طاجن اللحم بالبرقوق", "أتاي مغربي بالنعناع"]
  },
  {
    name: "Eve Mand",
    initials: "EM",
    enBadge: "Local Guide · Dinner Show Guest",
    arBadge: "مرشدة محلية · ضيفة عروض السهرة",
    topics: ["show", "hospitality", "grill"],
    enText:
      "“Hands down the best Middle Eastern & Moroccan dinner show in Kissimmee and Orlando! The live singer, keyboard player, and belly dancer had the entire restaurant on their feet dancing. Incredible food and electric energy!”",
    arText:
      "«بلا منازع أفضل مطعم وعرض سهرة عربي ومغربي في كيسيمي وأورلاندو! المطرب وعازف الأورغ والراقصة الشرقية أشعلوا أجواء القاعة بالكامل. طعام لا يُقاوم وطاقة احتفالية مذهلة!»",
    enDishes: ["Live Belly Dance Show", "Royal Mixed Grill"],
    arDishes: ["عرض الرقص الشرقي الحي", "المشاوي الملكية المشكلة"]
  },
  {
    name: "Sofia R.",
    initials: "SR",
    enBadge: "Verified Google Review · VIP Birthday",
    arBadge: "تقييم جوجل موثق · احتفال عيد ميلاد VIP",
    topics: ["show", "hospitality", "tagine"],
    enText:
      "“From the red carpet entrance to the velvet booths and gold Moroccan arches, the vibe is pure luxury. Chef Mouna came out to check on our Chicken Pastilla and Royal Couscous — both were 10/10. Best birthday night ever!”",
    arText:
      "«من مدخل السجادة الحمراء إلى الجلسات المخملية والأقواس المغربية المذهبة، الأجواء قمة في الفخامة. الشيف منى خرجت بنفسها للاطمئنان على بسطيلة الدجاج والكسكس الملكي — الطعم ١٠/١٠. أجمل ليلة عيد ميلاد!»",
    enDishes: ["Chicken Pastilla", "Royal Couscous"],
    arDishes: ["بسطيلة الدجاج باللوز", "كسكس ملكي مغربي"]
  },
  {
    name: "Karim El-Mansouri",
    initials: "KE",
    enBadge: "Verified Google Review · Dine-In",
    arBadge: "تقييم جوجل موثق · عشاء داخلي",
    topics: ["tagine", "hospitality"],
    enText:
      "“As a Moroccan living in Florida, finding real Harira soup, Rfissa, and authentic clay-pot tagines that taste like Casablanca and Marrakech is rare. Chef Mouna’s hands are blessed and Simo is the ultimate host!”",
    arText:
      "«كمغربي مقيم في فلوريدا، من النادر جداً أن تجد حريرة مغربية أصيلة ورفيسة وطواجن فخارية بطعم الدار البيضاء ومراكش الحقيقي. سلمت يدا الشيف منى، وكل الشكر للأخ سيمو على كرم الضيافة!»",
    enDishes: ["Harira Soup", "Chicken Rfissa", "Lamb Tagine"],
    arDishes: ["شوربة الحريرة", "الرفيسة المغربية", "طاجن اللحم"]
  },
  {
    name: "Nadia & Tariq H.",
    initials: "NH",
    enBadge: "Verified Google Review · Late-Night Dinner",
    arBadge: "تقييم جوجل موثق · سهرة وعشاء متأخر",
    topics: ["grill", "show"],
    enText:
      "“Came in at 11:30 PM after Disney parks starving for Halal food and walked into a full Arabian concert! The charcoal lamb chops, beef arayes, and strawberry mojitos were phenomenal. Open until 2 AM is a lifesaver!”",
    arText:
      "«وصلنا الساعة ١١:٣٠ ليلاً بعد زيارة حدائق ديزني بحثاً عن عشاء حلال فاخر، فوجدنا أنفسنا في حفل فني عربي رائع! ريش الغنم على الفحم وعرايس اللحم وموهيتو الفراولة كانت خيالية. رائع أنه يفتح حتى ٢ فجراً!»",
    enDishes: ["Halal Lamb Chops", "Beef Arayes", "Strawberry Mojito"],
    arDishes: ["ريش غنم على الفحم", "عرايس اللحم", "موهيتو الفراولة"]
  },
  {
    name: "Jessica V.",
    initials: "JV",
    enBadge: "Local Guide · 5★ Google Review",
    arBadge: "مرشدة محلية · تقييم ★٥ على جوجل",
    topics: ["hospitality", "show"],
    enText:
      "“Shereen and Sim took such incredible care of our group of 10! The belly dancer was mesmerizing, classy, and so fun with the crowd. Every single plate from the hummus and grape leaves to the seafood platter was spotless.”",
    arText:
      "«شيرين وسيمو اهتما بمجموعتنا المكونة من ١٠ أشخاص بأفضل شكل ممكن! عرض الرقص الشرقي كان راقياً ومبهراً وممتعاً جداً. كل طبق من الحمص وورق العنب حتى وليمة السي فود كان متقناً للغاية.»",
    enDishes: ["Royal Seafood Extravaganza", "Hummus & Mezze"],
    arDishes: ["وليمة المأكولات البحرية", "حمص ومقبلات شامية"]
  },
  {
    name: "Omar Al-Qahtani",
    initials: "OA",
    enBadge: "Verified Guest · Family Dinner",
    arBadge: "ضيف موثق · عشاء عائلي",
    topics: ["grill", "tagine"],
    enText:
      "“100% Zabiha Halal, generous portions, and true Middle Eastern & North African hospitality. The Chicken Shawarma platter, Kafta Kebab, and Lemon Chicken Tagine were cooked to perfection.”",
    arText:
      "«أكل حلال ١٠٠٪، كميات سخية وكرم ضيافة عربي أصيل. طبق شاورما الدجاج وكباب الكفتة وطاجن الدجاج بالليمون المصير والزيتون كلها مطهوة بإتقان تام.»",
    enDishes: ["Chicken Shawarma Platter", "Lemon Chicken Tagine"],
    arDishes: ["طبق شاورما الدجاج", "طاجن الدجاج بالليمون والزيتون"]
  },
  {
    name: "Marcus & Elena D.",
    initials: "MD",
    enBadge: "Verified DoorDash & Dine-In Reviewer",
    arBadge: "عميل موثق · عشاء وتوصيل دورداش",
    topics: ["grill", "tagine"],
    enText:
      "“We order their Chicken Pastilla, Baba Ghanoush, and Lamb Tagine on DoorDash almost every week, and we come in on weekends for the live music and belly dancing. Truly a hidden gem on 192 in Kissimmee!”",
    arText:
      "«نطلب بسطيلة الدجاج وبابا غنوج وطاجن اللحم عبر دورداش كل أسبوع تقريباً، ونحضر في عطلة نهاية الأسبوع للاستمتاع بالموسيقى الحية والرقص الشرقي. جوهرة حقيقية في كيسيمي!»",
    enDishes: ["Chicken Pastilla", "Baba Ghanoush"],
    arDishes: ["بسطيلة الدجاج", "بابا غنوج مدخن"]
  },
  {
    name: "Layla Benali",
    initials: "LB",
    enBadge: "Verified Google Review · 5★",
    arBadge: "تقييم جوجل موثق · ★٥",
    topics: ["show", "hospitality"],
    enText:
      "“If you want hype, glamour, and authentic food in Orlando/Kissimmee, Yalla Habibi is unmatched. The red velvet decor, golden lighting, live violin/keyboard sets, and Moroccan tea ceremony make you feel like royalty!”",
    arText:
      "«إذا كنتم تبحثون عن الفخامة والأجواء الحماسية والطعام الأصيل في أورلاندو وكيسيمي، فإن يلا حبيبي لا يُضاهى. الديكور المخملي الأحمر والإضاءة الذهبية والعزف الحي وطقوس الشاي المغربي تجعلك تشعر كالملوك!»",
    enDishes: ["Ceremonial Mint Tea", "Live Cabaret Show"],
    arDishes: ["أتاي مغربي ملكي", "عرض السهرة الحي"]
  }
];

/* 6. Weekly Hours Schedule (Kissimmee ET) */
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
  }, 120);

  document.querySelectorAll(".hero-thumb-btn").forEach((btn, idx) => {
    btn.classList.toggle("active", idx === index);
  });
}

function renderHeroSwitcher() {
  const container = document.getElementById("heroQuickSwitcher");
  if (!container) return;

  container.innerHTML = HERO_DISHES.map((dish, idx) => {
    const label = currentLang === "en" ? dish.enTitle : dish.arTitle;
    const shortLabel = label.length > 24 ? label.slice(0, 22) + "…" : label;
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

/* C. Interactive 33-Item Menu Vault */
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
        ? "No dishes matched your search. Try 'Tagine', 'Lamb', 'Pastilla', or 'Shawarma'."
        : "لم يتم العثور على أطباق مطابقة لبحثك. جرب البحث عن «طاجن» أو «شاورما» أو «بسطيلة».";
    gridEl.innerHTML = `<div style="grid-column: 1 / -1; text-align:center; padding: 2.5rem; color: var(--gold-light); font-weight: 700;">${emptyMsg}</div>`;
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
            <p class="review-text" style="margin-top: 0.9rem;">${text}</p>
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
  const day = etDate.getDay(); // 0 Sun .. 6 Sat
  const hourFloat = etDate.getHours() + etDate.getMinutes() / 60;

  // Check if still in yesterday's late-night window (00:00 to 02:00 AM)
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
    statusTextEn = `Open Now · Live Lounge & Kitchen til ${closeTimeStr}`;
    statusTextAr = `مفتوح الآن · السهرة والمطبخ حتى ${closeTimeAr}`;
  } else if (todaySched && hourFloat >= todaySched.openH && hourFloat < todaySched.closeH) {
    isOpen = true;
    const closeLabelEn = todaySched.enHours.split("–")[1].trim();
    const closeLabelAr = todaySched.arHours.split("–")[1].trim();
    statusTextEn = `Open Tonight · Dinner Show & Kitchen til ${closeLabelEn}`;
    statusTextAr = `مفتوح الليلة · السهرة والمطبخ حتى ${closeLabelAr}`;
  } else if (todaySched) {
    const openLabelEn = todaySched.enHours.split("–")[0].trim();
    const openLabelAr = todaySched.arHours.split("–")[0].trim();
    statusTextEn = `Opens Today at ${openLabelEn} · Live Show Tonight`;
    statusTextAr = `يفتح اليوم الساعة ${openLabelAr} · سهرة حية الليلة`;
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
  const realPhoto = sig ? sig.realImg : item.img;

  const orderBtnText =
    currentLang === "en"
      ? `Order on DoorDash · ${item.price}`
      : `اطلب عبر دورداش · ${item.price}`;
  const callBtnText =
    currentLang === "en"
      ? "Call VIP Table · (407) 507-3991"
      : "احجز طاولة VIP · 3991-507 (407)";
  const halalNote =
    currentLang === "en"
      ? "✓ 100% Zabiha Halal Certified · Prepared fresh to order in Chef Mouna’s kitchen"
      : "✓ حلال ذبيحة ١٠٠٪ · يُحضر طازجاً عند الطلب في مطبخ الشيف منى";

  content.innerHTML = `
    <div class="modal-dish-layout">
      <div class="modal-img-stage">
        <span class="dish-tag">${badge}</span>
        <img src="${imgSrc}" alt="${title}" />
      </div>
      <div>
        <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:0.75rem; margin-bottom:0.65rem;">
          <h3 style="font-family:var(--font-display); font-size:1.55rem; color:var(--gold-light); line-height:1.2;">${title}</h3>
          <span class="sig-price">${item.price}</span>
        </div>
        <p style="color:var(--text-champagne); font-size:0.96rem; line-height:1.65; margin-bottom:1rem;">${desc}</p>
        <p style="font-size:0.82rem; color:#6EE7B7; font-weight:700; margin-bottom:1.35rem;">${halalNote}</p>
        <div style="display:flex; flex-direction:column; gap:0.65rem;">
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

  // Set document language & RTL/LTR direction
  document.documentElement.lang = currentLang === "en" ? "en" : "ar";
  document.documentElement.dir = currentLang === "en" ? "ltr" : "rtl";

  // Update language button pills
  document.querySelectorAll(".lang-opt").forEach((opt) => {
    const langCode = opt.getAttribute("data-lang");
    opt.classList.toggle("active", langCode === currentLang);
  });

  // Update all [data-i18n] text nodes
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // Update all [data-i18n-html] rich HTML nodes
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const key = el.getAttribute("data-i18n-html");
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  // Update all [data-i18n-placeholder] inputs
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key]) {
      el.setAttribute("placeholder", dict[key]);
    }
  });

  // Re-render all dynamic components in the active language
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
  // Initial full render
  applyLanguageStrings();
  resetHeroAutoRotate();

  // Language switcher toggle
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

  // Click Hero Cutout Image to open Dish Modal
  const heroCutoutImg = document.getElementById("heroCutoutImg");
  if (heroCutoutImg) {
    heroCutoutImg.addEventListener("click", () => {
      const dish = HERO_DISHES[activeHeroIndex];
      if (dish) openDishModal(dish.id);
    });
  }

  // Menu Search Input
  const searchInput = document.getElementById("menuSearchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value || "";
      renderFullMenu();
    });
  }

  // Topbar Live Hours HUD Popover
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

  // Dish Modal Close Listeners
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

  // Sticky Header Shadow on Scroll
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
