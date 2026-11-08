import Counter from "../counter/Counter";

interface DataType {
    id: number;
    value: number;
    suffix: string;
    label: string;
}

const TechFactV2 = ({ fact }: { fact: DataType }) => {
    const { value, suffix, label } = fact

    return (
        <>
            <div className="fun-fact">
                <div className="counter">
                    <div className="timer"><Counter end={value} /></div>
                    <div className="operator">{suffix}</div>
                </div>
                <span className="medium">{label}</span>
            </div>
        </>
    );
};

export default TechFactV2;