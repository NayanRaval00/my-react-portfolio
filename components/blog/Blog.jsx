'use client';

import { useState } from 'react';
import HyperOne from '../customH1/HyperOne';
import BlogCard from './BlogCard';
import React, { useEffect } from 'react';

const blogPosts = [
  {
    id: 1,
    title: '🔀 Object-Oriented Programming (OOP)',
    description: 'Basic Understanding of OOP programming.',
    image: '/imgs/oop.webp?height=200&width=300',
    link: 'https://app.daily.dev/posts/object-oriented-programming-oop--kglmu06sl',
  },
];

const POSTS_PER_PAGE = 6;

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE);

  const handlePageChange = (newPage, event) => {
    if (event) {
      event.preventDefault();
    }
    setCurrentPage(newPage);
  };

  useEffect(() => {
    // Only scroll to the blog section if the URL contains "#blog"
    if (window.location.hash === '#blog') {
      const blogSection = document.getElementById('blog');
      if (blogSection) {
        blogSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [currentPage]);

  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const visiblePosts = blogPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  const blogText = `Sharing knowledge through writing is a passion of mine, as it allows me to reflect on my learning journey and help others along the way. Below are some of my articles on programming, where I explore key concepts and trends.`;

  return (
    <section id="blog">
      <div className="container lg:my-24">
        <div className="flex flex-col items-center">
          <HyperOne value="Blog" />
          <p className="lg:text-2xl lg:text-center text-xl p-4 text-justify">
            {blogText}
          </p>
        </div>
        <div className="px-5 grid grid-cols-1 mt-12 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {visiblePosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
        <div className="flex justify-center items-center mt-8 space-x-2">
          <button
            className="px-3 py-2 rounded border border-gray-300 dark:border-gray-600 disabled:opacity-50 cursor-custom"
            onClick={(e) => handlePageChange(currentPage - 1, e)}
            disabled={currentPage === 1}
          >
            &lt;
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              className={`px-3 py-2 rounded ${
                currentPage === page
                  ? 'bg-[#0EA5E9] text-white'
                  : 'border border-gray-300 dark:border-gray-600'
              }`}
              onClick={(e) => handlePageChange(page, e)}
            >
              {page}
            </button>
          ))}
          <button
            className="px-3 py-2 rounded border border-gray-300 dark:border-gray-600 disabled:opacity-50 cursor-custom"
            onClick={(e) => handlePageChange(currentPage + 1, e)}
            disabled={currentPage === totalPages}
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
