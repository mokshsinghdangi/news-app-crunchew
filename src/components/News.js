import React, { Component } from "react";
import NewsItems from "./NewsItems";

export default class News extends Component {
  constructor() {
    super();
    console.log("i am constructor");

    this.state = {
      articles: [],
      loading: false,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=07fa1c09aa6d45928d240eb9a7ea0104";

    let data = await fetch(url);

    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles });
  }

  render() {
    return (
      <div className="news">
        <h1 className="head">SpiceHunt - Top headings</h1>
        <div className="news-items">
          {this.state.articles.map((element) => {
            return (
              <NewsItems
                key={element.url}
                title={element.title}
                description={element.description}
                img={element.urlToImage}
                tag={element.author}
                newsUrl={element.url}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
