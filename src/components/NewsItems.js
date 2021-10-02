import React, { Component } from "react";

export default class NewsItems extends Component {
  render() {
    let { title, img, description, tag } = this.props;
    return (
      <>
        <div className="news-container">
          <div className="card">
            <div className="card-header">
              <img src={img} alt="city" />
            </div>
            <div className="card-body">
              <span className="tag tag-pink">{tag}</span>
              <h4 className="news-card-title">{title}</h4>
              <p>{description}</p>
              <button className="read-more">Read More</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
