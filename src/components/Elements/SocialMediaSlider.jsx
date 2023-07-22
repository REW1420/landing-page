import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
/** svg imports */
import Facebook from '../../assets/img/socialMedia/facebook.svg'
import Instagram from '../../assets/img/socialMedia/instagram.svg'
import Youtube from '../../assets/img/socialMedia/youtube.svg'

/** Actions */
import { Link } from "react-scroll";

export default function SocialMediaSlider() {



    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
        ],
    };
    return (
        <div className="lightBg" style={{ padding: "50px 0" }}>
            <div className="container">
                <div>
                    <Slider {...settings}>

                            <LogoWrapper className="flexCenter" onClick={()=>alert("facebook")}>
                                <ImgStyle src={Facebook} alt="facebook logo" />
                            </LogoWrapper>

                        <LogoWrapper className="flexCenter" onClick={()=>alert("instagram")}>
                            <ImgStyle src={Instagram} alt="instagram logo" />
                        </LogoWrapper>
                        <LogoWrapper className="flexCenter" onClick={()=>alert("youtube")}>
                            <ImgStyle src={Youtube} alt="youtube logo" />
                        </LogoWrapper>
                    </Slider>
                </div>
            </div>
        </div>

    );
}
const LogoWrapper = styled.div`
  width: 100%;
  height: 100px;
  cursor: pointer;
  :focus-visible {
    outline: none;
    border: 0px;
  }
`;
const ImgStyle = styled.img`
  width: 100%;
  height: 100%;
  padding: 5%;
`;
