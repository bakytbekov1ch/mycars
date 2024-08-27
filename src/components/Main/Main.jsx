import React from "react";

import video from "../../assets/images/video.mp4";

import "./Main.scss";

function Main() {
  return (
    <div className="main">
      <div className="container">
        <h1>Как начать работать ?</h1>
        <div className="main__content">
          <video controls autoPlay muted loop src={video}></video>
        </div>
      </div>
    </div>
  );
}

export default Main;
