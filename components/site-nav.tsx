"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { navItems } from "@/components/data";
import { cn } from "@/lib/utils";

type SiteNavProps = {
  projectPage?: boolean;
};

export function SiteNav({ projectPage = false }: SiteNavProps) {
  const [open, setOpen] = useState(false);
  const prefix = projectPage ? "/" : "";

  return (
    <header className="fixed left-1/2 top-4 z-50 w-[min(1120px,calc(100%-2rem))] -translate-x-1/2 rounded-lg border bg-background/72 px-4 py-3 shadow-2xl backdrop-blur-xl">
      <div className="flex items-center justify-between gap-4">
        <Link href={projectPage ? "/" : "#home"} aria-label="Saumitra Misra home">
          <Image
            src="/Assets/Saumitra.png"
            alt="Saumitra"
            width={118}
            height={54}
            priority
            className="h-auto w-28"
          />
        </Link>

        <nav className="hidden items-center gap-8 text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground md:flex">
          {navItems.map((item) => (
            <Link
              className="transition hover:text-cyan-200"
              href={`${prefix}${item.href}`}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Button
          aria-expanded={open}
          aria-label="Toggle navigation"
          className="h-10 w-10 px-0 md:hidden"
          onClick={() => setOpen((value) => !value)}
          variant="outline"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      <nav
        className={cn(
          "grid transition-all md:hidden",
          open ? "grid-rows-[1fr] pt-4" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <div className="grid gap-1 rounded-md border bg-card/80 p-2">
            {navItems.map((item) => (
              <Link
                className="rounded-md px-3 py-3 text-sm font-bold text-muted-foreground transition hover:bg-white/5 hover:text-foreground"
                href={`${prefix}${item.href}`}
                key={item.href}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
