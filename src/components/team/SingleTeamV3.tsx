import Image from "next/image";
import Link from "next/link";
import SocialShareV3 from "../social/SocialShareV3";

interface DataType {
    id: number;
    thumb: string;
    bgThumb: string;
    name: string;
    designation: string;
}

const SingleTeamV3 = ({ team }: { team: DataType }) => {
    const { id, thumb, bgThumb, name, designation } = team;

    return (
        <>
            <div className="item">
                <div className="thumb" style={{ backgroundImage: `url(/assets/img/shape/${bgThumb})` }}>
                    <Image src={`/assets/img/team/${thumb}`} alt="Image Not Found" width={700} height={700} />
                    <div className="social-overlay">
                        <ul>
                            <SocialShareV3 />
                        </ul>
                        <div className="icon">
                            <i className="fas fa-plus" />
                        </div>
                    </div>
                </div>
                <h4><Link href={`/team-details/${id}`}>{name}</Link></h4>
                <span>{designation}</span>
            </div>
        </>
    );
};

export default SingleTeamV3;