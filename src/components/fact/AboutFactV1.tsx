import Counter from "../counter/Counter";

interface DataType {
    id: number;
    icon: string;
    count: number;
    operator: string;
    label: string;
}

const AboutFactV1 = ({ fact }: { fact: DataType }) => {
    const { icon, count, operator, label } = fact

    return (
        <>
            <li>
                <div className="icon">
                    <i className={icon} />
                </div>
                <div className="fun-fact">
                    <div className="counter">
                        <div className="timer"><Counter end={count} /></div>
                        <div className="operator">{operator}</div>
                    </div>
                    <span className="medium">{label}</span>
                </div>
            </li>
        </>
    );
};

export default AboutFactV1;