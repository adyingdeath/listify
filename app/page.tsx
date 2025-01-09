import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-2xl font-bold">🔥Hot</h2>
      <Link className="w-full" href="/dev/boilerplate/next.js">
        <Card>
          <CardHeader>
            <CardTitle>Next.js Boilerplate</CardTitle>
            <CardDescription>Collection of Next.js boilerplates to kickstart your development</CardDescription>
          </CardHeader>
        </Card>
      </Link>
      <h2 className="text-2xl font-bold">🔥Categories</h2>
      <Link className="w-full" href="/dev">
        <Card>
          <CardHeader>
            <CardTitle>Developer Resources</CardTitle>
            <CardDescription>Curated resources for developers, including boilerplates, tools, libraries and more</CardDescription>
          </CardHeader>
        </Card>
      </Link>
    </div>
  );
}

