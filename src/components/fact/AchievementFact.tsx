import Counter from "../counter/Counter";

interface DataType {
    id: number;
    count: number;
    operator: string;
    textFirst: string;
    textLast: string;
}

const AchievementFact = ({ achievement }: { achievement: DataType }) => {
    const { count, operator, textFirst, textLast } = achievement

    return (
        <>
            <li>
                <div className="fun-fact">
                    <div className="counter">
                        <div className="timer"><Counter end={count} /></div>
                        <div className="operator">{operator}</div>
                    </div>
                    <span className="medium">{textFirst} <br /> {textLast}</span>
                </div>
            </li>
        </>
    );
};

export default AchievementFact;