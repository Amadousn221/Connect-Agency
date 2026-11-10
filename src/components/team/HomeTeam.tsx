// Section « L'équipe » de l'accueil — base visuelle : TeamV1 (démo /team, « Team One »), choisie par Amadou le
// 08/11/2026 : cartes à photo, fonction au-dessus du nom, barre de réseaux sociaux au survol.
// Règles (docs/07, docs/12 D12/D17/Q15) : seules les personnes publiées et autorisées s'affichent ; un seul membre
// publié = pas de formulation « équipe » ; photo absente = initiales ; réseaux sociaux seulement s'ils sont fournis ;
// pas de lien vers une page de détail inexistante. Un aperçu fictif (4 cartes, bandeau explicite) n'existe qu'en
// développement local et seulement s'il y a moins de 2 membres publiés.
import Image from "next/image";
import { members, previewMembers, teamSection, type TeamLink, type TeamMember } from "@/content/team";

const socialIcon: Record<TeamLink["network"], { icon: string; label: string }> = {
    linkedin: { icon: "fab fa-linkedin-in", label: "LinkedIn" },
    facebook: { icon: "fab fa-facebook-f", label: "Facebook" },
    x: { icon: "fab fa-twitter", label: "X" },
    instagram: { icon: "fab fa-instagram", label: "Instagram" },
};

const initials = (name: string) =>
    name
        .split(" ")
        .filter(Boolean)
        .slice(0, 2)
        .map((part) => part[0]?.toUpperCase())
        .join("");

const HomeTeam = () => {
    const published = members.filter((member) => member.published);
    const isPreview = published.length < 2 && process.env.NODE_ENV === "development";
    const list: TeamMember[] = isPreview ? previewMembers : published;
    if (list.length === 0) return null;

    const isSolo = list.length === 1;
    const { eyebrow, solo, team } = teamSection;
    const { title, intro } = isSolo ? solo : team;

    return (
        <section className="team-style-onea-rea default-padding bg-cover cw-team" aria-labelledby="equipe-titre">
            <div className="container">
                {isPreview && (
                    <p className="cw-preview-banner" role="note">
                        Aperçu de mise en page : personnes fictives visibles seulement en développement local. En production, seules les
                        personnes publiées et autorisées s&apos;affichent (docs/12 Q15).
                    </p>
                )}
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="site-heading text-center">
                            <h4 className="sub-title">{eyebrow}</h4>
                            <h2 id="equipe-titre" className="title">{title}</h2>
                            <div className="devider" />
                            <p className="cw-team-intro">{intro}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <ul className="row justify-content-center cw-team-grid">
                    {list.map((member) => (
                        <li key={member.id} className="col-xl-3 col-md-6">
                            <article className="team-style-one">
                                <div className="thumb">
                                    {member.photo ? (
                                        <Image src={member.photo} alt={member.photoPlaceholder ? `Avatar provisoire de ${member.name}` : `Portrait de ${member.name}`} width={800} height={900} />
                                    ) : (
                                        <div className="cw-team-avatar" role="img" aria-label={`Portrait de ${member.name} : photo à venir`}>
                                            <span aria-hidden="true">{isPreview ? "?" : initials(member.name)}</span>
                                        </div>
                                    )}
                                    {member.links && member.links.length > 0 && (
                                        <div className="social">
                                            <ul>
                                                {member.links.map((link) => (
                                                    <li key={link.network} className={link.network}>
                                                        {link.url ? (
                                                            <a href={link.url} target="_blank" rel="noopener noreferrer" aria-label={`${socialIcon[link.network].label} de ${member.name} (nouvel onglet)`}>
                                                                <i className={socialIcon[link.network].icon} aria-hidden="true" />
                                                            </a>
                                                        ) : (
                                                            <span className="cw-team-social-off" role="img" aria-label={`${socialIcon[link.network].label} : lien bientôt disponible`}>
                                                                <i className={socialIcon[link.network].icon} aria-hidden="true" />
                                                            </span>
                                                        )}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                                <div className="info">
                                    <span>{member.role}</span>
                                    <h3 className="cw-team-name">{member.name}</h3>
                                </div>
                            </article>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default HomeTeam;
