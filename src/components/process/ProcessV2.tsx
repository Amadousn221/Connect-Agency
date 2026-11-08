import Image from "next/image";
import ProcessV2Data from "@/assets/jsonData/process/ProcessV2Data.json"
import SingleProcessV2 from "./SingleProcessV2";

const ProcessV2 = () => {
    return (
        <>
            <div className="process-style-two-area default-padding bottom-less bg-dark text-light">
                <div className="shape">
                    <Image src="/assets/img/shape/46.png" alt="Image Not Found" width={450} height={1170} />
                </div>
                <div className="container">
                    <div className="left-heading">
                        <div className="row">
                            <div className="col-lg-4">
                                <h4 className="sub-title">Work Process</h4>
                                <h2 className="title" data-aos="fade-up">Some easy steps to process!</h2>
                            </div>
                            <div className="col-lg-6 offset-lg-2">
                                <p>
                                    Design of choice for many of the world’s leading enterprises end technology challengers. We help businesses elevate the alue ere is custom software development, product design, sed apor lored incididunt ut labored et dolore magna.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        {ProcessV2Data.map(process =>
                            <div className="col-lg-4 col-md-6 mb-30" key={process.id}>
                                <SingleProcessV2 process={process} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProcessV2;