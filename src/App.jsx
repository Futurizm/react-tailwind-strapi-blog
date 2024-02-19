import React from 'react';
import {Homepage, BlogContentPage} from './pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import useFetch from "./hooks/useFetch.js";

export default function App() {
  let {loading, error, data} = useFetch('http://localhost:1337/api/blogs?populate=*');
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error</p>
    // console.log(data);


  return (
    <div className='flex flex-col min-h-screen'>
        <Router>
            <Routes>
                <Route path='/' element={<Homepage blogs={data ? data : ''} />} />
                <Route path='/blog/:id' element={<BlogContentPage blogs={data ? data : ''} />} />
            </Routes>
        </Router>

    </div>
  )
}