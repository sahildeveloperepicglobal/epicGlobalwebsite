import Image from "next/image";
import Link from "next/link";
import React from "react";
import Styles from "./blog.module.scss";

interface BlogSliderProps {
  data: any;
}
function BlogSlider({ data }: BlogSliderProps) {
  return (
    <>
      <div className="container" style={{ position: "relative" }}>
        <div className={` ${Styles.blogGrid} row`}>
          {data.map((item: any, index: number) => {
            return (
              <Link href={`/blog/${item?.id}`} key={index}>
                <div className="col-md-4">
                  <Link href="blog-details-1">
                    <Image
                      // src="images/blog/blog-grid-1/pic3.jpg"
                      src={item.jetpack_featured_media_url}
                      alt="new"
                      width={200}
                      height="200"
                    />
                    <h5> {item.title.rendered.slice(0, 50)}...</h5>
                    <p>{item.excerpt.rendered.slice(3, 100)}...</p>
                    <p> {item.date.slice(0, 10)}</p>
                  </Link>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default BlogSlider;
