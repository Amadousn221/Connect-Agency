import PriceV2Data from "@/assets/jsonData/price/PriceV2Data.json";
import SinglePriceV2 from "./SinglePriceV2";
import SplitText from "../animation/SplitText";

interface DataType {
    hasTitle?: boolean
}

const PriceV2 = ({ hasTitle }: DataType) => {
    return (
        <>
            <div className="pricing-style-two-area default-padding bottom-less" style={{ backgroundImage: 'url(/assets/img/shape/48.png)' }}>

                {hasTitle &&
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <div className="site-heading text-center">
                                    <h4 className="sub-title">Best Pricing</h4>
                                    <h2 className="title split-text">
                                        <SplitText
                                            delay={10}
                                            animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                            easing="easeOutCubic"
                                            threshold={0.2}
                                            rootMargin="-50px"
                                        >
                                            Our best pricing plan <br /> for your solution
                                        </SplitText>
                                    </h2>
                                    <div className="devider" />
                                </div>
                            </div>
                        </div>
                    </div>
                }

                <div className="container">
                    <div className="row">
                        {PriceV2Data.map(plan =>
                            <div className="col-xl-4 col-lg-6 col-md-6 mb-30" key={plan.id}>
                                <SinglePriceV2 plan={plan} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default PriceV2;