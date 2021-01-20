import React from "react";

const TimelineItem = ({ data }) => (
  <div className="time-item">
    <div className="time-item-content">
      <span className="tag" style={{ background: data.category.color }}>
        {data.category.tag}
      </span>

      <time>{data.date}</time>
      {/* <h1>{data.date}</h1> */}
      <h2>{data.title}</h2>
      <p>{data.text}</p>
      {/* {data.link && (
        <a href={data.link.url} target="_blank" rel="noopener noreferrer">
          {data.link.text}
        </a>
      )} */}
      <span className="circle" />
    </div>
  </div>
);

export default TimelineItem;
