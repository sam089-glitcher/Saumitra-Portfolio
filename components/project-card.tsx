"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";

type ProjectCardProps = {
  title: string;
  category: string;
  image: string;
  href: string;
  large?: boolean;
};

export function ProjectCard({
  title,
  category,
  image,
  href,
  large = false,
}: ProjectCardProps) {
  return (
    <motion.article
      className={cn(
        "group relative min-h-[360px] overflow-hidden rounded-lg border bg-card shadow-2xl",
        large && "lg:col-span-2 lg:row-span-2",
      )}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.15 }}
      whileHover={{ y: -8 }}
    >
      <Link href={href} target="_blank" rel="noreferrer" className="absolute inset-0 z-10">
        <span className="sr-only">Open {title}</span>
      </Link>
      <Image
        src={image}
        alt={title}
        fill
        sizes={large ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 25vw, 100vw"}
        className="object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-90"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 z-20 flex items-end justify-between gap-4 p-5">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-200">
            {category}
          </p>
          <h3 className="mt-2 text-2xl font-black tracking-tight">{title}</h3>
        </div>
        <ArrowUpRight className="h-6 w-6 shrink-0 text-cyan-200" />
      </div>
    </motion.article>
  );
}
