import React from "react";
import "./GalleryPage.css";

const Gallery = () => {
  return (
    <div className="parent">
      <div className="div1">
        <img src="/images/image1.jpg" alt="Gallery 1" />
      </div>
      <div className="div2">
        <video src="/videos/video1.mp4" autoPlay muted loop />
      </div>
      <div className="div3">
        <img src="/images/image2.jpg" alt="Gallery 2" />
      </div>
      <div className="div4">
        <video src="/videos/video2.mp4" autoPlay muted loop />
      </div>
      <div className="div5">
        <img src="/images/image3.jpg" alt="Gallery 3" />
      </div>
      <div className="div6">
        <video src="/videos/video3.mp4" autoPlay muted loop />
      </div>
      <div className="div7">
        <img src="/images/image4.jpg" alt="Gallery 4" />
      </div>
      <div className="div8">
        <img src="/images/image5.jpg" alt="Gallery 5" />
      </div>
      <div className="div9">
        <video src="/videos/video4.mp4" autoPlay muted loop />
      </div>
      <div className="div10">
        <img src="/images/image6.jpg" alt="Gallery 6" />
      </div>
    </div>
  );
};

export default Gallery;
