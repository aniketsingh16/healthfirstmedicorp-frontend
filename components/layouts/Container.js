import React from "react";
import Head from "next/head";
import FooterDefault from "../shared/footers/FooterDefault";
import HeaderMobile from "../shared/mobiles/HeaderMobile";
import HeaderDefault from "../shared/headers/HeaderDefault";

const Container = ({
    children,
    title = "Healthfirst Medicorp",
    header = <HeaderDefault />,
    footer = <FooterDefault />,
}) => {
    let titleView;
    if (title !== undefined) {
        titleView = title + " | " + 'Wholesale Supplier of Medical Equipments';
    } else {
        titleView = process.env.titleDescription;
    }
    return (
        <div className="ps-root">
            <Head>
                <title>{titleView}</title>
            </Head>
            {header}
            <HeaderMobile />
            {children}
            {footer}
        </div>
    );
};

export default Container;
