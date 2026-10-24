/**
 * HHS A1 L-Carnitine Lepidium - Seed-Aesthetic E-commerce Platform
 * Multi-Currency Engine (JOD, LBP, SYP, USD), Bilingual (AR/EN), WhatsApp & Instagram Integration
 */

// Exchange rates & Pricing (Base: 1 bottle = $25 USD)
const currencyConfig = {
  JOD: {
    code: 'JOD',
    symbolAr: 'د.أ',
    symbolEn: 'JOD',
    flag: '🇯🇴',
    nameAr: 'دينار أردني (د.أ)',
    nameEn: 'Jordanian Dinar (JOD)',
    single: { price: 18, old: 22, unit: '18 د.أ / للعبوة', saveAr: 'وفر 4 د.أ (عرض البداية)', saveEn: 'Save 4 JOD (Starter Offer)' },
    duo:    { price: 32, old: 40, unit: '16 د.أ فقط / للعبوة', saveAr: 'خصم خاص • وفر 8 د.أ + شحن مجاني', saveEn: 'Special Offer • Save 8 JOD + Free Ship' },
    trio:   { price: 42.5, old: 60, unit: '14.1 د.أ فقط / للعبوة (أقصى توفير)', saveAr: 'وفر 17.5 د.أ • كورس بديل التكميم', saveEn: 'Save 17.5 JOD • Full Transformation' }
  },
  LBP: {
    code: 'LBP',
    symbolAr: 'ل.ل',
    symbolEn: 'LBP',
    flag: '🇱🇧',
    nameAr: 'ليرة لبنانية (ل.ل)',
    nameEn: 'Lebanese Pound (LBP)',
    single: { price: '2,240,000', old: '2,700,000', unit: '2,240,000 ل.ل / للعبوة', saveAr: 'وفر 460,000 ل.ل', saveEn: 'Save 460,000 LBP' },
    duo:    { price: '4,030,000', old: '4,900,000', unit: '2,015,000 ل.ل / للعبوة', saveAr: 'وفر 870,000 ل.ل + توصيل مجاني', saveEn: 'Save 870,000 LBP + Free Delivery' },
    trio:   { price: '5,370,000', old: '7,350,000', unit: '1,790,000 ل.ل / للعبوة (أقصى توفير)', saveAr: 'وفر 1,980,000 ل.ل • كورس شامل', saveEn: 'Save 1,980,000 LBP • Full Regimen' }
  },
  SYP: {
    code: 'SYP',
    symbolAr: 'ل.س',
    symbolEn: 'SYP',
    flag: '🇸🇾',
    nameAr: 'ليرة سورية (ل.س)',
    nameEn: 'Syrian Pound (SYP)',
    single: { price: '365,000', old: '440,000', unit: '365,000 ل.س / للعبوة', saveAr: 'وفر 75,000 ل.س', saveEn: 'Save 75,000 SYP' },
    duo:    { price: '650,000', old: '800,000', unit: '325,000 ل.س / للعبوة', saveAr: 'وفر 150,000 ل.س + شحن سريع', saveEn: 'Save 150,000 SYP + Free Delivery' },
    trio:   { price: '870,000', old: '1,200,000', unit: '290,000 ل.س / للعبوة (أقصى توفير)', saveAr: 'وفر 330,000 ل.س • كورس بديل التكميم', saveEn: 'Save 330,000 SYP • Complete Sculpt' }
  },
  USD: {
    code: 'USD',
    symbolAr: '$',
    symbolEn: '$',
    flag: '🇺🇸',
    nameAr: 'دولار أمريكي ($)',
    nameEn: 'US Dollar ($)',
    single: { price: '$25', old: '$30', unit: '$25 / bottle', saveAr: 'وفر $5 (عرض البداية)', saveEn: 'Save $5 (Starter Offer)' },
    duo:    { price: '$45', old: '$55', unit: 'Only $22.5 / bottle', saveAr: 'خصم خاص • وفر $10 + شحن مجاني', saveEn: 'Save $10 + Free Shipping' },
    trio:   { price: '$60', old: '$85', unit: 'Only $20 / bottle (Max Savings)', saveAr: 'وفر $25 • كورس بديل التكميم الكامل', saveEn: 'Save $25 • Complete Transformation' }
  }
};

const WHATSAPP_PHONE = '962788005060';
const INSTAGRAM_HANDLE = 'la_luna_brand1';
const INSTAGRAM_URL = 'https://instagram.com/la_luna_brand1';

let currentLang = 'ar';
let currentCurrency = 'JOD'; // default Jordan
let selectedPackageKey = 'duo';

const translations = {
  ar: {
    meta_title: "HHS A1™ | مكمل التنحيف العشبي المتطور - لا لونا براند",
    announcement: "متوفر للطلب في الأردن ولبنان وسوريا مع دفع عند الاستلام! حسابنا: @la_luna_brand1",
    announcement_badge: "وكيل معتمد",
    nav_shop: "الباقات والعروض",
    nav_science: "التركيبة والعلم",
    nav_reviews: "تجارب العملاء",
    nav_faq: "الأسئلة الشائعة",
    nav_order_btn: "اطلب الآن",
    lang_btn: "English",

    // Hero Section
    hero_badge: "التركيبة التركية الأصلية الأكثر طلباً 🌿",
    hero_title: "ابدأ رحلتك نحو القوام المثالي والصحة المتجددة.",
    hero_subtitle: "مكمل غذائي عشبي مبتكر يجمع بين قوة L-Carnitine وعشبة الليبيديوم (Maca) لحرق الدهون المتراكمة، تسريع الأيض، وتأمين شعور حقيقي بالشبع يدوم حتى 12 ساعة كاملة بدون خمول.",
    hero_cta: "اطلب كورس HHS A1 الآن",
    hero_secondary_cta: "تعرف على آلية الحرق",
    hero_trust_1: "مكونات عشبية 100%",
    hero_trust_2: "نتائج مثبتة بالتحارب",
    hero_trust_3: "دفع آمن عند الاستلام",
    hero_pill_title: "شبع مستمر حتى 12 ساعة",
    hero_pill_sub: "كبسولات نباتية خضراء لحرق الدهون المستعصية",

    // Section 2: Essentials
    section2_pretitle: "الرعاية الحيوية اليومية",
    section2_title: "أساسيات يومية لدعم حرق الدهون، الشبع، والنشاط.",
    section2_desc: "تركيبة حيوية متكاملة مصممة علمياً لاستهداف الخلايا الدهنية وتحويلها إلى طاقة نقية تدوم طوال اليوم دون هبوط السكر أو اشتهاء السكريات.",
    section2_cta: "تسوق جميع الباقات",

    // Product Cards Titles & Descriptions
    card1_badge: "للتجربة والبداية",
    card1_code: "A1-SINGLE • كورس شهر واحد",
    card1_title: "عبوة A1 الفردية (30 كبسولة + الكرتونة)",
    card1_desc: "عبوة واحدة من كبسولات HHS A1 مع علبتها الأصلية. مثالية لبدء تنشيط عمليات الحرق، التخلص من احتباس السوائل وتنظيم الشهية اليومية.",
    card1_feat1: "عبوة أصلية (30 كبسولة) + كرتونة المنتج",
    card1_feat2: "تنشيط فوري لمعدل الأيض اليومي",
    card1_feat3: "كبح الشهية والسكريات حتى 12 ساعة",
    card_order_btn: "اطلب الآن",

    card2_badge: "الأكثر مبيعاً 🔥",
    card2_code: "A1-DUO • كورس شهرين مكثف",
    card2_title: "باقة الحرق المكثف (عبوتان + كرتونتان - 60 كبسولة)",
    card2_desc: "عرض العبوتين الأكثر طلباً لمضاعفة حرق دهون البطن ونحت الخصر بأمان وفاعلية مضاعفة.",
    card2_feat1: "عبوتان أصليتان (60 كبسولة) تكفي 60 يوماً",
    card2_feat2: "حرق عميق للدهون المستعصية في الخواصر",
    card2_feat3: "توصيل مجاني سريع حتى باب منزلك",

    card3_badge: "أفضل قيمة وتوفير 🏆",
    card3_code: "A1-TRIO • كورس النحت الكامل",
    card3_title: "باقة التحول الشامل (3 عبوات + 3 كراتين - 90 كبسولة)",
    card3_desc: "كورس النحت وتثبيت الوزن الكامل (3 أشهر متتالية) للوصول للوزن المثالي وتثبيته نهائياً بدون رجوع.",
    card3_feat1: "3 عبوات كاملة (90 كبسولة) لـ 3 أشهر",
    card3_feat2: "تثبيت دائم للوزن ومنع عودة الدهون",
    card3_feat3: "هدية خاصة + شحن سريع مجاني",

    // Section 3: Deep Feature
    feature_tagline_1: "معظم كبسولات التنحيف تسبب خمولاً.",
    feature_tagline_2: "كبسولات A1 تمنحك شبعاً وطاقة 12 ساعة.",
    feature_lead: "تتميز كبسولات HHS A1 باحتوائها على مزيج دقيق من خلاصة جذور الليبيديوم المعززة للأندروفين والشبع، مع L-Carnitine فائق النقاوة الذي يوجه الأحماض الدهنية مباشرة إلى ميتوكوندريا الخلايا لتحترق كطاقة فورية.",
    feature_ing1_title: "L-Carnitine النقي",
    feature_ing1_desc: "يحول الدهون المتراكمة إلى وقود خلوي ويحفز النشاط البدني.",
    feature_ing2_title: "خلاصة الليبيديوم (Maca)",
    feature_ing2_desc: "تنظم إشارات الجوع في الدماغ وتمنح شبعاً استثنائياً.",
    feature_ing3_title: "جارسينيا كامبوجيا",
    feature_ing3_desc: "تمنع تخزين الدهون الجديدة وتوازن مستويات المزاج.",
    feature_ing4_title: "أعشاب طرد السموم والنفخة",
    feature_ing4_desc: "مزيج الشمر، الهال، والزنجبيل لإزالة السوائل المحتبسة والانتفاخ.",
    feature_btn: "اطلب باقتك المعتمدة",

    // Section 4: Impact / Reviews
    impact_title: "شاهد نتائج وتجارب عملائنا الحقيقية",
    impact_subtitle: "آراء وتقييمات حقيقية من متابعي صفحتنا @la_luna_brand1 شاركوا تجاربهم الفعلية.",
    insta_time_1: "منذ يومين • عمّان",
    insta_time_2: "منذ 4 أيام • إربد",
    insta_time_3: "منذ أسبوع • بيروت",
    insta_time_4: "منذ أسبوعين • دمشق",
    review1_quote: "\"بديل حقيقي للتكميم بدون أي جراحة! فقدت 11 كيلوغراماً في شهر ونصف، والأهم أن الشهية مسدودة براحة تامة بدون صداع أو هبوط.\"",
    review1_meta: "خسرت 11 كجم",
    review2_quote: "\"أعاني من ثبات الوزن لسنوات، لكن بعد أسبوعين من كبسولات A1 بدأ وزني ينزل بطريقة مذهلة وطاقتي تضاعفت مع حرق دهون البطن.\"",
    review2_meta: "خسر 16 كجم",
    review3_quote: "\"الشعور بالشبع يدوم من الصباح حتى المساء بدون أي مبالغة. انتهت مشكلة الأكل العاطفي واللقمشة في الليل نهائياً.\"",
    review3_meta: "خسرت 9 كجم",
    review4_quote: "\"جربت منتجات كثيرة لكن A1 فريد جداً في نحت محيط الخصر وإزالة انتفاخ البطن. العبوة أصلية من لا لونا براند ووصلتني بسرعة.\"",
    review4_meta: "خسرت 13 كجم",
    verified_buyer: "مشترٍ موثق",

    // Section 5: Stats Banner
    stats_title: "أكثر من 500,000 قصة نجاح مستمرة.",
    stats_subtitle: "انضم إلى الآلاف من الذين غيروا حياتهم وتخلصوا من الوزن الزائد بطريقة طبيعية ومدروسة.",
    stat_badge_1: "مستخلصات نباتية تركية 100%",
    stat_badge_2: "مطابق لمواصفات الجودة GMP",
    stat_badge_3: "توصيل سريع في الأردن وسوريا ولبنان",
    stat_badge_4: "ضمان الجودة والأصالة",
    stats_cta: "ابدأ رحلة تحولك الآن",

    // Section 6: FAQ
    faq_title: "الأسئلة الأكثر شيوعاً حول منتج HHS A1",
    faq_q1: "كيف تعمل كبسولات A1 على سد الشهية وحرق الدهون؟",
    faq_a1: "تعمل الكبسولات بآلية مزدوجة: ألياف وخلاصة عشبة الليبيديوم الطبيعية تنظم هرمونات الشبع في الجهاز الهضمي لمدة تصل إلى 12 ساعة، بينما يقوم L-Carnitine بنقل الدهون المخزونة في الجسم إلى مراكز الطاقة لحرقها حتى في أوقات الراحة.",
    faq_q2: "ما هي طريقة الاستخدام الصحيحة للحصول على أفضل النتائج؟",
    faq_a2: "يتم تناول كبسولة واحدة يومياً صباحاً قبل وجبة الإفطار بنصف ساعة مع كوبين كبيرين من الماء الفاتر. يُنصح بشرب من 2.5 إلى 3 لتر ماء يومياً لتعزيز طرد السموم وحرق الدهون.",
    faq_q3: "هل هناك أي آثار جانبية أو أضرار؟",
    faq_a3: "المنتج مصنع من خلاصات عشبية طبيعية 100% وآمن لمعظم البالغين الأصحاء. لا يُنصح باستخدامه لمرضى القلب والضغط المرتفع الشديد، الحوامل، المرضعات، أو من هم دون 18 عاماً.",
    faq_q4: "متى تبدأ النتائج بالظهور وكم كيلوغرام يمكن خسارته؟",
    faq_a4: "يبدأ الإحساس بكبح الشهية من اليوم الأول للاستخدام، وتبدأ خسارة الوزن الملحوظة خلال 7 إلى 10 أيام. متوسط النزول المتوقع يتراوح بين 6 إلى 12 كجم شهرياً حسب استجابة الجسم ومستوى النشاط.",
    faq_q5: "كيف يتم الدفع واستلام الطلب؟",
    faq_a5: "نظام الدفع متاح 100% عند الاستلام (الدفع نقداً لمندوب الشحن عند معاينة المنتج واستلامه)، ويتم التوصيل المباشر في الأردن، لبنان، وسوريا.",

    // Footer
    footer_desc: "الوكيل المعتمد لمنتج التنحيف التركي HHS A1 الأصلي عبر لا لونا براند (@la_luna_brand1). حلول طبيعية علمية لصحة ورشاقة مستدامة.",
    footer_col1_title: "المنتجات",
    footer_col2_title: "العلم والتركيبة",
    footer_col3_title: "خدمة العملاء",
    footer_col4_title: "الضمان والسياسات",
    footer_rights: "© 2026 La Luna Brand (@la_luna_brand1) • HHS A1™ جميع الحقوق محفوظة.",
    footer_disclaimer: "تنويه: هذا المنتج عبارة عن مكمل غذائي عشبي وليس دواءً لعلاج أو تشخيص الأمراض. قد تختلف النتائج من شخص لآخر حسب طبيعة الجسم والالتزام بالإرشادات.",

    // Order Modal
    modal_title: "إتمام طلب HHS A1 الأصلي",
    modal_step_pkg: "اختر الباقة المناسبة لك:",
    label_fullname: "الاسم الكامل *",
    placeholder_fullname: "أدخل اسمك الكريم",
    label_phone: "رقم الهاتف / واتساب *",
    placeholder_phone: "مثال: 07XXXXXXXX",
    label_city: "الدولة، المدينة وعنوان التوصيل *",
    placeholder_city: "مثال: الأردن، عمّان، شارع الجاردنز",
    label_notes: "ملاحظات إضافية (اختياري)",
    placeholder_notes: "أي تفاصيل تخص موعد التوصيل المفضل...",
    summary_product: "المنتج المختار:",
    summary_shipping: "الشحن والتوصيل:",
    summary_shipping_free: "مجاني بالكامل",
    summary_payment: "طريقة الدفع:",
    summary_payment_val: "الدفع نقداً عند الاستلام",
    summary_total: "المجموع الكلي:",
    btn_confirm_order: "تأكيد الطلب الآن (الدفع عند الاستلام)",
    order_success_title: "تم استلام طلبك بنجاح! 🎉",
    order_success_desc: "شكراً لثقتك بـ La Luna Brand. رقم طلبك هو: ",
    order_success_contact: "سيتواصل معك فريقنا خلال دقائق عبر الواتساب على الرقم +962788005060 لتأكيد موعد التسليم.",
    order_success_whatsapp: "متابعة الطلب عبر واتساب فوراً",
    btn_close: "إغلاق"
  },

  en: {
    meta_title: "HHS A1™ | Advanced Herbal Slimming Formula - La Luna Brand",
    announcement: "Available across Jordan, Lebanon & Syria with Cash On Delivery! Instagram: @la_luna_brand1",
    announcement_badge: "Authorized",
    nav_shop: "Packages",
    nav_science: "Science & Formula",
    nav_reviews: "Reviews",
    nav_faq: "FAQ",
    nav_order_btn: "Order Now",
    lang_btn: "العربية",

    // Hero Section
    hero_badge: "Original Turkish Herbal Formulation 🌿",
    hero_title: "Start your journey to lasting fitness & vitality.",
    hero_subtitle: "A daily, science-backed botanical supplement combining pure L-Carnitine and Lepidium (Maca) root extract to accelerate fat oxidation, fire up metabolic rate, and sustain true satiety for up to 12 hours.",
    hero_cta: "Shop HHS A1 Formula",
    hero_secondary_cta: "How Fat Burning Works",
    hero_trust_1: "100% Herbal Extracts",
    hero_trust_2: "Clinically Inspired Efficacy",
    hero_trust_3: "Cash on Delivery",
    hero_pill_title: "12-Hour Active Satiety",
    hero_pill_sub: "Herbal Bio-Capsules for Stubborn Fat Burning",

    // Section 2: Essentials
    section2_pretitle: "Daily Metabolic Essentials",
    section2_title: "Daily essentials to support fat burning, satiety, and all-day energy.",
    section2_desc: "A bio-optimized herbal matrix designed to mobilize stubborn lipid stores and transform them into clean cellular energy without energy crashes or rebound cravings.",
    section2_cta: "Shop All Bundles",

    // Product Cards
    card1_badge: "Starter Choice",
    card1_code: "A1-SINGLE • 1-Month Regimen",
    card1_title: "A1 Starter Pack (1 Bottle + 1 Box - 30 Caps)",
    card1_desc: "1 authentic HHS A1 bottle with original box. Ideal for igniting your basal metabolic rate, detoxifying fluid retention, and regulating morning cravings.",
    card1_feat1: "Original bottle (30 capsules) + packaging carton",
    card1_feat2: "Immediate metabolic rate jumpstart",
    card1_feat3: "Curbs appetite and sugar cravings for 12 hours",
    card_order_btn: "Order Now",

    card2_badge: "Most Popular 🔥",
    card2_code: "A1-DUO • 2-Month Intensive",
    card2_title: "A1 Intensive Duo (2 Bottles + 2 Boxes - 60 Caps)",
    card2_desc: "Our top-rated 2-pack bundle to double abdominal fat burning and sculpt the waistline safely and effectively.",
    card2_feat1: "2 original bottles (60 capsules) for 60 full days",
    card2_feat2: "Deep oxidation of stubborn midsection fat",
    card2_feat3: "Fast Free Express Delivery included",

    card3_badge: "Best Value & Savings 🏆",
    card3_code: "A1-TRIO • Complete Sculpt",
    card3_title: "A1 Transformation Trio (3 Bottles + 3 Boxes - 90 Caps)",
    card3_desc: "The complete 3-month non-surgical sculpt & weight lock-in course to reach and permanently stabilize goal weight without rebound.",
    card3_feat1: "3 full bottles (90 capsules) for 3 full months",
    card3_feat2: "Permanent weight lock-in & prevents fat rebound",
    card3_feat3: "Exclusive free gift + Priority shipping",

    // Section 3: Deep Feature
    feature_tagline_1: "Most slimming pills cause rebound fatigue.",
    feature_tagline_2: "A1™ sustains satiety and energy for 12 hours.",
    feature_lead: "Engineered with dual-action botanical synergy: standardized Lepidium root extract regulates satiety neuropeptides, while bio-pure L-Carnitine shuttles long-chain fatty acids into mitochondria to burn as immediate cellular energy.",
    feature_ing1_title: "Pure L-Carnitine",
    feature_ing1_desc: "Shuttles stored triglycerides into cellular furnaces for physical stamina.",
    feature_ing2_title: "Lepidium (Maca) Root",
    feature_ing2_desc: "Regulates hunger signaling pathways for effortless 12-hour satiety.",
    feature_ing3_title: "Garcinia Cambogia (HCA)",
    feature_ing3_desc: "Inhibits fatty acid synthesis enzymes while supporting mood balance.",
    feature_ing4_title: "Detox & Botanical Carminatives",
    feature_ing4_desc: "Cardamom, Fennel, and Ginger extracts flush excess water weight.",
    feature_btn: "Claim Your Certified Supply",

    // Section 4: Impact / Reviews
    impact_title: "See the impact for yourself",
    impact_subtitle: "Verified community testimonials from our Instagram page @la_luna_brand1.",
    insta_time_1: "2d ago • Amman",
    insta_time_2: "4d ago • Irbid",
    insta_time_3: "1w ago • Beirut",
    insta_time_4: "2w ago • Damascus",
    review1_quote: "\"A genuine alternative to invasive procedures! I lost 11 kg in 6 weeks, and my appetite was comfortably under control without dizziness or fatigue.\"",
    review1_meta: "Lost 11 kg",
    review2_quote: "\"My weight had plateaued for two years. Within two weeks on A1, the scale began dropping and my gym stamina doubled.\"",
    review2_meta: "Lost 16 kg",
    review3_quote: "\"Full satiety from breakfast until dusk. It totally wiped out emotional evening snacking and sweet cravings.\"",
    review3_meta: "Lost 9 kg",
    review4_quote: "\"I've tried numerous brands, but A1 from La Luna Brand is in a league of its own for waist contouring and rapid results.\"",
    review4_meta: "Lost 13 kg",
    verified_buyer: "Verified Buyer",

    // Section 5: Stats Banner
    stats_title: "Over 500,000 transformations (and counting).",
    stats_subtitle: "Join thousands of wellness seekers who reclaimed their fitness through clean herbal precision.",
    stat_badge_1: "100% Turkish Herbal Extracts",
    stat_badge_2: "Certified GMP Manufacturing",
    stat_badge_3: "Fast Courier in Jordan, Lebanon, Syria",
    stat_badge_4: "Authenticity & Quality Guaranteed",
    stats_cta: "Start Your Transformation",

    // Section 6: FAQ
    faq_title: "Frequently Asked Questions About HHS A1",
    faq_q1: "How does A1 curb cravings and accelerate fat loss?",
    faq_a1: "A1 works through dual bio-pathways: standardized Lepidium fiber and phyto-nutrients signal natural fullness to digestive receptors for up to 12 hours, while L-Carnitine oxidizes stubborn fatty deposits into usable daily energy.",
    faq_q2: "What is the recommended daily dosage for maximum results?",
    faq_a2: "Take one capsule daily in the morning, 30 minutes before breakfast with two tall glasses of lukewarm water. Drink 2.5 to 3 liters of water throughout the day to support cellular cleansing and fat excretion.",
    faq_q3: "Are there any side effects or contraindications?",
    faq_a3: "HHS A1 is produced from 100% natural herbal extracts and is well tolerated by healthy adults. It is not recommended for individuals with severe cardiovascular or hypertensive conditions, pregnant or nursing women, or anyone under 18.",
    faq_q4: "How soon can I expect visible results and weight loss?",
    faq_a4: "Appetite suppression is typically felt from Day 1. Substantial metabolic weight loss typically becomes evident within 7 to 10 days, with average monthly losses between 6 to 12 kg depending on personal baseline and hydration.",
    faq_q5: "How does payment and doorstep delivery work?",
    faq_a5: "We offer 100% Cash On Delivery across Jordan, Lebanon, and Syria. Delivery takes 24-48 hours directly to your door.",

    // Footer
    footer_desc: "Authorized distributor of authentic Turkish HHS A1 slimming capsules by La Luna Brand (@la_luna_brand1). Natural science for lasting vitality.",
    footer_col1_title: "Products",
    footer_col2_title: "Science & Formula",
    footer_col3_title: "Customer Care",
    footer_col4_title: "Trust & Policies",
    footer_rights: "© 2026 La Luna Brand (@la_luna_brand1) • HHS A1™ All rights reserved.",
    footer_disclaimer: "Disclaimer: This product is a dietary herbal supplement and is not intended to diagnose, treat, or prevent any medical condition. Results may vary based on individual metabolism and lifestyle consistency.",

    // Order Modal
    modal_title: "Complete Your HHS A1 Order",
    modal_step_pkg: "Select your preferred package:",
    label_fullname: "Full Name *",
    placeholder_fullname: "Enter your full name",
    label_phone: "Phone / WhatsApp Number *",
    placeholder_phone: "e.g. +962 78 800 5060",
    label_city: "Country, City & Shipping Address *",
    placeholder_city: "e.g. Jordan, Amman, Gardens St.",
    label_notes: "Delivery Instructions (Optional)",
    placeholder_notes: "Any preferred delivery times or landmark notes...",
    summary_product: "Selected Bundle:",
    summary_shipping: "Shipping & Handling:",
    summary_shipping_free: "Free Delivery Included",
    summary_payment: "Payment Method:",
    summary_payment_val: "Cash on Delivery",
    summary_total: "Total Due at Delivery:",
    btn_confirm_order: "Confirm Order Now (Pay on Delivery)",
    order_success_title: "Order Received Successfully! 🎉",
    order_success_desc: "Thank you for choosing La Luna Brand. Your tracking order number is: ",
    order_success_contact: "Our team will contact you via WhatsApp at +962788005060 within minutes to arrange doorstep delivery.",
    order_success_whatsapp: "Track / Chat on WhatsApp Instantly",
    btn_close: "Close"
  }
};

// Application Startup
document.addEventListener('DOMContentLoaded', () => {
  // Restore language
  const savedLang = localStorage.getItem('hhs_a1_lang') || 'ar';
  // Restore currency
  const savedCurrency = localStorage.getItem('hhs_a1_currency') || 'JOD';

  setLanguage(savedLang);
  setCurrency(savedCurrency);

  setupLanguageToggle();
  setupCurrencyDropdown();
  setupOrderButtons();
  setupPackageSelection();
  setupOrderForm();
  setupFAQAccordion();
});

// Currency Switcher Logic
function setCurrency(currCode) {
  if (!currencyConfig[currCode]) return;
  currentCurrency = currCode;
  localStorage.setItem('hhs_a1_currency', currCode);

  const cfg = currencyConfig[currCode];

  // Update current currency button label
  const labelEl = document.getElementById('activeCurrencyLabel');
  if (labelEl) {
    labelEl.innerHTML = `${cfg.flag} <span>${currentLang === 'ar' ? cfg.symbolAr : cfg.symbolEn}</span>`;
  }

  // Update active status in dropdown
  document.querySelectorAll('.currency-opt').forEach(opt => {
    if (opt.getAttribute('data-curr') === currCode) {
      opt.classList.add('active');
    } else {
      opt.classList.remove('active');
    }
  });

  // Render prices across the page
  renderPrices();
}

function setupCurrencyDropdown() {
  const triggerBtn = document.getElementById('currencyToggleBtn');
  const dropdownMenu = document.getElementById('currencyDropdown');

  if (triggerBtn && dropdownMenu) {
    triggerBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      dropdownMenu.classList.toggle('show');
    });

    document.querySelectorAll('.currency-opt').forEach(opt => {
      opt.addEventListener('click', () => {
        const targetCurr = opt.getAttribute('data-curr');
        setCurrency(targetCurr);
        dropdownMenu.classList.remove('show');
        showToast(currentLang === 'ar' ? `تم تحويل العملة إلى ${currencyConfig[targetCurr].nameAr}` : `Currency changed to ${currencyConfig[targetCurr].nameEn}`);
      });
    });

    document.addEventListener('click', (e) => {
      if (!triggerBtn.contains(e.target) && !dropdownMenu.contains(e.target)) {
        dropdownMenu.classList.remove('show');
      }
    });
  }
}

function renderPrices() {
  const cfg = currencyConfig[currentCurrency];
  const sym = currentLang === 'ar' ? cfg.symbolAr : cfg.symbolEn;
  const isUSD = currentCurrency === 'USD';

  // Format Helper
  const fmt = (val) => isUSD ? val : `${val} ${sym}`;

  // Card 1
  const card1Price = document.querySelector('[data-price="card1"]');
  const card1Old = document.querySelector('[data-price="card1_old"]');
  const card1Unit = document.querySelector('[data-price="card1_unit"]');
  const card1Save = document.querySelector('[data-price="card1_save"]');
  if (card1Price) card1Price.textContent = fmt(cfg.single.price);
  if (card1Old) card1Old.textContent = fmt(cfg.single.old);
  if (card1Unit) card1Unit.textContent = cfg.single.unit;
  if (card1Save) card1Save.textContent = currentLang === 'ar' ? cfg.single.saveAr : cfg.single.saveEn;

  // Card 2
  const card2Price = document.querySelector('[data-price="card2"]');
  const card2Old = document.querySelector('[data-price="card2_old"]');
  const card2Unit = document.querySelector('[data-price="card2_unit"]');
  const card2Save = document.querySelector('[data-price="card2_save"]');
  if (card2Price) card2Price.textContent = fmt(cfg.duo.price);
  if (card2Old) card2Old.textContent = fmt(cfg.duo.old);
  if (card2Unit) card2Unit.textContent = cfg.duo.unit;
  if (card2Save) card2Save.textContent = currentLang === 'ar' ? cfg.duo.saveAr : cfg.duo.saveEn;

  // Card 3
  const card3Price = document.querySelector('[data-price="card3"]');
  const card3Old = document.querySelector('[data-price="card3_old"]');
  const card3Unit = document.querySelector('[data-price="card3_unit"]');
  const card3Save = document.querySelector('[data-price="card3_save"]');
  if (card3Price) card3Price.textContent = fmt(cfg.trio.price);
  if (card3Old) card3Old.textContent = fmt(cfg.trio.old);
  if (card3Unit) card3Unit.textContent = cfg.trio.unit;
  if (card3Save) card3Save.textContent = currentLang === 'ar' ? cfg.trio.saveAr : cfg.trio.saveEn;

  // Modal radio prices
  const modalSingle = document.querySelector('[data-modal-price="single"]');
  const modalDuo = document.querySelector('[data-modal-price="duo"]');
  const modalTrio = document.querySelector('[data-modal-price="trio"]');
  if (modalSingle) modalSingle.textContent = fmt(cfg.single.price);
  if (modalDuo) modalDuo.textContent = fmt(cfg.duo.price);
  if (modalTrio) modalTrio.textContent = fmt(cfg.trio.price);

  // Mobile Sticky bottom bar
  const stickyPrice = document.querySelector('.mobile-sticky-price');
  if (stickyPrice) {
    stickyPrice.textContent = `${fmt(cfg.duo.price)} (${currentLang === 'ar' ? 'شحن مجاني' : 'Free Shipping'})`;
  }

  // Update order summary
  updateOrderSummary();
}

// Language Engine (RTL / LTR)
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('hhs_a1_lang', lang);

  const html = document.documentElement;
  html.setAttribute('lang', lang);
  html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

  // Text updates
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Placeholder updates
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang] && translations[lang][key]) {
      el.setAttribute('placeholder', translations[lang][key]);
    }
  });

  document.title = translations[lang].meta_title;

  // Re-render currency labels for this language
  renderPrices();
}

function setupLanguageToggle() {
  const toggleBtn = document.getElementById('langToggleBtn');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const targetLang = currentLang === 'ar' ? 'en' : 'ar';
      setLanguage(targetLang);
      showToast(targetLang === 'ar' ? 'تم تحويل اللغة إلى العربية (RTL)' : 'Language switched to English (LTR)');
    });
  }
}

// Package Selection in Modal
function setupPackageSelection() {
  const packageOptions = document.querySelectorAll('.package-radio-option');
  packageOptions.forEach(opt => {
    opt.addEventListener('click', () => {
      packageOptions.forEach(o => o.classList.remove('selected'));
      opt.classList.add('selected');
      selectedPackageKey = opt.getAttribute('data-package');
      updateOrderSummary();
    });
  });
}

function getSelectedPackageInfo() {
  const cfg = currencyConfig[currentCurrency];
  const isAr = currentLang === 'ar';
  const sym = isAr ? cfg.symbolAr : cfg.symbolEn;
  const isUSD = currentCurrency === 'USD';

  if (selectedPackageKey === 'single') {
    return {
      id: 'single',
      name: isAr ? translations.ar.card1_title : translations.en.card1_title,
      price: isUSD ? cfg.single.price : `${cfg.single.price} ${sym}`
    };
  } else if (selectedPackageKey === 'trio') {
    return {
      id: 'trio',
      name: isAr ? translations.ar.card3_title : translations.en.card3_title,
      price: isUSD ? cfg.trio.price : `${cfg.trio.price} ${sym}`
    };
  } else {
    return {
      id: 'duo',
      name: isAr ? translations.ar.card2_title : translations.en.card2_title,
      price: isUSD ? cfg.duo.price : `${cfg.duo.price} ${sym}`
    };
  }
}

function updateOrderSummary() {
  const pkg = getSelectedPackageInfo();
  const summaryPkgName = document.getElementById('summaryPkgName');
  const summaryTotalPrice = document.getElementById('summaryTotalPrice');
  if (summaryPkgName && summaryTotalPrice) {
    summaryPkgName.textContent = pkg.name;
    summaryTotalPrice.textContent = pkg.price;
  }
}

// Order Modal Triggers
function setupOrderButtons() {
  const orderButtons = document.querySelectorAll('.trigger-order-modal');
  const modalBackdrop = document.getElementById('orderModalBackdrop');
  const closeModalBtn = document.getElementById('closeModalBtn');

  orderButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetPkg = btn.getAttribute('data-select-pkg');
      if (targetPkg) {
        selectedPackageKey = targetPkg;
        document.querySelectorAll('.package-radio-option').forEach(opt => {
          if (opt.getAttribute('data-package') === targetPkg) {
            opt.classList.add('selected');
          } else {
            opt.classList.remove('selected');
          }
        });
      }
      updateOrderSummary();
      openModal();
    });
  });

  if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) closeModal();
    });
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}

function openModal() {
  const modalBackdrop = document.getElementById('orderModalBackdrop');
  if (modalBackdrop) {
    modalBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal() {
  const modalBackdrop = document.getElementById('orderModalBackdrop');
  if (modalBackdrop) {
    modalBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  }
}

// Submit Order Form
function setupOrderForm() {
  const form = document.getElementById('directOrderForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const fullName = document.getElementById('custName').value.trim();
    const phone = document.getElementById('custPhone').value.trim();
    const city = document.getElementById('custCity').value.trim();
    const notes = document.getElementById('custNotes').value.trim();

    if (!fullName || !phone || !city) {
      alert(currentLang === 'ar' ? 'يرجى ملء جميع الحقول المطلوبة' : 'Please fill all required fields');
      return;
    }

    const pkg = getSelectedPackageInfo();
    const orderId = 'A1-' + Math.floor(100000 + Math.random() * 900000);
    const isAr = currentLang === 'ar';

    const whatsappMessage = encodeURIComponent(
      `مرحباً لا لونا براند (@${INSTAGRAM_HANDLE})،\nأود تأكيد طلبي لمنتج التنحيف HHS A1 الأصلي:\n\n` +
      `📦 رقم الطلب: ${orderId}\n` +
      `🏷️ الباقة: ${pkg.name}\n` +
      `💰 السعر: ${pkg.price}\n` +
      `👤 الاسم: ${fullName}\n` +
      `📱 الهاتف: ${phone}\n` +
      `📍 العنوان: ${city}\n` +
      `📝 ملاحظات: ${notes || 'لا يوجد'}\n` +
      `💵 الدفع: عند الاستلام`
    );

    const whatsappLink = `https://wa.me/${WHATSAPP_PHONE}?text=${whatsappMessage}`;

    const modalBody = document.querySelector('.modal-body');
    modalBody.innerHTML = `
      <div style="text-align: center; padding: 20px 10px;">
        <div style="width: 72px; height: 72px; background: #ecfdf5; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; color: #16a34a; font-size: 36px; border: 2px solid #a7f3d0;">
          ✓
        </div>
        <h3 style="font-size: 1.5rem; font-weight: 800; color: #111e18; margin-bottom: 10px;">
          ${isAr ? translations.ar.order_success_title : translations.en.order_success_title}
        </h3>
        <p style="color: #64748b; font-size: 0.95rem; margin-bottom: 16px;">
          ${isAr ? translations.ar.order_success_desc : translations.en.order_success_desc}
          <strong style="color: #25533d; font-size: 1.1rem;">#${orderId}</strong>
        </p>
        <div style="background: #f8faf8; border: 1px solid #e2e8f0; border-radius: 14px; padding: 18px; text-align: start; margin-bottom: 24px;">
          <div style="display: flex; justify-content: space-between; margin-bottom: 8px; font-size: 0.9rem;">
            <span style="color: #64748b;">${isAr ? 'العميل:' : 'Customer:'}</span>
            <strong style="color: #1e293b;">${fullName}</strong>
          </div>
          <div style="display: flex; justify-content: space-between; margin-bottom: 8px; font-size: 0.9rem;">
            <span style="color: #64748b;">${isAr ? 'الباقة:' : 'Package:'}</span>
            <strong style="color: #1e293b;">${pkg.name}</strong>
          </div>
          <div style="display: flex; justify-content: space-between; margin-bottom: 8px; font-size: 0.9rem;">
            <span style="color: #64748b;">${isAr ? 'المجموع المستحق:' : 'Total Due:'}</span>
            <strong style="color: #16a34a; font-size: 1.15rem;">${pkg.price}</strong>
          </div>
          <div style="display: flex; justify-content: space-between; font-size: 0.85rem; color: #64748b; border-top: 1px dashed #cbd5e1; padding-top: 8px; margin-top: 8px;">
            <span>${isAr ? 'طريقة الدفع:' : 'Payment:'}</span>
            <span>${isAr ? 'نقداً عند الاستلام' : 'Cash on Delivery'}</span>
          </div>
        </div>
        <p style="font-size: 0.88rem; color: #475569; margin-bottom: 22px; line-height: 1.6;">
          ${isAr ? translations.ar.order_success_contact : translations.en.order_success_contact}
        </p>
        <div style="display: flex; flex-direction: column; gap: 10px;">
          <a href="${whatsappLink}" target="_blank" style="display: flex; align-items: center; justify-content: center; gap: 8px; background: #25D366; color: #ffffff; text-decoration: none; padding: 14px 20px; border-radius: 9999px; font-weight: 700; font-size: 0.95rem; box-shadow: 0 4px 15px rgba(37, 211, 102, 0.4);">
            <svg style="width: 20px; height: 20px; fill: currentColor;" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
            ${isAr ? 'تأكيد الطلب عبر واتساب (+962788005060)' : 'Chat / Confirm on WhatsApp (+962788005060)'}
          </a>
          <button onclick="window.location.reload()" style="background: #111e18; color: #ffffff; border: none; padding: 12px 20px; border-radius: 9999px; font-weight: 600; cursor: pointer;">
            ${isAr ? translations.ar.btn_close : translations.en.btn_close}
          </button>
        </div>
      </div>
    `;

    showToast(isAr ? 'تم تسجيل طلبك بنجاح!' : 'Your order was successfully placed!');
  });
}

// FAQ Accordion
function setupFAQAccordion() {
  document.querySelectorAll('.faq-item').forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
      if (!isActive) item.classList.add('active');
    });
  });
}

// Toast
function showToast(message) {
  let toast = document.getElementById('toastNotice');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toastNotice';
    toast.className = 'toast-msg';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<span>✓</span> <span>${message}</span>`;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3500);
}
