interface DataType {
    id: number;
    number: string;
    title: string;
    description: string;
    delay: string;
}

const AboutList = ({ list }: { list: DataType }) => {
    const { number, title, description, delay } = list;

    return (
        <>
            <div className="list-item-style-two" data-aos="fade-up" data-aos-delay={delay}>
                <div className="number">{number}</div>
                <div className="info">
                    <h4>{title}</h4>
                    <p>
                        {description}
                    </p>
                </div>
            </div>
        </>
    );
};

export default AboutList;