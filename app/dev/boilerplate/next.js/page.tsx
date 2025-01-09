import { Metadata } from "next";
import ListZone from "./list-zone";

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: `Next.js Boilerplate, Listify`,
        description: `Next.js Boilerplate, Listify`,
        openGraph: {
            title: `Next.js Boilerplate, Listify`,
            description: `Next.js Boilerplate, Listify`,
            images: ["/res/dev/boilerplate/next.js/next.js.webp"],
        },
    };
}

export default function Page() {
    return <ListZone />;
}

