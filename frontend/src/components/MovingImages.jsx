import React from 'react';
import './MovingImages.css';

const images = [
  "https://res.cloudinary.com/dfy0pzoht/image/upload/v1752434762/img5_z0bxnh.jpg", "https://res.cloudinary.com/dfy0pzoht/image/upload/v1752434769/img11_hobh0s.jpg", "https://res.cloudinary.com/dfy0pzoht/image/upload/v1752434755/img2_auskkk.jpg", "https://res.cloudinary.com/dfy0pzoht/image/upload/v1752434761/img6_qmbevo.jpg", "https://res.cloudinary.com/dfy0pzoht/image/upload/v1752434752/img9_gygl6i.jpg",
  "https://res.cloudinary.com/dfy0pzoht/image/upload/v1752434753/img4_gyexpj.jpg", "https://res.cloudinary.com/dfy0pzoht/image/upload/v1752434754/img10_kmmfzz.jpg", "https://res.cloudinary.com/dfy0pzoht/image/upload/v1752434817/img1_rifigp.jpg", "https://res.cloudinary.com/dfy0pzoht/image/upload/v1752436065/img7-compressed_voxm9e.jpg", "https://res.cloudinary.com/dfy0pzoht/image/upload/v1752436116/img8_formphotoeditor.com_cbfine.jpg", "https://res.cloudinary.com/dfy0pzoht/image/upload/v1752436122/img3_formphotoeditor.com_b2kzeb.jpg"
];




const ImageSlider = () => {
  return (
    <div className="slider-container">
      <div className="slider-track">
        {images.concat(images).map((src, index) => (
          <img key={index} src={src} alt={`slide-${index}`} />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
