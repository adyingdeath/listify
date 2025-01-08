import FeatureTag from "@/components/feature-tag";
import { TEMPLATES } from "../data";
import Image from "next/image";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

import { FaAngleRight } from "react-icons/fa6";
import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";

export default function Page() {
    return (
        <div>
            <div className="flex items-center gap-1 text-sm font-light text-gray-800 dark:text-gray-200">
                <a href="/dev/boilerplate/next.js">
                    List
                </a>
                <FaAngleRight className="w-3 h-3" />
                <div>Shipfast</div>
            </div>

            <div className="flex flex-row items-center justify-between gap-2">
                <h1 className="text-2xl font-bold">{TEMPLATES.shipfast.name}</h1>
                <a href={TEMPLATES.shipfast.url} target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost">
                        Check out<HiMiniArrowTopRightOnSquare className="w-4 h-4" />
                    </Button>
                </a>
            </div>

            <Image src={TEMPLATES.shipfast.image} alt={TEMPLATES.shipfast.name} width={500} height={500}
                className="w-full rounded-lg my-4" />
            <Table>
                <TableBody>
                    <TableRow>
                        <TableCell className="font-medium">Price</TableCell>
                        <TableCell className="text-right">{TEMPLATES.shipfast.price}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>

            <Separator className="my-4" />
            <p className="text-sm font-light text-gray-800 dark:text-gray-200">{TEMPLATES.shipfast.description}</p>

            {/* Display features by category */}
            <div className="space-y-6 mt-4">
                {Object.entries(TEMPLATES.shipfast.features).map(([category, features]) => (
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