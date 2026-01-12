import type { IPricing } from "../types";

export const pricingData: IPricing[] = [
    {
        name: "Basic",
        price: 29,
        period: "month",
        features: [
            "50 AI Thubmnails/mo",
            "Basic template",
            "standard resolutions",
            "No Watermark",
            
        ],
        mostPopular: false
    },
    {
        name: "Pro",
        price: 79,
        period: "month",
        features: [
            "Unlimited AI Thumbnails",
            "premium Template",
            "4k Resolution",
            "A/B Testing tools",
            "Priority support",
            "Custom fonts",
            "Brand kit analysis"
        ],
        mostPopular: true
    },
    {
        name: "Enterprise",
        price: 199,
        period: "month",
        features: [
            "Everything in pro",
            "API Access",
            "Team collaboration",
            "Custom branding",
            "Dedicated account manager"
        ],
        mostPopular: false
    }
];