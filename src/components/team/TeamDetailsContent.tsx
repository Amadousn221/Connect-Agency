import Image from "next/image";
import SocialShareV3 from "../social/SocialShareV3";
import Link from "next/link";
import TeamListItem from "./TeamListItem";
import SkillProgress from "../progress/SkillProgress";

interface DataType {
    id: number;
    thumb: string;
    role: string;
    name: string;
    memberData: {
        id: number;
        listTitle: string;
        memberInfo: {
            id: number;
            title: string;
            subtitle: string;
            year: string;
        }[];
    }[];
    skillProgress: {
        id: number;
        title: string;
        end: number;
    }[];
}

const TeamDetailsContent = ({ teamInfo }: { teamInfo: DataType }) => {
    const { thumb, name, role, memberData, skillProgress } = teamInfo

    return (
        <>
            <div className="team-single-area default-padding-top">
                <div className="container">
                    <div className="team-content-top">
                        <div className="row">
                            <div className="col-lg-5 left-info">
                                <div className="thumb">
                                    <Image src={`/assets/img/team/${thumb}`} alt="Thumb" width={800} height={900} />
                                </div>
                            </div>
                            <div className="col-lg-7 right-info">
                                <h2>{name}</h2>
                                <span>{role}</span>
                                <p>
                                    Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring house in never fruit up. Pasture imagine my garrets..
                                </p>
                                <ul>
                                    <li>
                                        <strong>Email:</strong>
                                        <a href="mailto:support@digital.com">support@digital.com</a>
                                    </li>
                                    <li>
                                        <strong>Phone:</strong>
                                        <a href="tel:123-456-7890">+44-20-7328-4499</a>
                                    </li>
                                </ul>
                                <div className="social">
                                    <Link className="btn circle btn-sm btn-dark animation" href="/contact-us">Contact Me</Link>
                                    <div className="share-link">
                                        <i className="fas fa-share-alt" />
                                        <ul>
                                            <SocialShareV3 />
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bottom-info bg-gray default-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="team-single-list">
                                    {memberData.map(data =>
                                        <TeamListItem data={data} key={data.id} />
                                    )}
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="skill-items">
                                    <h3>Personal Skills</h3>
                                    {skillProgress.map(skill =>
                                        <SkillProgress skill={skill} key={skill.id} />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TeamDetailsContent;