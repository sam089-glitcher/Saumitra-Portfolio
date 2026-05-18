"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { projects } from "@/components/data";
import { ProjectCard } from "@/components/project-card";
import { SiteNav } from "@/components/site-nav";

export function ProjectArchive() {
  return (
    <>
      <SiteNav projectPage />
      <main>
        <section className="relative isolate flex min-h-[64vh] items-end overflow-hidden px-5 pb-16 pt-36 md:px-10 lg:px-20">
          <div className="absolute inset-0 -z-20 bg-[url('/Assets/huji25.jpg')] bg-cover bg-center opacity-40" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-background via-background/72 to-background/30" />
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <Button asChild variant="outline" className="mb-8">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" /> Home
              </Link>
            </Button>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-emerald-200">
              Portfolio archive
            </p>
            <h1 className="max-w-5xl text-balance text-5xl font-black tracking-tight md:text-7xl">
              Selected experiments, campaigns, and visual systems.
            </h1>
          </motion.div>
        </section>

        <section className="px-5 py-20 md:px-10 lg:px-20">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard {...project} key={project.title} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
