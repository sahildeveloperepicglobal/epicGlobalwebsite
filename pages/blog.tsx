import React from "react";

const Blog = ({ data }) => {
  console.log(data);
  return <div>Blog</div>;
};

export default Blog;

export const getServerSideProps = async () => {
  const response = await fetch(
    `https://blog.epicglobal.co.in/wp-json/wp/v2/posts`
  );
  const data = await response.json();
  return {
    props: {
      data,
    },
  };
};
