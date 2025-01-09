"use client";

import FeatureTag from "@/components/feature-tag";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { useState } from "react";
import { TEMPLATES } from "./data";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";

export default function ListZone() {
    const [onlyFree, setOnlyFree] = useState(false);

    const OnlyFree = () => (
        <div className="flex items-center space-x-2">
            <Checkbox id="only-free"
                checked={onlyFree}
                onCheckedChange={(checked) => setOnlyFree(checked.valueOf() as boolean)}
            />
            <label
                htmlFor="only-free"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                Only free
            </label>
        </div>
    );

    return (
        <div>
            <div className="flex flex-col gap-2">
                <div className="flex">
                    <OnlyFree />
                </div>
                <Separator />
                <div className="flex">

                </div>
            </div>
            <div className="flex flex-wrap">
                {Object.entries(TEMPLATES).map(([key, item], index) => (onlyFree ? item.price.includes("Free") : true) && (
                    <div key={index} className="max-sm:w-full sm:w-1/2 p-2 box-border">
                        <Card className="w-full h-full flex flex-col" key={index}>
                            <CardHeader>
                                <CardTitle>
                                    <div className="flex flex-row items-center gap-2">
                                        <Image src={item.icon} alt={item.name} width={20} height={20} />
                                        {item.name}
                                    </div>
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <div className="flex flex-col justify-between h-full">
                                    <div>
                                        <Table>
                                            <TableBody>
                                                <TableRow>
                                                    <TableCell className="font-medium">Price</TableCell>
                                                    <TableCell className="text-right">{item.price}</TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            {item.short_features.map((feature) => (
                                                <FeatureTag key={feature.id} feature={feature.label} variant={feature.status} />
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <Separator className="my-2" />
                                        <div className="flex flex-row-reverse">
                                            <a href={`/dev/boilerplate/next.js/${key}`} target="_blank">
                                                <Button variant="ghost">
                                                    Detail<HiMiniArrowTopRightOnSquare className="w-4 h-4" /></Button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
} 