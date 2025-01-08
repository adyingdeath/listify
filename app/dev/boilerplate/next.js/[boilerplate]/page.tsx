import FeatureTag from "@/components/feature-tag";
import { TEMPLATES } from "../data";
import Image from "next/image";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { notFound } from "next/navigation";

import { FaAngleRight } from "react-icons/fa6";
import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";

interface PageProps {
    params: Promise<{
        boilerplate: string;
    }>;
}

export default async function Page({ params }: PageProps) {
    const template = TEMPLATES[(await params).boilerplate];

    if (!template) {
        notFound();
    }

    return (
        <div>
            <div className="flex items-center gap-1 text-sm font-light text-gray-800 dark:text-gray-200">
                <a href="/dev/boilerplate/next.js">
                    List
                </a>
                <FaAngleRight className="w-3 h-3" />
                <div>{template.name}</div>
            </div>

            <div className="flex flex-row items-center justify-between gap-2">
                <h1 className="text-2xl font-bold">{template.name}</h1>
                <a href={template.url} target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost">
                        Check out<HiMiniArrowTopRightOnSquare className="w-4 h-4" />
                    </Button>
                </a>
            </div>

            <Image src={template.image} alt={template.name} width={500} height={500}
                className="w-full rounded-lg my-4" />
            <Table>
                <TableBody>
                    <TableRow>
                        <TableCell className="font-medium">Price</TableCell>
                        <TableCell className="text-right">{template.price}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>

            <Separator className="my-4" />
            <p className="text-sm font-light text-gray-800 dark:text-gray-200">{template.description}</p>

            {/* Display features by category */}
            <div className="space-y-6 mt-4">
                {Object.entries(template.features).map(([category, features]) => (
                    <div key={category}>
                        <h2 className="text-lg font-semibold mb-2">{category}</h2>
                        <div className="flex flex-wrap gap-2">
                            {features.map((feature) => (
                                <FeatureTag
                                    key={feature.id}
                                    feature={feature.label}
                                    variant={feature.status}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
} 