import Link from "next/link";
import React from "react";

function BlogSlider({ data }) {
  return (
    <>
      <div
        className="blog-carousel1 owl-btn-1 owl-btn-center-lr  owl-btn-primary"
        style={{ position: "relative" }}
      >
        {data.map((item, index) => {
          return (
            <Link href={`/blog/${item?.id}`} key={index}>
              <div className="dlab-blog style-1 bg-white text-center">
                <div className="dlab-media">
                  <Link href="blog-details-1">
                    <img
                      // src="images/blog/blog-grid-1/pic3.jpg"
                      src={item.jetpack_featured_media_url}
                      alt=""
                    />
                  </Link>
                </div>
                <div className="dlab-info">
                  <h5 className="dlab-title">
                    <Link href="blog-details-1">
                      {/* Quisque sem tortor, convallis in arcu eu,
                                        accumsan finibus. */}
                      {item.title.rendered.slice(0, 50)}...
                    </Link>
                  </h5>
                  <p className="m-b0">
                    {item.excerpt.rendered.slice(3, 200)}...
                  </p>

                  <div className="dlab-meta meta-bottom">
                    <ul>
                      <li className="post-date">
                        <i className="flaticon-clock m-r10"></i>
                        {item.date.slice(0, 10)}
                      </li>
                      <li className="post-comment">
                        <a href="javascript:void(0);">
                          <i className="flaticon-speech-bubble"></i>
                          <span>15</span>
                        </a>
                      </li>
                      <li className="post-share">
                        <i className="flaticon-share"></i>
                        <ul>
                          <li>
                            <a
                              className="fa fa-facebook"
                              href="https://www.facebook.com/"
                            ></a>
                          </li>
                          <li>
                            <a
                              className="fa fa-twitter"
                              href="https://twitter.com/login?lang=en"
                            ></a>
                          </li>
                          <li>
                            <a
                              className="fa fa-linkedin"
                              href="https://www.linkedin.com/login"
                            ></a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default BlogSlider;
