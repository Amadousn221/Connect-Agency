import Link from 'next/link';
import ProjectV3Data from '@/assets/jsonData/project/ProjectV3Data.json';
import SingleProjectV3 from './SingleProjectV3';

interface DataType {
    hasTitle?: boolean
}

const ProjectV3 = ({ hasTitle }: DataType) => {
    return (
        <>
            <div className="project-style-three-area default-padding bg-gray bg-cover" style={{ backgroundImage: 'url(/assets/img/shape/banner-7.jpg)' }}>

                {hasTitle &&
                    <div className="container">
                        <div className="left-heading">
                            <div className="row align-center">
                                <div className="col-lg-6">
                                    <h4 className="sub-title">Recent Projects</h4>
                                    <h2 className="title" data-aos="fade-up">Latest & most recent completed projects</h2>
                                </div>
                                <div className="col-lg-5 offset-lg-1 text-end">
                                    <Link className="btn-circle circle-border" href="/projects"><i className="fas fa-long-arrow-right" /> All Projects</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                }

                <div className="container">
                    <div className="project-style-three-items">
                        {ProjectV3Data.map(project =>
                            <SingleProjectV3 project={project} key={project.id} />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectV3;