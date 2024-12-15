'use client';

import { cn } from "@/lib/utils";
import Image from 'next/image';

export function ZaloButton() {
  return (
    <a
      href="https://zalo.me/0965112864"
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center gap-2.5",
        "rounded-full px-6 py-2",
        "border border-primary/20 hover:border-primary/30",
        "hover:bg-primary/5 transition-all duration-300",
        "group"
      )}
    >
      <Image
        src="/zalo.png"
        alt="Zalo icon"
        width={16}
        height={16}
        className="h-4 w-4 transition-transform duration-300 group-hover:scale-110"
      />
      <span className="font-medium text-primary/80 group-hover:text-primary transition-colors duration-300">
        Zalo
      </span>
    </a>
  );
}
