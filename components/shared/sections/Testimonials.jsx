import React, {useState, useEffect} from "react";
import { client } from "~/utilities/client";
import NextArrow from "~/components/elements/carousel/NextArrow";
import PrevArrow from "~/components/elements/carousel/PrevArrow";
import Slider from "react-slick";
import Rating from "~/components/elements/Rating";
import testimonials from "~/public/static/data/testimonials.json";
import TestimonialItem from "~/components/elements/TestimonialItem";

const carouselSetting = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
        {
            breakpoint: 1366,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                dots: true,
                arrows: false,
            },
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: true,
                arrows: false,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: true,
                arrows: false,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: false,
            },
        },
    ],
};

const containerSetting = {
    infinite: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
        {
            breakpoint: 1366,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                dots: true,
                arrows: false,
            },
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: true,
                arrows: false,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: true,
                arrows: false,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: false,
            },
        },
    ],
};

const Testimonials = ({ container = false }) => {
    // Fetching reviews from Sanity
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        const fetchTestimonials = async () => {
            const query = '*[_type == "reviews"]'
            client.fetch(query)
            .then((data) => {
                setReviews(data);
            })
        }
        fetchTestimonials();
    }, []);

    console.log(reviews);
    
    if (!container) {
        return (
            <section
                className="ps-section--reviews ps-testimonials"
                style={{
                    backgroundImage: `url('/static/img/roundbg.png')`,
                }}>
                <h3 className="ps-section__title">
                    <img src="/static/img/quote-icon.png" alt="" />
                    Latest reviews
                </h3>
                <div className="ps-section__content">
                    <div className="container">
                        <Slider {...carouselSetting} className="ps-carousel">
                            {
                                
                                reviews.length>0 && reviews.map((item, index) => (
                                    <div className="ps-carousel__item" key={index}>
                                        <TestimonialItem source={item} />
                                    </div>
                                ))
                            }
                        </Slider>
                    </div>
                </div>
            </section>
        );
    } else {
        return (
            <section className="ps-section--reviews ps-testimonials">
                <div className="container">
                    <h3 className="ps-section__title">
                        <img src="/static/img/quote-icon.png" alt="" />
                        Latest reviews
                    </h3>
                    <div className="ps-section__content">
                        <Slider {...containerSetting} className="ps-carousel">
                            {items}
                        </Slider>
                    </div>
                </div>
            </section>
        );
    }
};

export default Testimonials;
