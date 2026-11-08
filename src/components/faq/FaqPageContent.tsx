import Link from "next/link";
import FaqV1Data from "@/assets/jsonData/faq/FaqV1Data.json"
import SingleFaq from "./SingleFaq";

const FaqPageContent = () => {
    return (
        <>
            <div className="faq-area bg-gray default-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 mb-md-30 mb-xs-30">
                            <div className="faq-sidebar">
                                <div className="faq-sidebar-item bg-theme text-light" style={{ backgroundImage: 'url(/assets/img/shape/map-light.png)' }}>
                                    <h4>Need Help?</h4>
                                    <ul>
                                        <li><Link href="#">Business Policy</Link></li>
                                        <li><Link href="#">Marketing strategy</Link></li>
                                        <li><Link href="#">Customer Benefits</Link></li>
                                        <li><Link href="#">Profit Sharing</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 faq-style-one dark pl-50 pl-md-15 pl-xs-15">
                            <div className="accordion" id="faqAccordion">
                                {FaqV1Data.map((faq, index) =>
                                    <SingleFaq faq={faq} key={faq.id} index={index} />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FaqPageContent;