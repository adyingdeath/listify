import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function Page() {
    return (
        <div className="flex flex-col items-center">
            <Link href="/dev/boilerplate/">
                <Card>
                    <CardHeader>
                        <CardTitle>Boilerplate Collection</CardTitle>
                        <CardDescription>List of handpicked project starters to kickstart your development</CardDescription>
                    </CardHeader>
                </Card>
            </Link>
        </div>
    );
}