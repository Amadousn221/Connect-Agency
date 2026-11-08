interface DataType {
    id: number;
    headingId: string;
    collapseId: string;
    title: string;
    description: string;
    show: boolean;
}

const SingleFaqV2 = ({ faq }: { faq: DataType }) => {
    const { headingId, collapseId, title, description, show } = faq;

    return (
        <div className="accordion-single">
            <h2 className="accordion-header" id={headingId}>
                <button
                    className={`accordion-button ${!show ? "collapsed" : ""}`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#${collapseId}`}
                    aria-expanded={show}
                    aria-controls={collapseId}
                >
                    {title}
                </button>
            </h2>

            <div
                id={collapseId}
                className={`accordion-collapse collapse ${show ? "show" : ""}`}
                aria-labelledby={headingId}
                data-bs-parent="#faqAccordion"
            >
                <div className="accordion-body">
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleFaqV2;
