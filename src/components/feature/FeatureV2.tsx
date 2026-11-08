import FeatureV2Data from "@/assets/jsonData/feature/FeatureV2Data.json"
import SingleFeatureV2 from "./SingleFeatureV2";

const FeatureV2 = () => {
    return (
        <>
            <div className="feature-style-two-area default-padding bottom-less">
                <div className="container">
                    <div className="row">
                        {FeatureV2Data.map(feature =>
                            <div className="col-lg-4 col-md-6 mb-30" key={feature.id}>
                                <SingleFeatureV2 feature={feature} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default FeatureV2;