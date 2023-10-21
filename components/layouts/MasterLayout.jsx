import React, { useEffect } from "react";
import { BackTop } from "antd";
import { connect, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";

import Head from "next/head";
import ModuleDrawerOverlay from "../shared/drawers/modules/ModuleDrawerOverlay";
import { toggleDrawer } from "../../store/app/action";
import DrawerPrimary from "../shared/drawers/DrawerPrimary";
import NavigationBottom from "../shared/navigations/NavigationBottom";
import { setCartItems, setCompareItems, setWishlistTtems } from "../../store/ecomerce/action";
import ModuleCustomHead from "./modules/ModuleCustomHead";

const MasterLayout = ({ children }) => {
    const dispatch = useDispatch();
    const router = useRouter();
    const [cookies] = useCookies(["cart", "compare", "wishlist"]);

    function handleSetEcomercerParameters() {
        if (cookies) {
            if (cookies.cart) {
                dispatch(setCartItems(cookies.cart));
            }
            if (cookies.wishlist) {
                dispatch(setWishlistTtems(cookies.wishlist));
            }
            if (cookies.compare) {
                dispatch(setCompareItems(cookies.compare));
            }
        }
    }

    useEffect(() => {
        handleSetEcomercerParameters();
        const handleComplete = () => {
            dispatch(toggleDrawer(false));
        };
        
        setTimeout(function () {
            document.getElementById("__next").classList.add("loaded");
        }, 100);

        router.events.on("routeChangeStart", handleComplete);
        setTimeout(function () {
            document.getElementById("__next").classList.add("ps-loaded");
        }, 100);

        return () => {
            router.events.off("routeChangeStart", handleComplete);
        };
    }, []);

    return (
        <>
            <ModuleCustomHead />
            <div className="ps-page">
                {children}
                <NavigationBottom />
                <ModuleDrawerOverlay />
                <DrawerPrimary />
                <div id="loader-wrapper">
                    <div className="loader-section section-left"></div>
                    <div className="loader-section section-right"></div>
                </div>
                <BackTop>
                    <button className="ps-btn--backtop">
                        <i className="icon-arrow-up"></i>
                    </button>
                </BackTop>
            </div>
        </>
    );
};

export default connect()(MasterLayout);
