"use client";

import { Send } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";

export function ContactForm() {
  return (
    <motion.form
      action="mailto:saumitramisra95@gmail.com"
      className="rounded-lg border bg-card/70 p-4 backdrop-blur"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55 }}
      viewport={{ once: true }}
    >
      <div className="grid gap-3">
        <input
          className="h-12 rounded-md border bg-background/70 px-4 text-sm outline-none transition placeholder:text-muted-foreground focus:ring-2 focus:ring-cyan-200"
          name="name"
          placeholder="Your name"
          type="text"
        />
        <input
          className="h-12 rounded-md border bg-background/70 px-4 text-sm outline-none transition placeholder:text-muted-foreground focus:ring-2 focus:ring-cyan-200"
          name="email"
          placeholder="Your email"
          type="email"
        />
        <textarea
          className="min-h-32 resize-none rounded-md border bg-background/70 p-4 text-sm outline-none transition placeholder:text-muted-foreground focus:ring-2 focus:ring-cyan-200"
          name="message"
          placeholder="Tell me about your project"
        />
        <Button className="gap-2" type="submit">
          Start conversation <Send className="h-4 w-4" />
        </Button>
      </div>
    </motion.form>
  );
}
