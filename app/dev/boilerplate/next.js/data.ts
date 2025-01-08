// Define all available features
export type Feature = {
    id: string;
    label: string;
};

// Feature with status
export type FeatureWithStatus = Feature & {
    status: "with" | "without" | "unknown" | "normal";
};

// All available features
export const FEATURES = {
    // Payment Features
    STRIPE: { id: "stripe", label: "Stripe" },
    LEMON_SQUEEZY: { id: "lemonsqueezy", label: "Lemonsqueezy" },

    // Auth Features
    GOOGLE_AUTH: { id: "google-auth", label: "Google OAuth" },
    GITHUB_AUTH: { id: "github-auth", label: "Github OAuth" },
    MAGIC_LINKS: { id: "magic-links", label: "Magic Links" },
    EMAIL_AUTH: { id: "email-auth", label: "Email Auth" },

    // Database Features
    MONGODB: { id: "mongodb", label: "MongoDB" },
    POSTGRES: { id: "postgres", label: "Postgres" },
    SUPABASE: { id: "supabase", label: "Supabase" },

    // Core Features
    LANDING_PAGE: { id: "landing-page", label: "Landing Page" },
    BLOG: { id: "blog", label: "Blog" },
    SEO: { id: "seo", label: "SEO" },
    EMAIL: { id: "email", label: "Email" },
    WAITLIST: { id: "waitlist", label: "Waitlist" },
    DARK_MODE: { id: "dark-mode", label: "Dark mode" },
    TUTORIALS: { id: "tutorials", label: "Tutorials" },
    CODE_TEMPLATE: { id: "code-template", label: "Code Template" },

    // Deployment Features
    VERCEL: { id: "vercel", label: "Vercel Deploy" },

    // Tech Stack Features
    TAILWIND: { id: "tailwind", label: "Tailwind" },
    SHADCN_UI: { id: "shadcn-ui", label: "Shadcn UI" },
    DAISYUI: { id: "daisyui", label: "DaisyUI" },
    TYPESCRIPT: { id: "typescript", label: "Typescript" },
    FIREBASE: { id: "firebase", label: "Firebase" },

    // Others
    CHATGPT_PROMPT_FOR_TERMS_AND_CONDITIONS: { id: "chatgpt-prompt-for-terms-and-conditions", label: "ChatGPT Prompt for terms & privacy", status: "with" },
    NEWSLETTER: { id: "newsletter", label: "Newsletter" },
    CONTACT_FORM: { id: "contact-form", label: "Contact Form" },
    ANALYTICS: { id: "analytics", label: "Analytics" },

    ROLE_BASED_ACCESS: { id: "rbac", label: "Role Based Access Control" },
    DOCUMENTATION: { id: "documentation", label: "Documentation" },
    I18N: { id: "i18n", label: "i18n" }
} as const;

// Type for the values in FEATURES
export type FeatureType = typeof FEATURES[keyof typeof FEATURES];

// Type for features grouped by category
export type FeaturesByCategory = {
    [K: string]: FeatureWithStatus[];
};

interface BoilerplateListItem {
    urlname: string;
    name: string;
    price: string;
    url: string;
    icon: string;
    image: string;
    description: string;
    short_features: FeatureWithStatus[];
    features: FeaturesByCategory;
}

// Define templates object type
type TemplatesType = {
    [key: string]: Omit<BoilerplateListItem, 'urlname'>;
};

const TEMPLATES: TemplatesType = {
    shipfast: {
        name: "Shipfast",
        price: "$199,$249,$299",
        url: "https://shipfa.st",
        icon: "/res/dev/boilerplate/next.js/shipfast.icon.webp",
        image: "/res/dev/boilerplate/next.js/shipfast.webp",
        description: "ShipFast is a comprehensive Next.js boilerplate designed for rapid SaaS and web application development. It integrates essential features including Stripe/LemonSqueezy for payments, MongoDB/Supabase for database management, and Google OAuth/Magic Links for authentication. The boilerplate comes with a modern UI built on Tailwind CSS and Shadcn UI, complete with dark mode support. It also includes pre-built components for SEO optimization, blog functionality, email integration, and waitlist management. Perfect for entrepreneurs looking to launch their web projects quickly without dealing with repetitive technical setups.",
        short_features: [
            { ...FEATURES.STRIPE, status: "with" },
            { ...FEATURES.LEMON_SQUEEZY, status: "with" },
            { ...FEATURES.LANDING_PAGE, status: "with" },
            { ...FEATURES.GOOGLE_AUTH, status: "with" },
            { ...FEATURES.EMAIL, status: "with" },
            { ...FEATURES.DARK_MODE, status: "with" },
        ],
        features: {
            "Core": [
                { ...FEATURES.BLOG, status: "with" },
                { ...FEATURES.SEO, status: "with" },
                { ...FEATURES.EMAIL, status: "with" },
                { ...FEATURES.WAITLIST, status: "with" },
                { ...FEATURES.LANDING_PAGE, status: "with" },
            ],
            "Payment": [
                { ...FEATURES.STRIPE, status: "with" },
                { ...FEATURES.LEMON_SQUEEZY, status: "with" },
            ],
            "Auth": [
                { ...FEATURES.GOOGLE_AUTH, status: "with" },
                { ...FEATURES.MAGIC_LINKS, status: "with" },
                { ...FEATURES.EMAIL_AUTH, status: "with" },
            ],
            "Tech Stack": [
                { ...FEATURES.TYPESCRIPT, status: "with" },
                { ...FEATURES.TAILWIND, status: "with" },
                { ...FEATURES.DAISYUI, status: "with" },
                { ...FEATURES.SUPABASE, status: "with" },
                { ...FEATURES.MONGODB, status: "with" },
            ],
            "Others": [
                { ...FEATURES.DARK_MODE, status: "with" },
                { ...FEATURES.VERCEL, status: "with" },
                { ...FEATURES.TUTORIALS, status: "with" },
                { ...FEATURES.CODE_TEMPLATE, status: "with" },
                { ...FEATURES.CHATGPT_PROMPT_FOR_TERMS_AND_CONDITIONS, status: "with" },
            ]
        },
    },
    divjoy: {
        name: "Divjoy",
        price: "$199",
        url: "https://divjoy.com",
        icon: "/res/dev/boilerplate/next.js/divjoy.icon.webp",
        image: "/res/dev/boilerplate/next.js/divjoy.webp",
        description: "Divjoy is a powerful React codebase generator that helps you build SaaS products and landing pages 10x faster. Its unique advantage lies in its highly customizable stack selection - letting you choose your preferred framework, UI kit, authentication, database, and more. The generated codebase is production-ready with all integrations perfectly wired up, saving weeks of development time.",
        short_features: [
            { ...FEATURES.LANDING_PAGE, status: "with" },
            { ...FEATURES.STRIPE, status: "with" },
            { ...FEATURES.GOOGLE_AUTH, status: "with" },
            { ...FEATURES.DARK_MODE, status: "with" },
            { ...FEATURES.TAILWIND, status: "with" },
        ],
        features: {
            "Core": [
                { ...FEATURES.LANDING_PAGE, status: "with" },
                { ...FEATURES.BLOG, status: "with" },
                { ...FEATURES.SEO, status: "with" },
                { ...FEATURES.EMAIL, status: "with" },
                { ...FEATURES.WAITLIST, status: "with" },
                { ...FEATURES.DARK_MODE, status: "with" },
                { ...FEATURES.CODE_TEMPLATE, status: "with" },
            ],
            "Payment": [
                { ...FEATURES.STRIPE, status: "with" },
                { ...FEATURES.LEMON_SQUEEZY, status: "without" },
            ],
            "Auth": [
                { ...FEATURES.GOOGLE_AUTH, status: "with" },
                { ...FEATURES.GITHUB_AUTH, status: "with" },
                { ...FEATURES.EMAIL_AUTH, status: "with" },
                { ...FEATURES.MAGIC_LINKS, status: "without" },
            ],
            "Tech Stack": [
                { ...FEATURES.TYPESCRIPT, status: "with" },
                { ...FEATURES.TAILWIND, status: "with" },
                { ...FEATURES.SHADCN_UI, status: "with" },
                { ...FEATURES.MONGODB, status: "with" },
                { ...FEATURES.SUPABASE, status: "with" },
                { ...FEATURES.FIREBASE, status: "with" },
            ],
            "Others": [
                { ...FEATURES.VERCEL, status: "with" },
                { ...FEATURES.TUTORIALS, status: "with" },
            ]
        },
    },
    makerkit: {
        "name": "Makerkit",
        "price": "Free,$299,$599,$Custom",
        "url": "https://makerkit.dev",
        "icon": "/res/dev/boilerplate/next.js/makerkit.icon.webp",
        "image": "/res/dev/boilerplate/next.js/makerkit.webp",
        "description": "Makerkit is a comprehensive Next.js SaaS starter kit designed for rapid B2B SaaS development. It features a complete authentication system, multi-tenancy support, and integrated billing solutions with Stripe/Lemon Squeezy. Built with modern technologies like Typescript and Tailwind CSS, it includes essential features such as blog generation, documentation tools, and SEO optimization. The kit emphasizes code quality with strict TypeScript settings and E2E testing support. Perfect for developers and teams looking to launch production-ready SaaS applications quickly while maintaining high standards of quality and scalability.",
        "short_features": [
            { ...FEATURES.TYPESCRIPT, status: "with" },
            { ...FEATURES.STRIPE, status: "with" },
            { ...FEATURES.LEMON_SQUEEZY, status: "with" },
            { ...FEATURES.SHADCN_UI, status: "with" }
        ],
        "features": {
            "Core": [
                { ...FEATURES.LANDING_PAGE, status: "with" },
                { ...FEATURES.BLOG, status: "with" },
                { ...FEATURES.SEO, status: "with" },
                { ...FEATURES.DARK_MODE, status: "with" },
                { ...FEATURES.TUTORIALS, status: "with" },
                { ...FEATURES.ANALYTICS, status: "with" },
                { ...FEATURES.NEWSLETTER, status: "with" },
                { ...FEATURES.CONTACT_FORM, status: "with" }
            ],
            "Payment": [
                { ...FEATURES.STRIPE, status: "with" },
                { ...FEATURES.LEMON_SQUEEZY, status: "with" }
            ],
            "Auth": [
                { ...FEATURES.GOOGLE_AUTH, status: "with" },
                { ...FEATURES.GITHUB_AUTH, status: "with" },
                { ...FEATURES.MAGIC_LINKS, status: "with" },
                { ...FEATURES.EMAIL_AUTH, status: "with" }
            ],
            "Tech Stack": [
                { ...FEATURES.TYPESCRIPT, status: "with" },
                { ...FEATURES.TAILWIND, status: "with" },
                { ...FEATURES.SHADCN_UI, status: "with" },
                { ...FEATURES.VERCEL, status: "with" },
                { ...FEATURES.SUPABASE, status: "with" },
                { ...FEATURES.FIREBASE, status: "with" }
            ]
        }
    },
    "saas-ui": {
        "name": "Saas UI Pro",
        "price": "Free,€197,€797,€4750",
        "url": "https://saas-ui.dev",
        "icon": "/res/dev/boilerplate/next.js/saas-ui.icon.webp",
        "image": "/res/dev/boilerplate/next.js/saas-ui.webp",
        "description": "Saas UI Pro is a comprehensive React toolkit designed specifically for building SaaS applications. It provides a production-ready component library built on top of Chakra UI, with extensive features for authentication, forms, data tables, and more. The toolkit includes Next.js starter kits, Electron support, and comes with built-in features for user onboarding, feature flags, and billing integration. It's particularly valuable for developers and teams looking to build professional-grade SaaS applications without reinventing common UI patterns.",
        "short_features": [
            { ...FEATURES.TYPESCRIPT, status: "with" },
            { ...FEATURES.DARK_MODE, status: "with" },
            { ...FEATURES.DOCUMENTATION, status: "with" },
            { ...FEATURES.ROLE_BASED_ACCESS, status: "with" }
        ],
        "features": {
            "Core": [
                { ...FEATURES.LANDING_PAGE, status: "with" },
                { ...FEATURES.DOCUMENTATION, status: "with" },
                { ...FEATURES.CODE_TEMPLATE, status: "with" },
                { ...FEATURES.I18N, status: "with" }
            ],
            "Auth": [
                { ...FEATURES.EMAIL_AUTH, status: "with" },
                { ...FEATURES.MAGIC_LINKS, status: "with" },
                { ...FEATURES.GOOGLE_AUTH, status: "with" }
            ],
            "Tech Stack": [
                { ...FEATURES.TYPESCRIPT, status: "with" },
                { ...FEATURES.TAILWIND, status: "without" },
                { ...FEATURES.SHADCN_UI, status: "without" },
                { ...FEATURES.VERCEL, status: "with" }
            ],
            "Others": [
                { ...FEATURES.DARK_MODE, status: "with" },
                { ...FEATURES.ANALYTICS, status: "with" },
                { ...FEATURES.ROLE_BASED_ACCESS, status: "with" },
                { ...FEATURES.NEWSLETTER, status: "with" },
                { ...FEATURES.CONTACT_FORM, status: "with" }
            ]
        }
    }
};

export { TEMPLATES };