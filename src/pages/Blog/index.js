import React from 'react';
import './index.css';

const Blog = () => {
  return (
    <div className='BlogContainer'>
        <div className="BlogTopText">
            <h1>Blog</h1>
            <p>All the latest on what’s happening in retail plus some useful tips and trends to help streamline your business.</p>
        </div>
        <div className="BlogBottomText">
            <p>How can artificial intelligence help retailers forecast demand?</p>
            <p>Are retailers on the verge of extinction? Confronted by supply chain issues, labour shortages, fickle demand, inflationary pressures and ri… Read More</p>
        </div>
    </div>
  )
}

export default Blog;