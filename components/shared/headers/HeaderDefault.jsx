import React, { useEffect, useState } from "react";
import FormSearchHeader from "../forms/FormSearchHeader";
import ModuleHeaderActions from "../headers/modules/ModuleHeaderActions";
import ModuleHeaderNotice from "../headers/modules/ModuleHeaderNotice";
import NavigationPrimary from "../navigations/NavigationPrimary";
import Logo from "../../elements/basic/Logo";
import ModuleHeaderSwichers from "../headers/modules/ModuleHeaderSwitcher";

const HeaderDefault = ({ classes = "" }) => {
    const [showNav, setShowNav] = useState(true);

    function handleShownav(e) {
        e.preventDefault();
        if (showNav) {
            setShowNav(false);
        } else {
            setShowNav(true);
        }
    }

    function handleStickyHeader() {
        let number =
            window.pageXOffset ||
            document.documentElement.scrollTop ||
            document.body.scrollTop ||
            0;
        const header = document.getElementById("header-sticky");
        if (header !== null) {
            if (number >= 300) {
                header.classList.add("header--sticky");
                setShowNav(false);
            } else {
                header.classList.remove("header--sticky");
                setShowNav(true);
            }
        }
    }

    useEffect(() => {
        if (process.browser) {
            window.addEventListener("scroll", handleStickyHeader);
        }
    }, []);

    return (
        <header
            className={`header--desktop header--one ${classes}`}
            id="header-sticky">
            <ModuleHeaderNotice />
            <div className="header__top">
                <div className="container">
                    <div className="header__left">
                        <Logo />
                        <a
                            href="#"
                            className="header__top-toggle"
                            onClick={(e) => handleShownav(e)}>
                            <i className="fa fa-bars"></i>
                        </a>
                    </div>
                    <div className="header__center">
                        <div className="ps-header__search">
                            <FormSearchHeader />
                        </div>
                    </div>
                    <div className="header__right">
                        <ModuleHeaderSwichers />
                        <ModuleHeaderActions />
                    </div>
                </div>
            </div>
            <div className={`header__bottom ${showNav ? "active" : ""}`}>
                <NavigationPrimary />
            </div>
        </header>
    );
};

export default HeaderDefault;
