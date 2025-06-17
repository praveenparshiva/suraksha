import React from "react";
import "./GalleryPage.css";

const images = [
  "house1.jpg",
  "house2.jpg",
  "house3.jpg",
  "house4.jpg",
  "house5.jpg",
  "overhead1.jpg",
  "overhead2.jpg",
  "overhead3.jpg",
  "overhead4.jpg",
  "overhead5.jpg",
  "overhead6.jpg",
  "overhead7.jpg",
  "overhead8.jpg",
  "overhead9.jpg",
  "overhead10.jpg",
  "overhead11.jpg",
  "uniform1.jpg",
  "uniform2.jpg",
  "uniform3.jpg",
  "uniform4.jpg",
  "uniform5.jpg",
  "uniform6.jpg",
];

const videos = [
  "home1.mp4",
  "home2.mp4",
  "home3.mp4",
  "home4.mp4",
  "home5.mp4",
  "tank1.mp4",
  "tank2.mp4",
  "tank3.mp4",
  "tank4.mp4",
];

const Gallery = () => {
  return (
    <div className="gallery-container">
      <div className="image-grid">
        {images.map((img, index) => (
          <div key={index} className="media-box">
            <img src={`/GalleryImages/${img}`} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>

      <div className="video-grid">
        {videos.map((vid, index) => (
          <video
            key={index}
            className="video-item"
            src={`/GalleryVideos/${vid}`}
            autoPlay
            muted
            loop
            controls // optional: lets users play/pause
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
