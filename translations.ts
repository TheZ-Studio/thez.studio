export type Language = 'fr' | 'en' | 'ar';

export const translations = {
  fr: {
    meta: {
      title: "StudioZ Digital Lab | Ingénierie Logicielle, SaaS & AI",
      description: "Agence digitale experte en E-commerce, SaaS, Développement Logiciel Sur-Mesure et Data Science à Alger."
    },
    nav: {
      expertise: "Expertise",
      lab: "Lab",
      plugins: "Plugins",
      contact: "Contact",
      cta: "Démarrer un projet"
    },
    hero: {
      tag: "Digital Lab Available",
      titleLine1: "Ingénierie Logicielle",
      titleLine2: "& Intelligence Data",
      subtitle: "Nous transformons vos défis complexes en solutions digitales performantes. Experts en plateformes SaaS, E-commerce et Intelligence Artificielle.",
      ctaPrimary: "Découvrir nos solutions",
      ctaSecondary: "Explorer le Lab"
    },
    stats: {
      support: "Support 24/7",
      supportDesc: "Assistance technique dédiée",
      tech: "High-Tech",
      techDesc: "Stack moderne & scalable",
      agile: "Méthode Agile",
      agileDesc: "Livraison itérative rapide",
      security: "Sécurité",
      securityDesc: "Normes industrielles strictes"
    },
    services: {
      titlePrefix: "Nos Domaines d'",
      titleHighlight: "Expertise",
      items: [
        {
          title: "E-commerce & SaaS",
          desc: "Développement de plateformes de vente complexes et solutions SaaS scalables. Spécialisation WooCommerce, Marketplaces et architectures cloud robustes."
        },
        {
          title: "Software Engineering & AI",
          desc: "Conception d'applications web et mobiles sur-mesure. Intégration d'algorithmes d'IA pour automatiser vos processus métier."
        },
        {
          title: "Data Science & Analytics",
          desc: "Transformation de vos données en levier de croissance. Dashboards décisionnels, Big Data et Business Intelligence avancée."
        }
      ],
      readMore: "En savoir plus"
    },
    innovation: {
      title: "TheZ Studio",
      subtitle: "Laboratoire d'Innovation",
      desc: "Nous développons nos propres outils internes pour accélérer le marché. Des plugins WooCommerce haute performance aux algorithmes prédictifs, nous construisons le futur du digital.",
      module: "TheZ Auto-Linked Variations"
    },
    plugins: {
      titlePrefix: "Nos Plugins ",
      titleHighlight: "Premium",
      subtitle: "Solutions prêtes à l'emploi pour booster votre boutique WooCommerce.",
      items: [
        {
          id: "alv",
          title: "TheZ Auto-Linked Variations",
          tag: "Nouveau",
          desc: "Augmentez vos conversions en liant intelligemment vos produits. Moteur de groupement automatique basé sur les SKUs pour une gestion sans effort.",
          features: ["Auto-Grouper par SKU", "Positionnement Flexible", "Optimisé pour 50k+ produits"],
          price: "2000 DA / licence",
          cta: "En savoir plus",
          detailedFeatures: [
            "Groupement automatique intelligent basé sur les racines de SKU",
            "Amélioration massive du SEO : chaque variation est une page produit réelle",
            "Expérience utilisateur fluide : navigation entre couleurs/styles sans rechargement lourd",
            "Performance optimisée : conçu pour supporter des catalogues de plus de 50 000 produits",
            "Dashboard d'administration intuitif pour gérer les liaisons globales"
          ],
        },
      ],
      details: {
        heroTitle: "TheZ Auto-Linked Variations",
        heroSubtitle: "Automatisez. Groupez. Connectez. Le moteur de variations basé sur les SKUs le plus avancé pour WooCommerce.",
        featuresTitle: "Pourquoi choisir TheZ ALV ?",
        featuresSubtitle: "Conçu par des experts pour les boutiques e-commerce à grande échelle.",
        feature1Title: "Swatches de Variation Intelligents",
        feature1Desc: "Affichez vos produits avec de magnifiques swatches d'images ou de texte qui convertissent réellement.",
        feature2Title: "Intégration Transparente",
        feature2Desc: "Liez vos produits par Catégorie, Tag ou sélection manuelle en quelques clics.",
        feature3Title: "Ingénierie de Performance",
        feature3Desc: "Requêtes SQL optimisées pour garantir que votre site reste ultra-rapide même avec 50k+ variations.",
        autoGrouperTitle: "Découvrez l'Auto-Grouper",
        autoGrouperDesc: "Ne perdez plus des heures à lier manuellement. Notre moteur intelligent scanne vos SKUs et groupe tout automatiquement.",
        skuPatterns: "Vos modèles de SKU :",
        skuResult: "Résultat :",
        skuSuccess: "Groupe lié automatiquement créé !",
        ctaTitle: "Prêt à automatiser vos variations ?",
        ctaSubtitle: "Rejoignez le futur de l'organisation produit pour les clients TheZ Studio.",
        ctaBtn: "Obtenir le Plugin"
      }
    },
    contact: {
      titlePrefix: "Parlons de votre",
      titleHighlight: "Projet",
      desc: "Vous avez un projet SaaS, E-commerce ou Data ? Discutons de la manière dont notre ingénierie peut servir votre croissance.",
      emailLabel: "Email",
      phoneLabel: "Téléphone & WhatsApp",
      locationLabel: "Siège",
      location: "Alger, Algérie\nRemote Worldwide",
      whatsappBtn: "Discuter sur WhatsApp",
      whatsappFloat: "Discuter avec nous",
      form: {
        successTitle: "Message Transmis",
        successDesc: "Nos ingénieurs analysent votre demande. Réponse sous 24h.",
        resetBtn: "Envoyer un autre message",
        name: "Nom complet",
        phone: "Téléphone",
        email: "Email professionnel",
        service: "Service concerné",
        serviceOptions: {
          ecommerce: "E-commerce / SaaS",
          software: "Software Engineering / AI",
          data: "Data Science / Analytics",
          other: "Autre demande"
        },
        message: "Détails du projet",
        submit: "Initialiser la collaboration",
        submitting: "Transmission..."
      }
    },
    footer: {
      copyright: "© " + new Date().getFullYear() + " StudioZ Digital Lab."
    }
  },
  en: {
    meta: {
      title: "StudioZ Digital Lab | Software Engineering, SaaS & AI",
      description: "Digital agency expert in E-commerce, Custom SaaS Development and Data Science in Algiers and Worldwide."
    },
    nav: {
      expertise: "Expertise",
      lab: "Lab",
      plugins: "Plugins",
      contact: "Contact",
      cta: "Start a Project"
    },
    hero: {
      tag: "Digital Lab Available",
      titleLine1: "Software Engineering",
      titleLine2: "& Data Intelligence",
      subtitle: "We transform your complex challenges into high-performance digital solutions. Experts in SaaS, E-commerce, and Artificial Intelligence.",
      ctaPrimary: "Discover Solutions",
      ctaSecondary: "Explore Lab"
    },
    stats: {
      support: "24/7 Support",
      supportDesc: "Dedicated technical assistance",
      tech: "High-Tech",
      techDesc: "Modern & scalable stack",
      agile: "Agile Method",
      agileDesc: "Fast iterative delivery",
      security: "Security",
      securityDesc: "Strict industry standards"
    },
    services: {
      titlePrefix: "Our Areas of ",
      titleHighlight: "Expertise",
      items: [
        {
          title: "E-commerce & SaaS",
          desc: "Development of complex sales platforms and scalable SaaS solutions. Specialization in WooCommerce, Marketplaces, and robust cloud architectures."
        },
        {
          title: "Software Engineering & AI",
          desc: "Design of custom web and mobile applications. Integration of AI algorithms to automate your business processes."
        },
        {
          title: "Data Science & Analytics",
          desc: "Turning your data into a growth lever. Decision-making dashboards, Big Data, and advanced Business Intelligence."
        }
      ],
      readMore: "Learn More"
    },
    innovation: {
      title: "TheZ Studio",
      subtitle: "Innovation Lab",
      desc: "We develop our own internal tools to accelerate the market. From high-performance WooCommerce plugins to predictive algorithms, we build the digital future.",
      module: "TheZ Auto-Linked Variations"
    },
    plugins: {
      titlePrefix: "Our Premium ",
      titleHighlight: "Plugins",
      subtitle: "Off-the-shelf solutions to supercharge your WooCommerce store.",
      items: [
        {
          id: "alv",
          title: "TheZ Auto-Linked Variations",
          tag: "New",
          desc: "Boost your conversions by intelligently linking your products. Automatic SKU-based grouping engine for effortless management.",
          features: ["SKU Auto-Grouper", "Flexible Positioning", "Optimized for 50k+ products"],
          price: "2000 DA / license",
          cta: "Learn More",
          detailedFeatures: [
            "Intelligent auto-grouping based on SKU roots",
            "Massive SEO boost: each variation is a real product page",
            "Seamless UX: navigate between colors/styles without heavy reloading",
            "High performance: built to handle catalogs with 50,000+ products",
            "Intuitive admin dashboard to manage global links"
          ],
        },
      ],
      details: {
        heroTitle: "TheZ Auto-Linked Variations",
        heroSubtitle: "Automate. Group. Connect. The most advanced SKU-based variation engine ever built for WooCommerce.",
        featuresTitle: "Why Choose TheZ ALV?",
        featuresSubtitle: "Built by experts for large-scale e-commerce stores.",
        feature1Title: "Smart Variation Swatches",
        feature1Desc: "Display your products with beautiful image or text swatches that actually convert visitors into buyers.",
        feature2Title: "Seamless Integration",
        feature2Desc: "Link products by Category, Tag, or Manual selection with just a few clicks. No complex configuration needed.",
        feature3Title: "Performance Engineered",
        feature3Desc: "Optimized SQL queries ensure your site stays lightning-fast even with 50k+ linked variations.",
        autoGrouperTitle: "Meet the Auto-Grouper",
        autoGrouperDesc: "Stop wasting hours manually linking products. Our intelligent engine scans your SKU patterns and groups everything automatically.",
        skuPatterns: "Your SKU Patterns:",
        skuResult: "Result:",
        skuSuccess: "Automatically Linked Group Created!",
        ctaTitle: "Ready to automate your WooCommerce variations?",
        ctaSubtitle: "Join the future of product organization for TheZ Studio clients.",
        ctaBtn: "Get the Plugin"
      }
    },
    contact: {
      titlePrefix: "Let's Talk About Your ",
      titleHighlight: "Project",
      desc: "Do you have a SaaS, E-commerce, or Data project? Let's discuss how our engineering can serve your growth.",
      emailLabel: "Email",
      phoneLabel: "Phone & WhatsApp",
      locationLabel: "HQ",
      location: "Algiers, Algeria\nRemote Worldwide",
      whatsappBtn: "Chat on WhatsApp",
      whatsappFloat: "Chat with us",
      form: {
        successTitle: "Message Sent",
        successDesc: "Our engineers are analyzing your request. Response within 24h.",
        resetBtn: "Send another message",
        name: "Full Name",
        phone: "Phone",
        email: "Work Email",
        service: "Service Needed",
        serviceOptions: {
          ecommerce: "E-commerce / SaaS",
          software: "Software Engineering / AI",
          data: "Data Science / Analytics",
          other: "Other Request"
        },
        message: "Project Details",
        submit: "Initialize Collaboration",
        submitting: "Transmitting..."
      }
    },
    footer: {
      copyright: "© " + new Date().getFullYear() + " StudioZ Digital Lab."
    }
  },
  ar: {
    meta: {
      title: "StudioZ Digital Lab | هندسة البرمجيات والذكاء الاصطناعي",
      description: "وكالة رقمية خبيرة في التجارة الإلكترونية، برمجيات SaaS، وعلوم البيانات في الجزائر."
    },
    nav: {
      expertise: "الخدمات",
      lab: "المختبر",
      plugins: "Plugins",
      contact: "اتصل بنا",
      cta: "ابدأ مشروعك"
    },
    hero: {
      tag: "المختبر الرقمي متاح",
      titleLine1: "هندسة البرمجيات",
      titleLine2: "وذكاء البيانات",
      subtitle: "نحول تحدياتكم المعقدة إلى حلول رقمية عالية الأداء. خبراء في منصات SaaS، التجارة الإلكترونية والذكاء الاصطناعي.",
      ctaPrimary: "اكتشف حلولنا",
      ctaSecondary: "استكشف المختبر"
    },
    stats: {
      support: "دعم 24/7",
      supportDesc: "مساعدة تقنية مخصصة",
      tech: "تقنية عالية",
      techDesc: "بنية حديثة وقابلة للتطوير",
      agile: "منهجية Agile",
      agileDesc: "تسليم تكراري سريع",
      security: "حماية وأمان",
      securityDesc: "معايير صناعية صارمة"
    },
    services: {
      titlePrefix: "مجالات ",
      titleHighlight: "خبرتنا",
      items: [
        {
          title: "التجارة الإلكترونية و SaaS",
          desc: "تطوير منصات بيع معقدة وحلول SaaS قابلة للتوسع. تخصص في WooCommerce، المتاجر الإلكترونية والبنى السحابية القوية."
        },
        {
          title: "هندسة البرمجيات و AI",
          desc: "تصميم تطبيقات ويب وموبايل مخصصة. دمج خوارزميات الذكاء الاصطناعي لأتمتة عملياتك التجارية."
        },
        {
          title: "علوم البيانات والتحليلات",
          desc: "تحويل بياناتك إلى رافعة للنمو. لوحات تحكم ذكية، البيانات الضخمة (Big Data) وذكاء الأعمال المتقدم."
        }
      ],
      readMore: "المزيد من التفاصيل"
    },
    innovation: {
      title: "استوديو TheZ",
      subtitle: "مختبر الابتكار",
      desc: "نقوم بتطوير أدواتنا الداخلية لتسريع السوق. من إضافات WooCommerce عالية الأداء إلى الخوارزميات التنبؤية، نحن نبني المستقبل الرقمي.",
      module: "TheZ Auto-Linked Variations"
    },
    plugins: {
      titlePrefix: "إضافاتنا ",
      titleHighlight: "المميزة",
      subtitle: "حلول جاهزة لتعزيز متجرك على WooCommerce.",
      items: [
        {
          id: "alv",
          title: "TheZ Auto-Linked Variations",
          tag: "جديد",
          desc: "ارفع معدلات التحويل من خلال ربط منتجاتك بذكاء. محرك تجميع تلقائي يعتمد على SKU لإدارة سهلة.",
          features: ["تجميع تلقائي عبر SKU", "مواقع عرض مرنة", "محسن لـ +50 ألف منتج"],
          price: "2000 DA / رخصة",
          cta: "اكتشف المزيد",
          detailedFeatures: [
            "تجميع تلقائي ذكي يعتمد على جذور SKU",
            "تعزيز هائل لـ SEO: كل تنويع هو صفحة منتج حقيقية",
            "تجربة مستخدم سلسة: تنقل entre الألوان/الأنماط بدون إعادة تحميل ثقيلة",
            "أداء فائق: مصمم لدعم كتالوجات تزيد عن 50,000 منتج",
            "لوحة تحكم بديهية لإدارة الارتباطات العالمية"
          ],
        },
      ],
      details: {
        heroTitle: "TheZ Auto-Linked Variations",
        heroSubtitle: "أتمتة. تجميع. ربط. محرك التنويع الأكثر تقدمًا استنادًا إلى SKU لـ WooCommerce.",
        featuresTitle: "لماذا تختار TheZ ALV؟",
        featuresSubtitle: "تم بناؤه من قبل خبراء لمتاجر التجارة الإلكترونية واسعة النطاق.",
        feature1Title: "عينات تنويع ذكية",
        feature1Desc: "اعرض منتجاتك بعينات صور أو نصوص جميلة تحول الزوار إلى مشترين.",
        feature2Title: "تكامل سلس",
        feature2Desc: "اربط المنتجات حسب الفئة أو العلامة أو الاختيار اليدوي ببضع نقرات فقط.",
        feature3Title: "هندسة الأداء",
        feature3Desc: "استعلامات SQL محسّنة تضمن بقاء موقعك فائق السرعة حتى مع أكثر من 50 ألف تنويع مرتبط.",
        autoGrouperTitle: "تعرف على Auto-Grouper",
        autoGrouperDesc: "توقف عن إضاعة الساعات في الربط اليدوي. يقوم محركنا الذكي بمسح أنماط SKU الخاصة بك وتجميع كل شيء تلقائيًا.",
        skuPatterns: "أنماط SKU الخاصة بك:",
        skuResult: "النتيجة:",
        skuSuccess: "تم إنشاء مجموعة مرتبطة تلقائيًا!",
        ctaTitle: "هل أنت جاهز لأتمتة تنويعات WooCommerce الخاصة بك؟",
        ctaSubtitle: "انضم إلى مستقبل تنظيم المنتجات لعملاء TheZ Studio.",
        ctaBtn: "احصل على الملحق"
      }
    },
    contact: {
      titlePrefix: "لنتحدث عن ",
      titleHighlight: "مشروعك",
      desc: "هل لديك مشروع SaaS، تجارة إلكترونية أو بيانات؟ لنناقش كيف يمكن لهندستنا أن تخدم نموك.",
      emailLabel: "البريد الإلكتروني",
      phoneLabel: "الهاتف و واتساب",
      locationLabel: "المقر الرئيسي",
      location: "الجزائر العاصمة، الجزائر\nعن بعد حول العالم",
      whatsappBtn: "دردشة عبر واتساب",
      whatsappFloat: "تحدث معنا",
      form: {
        successTitle: "تم إرسال الرسالة",
        successDesc: "مهندسونا يحللون طلبك. الرد خلال 24 ساعة.",
        resetBtn: "إرسال رسالة أخرى",
        name: "الاسم الكامل",
        phone: "الهاتف",
        email: "البريد المهني",
        service: "الخدمة المطلوبة",
        serviceOptions: {
          ecommerce: "تجارة إلكترونية / SaaS",
          software: "هندسة البرمجيات / AI",
          data: "علوم البيانات / Analytics",
          other: "طلب آخر"
        },
        message: "تفاصيل المشروع",
        submit: "بدء التعاون",
        submitting: "جاري الإرسال..."
      }
    },
    footer: {
      copyright: "© " + new Date().getFullYear() + " StudioZ Digital Lab."
    }
  }
};