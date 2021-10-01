import React, { Component } from "react";
import NewsItems from "./NewsItems";

export default class News extends Component {
  render() {
    return (
      <div className="news">
        <h1 className="head">SpiceHunt - Top headings</h1>
        <div className="news-items">
          <NewsItems />
          <NewsItems />
          <NewsItems />
          <NewsItems />
        </div>
      </div>
    );
  }
}
