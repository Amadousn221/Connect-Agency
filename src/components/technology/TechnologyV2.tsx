import TechnologyV2Data from "@/assets/jsonData/technology/TechnologyV2Data.json"
import SingleTechnologyV2 from "./SingleTechnologyV2";
import TechFactV2Data from "@/assets/jsonData/fact/TechFactV2Data.json"
import TechFactV2 from "../fact/TechFactV2";

const TechnologyV2 = () => {
    return (
        <>
            <div className="technolgy-index-two-area default-padding bg-dark text-light bg-cover" style={{ backgroundImage: 'url(/assets/img/shape/banner-9.jpg)' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="left-heading-two">
                                <div className="left-info">
                                    <h4 className="sub-title">Technology Index</h4>
                                    <h2 className="title" data-aos="fade-up">We’re using latest technology in projects</h2>
                                </div>
                                <div className="right-info">
                                    {TechFactV2Data.map(fact =>
                                        <TechFactV2 fact={fact} key={fact.id} />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="technology-index-two-items text-center">
                                {TechnologyV2Data.map(tech =>
                                    <SingleTechnologyV2 tech={tech} key={tech.id} />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TechnologyV2;