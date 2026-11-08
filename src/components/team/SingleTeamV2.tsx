import Image from "next/image";
import Link from "next/link";
import SocialShareV2 from "../social/SocialShareV2";

interface DataType {
    id: number;
    thumb: string;
    name: string;
    designation: string;
}

const SingleTeamV2 = ({ team }: { team: DataType }) => {
    const { id, thumb, name, designation } = team;

    return (
        <>
            <div className="team-style-two">
                <div className="thumb">
                    <Image src={`/assets/img/team/${thumb}`} alt="Thumb" width={600} height={675} />
                    <ul className="social">
                        <SocialShareV2 />
                    </ul>
                </div>
                <div className="info">
                    <div className="content">
                        <h4 className="title">
                            <Link href={`/team-details/${id}`}>{name}</Link>
                        </h4>
                        <span>{designation}</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleTeamV2;