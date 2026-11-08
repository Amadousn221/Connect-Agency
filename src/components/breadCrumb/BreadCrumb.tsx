import Link from 'next/link';

interface DataType {
    title?: string;
    breadCrumb?: string;
}

const BreadCrumb = ({ title, breadCrumb }: DataType) => {
    return (
        <>
            <div className="breadcrumb-area bg-cover shadow theme-hard text-center text-light" style={{ backgroundImage: 'url(/assets/img/banner/8.jpg)' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <h1>{title ? title : "Error Page"}</h1>
                            <ul className="breadcrumb">
                                <li><Link href="/"><i className="fas fa-home" /> Home</Link></li>
                                <li className="active">{breadCrumb ? breadCrumb : "404"}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BreadCrumb;