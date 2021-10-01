import React, { Component } from "react";

export default class NewsItems extends Component {
  render() {
    return (
      <>
        <div className="news-container">
          <div className="card">
            <div className="card-header">
              <img
                src="https://images6.alphacoders.com/312/thumb-1920-312773.jpg"
                alt="city"
              />
            </div>
            <div className="card-body">
              <span className="tag tag-pink">Design</span>
              <h4>10 Rules of Dashboard Design</h4>
              <p>Dashboard Design Guidelines</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
