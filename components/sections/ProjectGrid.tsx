"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { Projet } from "@/types/content";
import ProjectFilters from "./ProjectFilters";
import ProjectCard from "./ProjectCard";

const secteurPrincipal = (projet: Projet) => projet.secteur.split("·")[0]?.trim() ?? projet.secteur;

interface ProjectGridProps {
  projets: Projet[];
  secteurs: string[];
}

/**
 * Grille filtrable des réalisations. L'état de filtre vit ici ; le filtrage se
 * fait côté client, sans rechargement. Les cartes s'animent via Framer Motion
 * `layout` + `AnimatePresence` (filtrage instantané en `prefers-reduced-motion`).
 */
export default function ProjectGrid({ projets, secteurs }: ProjectGridProps) {
  const reduceMotion = useReducedMotion();
  const [filtre, setFiltre] = useState("all");

  const visibles = useMemo(
    () => (filtre === "all" ? projets : projets.filter((p) => secteurPrincipal(p) === filtre)),
    [filtre, projets]
  );

  return (
    <>
      <ProjectFilters secteurs={secteurs} active={filtre} onChange={setFiltre} total={projets.length} />

      <motion.div layout={!reduceMotion} className="grid grid-cols-1 gap-[1.4rem] sm:grid-cols-2 lg:grid-cols-3" aria-live="polite">
        <AnimatePresence mode="popLayout" initial={false}>
          {visibles.map((projet) => (
            <motion.div
              key={projet.slug}
              layout={!reduceMotion}
              initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
              transition={{ duration: reduceMotion ? 0 : 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              <ProjectCard projet={projet} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {visibles.length === 0 && (
        <p className="py-12 text-center text-muted-foreground">Aucun projet dans ce secteur pour l&apos;instant.</p>
      )}
    </>
  );
}
