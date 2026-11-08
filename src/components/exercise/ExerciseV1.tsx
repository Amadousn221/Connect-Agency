import Image from "next/image";
import ExerciseV1Data from "@/assets/jsonData/exercise/ExerciseV1Data.json"
import ProgressV1 from "../progress/ProgressV1";

const ExerciseV1 = () => {
    return (
        <>
            <div className="expterise-style-one-area default-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="expertise-style-one-info">
                                <h4 className="sub-title">Expert in it solution</h4>
                                <h2 className="title" data-aos="fade-up">Preparing for your success, we provide truly outstanding IT solutions</h2>
                                <p>
                                    Our team applies its extensive experience to determine strategies that best enable our clients. Accelerate innovation with world-class technology teams We match a fully remote team of incredible freelance talent for all your software.
                                </p>
                                <div className="ceo-quote">
                                    <div className="left">
                                        <h4>Jonny Maxwell</h4>
                                        <span>CEO of Tekni</span>
                                    </div>
                                    <div className="right">
                                        <Image src="/assets/img/icon/signeture.png" alt="Image Not Found" width={205} height={75} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 pl-60 pl-md-15 pl-xs-15">
                            <div className="expertise-style-one-thumb">
                                <Image src="/assets/img/about/11.jpg" alt="Image Not Found" width={800} height={470} />
                                <div className="skill-items">
                                    {ExerciseV1Data.map(progress =>
                                        <ProgressV1 progress={progress} key={progress.id} />
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

export default ExerciseV1;