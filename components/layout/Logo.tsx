import Image from "next/image";
import { cn } from "@/lib/utils";

/** Ratio du fichier fourni par le client (680 × 176). */
const RATIO = 680 / 176;

interface LogoProps {
  className?: string;
  /** Hauteur rendue en pixels ; la largeur suit le ratio du logo. */
  height?: number;
  /** Prioriser le chargement (logo du header, visible au premier écran). */
  priority?: boolean;
}

/**
 * Logo officiel Connect Web, fourni en PNG détouré (fond transparent).
 * Deux variantes : le mot « CONNECT » est pétrole sur fond clair et clair sur
 * fond sombre — même principe que le token `--cw-logo-word` de la maquette,
 * le pétrole #18516E étant illisible sur l'encre #070C11. Le symbole
 * « power » et « WEB » restent orange dans les deux thèmes.
 */
export default function Logo({ className, height = 34, priority = false }: LogoProps) {
  const width = Math.round(height * RATIO);
  const common = { width, height, priority, style: { height, width: "auto" } };

  return (
    <>
      <Image
        {...common}
        alt="Connect Web"
        src="/logo-connect-web-dark.png"
        className={cn("hidden h-auto w-auto dark:block", className)}
      />
      <Image
        {...common}
        alt="Connect Web"
        src="/logo-connect-web.png"
        className={cn("block h-auto w-auto dark:hidden", className)}
      />
    </>
  );
}
