import React from "react";
import menu from "../../../../public/static/data/menu.json";
import ModuleHeaderPartners from "../modules/ModuleHeaderPartners"
import MegaMenu from "../../../elements/menu/MegaMenu";

const ModuleHeaderCategories = () => {
    return (
        <div className="header__categories ps-dropdown--fullscreen">
            <button className="header__categories-toggle">
                <i className="fa fa-bars"></i>
                <span>Our Products</span>
            </button>
            <div className="ps-dropdown__content">
                <div className="container">
                    <MegaMenu
                        source={menu.header_categories_menu}
                        onlyItems={true}
                        classes="menu--mega with-6-columns"
                    />
                    {/* <ModuleHeaderPartners /> */}
                </div>
            </div>
        </div>
    );
};

export default ModuleHeaderCategories;
