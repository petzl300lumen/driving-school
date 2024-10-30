import React from 'react';
import './Slider.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Image } from "antd";
import img1 from './about.jpg';
import img2 from './about1.png';
import img3 from './car1.jpeg'

export default function MySlider() {


    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block"}}
            onClick={onClick}
          />
        );
      }
      
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block"}}
            onClick={onClick}
          />
        );
      }




    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };   

  return (
    <>
        <div className='mainDiv' style={{margin: 'auto', width:'1100px'} }>
        <Slider {...settings}>
            {data.map((d) =>(
                <div>
                    <div>
                        <p>{d.title}</p>
                    </div>

                    <div>
                        {/* <img src={d.image} alt='img' style={{width:'400px', height:'200px'}} /> */}

                        <Image width={400} height={200} src= {d.image} />
                    </div>

                </div>
            ))}
        </Slider>



        </div>
    </>
  )
}

const data = [
    {
        title: `Машина 1`,
        image: img1,
    },
    {
        title: `Машина 2`,
        image: img2,
    },
    {
        title: `Машина 3`,
        image: img3,
    },
]
