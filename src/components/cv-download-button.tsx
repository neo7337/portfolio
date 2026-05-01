"use client";

import { Button } from "@/components/ui/button";
import { downloadPDF } from "@/lib/utils";

export function CVDownloadButton() {
    return (
        <Button
            type="button"
            size="sm"
            className="px-2"
            onClick={() => downloadPDF("Aditya_Kumar_Resume.pdf")}
        >
            Download CV
        </Button>
    );
}
