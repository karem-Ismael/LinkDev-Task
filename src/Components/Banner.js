import { Swiper, SwiperSlide } from "swiper/react";
import findMore from "../assets/images/CTA.svg";
import playVideo from "../assets/images/PlayDemo.svg";
import {ReactComponent as ReactLogo} from '../assets/images/first-slide.svg';

import "swiper/css";
import {Slides} from "./Slides"
import "swiper/css/pagination";

import "../Styles/_banner.scss";

import { Pagination } from "swiper";

export default function Banner() {

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return `<span class=${className} style=background:#${ Slides[index].colorCode}></span>`
          
        },
      };
    
  return (
    <div className="BannerWrapper">
      <Swiper
      pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        {
          Slides?.map((slide,index)=>(
            <SwiperSlide key={index}>
            <div className="row swiper-content">
                <div className="col-lg-5 col-md-12">
                    <h3 style={{color:"#"+slide.colorCode}}>
                    {slide.category}
                    </h3>
                    <p className="title">
                 {slide.title}
                    </p>
                    <p>
                    Link Development, the global technology solutions provider and an A15 company, unveiled today that it has recently marked its Silver Jubilee anniversary.
                    </p>
                    <div className="row">
                        <div className="">
                                <img src={findMore} className="w-50"/>
                                <img src={playVideo} className="w-50"/>

                        </div>
                       
                       
                    </div>
                </div>
                <div className="col-lg-7 col-md-12 Banner-image">
                    <img src={slide.imgUrl}/>
                    <ReactLogo className="bannerPolygon" />
                    
                </div>
            </div>
        </SwiperSlide>
          ))

        }
      </Swiper>
    </div>
  );
}
