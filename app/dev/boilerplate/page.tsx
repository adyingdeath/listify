import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function Page() {
    return (
        <div className="flex flex-col items-center">
            <Link href="/dev/boilerplate/next.js">
                <Card>
                    <CardHeader>
                        <CardTitle>Next.js Boilerplate</CardTitle>
                        <CardDescription>Collection of Next.js boilerplates to kickstart your development</CardDescription>
                    </CardHeader>
                </Card>
            </Link>
        </div>
    );
}