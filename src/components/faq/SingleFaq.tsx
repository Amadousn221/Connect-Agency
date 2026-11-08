interface DataType {
    id: string;
    target: string;
    question: string;
    answer: string;
}

const SingleFaq = ({ faq, index }: { faq: DataType; index: number; }) => {
    const { id, target, question, answer } = faq;

    const isFirst = index === 0;

    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id={id}>
                <button
                    className={`accordion-button ${!isFirst ? "collapsed" : ""}`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#${target}`}
                    aria-expanded={isFirst}
                    aria-controls={target}
                >
                    {question}
                </button>
            </h2>

            <div
                id={target}
                className={`accordion-collapse collapse ${isFirst ? "show" : ""}`}
                aria-labelledby={id}
                data-bs-parent="#faqAccordion"
            >
                <div className="accordion-body">
                    <p>{answer}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleFaq;
