import React from 'react';
import {Blogs, Footer, Navbar} from "../components/index.js";

const Homepage = ({blogs}) => {


    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar />
            <Blogs blogs={blogs ? blogs : ''} />
            <Footer />
        </div>
    )
}

export default Homepage;