"use client";

import { useT } from "@/i18n/client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Experience } from "@/data/types";
import { ExperienceCard } from "@/components/cards/ExperienceCard";
import { Chip } from "@/components/ui/form";

export function ExperiencesExplorer({ experiences }: { experiences: Experience[] }) {
  const t = useT();
  const categories = Array.from(new Set(experiences.map((e) => e.category)));
  const [cat, setCat] = useState<string>("all");
  const list = cat === "all" ? experiences : experiences.filter((e) => e.category === cat);
  return (
    <div className="flex flex-col gap-8">
      <div role="radiogroup" aria-label={t("Filter by category")} className="flex flex-wrap gap-2 border-t border-line pt-8">
        <Chip selected={cat === "all"} onClick={() => setCat("all")}>All ({experiences.length})</Chip>
        {categories.map((c) => (
          <Chip key={c} selected={cat === c} onClick={() => setCat(c)}>{c}</Chip>
        ))}
      </div>
      <motion.ul layout className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {list.map((e) => (
            <motion.li key={e.slug} layout initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.97 }} transition={{ duration: 0.4 }}>
              <ExperienceCard experience={e} />
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </div>
  );
}
