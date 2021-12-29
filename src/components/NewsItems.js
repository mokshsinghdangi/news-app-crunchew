import React from "react";

const NewsItems = (props) => {
  let { title, img, description, tag, newsUrl, date } = props;
  return (
    <>
      <div className="news-container">
        <div className="card">
          <div className="card-header">
            <img
              className="news-img"
              src={
                !img
                  ? "https://c.ndtvimg.com/2021-10/6e56a9dg_largest-khadi-national-flag_625x300_02_October_21.jpg"
                  : img
              }
              alt="city"
            />
          </div>
          <div className="card-body">
            <span className="tag">{!tag ? "Unknown" : tag}</span>
            <p className="date">{new Date(date).toGMTString()}</p>
            <h4 className="news-card-title">{title}</h4>
            <p>{description}</p>
            <a href={newsUrl} className="read-more btn" target="blank">
              Read more
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default NewsItems;
