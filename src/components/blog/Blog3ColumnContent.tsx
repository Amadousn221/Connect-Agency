"use client"
import BlogV1Data from "@/assets/jsonData/blog/BlogV1Data.json"
import SingleBlog3Column from "./SingleBlog3Column";
import Pagination from 'react-paginate';
import { useRouter, useSearchParams } from 'next/navigation';

const Blog3ColumnContent = () => {

    // Pagination 
    const router = useRouter();
    const searchParams = useSearchParams();

    // Derive page directly from URL - no useState needed
    const currentPage = Number(searchParams.get('page')) || 1;
    const itemsPerPage = 6; // This doesn't need state either unless you change it

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentBlogData = BlogV1Data.slice(startIndex, endIndex);

    const handlePageClick = (data: { selected: number }) => {
        const selectedPage = data.selected + 1;
        router.push(`/blog-3-column?page=${selectedPage}`); // Only update URL

        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 200);
    };

    const totalPages = Math.ceil(BlogV1Data.length / itemsPerPage);

    return (
        <>
            <div className="blog-area blog-grid default-padding">
                <div className="container">
                    <div className="blog-item-box">
                        <div className="row">
                            {currentBlogData.map(blog =>
                                <div className="col-xl-4 col-md-6 single-item" key={blog.id}>
                                    <SingleBlog3Column blog={blog} />
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Pagination */}
                    <div className="row">
                        <div className="col-md-12 pagi-area text-center">
                            <Pagination
                                previousLabel={currentPage === 1 ? <i className='fas fa-ban'></i> : <i className='fas fa-angle-double-left'></i>}
                                nextLabel={currentPage === totalPages ? <i className='fas fa-ban'></i> : <i className='fas fa-angle-double-right'></i>}
                                breakLabel={'...'}
                                pageCount={Math.ceil(BlogV1Data.length / itemsPerPage)}
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
            </div>
        </>
    );
};

export default Blog3ColumnContent;