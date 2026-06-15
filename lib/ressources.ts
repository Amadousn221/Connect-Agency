import fs from 'fs';
import path from 'path';

export interface RessourceArticle {
  slug: string;
  titre: string;
  date: string;
  image: string;
}

function parseFrontmatter(content: string): Record<string, string> {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return {};
  const result: Record<string, string> = {};
  for (const line of match[1].split('\n')) {
    const m = line.match(/^(\w+):\s*"?([^"]*)"?\s*$/);
    if (m) result[m[1]] = m[2].trim();
  }
  return result;
}

export function getRessources(locale: string, limit = 2): RessourceArticle[] {
  const dir = path.join(process.cwd(), 'content', 'ressources');

  if (!fs.existsSync(dir)) return [];

  const ext = `.${locale}.mdx`;
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(ext));

  const articles: RessourceArticle[] = files
    .map((file) => {
      const slug = file.replace(ext, '');
      const raw = fs.readFileSync(path.join(dir, file), 'utf-8');
      const fm = parseFrontmatter(raw);
      return {
        slug,
        titre: fm.titre ?? slug,
        date: fm.date ?? '',
        image: fm.image ?? '',
      };
    })
    .filter((a) => a.date)
    .sort((a, b) => b.date.localeCompare(a.date));

  return articles.slice(0, limit);
}
