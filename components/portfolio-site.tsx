"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowUpRight,
  Globe2,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";

import { projects } from "@/components/data";

const posterProjects = projects.slice(0, 4);
const socialProjects = [projects[8], projects[1], projects[7], projects[2]];
const uiProjects = [projects[7], projects[8], projects[4], projects[11]];
const tShirtProjects = [projects[3], projects[9]];

function PageNumber({ children, dark = false }: { children: string; dark?: boolean }) {
  return (
    <p className={dark ? "page-number text-lime" : "page-number text-black"}>
      {children}
    </p>
  );
}

function WorkThumb({ project, tall = false }: { project: typeof projects[number]; tall?: boolean }) {
  return (
    <Link
      href={project.href}
      target="_blank"
      className={tall ? "work-thumb h-[21rem]" : "work-thumb h-[17rem]"}
    >
      <Image
        src={project.image}
        alt={project.title}
        fill
        sizes="(min-width: 1024px) 20vw, 50vw"
        className="object-cover transition duration-500 group-hover:scale-105"
      />
      <span>{project.title}</span>
    </Link>
  );
}

export function PortfolioSite() {
  const { scrollYProgress } = useScroll();
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <>
      <motion.div
        className="fixed left-0 top-0 z-50 h-1 bg-lime"
        style={{ width: progressWidth }}
      />
      <main className="bg-paper text-ink">
        <section id="home" className="deck-page deck-dark isolate overflow-hidden">
          <div className="noise absolute inset-0 opacity-25" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_36%,rgba(203,244,39,0.2),transparent_20rem)]" />
          <div className="relative z-10 grid min-h-screen gap-8 p-8 md:p-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="flex flex-col justify-between">
              <div className="flex items-center justify-between text-[0.68rem] font-bold uppercase tracking-[0.16em] text-cream/80">
                <span>Visual Designer</span>
                <span className="hidden items-center gap-2 md:flex">
                  <Globe2 className="h-4 w-4 text-lime" /> Based in India
                </span>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="py-12"
              >
                <h1 className="display-title max-w-[900px] text-cream">
                  Saumitra
                  <br />
                  Misra
                </h1>
                <div className="-mt-3 flex items-center gap-4 md:-mt-8">
                  <span className="h-px w-24 bg-lime" />
                  <p className="signature text-5xl text-lime md:text-7xl">Portfolio</p>
                </div>
              </motion.div>

              <div className="grid gap-8 text-[0.72rem] font-bold uppercase tracking-[0.12em] text-cream md:grid-cols-2">
                <div className="border-l-2 border-lime pl-4">
                  <p>Poster design</p>
                  <p>Branding</p>
                  <p>UI/UX design</p>
                  <p>Social media</p>
                  <p>Creative direction</p>
                </div>
                <div className="self-end text-left md:text-right">
                  <p>Available for</p>
                  <p>Freelance</p>
                  <p>Collaboration</p>
                  <p>Opportunities</p>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative min-h-[520px] lg:min-h-0"
            >
              <div className="absolute bottom-16 right-0 h-[76%] w-[70%] bg-lime" />
              <Image
                src="/Assets/pfp2_circle.png"
                alt="Saumitra Misra"
                fill
                priority
                className="object-contain object-bottom drop-shadow-[0_30px_60px_rgba(0,0,0,0.45)]"
              />
            </motion.div>
          </div>
        </section>

        <section id="about" className="deck-page bg-paper">
          <div className="grid min-h-screen gap-10 p-8 md:p-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="flex flex-col justify-between">
              <div className="flex justify-between">
                <PageNumber>01</PageNumber>
                <p className="section-kicker text-ink">Introduction</p>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="display-title text-ink">
                  About
                  <br />
                  Me
                </h2>
                <p className="signature mb-6 text-5xl text-lime md:text-7xl">Hello!</p>
                <div className="max-w-md space-y-5 text-sm font-semibold leading-6">
                  <p>
                    I&apos;m Saumitra Misra, a B.Tech CSE student at GLA University
                    with a passion for design and technology. I create impactful visuals
                    that communicate ideas, build brands, and leave a lasting impression.
                  </p>
                  <p>
                    I have experience in graphic design, UI design, frontend design, and
                    startup projects. I specialize in Canva and have intermediate skills
                    in Figma.
                  </p>
                </div>
                <p className="signature mt-10 text-4xl">Saumitra</p>
              </motion.div>
              <div className="grid grid-cols-3 border-t border-ink bg-ink p-5 text-[0.62rem] font-bold uppercase tracking-[0.12em] text-cream">
                <span>Designing ideas into impact.</span>
                <span className="text-center">Scroll for more work</span>
                <span className="text-right">Let&apos;s create something great!</span>
              </div>
            </div>

            <div className="relative min-h-[560px] overflow-hidden">
              <div className="absolute inset-x-12 top-14 h-[78%] bg-blue-300" />
              <div className="absolute inset-x-20 top-20 h-[72%] border border-ink/35" />
              <Image
                src="/Assets/mypic.jpg"
                alt="Saumitra Misra"
                fill
                className="object-contain object-bottom grayscale"
                sizes="(min-width: 1024px) 55vw, 100vw"
              />
            </div>
          </div>
        </section>

        <section id="work" className="deck-page deck-dark">
          <div className="noise absolute inset-0 opacity-20" />
          <div className="relative z-10 flex min-h-screen flex-col justify-between p-8 md:p-12">
            <div className="flex justify-between">
              <PageNumber dark>02</PageNumber>
              <p className="section-kicker text-cream">Work samples</p>
            </div>
            <div>
              <h2 className="display-title text-cream">
                Selected
                <br />
                <span className="text-lime">Work</span>
              </h2>
              <div className="mt-8 grid gap-6 border-b border-lime pb-5 text-[0.7rem] font-bold uppercase tracking-[0.1em] text-cream md:grid-cols-5">
                {["Poster Design", "Branding", "Social Media", "T-shirt Mockups", "UI/UX Designs"].map((item, index) => (
                  <div key={item}>
                    <p className="mb-1 text-lg text-cream">{String(index + 1).padStart(2, "0")}</p>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                {[...posterProjects, projects[8]].map((project) => (
                  <WorkThumb key={project.title} project={project} />
                ))}
              </div>
            </div>
            <div className="flex justify-between text-[0.68rem] font-bold uppercase tracking-[0.12em] text-cream">
              <span>Creative work. Real impact.</span>
              <span>Design that connects.</span>
            </div>
          </div>
        </section>

        <section className="deck-page deck-dark">
          <div className="relative z-10 grid min-h-screen gap-10 p-8 md:p-12 lg:grid-cols-[1fr_0.28fr]">
            <div>
              <div className="mb-12 flex justify-between">
                <PageNumber dark>03</PageNumber>
                <p className="section-kicker text-cream">
                  Work samples
                  <br />
                  (Poster designs)
                </p>
              </div>
              <h2 className="display-title text-cream">
                Poster
                <br />
                <span className="text-lime">Designs</span>
              </h2>
              <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {posterProjects.map((project) => (
                  <WorkThumb key={project.title} project={project} tall />
                ))}
              </div>
            </div>
            <div className="flex flex-col justify-center gap-8 text-sm font-semibold leading-6 text-cream/80">
              <Globe2 className="h-9 w-9 text-cream" />
              <p>Bold, edgy and meaningful visuals crafted to grab attention and communicate ideas powerfully.</p>
              <div className="mt-10 text-4xl text-lime">+</div>
              <p className="mt-auto text-[0.68rem] font-bold uppercase tracking-[0.12em]">Design that connects.</p>
            </div>
          </div>
        </section>

        <section className="deck-page bg-paper">
          <div className="grid min-h-screen items-center gap-10 p-8 md:p-12 lg:grid-cols-[0.44fr_0.56fr]">
            <div>
              <PageNumber>04</PageNumber>
              <h2 className="mt-16 text-5xl font-black uppercase leading-none tracking-tighter md:text-7xl">
                T-shirt
                <br />
                <span className="text-lime">Mockups</span>
              </h2>
              <p className="mt-14 max-w-xs text-lg font-semibold leading-7">
                Streetwear inspired designs with bold typography and unique aesthetics.
                Made to stand out.
              </p>
              <p className="mt-24 text-xs font-black uppercase tracking-[0.18em]">Wear your personality.</p>
            </div>
            <div>
              <p className="mb-8 text-right text-xs font-black uppercase tracking-[0.16em]">
                Work samples
                <br />
                (T-shirt mockups)
              </p>
              <div className="grid gap-6 sm:grid-cols-2">
                {tShirtProjects.map((project) => (
                  <Link
                    href={project.href}
                    target="_blank"
                    className="relative h-[28rem] overflow-hidden bg-transparent"
                    key={project.title}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-contain drop-shadow-2xl transition duration-500 hover:scale-105"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="deck-page deck-dark">
          <div className="relative z-10 grid min-h-screen gap-10 p-8 md:p-12 lg:grid-cols-[0.46fr_0.54fr]">
            <div>
              <PageNumber dark>05</PageNumber>
              <h2 className="mt-16 text-5xl font-black uppercase leading-none tracking-tighter text-cream md:text-7xl">
                Social Media
                <br />
                <span className="text-lime">Designs</span>
                <Sparkles className="ml-4 inline h-10 w-10 text-lime" />
              </h2>
              <p className="mt-12 max-w-xs border-l border-cream/40 pl-6 text-sm font-semibold leading-6 text-cream/80">
                Engaging, aesthetic and on-brand social media designs that help brands
                connect with their audience.
              </p>
              <p className="mt-24 text-[0.68rem] font-bold uppercase tracking-[0.12em] text-cream">
                Design + Strategy + Impact
              </p>
            </div>
            <div>
              <p className="mb-8 text-right text-xs font-black uppercase tracking-[0.16em] text-cream">
                Work samples
                <br />
                (Instagram post work)
              </p>
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {socialProjects.map((project) => (
                  <WorkThumb key={`${project.title}-social`} project={project} tall />
                ))}
              </div>
              <p className="mt-16 text-right text-[0.68rem] font-bold uppercase tracking-[0.12em] text-cream">
                Content that connects.
              </p>
            </div>
          </div>
        </section>

        <section className="deck-page deck-dark">
          <div className="relative z-10 grid min-h-screen gap-10 p-8 md:p-12 lg:grid-cols-[0.42fr_0.58fr]">
            <div className="flex flex-col justify-between">
              <PageNumber dark>06</PageNumber>
              <div>
                <h2 className="text-5xl font-black uppercase leading-none tracking-tighter md:text-7xl">
                  UI/UX
                  <br />
                  <span className="text-lime">Designs</span>
                </h2>
                <p className="mt-10 max-w-xs text-sm font-semibold leading-6 text-cream/80">
                  Clean, modern and user-focused interfaces designed for seamless
                  digital experiences.
                </p>
              </div>
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.12em] text-cream">
                Designed to solve. Built to delight.
              </p>
            </div>
            <div>
              <p className="mb-8 text-right text-xs font-black uppercase tracking-[0.16em] text-cream">
                Work samples
                <br />
                (Figma designs)
              </p>
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {uiProjects.map((project) => (
                  <WorkThumb key={`${project.title}-ui`} project={project} tall />
                ))}
              </div>
              <ArrowUpRight className="ml-auto mt-12 h-10 w-10 text-cream" />
            </div>
          </div>
        </section>

        <section className="deck-page bg-paper">
          <div className="grid min-h-screen items-center gap-10 p-8 md:p-12 lg:grid-cols-[0.58fr_0.42fr]">
            <div>
              <PageNumber>07</PageNumber>
              <h2 className="mt-16 display-title text-ink">
                Let&apos;s Work
              </h2>
              <p className="signature -mt-3 text-5xl text-lime md:text-7xl">Together</p>
              <div className="mt-16 grid gap-10 md:grid-cols-[0.5fr_0.5fr]">
                <div>
                  <p className="mb-4 text-xs font-black uppercase tracking-[0.16em]">
                    Available for
                  </p>
                  <p className="text-sm font-bold uppercase leading-6">
                    Freelance projects
                    <br />
                    Collaborations
                    <br />
                    Internships
                    <br />
                    Full time opportunities
                  </p>
                </div>
                <div className="space-y-5 text-sm font-semibold">
                  <Link href="https://www.instagram.com/the._.deadshadow/" target="_blank" className="flex items-center gap-4">
                    <Instagram className="h-5 w-5" /> @the._.deadshadow
                  </Link>
                  <Link href="https://www.instagram.com/editorinwildness/" target="_blank" className="flex items-center gap-4">
                    <Instagram className="h-5 w-5" /> @editorinwildness
                  </Link>
                  <Link href="tel:+919555942512" className="flex items-center gap-4">
                    <Phone className="h-5 w-5" /> 9555942512
                  </Link>
                  <Link href="mailto:saumitramisra95@gmail.com" className="flex items-center gap-4">
                    <Mail className="h-5 w-5" /> saumitramisra95@gmail.com
                  </Link>
                  <span className="flex items-center gap-4">
                    <MapPin className="h-5 w-5" /> India
                  </span>
                </div>
              </div>
            </div>
            <div className="relative min-h-[560px]">
              <div className="absolute left-6 top-24 h-24 w-[80%] bg-blue-300" />
              <Image
                src="/Assets/pfp2_circle.png"
                alt="Saumitra Misra"
                fill
                className="object-contain object-bottom"
              />
            </div>
          </div>
          <div className="grid grid-cols-3 bg-ink px-8 py-5 text-[0.68rem] font-bold uppercase tracking-[0.12em] text-cream md:px-12">
            <span>Thank you for viewing!</span>
            <Globe2 className="mx-auto h-5 w-5" />
            <span className="text-right">Let&apos;s create something amazing.</span>
          </div>
        </section>
      </main>
    </>
  );
}
