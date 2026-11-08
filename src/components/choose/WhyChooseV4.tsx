import Image from 'next/image';
import Link from 'next/link';
import ChooseListData from "@/assets/jsonData/choose/ChooseListData.json"

const WhyChooseV4 = () => {
    return (
        <>
            <div className="choose-us-style-four-area default-padding bg-dark text-light">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 pr-80 pr-md-15 pr-xs-15">
                            <div className="choose-us-four-thumb">
                                <Image src="/assets/img/about/12.jpg" alt="Image Not Found" width={720} height={645} />
                                <Image src="/assets/img/about/13.jpg" alt="Image Not Found" width={450} height={290} />
                                <Image src="/assets/img/shape/50.png" alt="Image Not Found" width={450} height={290} />
                                <div className="button text-end">
                                    <Link className="btn btn-theme btn-md radius animation" href="/about-us G">Discover More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="choose-us-four-info">
                                <h4 className="sub-title">Best it solution</h4>
                                <h2 className="title" data-aos="fade-up">Let’s elevate your business with strategic</h2>
                                <p>
                                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomized.
                                </p>
                                <ul className="list-card-two">
                                    {ChooseListData.map(data =>
                                        <li key={data.id}>
                                            <h5>{data.title}</h5>
                                            <p>{data.description}</p>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WhyChooseV4;