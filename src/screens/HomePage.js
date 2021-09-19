import React, { useEffect } from "react";
import Globe from "../GlobeV2.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function HomePage() {
  //render(){

  useEffect(() => {
    console.log(
      `Height: ${window.innerHeight} or ${window.outerHeight} and width of ${window.innerWidth} or ${window.outerWidth}`
    );
  }, []);
  return (
    <Carousel
      infiniteLoop
      autoPlay
      showStatus={false}
      showIndicators={false}
      showThumbs={false}
      className="m-12 absolute overflow-hidden"
    >
      <div>
        <img
          src="https://i.imgur.com/zFr7fxD.jpg"
          width={200}
          height={4}
          className="rounded-lg"
        />
      </div>
      <div>
        <img
          src="https://i.imgur.com/hqcMBSh.jpg"
          width={200}
          height={4}
          className="rounded-lg"
        />
      </div>
      <div>
        <img
          src="https://i.imgur.com/bggsRuf.jpg"
          width={200}
          height={4}
          className="rounded-lg"
        />
      </div>
      <div>
        <img
          src="https://i.imgur.com/mKFJfTa.jpg"
          width={200}
          height={4}
          className="rounded-lg"
        />
      </div>
    </Carousel>
  );
}
