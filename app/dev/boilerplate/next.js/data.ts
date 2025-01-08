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

    // Deployment Features
    VERCEL: { id: "vercel", label: "Vercel Deploy" },

    // Tech Stack Features
    TAILWIND: { id: "tailwind", label: "Tailwind" },
    SHADCN_UI: { id: "shadcn-ui", label: "Shadcn UI" },
    DAISYUI: { id: "daisyui", label: "DaisyUI" },
    TYPESCRIPT: { id: "typescript", label: "Typescript" },
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
        icon: "/res/dev/boilerplate/next.js/shipfast.icon.ico",
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
            ]
        },
    },
};

export { TEMPLATES };