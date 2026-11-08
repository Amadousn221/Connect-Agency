interface DataType {
    id: number;
    buttonId: string;
    target: string;
    activeClass: string;
    ariaSelected: boolean;
    label: string;
}

const MissionV2TabNav = ({ data }: { data: DataType }) => {
    const { buttonId, target, activeClass, ariaSelected, label } = data;

    return (
        <>
            <li className="nav-item" role="presentation">
                <button
                    className={`nav-link ${activeClass}`}
                    id={buttonId}
                    data-bs-toggle="tab"
                    data-bs-target={`#${target}`}
                    type="button"
                    role="tab"
                    aria-controls={target}
                    aria-selected={ariaSelected}
                >
                    {label}
                </button>
            </li>
        </>
    );
};

export default MissionV2TabNav;
