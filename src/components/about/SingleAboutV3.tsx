interface DataType {
    id: number;
    icon: string;
    title: string;
    description: string;
    delay: string;
}

const SingleAboutV3 = ({ list }: { list: DataType }) => {
    const { icon, title, description, delay } = list;

    return (
        <div
            className="list-item-style-two"
            data-aos="fade-up"
            data-aos-delay={delay}
        >
            <div className="number">
                <i className={icon} />
            </div>
            <div className="info">
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default SingleAboutV3;
