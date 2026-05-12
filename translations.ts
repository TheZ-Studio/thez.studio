export type Language = 'fr' | 'en' | 'ar';

export const translations = {
  fr: {
    meta: {
      title: "StudioZ Digital Lab | Ingénierie Logicielle, SaaS & AI",
      description: "Agence digitale experte en E-commerce, SaaS, Développement Logiciel Sur-Mesure et Data Science à Alger."
    },
    nav: {
      expertise: "Expertise",
      packages: "Offres",
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
      titleHighlight: "WooCommerce & E-commerce",
      subtitle: "Solutions prêtes à l'emploi pour booster votre boutique WooCommerce.",
      items: [
        {
          id: "alv",
          title: "TheZ Auto-Linked Variations",
          tag: "Populaire",
          desc: "Augmentez vos conversions en liant intelligemment vos produits par SKU.",
          features: ["Auto-Grouper par SKU", "SEO Optimisé", "Haute Performance"],
          price: "2,000 DA / licence",
          cta: "En savoir plus",
          longDesc: "Solution avancée pour WooCommerce qui transforme la façon dont vos clients découvrent vos produits en liant des produits réels entre eux via SKU.",
          detailedFeatures: ["Groupement intelligent", "Amélioration SEO massive", "Navigation fluide", "Support 50k+ produits"]
        },
        {
          id: "logistics",
          title: "WooCommerce Logistics Hub",
          tag: "Premium",
          desc: "Hub logistique complet intégrant Yalidine, Mylerz et plus.",
          features: ["Multi-transporteurs", "Suivi Automatique", "Gestion des Échanges"],
          price: "8,000 DA / licence",
          cta: "En savoir plus",
          longDesc: "Transformez votre boutique en centre de commandement logistique. Automatisez l'expédition, le suivi et les retours avec les transporteurs locaux.",
          detailedFeatures: ["Intégration Yalidine/Mylerz", "Webhook de suivi en temps réel", "Portail de suivi client", "Système d'échange intégré"]
        },
        {
          id: "sheet",
          title: "WooCommerce Sheet Sync",
          tag: "Productivité",
          desc: "Synchronisez vos commandes avec Google Sheets en temps réel pour une gestion simplifiée.",
          features: ["Sync Temps Réel", "Export Auto", "Gestion Stocks"],
          price: "6,000 DA / licence",
          cta: "En savoir plus",
          longDesc: "Connectez votre boutique à Google Sheets. Chaque nouvelle commande est automatiquement ajoutée à votre feuille de calcul pour un suivi sans faille.",
          detailedFeatures: ["Mise à jour bidirectionnelle", "Champs personnalisables", "Zéro latence", "Backup automatique"]
        },
        {
          id: "fast-checkout",
          title: "COD Fast Checkout Algeria",
          tag: "Conversion",
          desc: "Formulaire de commande rapide optimisé pour le marché algérien.",
          features: ["Checkout One-Page", "Géo-localisation DZ", "Calcul Frais Dynamique"],
          price: "4,000 DA / licence",
          cta: "En savoir plus",
          longDesc: "Augmentez votre taux de conversion avec un formulaire ultra-rapide incluant toutes les Wilayas et Communes d'Algérie.",
          detailedFeatures: ["Wilayas/Communes pré-chargées", "Frais de port par zone", "Design mobile-first", "Validation de téléphone"]
        },
        {
          id: "cart-recovery",
          title: "Dz Cart Recovery",
          tag: "Marketing",
          desc: "Récupérez vos ventes perdues via WhatsApp et Email.",
          features: ["Capture de Leads", "Relance WhatsApp", "Coupons Dynamiques"],
          price: "4,500 DA / licence",
          cta: "En savoir plus",
          longDesc: "Capturez les intentions d'achat avant l'abandon et relancez vos clients automatiquement avec des offres personnalisées.",
          detailedFeatures: ["Dashboard de récupération", "Export Meta Ads (CSV)", "Générateur de coupons VIP", "Stats de conversion"]
        },
        {
          id: "satim",
          title: "Satim CIB Gateway",
          tag: "Paiement",
          desc: "Intégration officielle des paiements CIB et Edahabia.",
          features: ["Paiement Sécurisé", "Cartes Nationales", "Reçus PDF"],
          price: "12,000 DA / licence",
          cta: "En savoir plus",
          longDesc: "Acceptez les paiements par carte CIB et Edahabia directement sur votre boutique WooCommerce en toute sécurité.",
          detailedFeatures: ["Certifié Satim", "Redirection sécurisée", "Confirmation auto de commande", "Log de transactions"]
        },
        {
          id: "marketing",
          title: "Woo Marketing Suite",
          tag: "Growth",
          desc: "Solution marketing ultime : Badges, recommandations IA et optimisation du tunnel de vente.",
          features: ["Badges Dynamiques", "IA Recommendations", "Infinite Scroll"],
          price: "18,000 DA / licence",
          cta: "En savoir plus",
          longDesc: "Une suite d'outils puissants conçus pour maximiser votre panier moyen et transformer vos visiteurs en clients fidèles.",
          detailedFeatures: ["Algorithme de recommandation", "Pills de catégories", "Badges de stock urgence", "Analytics Marketing avancés"]
        }
      ]
    },
    packages: {
      titlePrefix: "Nos Offres d'",
      titleHighlight: "Accompagnement",
      subtitle: "Des solutions complètes pour lancer et propulser votre business digital.",
      items: [
        {
          id: "pkg-ecommerce",
          title: "Création Boutique E-commerce",
          tag: "Complet",
          desc: "Solution clé en main pour vendre en Algérie et à l'international.",
          features: ["Design Custom", "Paiement & Livraison", "Formation Admin"],
          price: "dès 60,000 DA",
          cta: "Démarrer",
          longDesc: "Nous concevons votre boutique WooCommerce optimisée pour la conversion, incluant tous nos plugins premium et une configuration logistique totale.",
          detailedFeatures: ["Architecture scalable", "Optimisation SEO", "Sécurisation totale", "Support technique 12 mois"]
        },
        {
          id: "pkg-vitrine",
          title: "Site Vitrine Professionnel",
          tag: "Corporate",
          desc: "Établissez votre présence en ligne avec un site élégant et performant.",
          features: ["Multi-pages", "SEO Local", "Contact & Devis"],
          price: "dès 35,000 DA",
          cta: "Démarrer",
          longDesc: "Un site vitrine moderne pour présenter vos services et capter de nouveaux prospects avec une image de marque forte.",
          detailedFeatures: ["Design Responsive", "Intégration Google Maps", "Blog/Actualités", "Vitesse de chargement optimale"]
        },
        {
          id: "pkg-custom",
          title: "Solutions Logiciels & IA",
          tag: "Sur Mesure",
          desc: "Développement spécifique pour vos besoins métiers complexes.",
          features: ["SaaS / Dashboard", "Automatisation IA", "API Intégration"],
          price: "Sur Devis",
          cta: "Discuter",
          longDesc: "Besoin d'un outil métier unique ? Nous développons vos plateformes SaaS et intégrons l'intelligence artificielle pour automatiser vos processus.",
          detailedFeatures: ["Analyse fonctionnelle", "Stack moderne (React/Node)", "Intelligence Artificielle", "Maintenance évolutive"]
        }
      ]
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
      ctaTitle: "Prêt à démarrer ?",
      ctaDesc: "Envoyez-nous un email détaillant vos besoins et nous reviendrons vers vous sous 24 heures.",
      ctaMail: "contact@thez.studio"
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
      packages: "Packages",
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
      titlePrefix: "Our ",
      titleHighlight: "WooCommerce & E-commerce Plugins",
      subtitle: "Off-the-shelf solutions to supercharge your WooCommerce store.",
      items: [
        {
          id: "alv",
          title: "TheZ Auto-Linked Variations",
          tag: "Popular",
          desc: "Boost conversions by intelligently linking products via SKU.",
          features: ["SKU Auto-Grouper", "SEO Optimized", "High Performance"],
          price: "2,000 DA / license",
          cta: "Learn More",
          longDesc: "Advanced WooCommerce solution that transforms product discovery by linking real products via SKU radicals.",
          detailedFeatures: ["Intelligent grouping", "Massive SEO boost", "Seamless UX", "50k+ products support"]
        },
        {
          id: "logistics",
          title: "WooCommerce Logistics Hub",
          tag: "Premium",
          desc: "Complete logistics hub integrating local carriers.",
          features: ["Multi-carrier", "Auto-Tracking", "Exchange Management"],
          price: "8,000 DA / license",
          cta: "Learn More",
          longDesc: "Transform your store into a logistics command center. Automate shipping and tracking with local carriers like Yalidine.",
          detailedFeatures: ["Yalidine/Mylerz Integration", "Real-time Webhooks", "Customer Tracking Portal", "Integrated Exchange System"]
        },
        {
          id: "sheet",
          title: "WooCommerce Sheet Sync",
          tag: "Productivity",
          desc: "Sync your orders with Google Sheets in real-time for simplified management.",
          features: ["Real-time Sync", "Auto Export", "Stock Management"],
          price: "6,000 DA / license",
          cta: "Learn More",
          longDesc: "Connect your store to Google Sheets. Every new order is automatically added to your spreadsheet for seamless tracking.",
          detailedFeatures: ["Bidirectional update", "Customizable fields", "Zero latency", "Automatic backup"]
        },
        {
          id: "fast-checkout",
          title: "COD Fast Checkout Algeria",
          tag: "Conversion",
          desc: "Quick checkout form optimized for the Algerian market.",
          features: ["One-Page Checkout", "DZ Géo-localization", "Dynamic Shipping"],
          price: "4,000 DA / license",
          cta: "Learn More",
          longDesc: "Boost conversion rates with an ultra-fast form including all Algerian Wilayas and Communes.",
          detailedFeatures: ["Pre-loaded Wilayas/Communes", "Zone-based shipping", "Mobile-first design", "Phone validation"]
        },
        {
          id: "cart-recovery",
          title: "Dz Cart Recovery",
          tag: "Marketing",
          desc: "Recover lost sales via WhatsApp and Email.",
          features: ["Lead Capture", "WhatsApp Recovery", "Dynamic Coupons"],
          price: "4,500 DA / license",
          cta: "Learn More",
          longDesc: "Capture purchase intent before abandonment and re-engage customers automatically.",
          detailedFeatures: ["Recovery dashboard", "Meta Ads Export (CSV)", "VIP Coupon Generator", "Conversion stats"]
        },
        {
          id: "satim",
          title: "Satim CIB Gateway",
          tag: "Payment",
          desc: "Official CIB and Edahabia payment integration.",
          features: ["Secure Payment", "National Cards", "PDF Receipts"],
          price: "12,000 DA / license",
          cta: "Learn More",
          longDesc: "Accept CIB and Edahabia card payments directly on your store securely.",
          detailedFeatures: ["Satim Certified", "Secure redirection", "Auto order confirmation", "Transaction logs"]
        },
        {
          id: "marketing",
          title: "Woo Marketing Suite",
          tag: "Growth",
          desc: "Ultimate marketing solution: Badges, AI recommendations, and funnel optimization.",
          features: ["Dynamic Badges", "AI Recommendations", "Infinite Scroll"],
          price: "18,000 DA / license",
          cta: "Learn More",
          longDesc: "A suite of powerful tools designed to maximize your average order value and turn visitors into loyal customers.",
          detailedFeatures: ["Recommendation algorithm", "Category pills", "Urgency stock badges", "Advanced Marketing analytics"]
        }
      ]
    },
    packages: {
      titlePrefix: "Our Service ",
      titleHighlight: "Packages",
      subtitle: "Complete solutions to launch and scale your digital business.",
      items: [
        {
          id: "pkg-ecommerce",
          title: "E-commerce Store Creation",
          tag: "Full",
          desc: "Turnkey solution to sell locally and internationally.",
          features: ["Custom Design", "Payment & Shipping", "Admin Training"],
          price: "from 60,000 DA",
          cta: "Start Now",
          longDesc: "We design your WooCommerce store optimized for conversion, including all our premium plugins.",
          detailedFeatures: ["Scalable architecture", "SEO Optimization", "Full Security", "12 months support"]
        },
        {
          id: "pkg-vitrine",
          title: "Professional Showcase Site",
          tag: "Corporate",
          desc: "Establish your online presence with a performance site.",
          features: ["Multi-page", "Local SEO", "Contact & Quote"],
          price: "from 35,000 DA",
          cta: "Start Now",
          longDesc: "A modern showcase site to present your services and capture new leads with a strong brand image.",
          detailedFeatures: ["Responsive Design", "Google Maps Integration", "Blog/News", "Optimal load speed"]
        },
        {
          id: "pkg-custom",
          title: "Software & AI Solutions",
          tag: "Custom",
          desc: "Specific development for complex business needs.",
          features: ["SaaS / Dashboard", "AI Automation", "API Integration"],
          price: "On Quote",
          cta: "Discuss",
          longDesc: "Need a unique business tool? We develop your SaaS platforms and integrate AI to automate processes.",
          detailedFeatures: ["Functional analysis", "Modern Stack", "Artificial Intelligence", "Evolutionary maintenance"]
        }
      ]
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
      ctaTitle: "Ready to Start?",
      ctaDesc: "Send us an email with your project details and our team will get back to you within 24 hours.",
      ctaMail: "contact@thez.studio"
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
      packages: "الباقات",
      lab: "المختبر",
      plugins: "الإضافات",
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
      titlePrefix: "إضافات ",
      titleHighlight: "ووكومرس، التجارة الإلكترونية",
      subtitle: "حلول برمجية متقدمة لتعزيز متجرك على WooCommerce وتطوير تجارتك.",
      items: [
        {
          id: "alv",
          title: "TheZ Auto-Linked Variations",
          tag: "الأكثر مبيعاً",
          desc: "ارفع معدلات التحويل من خلال ربط منتجاتك بذكاء عبر SKU.",
          features: ["تجميع تلقائي عبر SKU", "تحسين SEO", "أداء فائق"],
          price: "2000 DA / رخصة",
          cta: "اكتشف المزيد",
          longDesc: "حل متقدم لـ WooCommerce يغير طريقة اكتشاف العملاء لمنتجاتك من خلال ربط المنتجات الحقيقية ببعضها البعض.",
          detailedFeatures: ["تجميع تلقائي ذكي", "تعزيز هائل لـ SEO", "تجربة مستخدم سلسة", "دعم +50 ألف منتج"]
        },
        {
          id: "logistics",
          title: "WooCommerce Logistics Hub",
          tag: "احترافي",
          desc: "مركز لوجستي متكامل يربط متجرك بشركات الشحن (Yalidine, Mylerz).",
          features: ["ربط شركات الشحن", "تتبع تلقائي", "إدارة التبديل"],
          price: "8000 DA / رخصة",
          cta: "اكتشف المزيد",
          longDesc: "حول متجرك إلى مركز تحكم لوجستي. أتمتة الشحن والتتبع والتبديل مع شركات التوصيل المحلية.",
          detailedFeatures: ["دمج Yalidine / Mylerz", "تحديث تلقائي عبر Webhooks", "صفحة تتبع للعملاء", "نظام متطور لإدارة التبديل"]
        },
        {
          id: "sheet",
          title: "WooCommerce Sheet Sync",
          tag: "إنتاجية",
          desc: "مزامنة طلباتك مع Google Sheets لحظياً لتسهيل الإدارة والمتابعة.",
          features: ["مزامنة فورية", "تصدير آلي", "إدارة المخزون"],
          price: "6000 DA / رخصة",
          cta: "اكتشف المزيد",
          longDesc: "اربط متجرك بـ Google Sheets. كل طلب جديد يضاف تلقائياً لجدول البيانات الخاص بك لمتابعة دقيقة.",
          detailedFeatures: ["تحديث ثنائي الاتجاه", "حقول قابلة للتخصيص", "سرعة فائقة", "نسخ احتياطي آلي"]
        },
        {
          id: "fast-checkout",
          title: "COD Fast Checkout Algeria",
          tag: "تحويل",
          desc: "نموذج طلب سريع في صفحة واحدة مصمم خصيصاً للسوق الجزائري.",
          features: ["طلب في خطوة واحدة", "توزيع جيو-إداري DZ", "حساب شحن ديناميكي"],
          price: "4000 DA / رخصة",
          cta: "اكتشف المزيد",
          longDesc: "ارفع مبيعاتك بنسبة 30% من خلال نموذج طلب فائق السرعة يشمل جميع ولايات وبلديات الجزائر.",
          detailedFeatures: ["قائمة الولايات والبلديات جاهزة", "تعديل أسعار الشحن حسب المناطق", "تصميم متوافق مع الموبايل", "التحقق من صحة أرقام الهاتف"]
        },
        {
          id: "cart-recovery",
          title: "Dz Cart Recovery",
          tag: "تسويق",
          desc: "استرجع مبيعاتك الضائعة من خلال إعادة استهداف العملاء عبر واتساب.",
          features: ["التقاط بيانات العميل", "إعادة استهداف WhatsApp", "كوبونات خصم آلية"],
          price: "4500 DA / رخصة",
          cta: "اكتشف المزيد",
          longDesc: "التقط بيانات العميل قبل الخروج من الموقع وقم بإعادة استهدافه آلياً بعروض مخصصة.",
          detailedFeatures: ["لوحة تحكم للمبيعات الضائعة", "تصدير لجمهور Meta Ads", "مولد كوبونات VIP", "إحصائيات التحويل"]
        },
        {
          id: "satim",
          title: "Satim CIB Gateway",
          tag: "دفع إلكتروني",
          desc: "الربط الرسمي للدفع عبر البطاقة البنكية CIB والذهبية.",
          features: ["دفع آمن ومباشر", "البطاقات الوطنية", "وصولات PDF آلياً"],
          price: "12,000 DA / رخصة",
          cta: "اكتشف المزيد",
          longDesc: "اقبل المدفوعات عبر بطاقة CIB والذهبية مباشرة في متجرك وبكل أمان.",
          detailedFeatures: ["معتمد من Satim", "توجيه آمن ومشفر", "تأكيد آلي للطلبات المدفوعة", "سجل كامل للعمليات"]
        },
        {
          id: "marketing",
          title: "Woo Marketing Suite",
          tag: "نمو المبيعات",
          desc: "الحل التسويقي الأمثل: شارات ديناميكية، توصيات ذكية، وتحسين قمع البيع.",
          features: ["شارات ديناميكية", "توصيات ذكية (AI)", "Infinite Scroll"],
          price: "18,000 DA / رخصة",
          cta: "اكتشف المزيد",
          longDesc: "حزمة أدوات قوية مصممة لرفع قيمة السلة الشرائية وتحويل الزوار إلى عملاء دائمين.",
          detailedFeatures: ["خوارزمية توصيات متقدمة", "تصنيفات مرنة للبحث", "عدادات الاستعجال والمخزون", "تحليلات تسويقية معمقة"]
        }
      ]
    },
    packages: {
      titlePrefix: "باقات ",
      titleHighlight: "إنشاء المتاجر والحلول",
      subtitle: "حلول متكاملة لإطلاق وتطوير مشروعك الرقمي باحترافية عالية.",
      items: [
        {
          id: "pkg-ecommerce",
          title: "إنشاء متاجر إلكترونية ووكومرس",
          tag: "متكامل",
          desc: "تصميم وتطوير متاجر إلكترونية احترافية متكاملة مع حلول الدفع والشحن المحلية.",
          features: ["تصميم مخصص", "ربط الدفع والشحن", "تدريب على الإدارة"],
          price: "ابتداءً من 60,000 دج",
          cta: "ابدأ الآن",
          longDesc: "نصمم لك متجراً إلكترونياً متكاملاً مبنياً على WooCommerce، يتضمن جميع إضافاتنا البرمجية المتميزة لضمان أقصى أداء.",
          detailedFeatures: ["بنية تقنية قابلة للتوسع", "تحسين محركات البحث SEO", "تأمين وحماية شاملة", "دعم فني لمدة 12 شهر"]
        },
        {
          id: "pkg-vitrine",
          title: "إنشاء متاجر خاصة Vitrine",
          tag: "هوية",
          desc: "هوية رقمية قوية لشركتك من خلال متجر عرض احترافي يعكس خدماتك بجودة عالية.",
          features: ["متعدد الصفحات", "SEO محلي", "تواصل وطلبات"],
          price: "ابتداءً من 35,000 دج",
          cta: "ابدأ الآن",
          longDesc: "موقع عرض حديث يعرض خدماتك ومنتجاتك بجاذبية عالية، مصمم لجذب العملاء وبناء الثقة في علامتك التجارية.",
          detailedFeatures: ["تصميم متجاوب بالكامل", "ربط مع خرائط جوجل", "مدونة / أخبار الشركة", "سرعة تحميل فائقة"]
        },
        {
          id: "pkg-custom",
          title: "حلول برمجية حسب الطلب",
          tag: "برمجة خاصة",
          desc: "تطوير برمجيات مخصصة، أنظمة SaaS، ودمج الذكاء الاصطناعي لتطوير عملك.",
          features: ["أنظمة SaaS", "أتمتة بالذكاء الاصطناعي", "ربط API مخصص"],
          price: "حسب الطلب",
          cta: "تواصل معنا",
          longDesc: "هل لديك احتياج برمجي فريد؟ نقوم بتطوير منصاتك الرقمية ودمج تقنيات الذكاء الاصطناعي لأتمتة عملياتك.",
          detailedFeatures: ["تحليل وظيفي دقيق", "بناء بأحدث التقنيات", "ذكاء اصطناعي مدمج", "صيانة وتطوير مستمر"]
        }
      ]
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
      ctaTitle: "هل أنت مستعد للبدء؟",
      ctaDesc: "أرسل لنا بريداً إلكترونياً يتضمن تفاصيل مشروعك وسيقوم فريقنا بالرد عليك خلال 24 ساعة.",
      ctaMail: "contact@thez.studio"
    },
    footer: {
      copyright: "© " + new Date().getFullYear() + " StudioZ Digital Lab."
    }
  }
};