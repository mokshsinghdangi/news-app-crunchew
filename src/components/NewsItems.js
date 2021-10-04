import React, { Component } from "react";

export default class NewsItems extends Component {
  render() {
    let { title, img, description, tag, newsUrl } = this.props;
    return (
      <>
        <div className="news-container">
          <div className="card">
            <div className="card-header">
              <img
                src={
                  !img
                    ? "https://c.ndtvimg.com/2021-10/6e56a9dg_largest-khadi-national-flag_625x300_02_October_21.jpg"
                    : img
                }
                alt="city"
              />
            </div>
            <div className="card-body">
              <span className="tag">{tag}</span>
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
  }
}
