import Image from "next/image";

interface DataType {
    id: number;
    tab: string;
    activeClass: string;
    title: string;
    description: string;
    features: string[];
    thumb: string;
}

const MissionV2TabContent = ({ data }: { data: DataType }) => {
    const { tab, activeClass, title, description, features, thumb } = data;

    return (
        <>
            <div
                className={`tab-pane fade ${activeClass ? "show active" : ""}`}
                id={tab}
                role="tabpanel"
                aria-labelledby={tab}
            >
                <div className="mission-vision-item">
                    <div className="row align-center">
                        <div className="col-lg-6">
                            <h2>{title}</h2>
                            <p>{description}</p>

                            <ul className="list-style-one">
                                {features.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="col-lg-5 offset-lg-1">
                            <div className="thumb">
                                <Image
                                    src={`/assets/img/illustration/${thumb}`}
                                    alt="Image Not Found"
                                    width={800}
                                    height={675}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MissionV2TabContent;
