// Le texte intégral reste affiché sur ordinateur. CSS sélectionne la version courte sur mobile/tablette.
export default function HomeResponsiveCopy({ full, short }: { full: string; short: string }) {
    return (
        <>
            <span className="cw-home-copy-full">{full}</span>
            <span className="cw-home-copy-short">{short}</span>
        </>
    );
}
