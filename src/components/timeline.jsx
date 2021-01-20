import React from "react";

import TimelineData from "./data.js";

import TimelineItem from "./timeitem.js";

const Time = () =>
  TimelineData.length > 0 && (
    <div class="timeline">
      <div class="col-lg-12" id="timelineTitle">
        <h1>My journey so far...</h1>
      </div>
      <div class="row">
        <div class="col-lg-8">
          <div className="timeline-container">
            {TimelineData.map((data, idx) => (
              <TimelineItem data={data} key={idx} />
            ))}
          </div>
        </div>
        <div class="col-lg-4">
          <div className="childhood" />
          <div className="highschool" />
          <div className="present" />
        </div>
      </div>
    </div>
  );
export default Time;
