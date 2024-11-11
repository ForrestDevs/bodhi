"use client";

import { Check, Copy } from "lucide-react";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";

export default function ContractAddress() {
  const [isCopied, setIsCopied] = useState(false);
  const contractAddress = "FqmSqGpyMkg9ruU6CCzfVC1W5gwbCdhWG4AgH5xZpump"; // Fake contract address

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Reset copied state after 2 seconds
    });
  };

  return (
    <div className="flex flex-col sm:flex-row items-center gap-2 p-2 bg-[#5C1919]/5 rounded-lg max-w-full">
      <span className="text-sm font-medium text-[#5C1919]">
        Contract Address:
      </span>
      <code className="w-full sm:w-auto bg-white/50 px-3 py-1.5 rounded text-sm font-mono truncate max-w-[200px] sm:max-w-[300px] md:max-w-none">
        {contractAddress}
      </code>
      <Button
        onClick={copyToClipboard}
        className="bg-[#5C1919] text-white hover:bg-[#D4AF37] hover:text-[#5C1919] transition-colors focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
        aria-label="Copy contract address"
        variant="ghost"
        size="icon"
      >
        {isCopied ? (
          <Check className="h-5 w-5" />
        ) : (
          <Copy className="h-5 w-5" />
        )}
      </Button>
    </div>
  );
}
