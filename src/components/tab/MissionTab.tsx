import ProgressV1Data from "@/assets/jsonData/progress/ProgressV1Data.json"
import ProgressV1 from "../progress/ProgressV1";

const MissionTab = () => {
    return (
        <>
            <div className="nav nav-tabs mission-tab-navs" id="nav-tab" role="tablist">
                <button className="nav-link active" id="nav-id-1" data-bs-toggle="tab" data-bs-target="#tab1" type="button" role="tab" aria-controls="tab1" aria-selected="true">
                    Our Mission
                </button>
                <button className="nav-link" id="nav-id-2" data-bs-toggle="tab" data-bs-target="#tab2" type="button" role="tab" aria-controls="tab2" aria-selected="false">
                    Our Vision
                </button>
            </div>

            <div className="tab-content mission-tab-content" id="nav-tabContent">
                <div className="tab-pane fade show active" id="tab1" role="tabpanel" aria-labelledby="nav-id-1">
                    <h2 className="title split-text">Tech security and protection for our clients</h2>
                    <div className="wow fadeInUp" data-aos-delay="100">
                        <p>
                            A Promise of: Financial security and protection for our clients Commitment and fairness to our agents Respect and opportunity for our employees Increasing value and reward for teams to perefction of regulations.
                        </p>
                        <div className="progress-style-one">
                            {ProgressV1Data.map(progress =>
                                <ProgressV1 key={progress.id} progress={progress} />
                            )}
                        </div>
                    </div>
                </div>

                <div className="tab-pane fade" id="tab2" role="tabpanel" aria-labelledby="nav-id-2">
                    <h2 className="title">Offer our customers the lowest possible prices</h2>
                    <p>
                        Financial security and protection for our clients Commitment and fairness to our agents Respect and opportunity for our employees Increasing value and reward for teams. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot week. Almost do am or limits hearts. Resolve parties but why she shewing.
                    </p>
                    <ul>
                        <li>Business document</li>
                        <li>Strategic planning</li>
                        <li>Financial security and protection</li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default MissionTab;