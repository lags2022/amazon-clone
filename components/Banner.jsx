import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Image from "next/image";

function Banner() {
  return (
    <div className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <Image
          loading="lazy"
          width={1500}
          height={600}
          src="https://links.papareact.com/6ff"
          alt=""
        />
        <Image
          loading="lazy"
          width={1500}
          height={600}
          src="https://links.papareact.com/7ma"
          alt=""
        />
        <Image
          loading="lazy"
          width={1500}
          height={600}
          src="https://links.papareact.com/gi1"
          alt=""
        />
      </Carousel>
    </div>
  );
}

export default Banner;
