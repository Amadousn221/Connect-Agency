import Image from "next/image";
import FunFactV1Data from "@/assets/jsonData/fact/FunFactV1Data.json"
import SingleFact from "./SingleFact";

const FunFactV1 = () => {
    return (
        <>
            <div className="fun-factor-style-one-area bg-gray default-padding" style={{ backgroundImage: 'url(/assets/img/shape/41.png)' }}>
                <div className="container">
                    <div className="fun-factor-style-one-box">
                        <div className="shape-animated-up-down">
                            <Image src="/assets/img/shape/39.png" alt="Image Not Found" width={135} height={130} />
                        </div>
                        <div className="row align-center">
                            <div className="col-lg-10 offset-lg-1 text-center fun-fact-style-one">
                                <div className="row">
                                    {FunFactV1Data.map(fact =>
                                        <div className="col-lg-4 col-md-4 item" key={fact.id}>
                                            <SingleFact fact={fact} />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FunFactV1;