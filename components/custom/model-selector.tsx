"use client";

import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { useOptimistic, useState, useMemo } from "react";
import { models } from "@/ai/models";

export function ModelSelector({
    selectedModelId,
    className,
}: {
    selectedModelId: string;
    className?: string;
}) {
    const [open, setOpen] = useState(false);
    const [optimisticModelId, setOptimisticModelId] = useOptimistic(selectedModelId);

    const selectModel = useMemo(
        () => models.find((model) => model.id === optimisticModelId),
        [optimisticModelId]
    )


    return (
        <DropdownMenu open={open} onOpenChange={setOpen}>
            <DropdownMenuTrigger asChild className={cn('', className)}>
                <Button variant="ghost" className="">
                    {selectModel?.label}
                </Button>
            </DropdownMenuTrigger>
        </DropdownMenu>
    )
}