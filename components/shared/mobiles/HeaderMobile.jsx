import React, { useEffect, useState } from "react";
import ModuleHeaderNotice from "../../shared/headers/modules/ModuleHeaderNotice";
import Logo from "../../elements/basic/Logo";
import { stickyHeaderMobile } from "../../../utilities/common-helpers";
import FormSearchHeader from "../forms/FormSearchHeader";

const HeaderMobile = () => {
    const [search, setSearch] = useState(false);

    function handleToggleSearch(e) {
        e.preventDefault();
        setSearch(!search);
    }

    useEffect(() => {
        if (process.browser) {
            window.addEventListener("scroll", stickyHeaderMobile);
        }
    }, []);

    let searchView;
    if (search) {
        searchView = (
            <div className="header__searchbox">
                <FormSearchHeader />
            </div>
        );
    }

    return (
        <>
            <ModuleHeaderNotice classes="mobile-only" />
            <header
                className="header header--mobile"
                data-sticky="true"
                id="header-sticky-mobile">
                <div className="header__left">
                    <Logo />
                </div>
                <div className="header__right">
                    <a
                        className="header__search"
                        href="#"
                        onClick={(e) => handleToggleSearch(e)}>
                        <i className="icon-magnifier"></i>
                    </a>
                </div>
                {searchView}
            </header>
        </>
    );
};

export default HeaderMobile;
