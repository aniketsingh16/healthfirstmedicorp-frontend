import React from "react";;
import ModuleHeaderCategories from "../headers/modules/ModuleHeaderCategories";
import ModuleHeaderContactNumber from "../headers/modules/ModuleHeaderContactNumber";
import ModuleHeaderSupplies from "../headers/modules/ModuleHeaderSupplies";
import Menu from "../../elements/menu/Menu";
import menu from "../../../public/static/data/menu.json";


const NavigationPrimary = () => {
    return (
        <nav className="navigation--primary">
            <div className="container">
                <div className="navigation__left">
                    <ModuleHeaderCategories />
                    <ModuleHeaderSupplies />
                    <div className="navigation__menu">
                        <Menu
                            source={menu.main_menu}
                            className="menu menu--desktop"
                        />
                    </div>
                </div>
                <div className="navigation__right">
                    <ModuleHeaderContactNumber />
                </div>
            </div>
        </nav>
    );
};

export default NavigationPrimary;
