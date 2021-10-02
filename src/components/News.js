import React, { Component } from "react";
import NewsItems from "./NewsItems";

export default class News extends Component {
  articles = [
    {
      source: { id: null, name: "Cricbuzz" },
      author: null,
      title:
        "Australia Women vs India Women, Only Test, India Women tour of Australia, 2021 - Cricbuzz",
      description:
        "Follow Australia Women vs India Women, Only Test, Sep 30, India Women tour of Australia, 2021 with live Cricket score, ball by ball commentary updates on Cricbuzz",
      url: "https://www.cricbuzz.com/cricket-commentary/36427/ausw-vs-indw-only-test-india-women-tour-of-australia-2021",
      urlToImage: null,
      publishedAt: "2021-10-02T07:26:30Z",
      content:
        "17.6 Vastrakar to Healy, no run, shape away from a fuller length, but the line's outside off, Healy lets it go again",
    },
    {
      source: { id: "the-times-of-india", name: "The Times of India" },
      author: "Ashish Sen",
      title:
        "IPL 2021, RR vs CSK: Testing time for struggling Rajasthan Royals against Chennai Super Kings - Times of India",
      description:
        "Cricket News: Success influences motivation and drive. And when it comes to Chennai Super Kings, success also provides the spark and the appetite to achieve more.",
      url: "https://timesofindia.indiatimes.com/sports/cricket/ipl/top-stories/ipl-2021-rr-vs-csk-testing-time-for-struggling-rajasthan-royals-against-chennai-super-kings/articleshow/86699619.cms",
      urlToImage:
        "https://static.toiimg.com/thumb/msid-86699604,width-1070,height-580,imgsize-70502,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      publishedAt: "2021-10-02T04:01:00Z",
      content:
        "IPL 2021, RR vs CSK: Testing time for struggling Rajasthan Royals against Chennai Super Kings",
    },
    {
      source: { id: null, name: "India.com" },
      author: "India.com Sports Desk",
      title:
        "MI vs DC Dream11 Team Prediction, Fantasy Hints VIVO IPL 2021 Match 46: Captain, Vice-Captain – Mumbai Indian - India.com",
      description:
        "Mumbai Indians vs Delhi Capitals Dream11 Team - Check My Dream11 Team, Best players list of MI vs DC, VIVO IPL 2021, Mumbai Indians Dream 11 Team Player List, Delhi Capitals Dream11 Team Player List, Dream11 Guru Tips, Fantasy Cricket Tips Mumbai Indians vs D…",
      url: "https://www.india.com/sports/mi-vs-dc-dream11-team-prediction-fantasy-hints-vivo-ipl-2021-match-46-captain-vice-captain-mumbai-indians-vs-delhi-capitals-playing-11s-for-todays-t20-match-at-sharjah-cricket-5003737/",
      urlToImage:
        "https://static.india.com/wp-content/uploads/2021/10/pjimage-2021-10-01T165426.873.jpg",
      publishedAt: "2021-10-01T15:00:46Z",
      content:
        "Home &gt; Sports\r\nMumbai Indians vs Delhi Capitals Dream11 Team - Check My Dream11 Team, Best players list of MI vs DC, VIVO IPL 2021, Mumbai Indians Dream 11 Team Player List, Delhi Capitals Dream11… [+3647 chars]",
    },
  ];
  constructor() {
    super();
    console.log("i am constructor");

    this.state = {};
  }

  render() {
    return (
      <div className="news">
        <h1 className="head">SpiceHunt - Top headings</h1>
        <div className="news-items">
          <NewsItems
            title="IPL 2021, RR vs CSK: Testing time for struggling Rajasthan Royals against Chennai Super Kings - Times of India"
            description="Cricket News: Success influences motivation and drive. And when it comes to Chennai Super Kings, success also provides the spark and the appetite to achieve more."
            img="https://static.toiimg.com/thumb/msid-86699604,width-1070,height-580,imgsize-70502,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg"
            tag="cricket"
          />
          <NewsItems
            title="IPL 2021, RR vs CSK: Testing time for struggling Rajasthan Royals against Chennai Super Kings - Times of India"
            description="Cricket News: Success influences motivation and drive. And when it comes to Chennai Super Kings, success also provides the spark and the appetite to achieve more."
            img="https://static.toiimg.com/thumb/msid-86699604,width-1070,height-580,imgsize-70502,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg"
            tag="cricket"
          />
          <NewsItems
            title="IPL 2021, RR vs CSK: Testing time for struggling Rajasthan Royals against Chennai Super Kings - Times of India"
            description="Cricket News: Success influences motivation and drive. And when it comes to Chennai Super Kings, success also provides the spark and the appetite to achieve more."
            img="https://static.toiimg.com/thumb/msid-86699604,width-1070,height-580,imgsize-70502,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg"
            tag="cricket"
          />
          <NewsItems
            title="IPL 2021, RR vs CSK: Testing time for struggling Rajasthan Royals against Chennai Super Kings - Times of India"
            description="Cricket News: Success influences motivation and drive. And when it comes to Chennai Super Kings, success also provides the spark and the appetite to achieve more."
            img="https://static.toiimg.com/thumb/msid-86699604,width-1070,height-580,imgsize-70502,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg"
            tag="cricket"
          />
          <NewsItems
            title="IPL 2021, RR vs CSK: Testing time for struggling Rajasthan Royals against Chennai Super Kings - Times of India"
            description="Cricket News: Success influences motivation and drive. And when it comes to Chennai Super Kings, success also provides the spark and the appetite to achieve more."
            img="https://static.toiimg.com/thumb/msid-86699604,width-1070,height-580,imgsize-70502,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg"
            tag="cricket"
          />
        </div>
      </div>
    );
  }
}
