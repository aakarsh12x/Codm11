// src/components/RecentBlogs.js
import React from 'react';
import styled from 'styled-components';
import reactt from '../images/reactt.jpg'; // Import the image
import csss from '../images/csss.jpg';
import jsjs from '../images/jsjs.jpg'
const BlogSection = styled.section`
  padding: 4rem 2rem;
  background-color: #f7f9fc;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 2rem;
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 0 2rem;
`;

const BlogCard = styled.div`
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const BlogImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const BlogContent = styled.div`
  padding: 1rem;
  text-align: left;
`;

const BlogTitle = styled.h3`
  font-size: 1.25rem;
  color: #333;
  margin: 0.5rem 0;
`;

const BlogDescription = styled.p`
  color: #666;
  font-size: 1rem;
`;

const ReadMoreLink = styled.a`
  display: inline-block;
  margin-top: 1rem;
  color: #007bff;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const RecentBlogs = () => {
  // Updated mock data for recent blogs
  const blogs = [
    {
      id: 1,
      image: reactt, // Use the imported image here
      title: 'Understanding React Hooks',
      description: 'A deep dive into React hooks and how they simplify state management in functional components.',
    },
    {
      id: 2,
      image: csss,
      title: 'CSS Grid vs. Flexbox',
      description: 'Learn the differences between CSS Grid and Flexbox, and when to use each layout model.',
    },
    {
      id: 3,
      image: jsjs,
      title: 'JavaScript ES6 Features',
      description: 'Explore the new features introduced in ES6 that make JavaScript more powerful and easier to use.',
    },
  ];

  return (
    <BlogSection>
      <SectionTitle>Recent Blogs</SectionTitle>
      <BlogGrid>
        {blogs.map((blog) => (
          <BlogCard key={blog.id}>
            <BlogImage src={blog.image} alt={blog.title} />
            <BlogContent>
              <BlogTitle>{blog.title}</BlogTitle>
              <BlogDescription>{blog.description}</BlogDescription>
              <ReadMoreLink href={`/blogs/${blog.id}`}>Read More</ReadMoreLink>
            </BlogContent>
          </BlogCard>
        ))}
      </BlogGrid>
    </BlogSection>
  );
};

export default RecentBlogs;
