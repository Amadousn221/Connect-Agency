import PriceV1Data from '@/assets/jsonData/price/PriceV1Data.json';
import SinglePriceV1 from './SinglePriceV1';

interface DataType {
    hasTitle?: boolean
    hasBg?: boolean
}

const PriceV1 = ({ hasTitle, hasBg }: DataType) => {
    return (
        <>
            <div className={`pricing-style-one-area default-padding bottom-less bg-gray ${hasBg ? "price1-bg" : ""}`}>

                {/* hasTitle */}
                {hasTitle &&
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <div className="site-heading text-center">
                                    <h4 className="sub-heading">Our Pricing</h4>
                                    <h2 className="title split-text">Best Pricing Plans</h2>
                                    <div className="devider" />
                                </div>
                            </div>
                        </div>
                    </div>
                }

                <div className="container">
                    <div className="row">
                        {PriceV1Data.map(plan =>
                            <div className="col-xl-3 col-md-6 mb-30" key={plan.id}>
                                <SinglePriceV1 plan={plan} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default PriceV1;