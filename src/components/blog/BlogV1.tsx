import BlogV1Data from "@/assets/jsonData/blog/BlogV1Data.json"
import SingleBlogV1 from "./SingleBlogV1";
import SplitText from "../animation/SplitText";
interface DataType {
    hasBg?: boolean
    sectionClass?: string
}

const BlogV1 = ({ hasBg, sectionClass }: DataType) => {
    return (
        <>
            <div className={`home-blog-area default-padding bottom-less ${sectionClass ? sectionClass : ""} ${hasBg ? "blog1-bg" : ""}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading text-center">
                                <h4 className="sub-title">Latest Blog</h4>
                                <h2 className="title split-text">
                                    <SplitText
                                        delay={10}
                                        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                        easing="easeOutCubic"
                                        threshold={0.2}
                                        rootMargin="-50px"
                                    >
                                        News & Update
                                    </SplitText>
                                </h2>
                                <div className="devider" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        {BlogV1Data.slice(0, 3).map(blog =>
                            <div className="col-xl-4 col-md-6 mb-30" data-aos="fade-up" data-aos-delay={blog.delay} key={blog.id}>
                                <SingleBlogV1 blog={blog} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogV1;