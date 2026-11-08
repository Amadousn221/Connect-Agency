import Image from "next/image";
import SkillV1Data from "@/assets/jsonData/skill/SkillV1Data.json"
import SingleProgress from "./SingleProgress";

const SkillV1 = () => {
    return (
        <>
            <div className="skill-facts-area default-padding bg-dark text-light" style={{ backgroundImage: 'url(/assets/img/shape/49.png)' }}>
                <div className="container">
                    <div className="row align-center">
                        <div className="col-lg-5">
                            <div className="skill-fact-thumb">
                                <Image src="/assets/img/illustration/11.png" alt="Image Not Found" width={580} height={525} />
                            </div>
                        </div>
                        <div className="col-lg-7 pl-60 pl-md-15 pl-xs-15">
                            <div className="skill-fact-info">
                                <h4 className="sub-title">Skill & Facts</h4>
                                <h2 className="title" data-aos="fade-up">We keep our self udated with latest trends</h2>
                                <p>
                                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum.
                                </p>
                                <div className="circle-progress">
                                    {SkillV1Data.map(skill =>
                                        <SingleProgress skill={skill} key={skill.id} />
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

export default SkillV1;