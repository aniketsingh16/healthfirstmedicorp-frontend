import React, { useState, useEffect } from "react";
import Container from "../components/layouts/Container";
import BreadCrumb from "../components/elements/BreadCrumb";
// import SidebarShop from "~/components/shared/sidebar/SidebarShop";
// import Shop from "~/components/partials/shop/Shop";
// import PromotionSecureInformation from "~/components/shared/sections/PromotionSecureInformation";
import FormContact from "../components/shared/forms/FormContact";
import { client } from "../utilities/client";

const breadcrumb = [
    {
        id: 1,
        text: "Home",
        url: "/",
    },
    {
        id: 2,
        text: "Shop",
        url: "/shop",
    },
    {
        id: 3,
        text: " Face Masks - protective",
    },
];

const ContactUsScreen = () => {
    const [about, setAbout] = useState([]);
    useEffect(() => {
        const query = '*[_type == "aboutus"]'
         client.fetch(query)
            .then((data) => {
                setAbout(data);
                console.log("Dataa", data[0].info);
            })
        console.log("hIIIIIIII", about);
    }, [])
    
    // const aboutUs = about[0].info;
    
    


    return (
        <Container title="Contact Us">
            <div className="ps-page ps-page--inner">
                <div className="container">
                    <div className="ps-page__header">
                        <BreadCrumb breacrumb={breadcrumb} />
                    </div>
                    <div className="ps-page__content">
                        <div className="ps-contact">
                            <div className="row">
                                <div className="col-12 col-lg-4">
                                    <div className="ps-contact__info">
                                        <h2 className="ps-contact__title">
                                            {/* Welcome to {aboutUs} */}
                                            How can we help you ?
                                        </h2>
                                        <p className="ps-contact__text">
                                            We are at your disposal 6 days a
                                            week!
                                        </p>
                                        <h3 className="ps-contact__fax">
                                            +91 79724 71221
                                        </h3>
                                        <div className="ps-contact__work">
                                            Monday – Saturday: 10AM to 7PM
                                            <br />
                                            Sunday: Closed
                                        </div>
                                        <div className="ps-contact__email">
                                            <a href="mailto:rockaniket99@gmail.com">
                                                healthfirstmedicorp@gmail.com
                                            </a>
                                        </div>
                                        <ul className="ps-social">
                                            <li>
                                                <a
                                                    className="ps-social__link facebook"
                                                    href="https://m.facebook.com/Healthfirstmedicorp.in/">
                                                    <i className="fa fa-facebook">
                                                        {" "}
                                                    </i>
                                                    <span className="ps-tooltip">
                                                        Facebook
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="ps-social__link instagram"
                                                    href="https://www.instagram.com/healthfirstmedicorp/">
                                                    <i className="fa fa-instagram"></i>
                                                    <span className="ps-tooltip">
                                                        Instagram
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="ps-social__link youtube"
                                                    href="#">
                                                    <i className="fa fa-youtube-play"></i>
                                                    <span className="ps-tooltip">
                                                        Youtube
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="ps-social__link whatsapp"
                                                    href="https://wa.me/917599001200">
                                                    <i className="fa fa-whatsapp"></i>
                                                    <span className="ps-tooltip">
                                                        Whatsapp
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="ps-social__link linkedin"
                                                    href="https://www.linkedin.com/in/ravi-singh-6a96bb18/">
                                                    <i className="fa fa-linkedin"></i>
                                                    <span className="ps-tooltip">
                                                        Linkedin
                                                    </span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <br/>
                                <div className="col-12 col-lg-8">
                                    <div className="ps-contact__map">
                                        <iframe
                                            src="https://maps.google.com/maps?q=healthfirst%20medicorp&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                            width="600"
                                            height="450"
                                            allowFullScreen=""
                                            loading="lazy"></iframe>
                                    </div>
                                </div>
                            </div>
                            <FormContact />
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default ContactUsScreen;
