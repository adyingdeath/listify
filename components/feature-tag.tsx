import { Check, X, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

type FeatureTagVariant = "with" | "without" | "unknown";

export default function FeatureTag({ 
    feature, 
    variant 
}: { 
    feature: string, 
    variant: FeatureTagVariant 
}) {
    const variants = {
        with: {
            containerClass: "bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300",
            icon: Check
        },
        without: {
            containerClass: "bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300",
            icon: X
        },
        unknown: {
            containerClass: "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300",
            icon: HelpCircle
        },
        normal: {
            containerClass: "bg-gray-100 text-black dark:bg-gray-800 dark:text-gray-300",
            icon: () => <div className="hidden"></div>
        }
    };

    const { containerClass, icon: Icon } = variants[variant];

    return (
        <span className={cn(
            "inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium",
            containerClass
        )}>
            {feature}
            <Icon className="w-3.5 h-3.5" />
        </span>
    );
}