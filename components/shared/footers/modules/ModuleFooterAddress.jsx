import React from "react";
import Link from "next/link";
import ActiveLink from "../../../elements/basic/ActiveLink";
import Logo from "../../../elements/basic/Logo";

const ModuleFooterAddress = () => {
    return (
        <div className="ps-footer--address">
            <Logo />
            <div className="ps-footer__title">Our store</div>
            <p>
                Flat No. 2, Gurudev
                <br />
                Appartment, Lulla Nagar.
                <br />
                Pune, Maharashtra 411040
            </p>
            <p>
                <Link href="https://www.google.com/maps/place/Healthfirst+Medicorp/@18.4827543,73.8868626,17z/data=!3m1!4b1!4m5!3m4!1s0x3bc2ea86e286d8bb:0x87d0cdf3e94e01f1!8m2!3d18.4827062!4d73.8889811">
                    <a target="_blank">Show on map</a>
                </Link>
            </p>
            <ul className="ps-social">
                <li>
                    <a className="ps-social__link facebook" href="https://m.facebook.com/Healthfirstmedicorp.in/">
                        <i className="fa fa-facebook"> </i>
                        <span className="ps-tooltip">Facebook</span>
                    </a>
                </li>
                <li>
                    <a className="ps-social__link instagram" href="https://www.instagram.com/healthfirstmedicorp/">
                        <i className="fa fa-instagram"></i>
                        <span className="ps-tooltip">Instagram</span>
                    </a>
                </li>
                {/* <li>
                    <a className="ps-social__link youtube" href="#">
                        <i className="fa fa-youtube-play"></i>
                        <span className="ps-tooltip">Youtube</span>
                    </a>
                </li> */}
                <li>
                    <a className="ps-social__link whatsapp" href="https://wa.me/917599001200">
                        <i className="fa fa-whatsapp"></i>
                        <span className="ps-tooltip">Whatsapp</span>
                    </a>
                </li>
                <li>
                    <a className="ps-social__link linkedin" href="https://www.linkedin.com/in/ravi-singh-6a96bb18/">
                        <i className="fa fa-linkedin"></i>
                        <span className="ps-tooltip">Linkedin</span>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default ModuleFooterAddress;
