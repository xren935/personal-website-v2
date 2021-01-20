import React, { Component } from "react";
import "../static/css/main.css";

class TimelineItem extends React.Component {
  render() {
    const TimelineItem = ({ data }) => (
      <div className="timeline-item">
        <div className="timeline-item-content">
          <span className="tag" style={{ background: data.category.color }}>
            {data.category.tag}
          </span>
          <time>{data.date}</time>
          <p>{data.text}</p>
          {data.link && (
            <a href={data.link.url} target="_blank" rel="noopener noreferrer">
              {data.link.text}
            </a>
          )}
          <span className="circle" />
        </div>
      </div>
    );

    return <div className="journey" />;
  }
}

export default TimelineItem;
