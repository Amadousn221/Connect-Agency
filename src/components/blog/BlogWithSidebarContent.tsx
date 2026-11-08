"use client"
import BlogStandardData from "@/assets/jsonData/blog/BlogStandardData.json"
import SingleBlogStandard from "./SingleBlogStandard";
import SearchWidget from "../widgets/SearchWidget";
import RecentPostsWidget from "../widgets/RecentPostsWidget";
import CategoryWidget from "../widgets/CategoryWidget";
import GalleryWidget from "../widgets/GalleryWidget";
import ArchiveWidget from "../widgets/ArchiveWidget";
import FollowWidget from "../widgets/FollowWidget";
import TagsWidget from "../widgets/TagsWidget";
import Pagination from 'react-paginate';
import { useRouter, useSearchParams } from 'next/navigation';

const BlogWithSidebarContent = () => {

    // Pagination 
    const router = useRouter();
    const searchParams = useSearchParams();

    // Derive page directly from URL - no useState needed
    const currentPage = Number(searchParams.get('page')) || 1;
    const itemsPerPage = 3; // This doesn't need state either unless you change it

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentBlogData = BlogStandardData.slice(startIndex, endIndex);

    const handlePageClick = (data: { selected: number }) => {
        const selectedPage = data.selected + 1;
        router.push(`/blog-with-sidebar?page=${selectedPage}`); // Only update URL

        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 200);
    };

    const totalPages = Math.ceil(BlogStandardData.length / itemsPerPage);

    return (
        <>
            <div className="blog-area full-blog default-padding">
                <div className="container">
                    <div className="blog-items">
                        <div className="row">
                            <div className="blog-content col-xl-8 col-lg-7 col-md-12 pr-35 pr-md-15 pl-md-15 pr-xs-15 pl-xs-15">
                                <div className="blog-item-box">
                                    {currentBlogData.map(blog =>
                                        <SingleBlogStandard blog={blog} key={blog.id} />
                                    )}
                                </div>

                                {/* Pagination */}
                                <div className="row">
                                    <div className="col-md-12 pagi-area text-center">
                                        <Pagination
                                            previousLabel={currentPage === 1 ? <i className='fas fa-ban'></i> : <i className='fas fa-angle-double-left'></i>}
                                            nextLabel={currentPage === totalPages ? <i className='fas fa-ban'></i> : <i className='fas fa-angle-double-right'></i>}
                                            breakLabel={'...'}
                                            pageCount={Math.ceil(BlogStandardData.length / itemsPerPage)}
                                            marginPagesDisplayed={2}
                                            pageRangeDisplayed={5}
                                            onPageChange={handlePageClick}
                                            containerClassName={'pagination text-center'}
                                            activeClassName={'active'}
                                            pageClassName={'page-item'}
                                            pageLinkClassName={'page-link'}
                                            previousLinkClassName={'page-link'}
                                            nextLinkClassName={'page-link'}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="sidebar col-xl-4 col-lg-5 col-md-12 mt-md-50 mt-xs-50">
                                <aside>
                                    <SearchWidget />
                                    <RecentPostsWidget />
                                    <CategoryWidget />
                                    <GalleryWidget />
                                    <ArchiveWidget />
                                    <FollowWidget />
                                    <TagsWidget />
                                </aside>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogWithSidebarContent;