import Image from "next/image";
import Link from "next/link";

interface DataType {
    id: number;
    thumb: string;
    activeClass: string;
    name: string;
    designation: string;
    delay: string;
}

const SingleTeamV1 = ({ team }: { team: DataType }) => {
    const { thumb, name, designation, activeClass, delay } = team;

    return (
        <>
            <div className={`team-style-one ${activeClass}`} data-aos="fade-up" data-aos-delay={delay}>
                <div className="thumb">
                    <Image src={`/assets/img/team/${thumb}`} alt="Image Not Found" width={800} height={900} />
                    <div className="social">
                        <ul>
                            <li className="facebook">
                                <Link href="https://www.facebook.com/" target='_blank'>
                                    <i className="fab fa-facebook-f" />
                                </Link>
                            </li>
                            <li className="twitter">
                                <Link href="https://www.x.com/" target='_blank'>
                                    <i className="fab fa-twitter" />
                                </Link>
                            </li>
                            <li className="linkedin">
                                <Link href="https://www.linkedin.com/" target='_blank'>
                                    <i className="fab fa-linkedin-in" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="info">
                    <span>{designation}</span>
                    <h4><Link href="/team-details/1">{name}</Link></h4>
                </div>
            </div>
        </>
    );
};

export default SingleTeamV1;