import React from 'react';
import { Footer, Navbar, BlogContent } from "../components/index.js";

const BlogContentPage = ({blogs}) => {

    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar />
            <BlogContent blogs={blogs} />
            <Footer />
        </div>
    )
}

export default BlogContentPage;