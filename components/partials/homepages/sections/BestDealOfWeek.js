import React, { useEffect } from "react";
import { SwiperSlide } from "swiper/react";
import useGetProducts from "../../../../hooks/useGetProducts";
import useProductGroup from "../../../../hooks/useProductGroup";
import CountDown from "../../../elements/CountDown";
import { generateTempArray } from "../../../../utilities/common-helpers";
import SwiperCarousel from "../../../elements/carousel/SwiperCarousel";
import ProductWithAvailable from "../../../elements/products/ProductWithAvaiable";
import Product from "../../../elements/products/Product";


const BestDealOfWeek = ({ collectionSlug }) => {
    // const { loading, productItems, getProducts } = useGetProducts();
    // const { withCarousel } = useProductGroup();

    // useEffect(() => {
    //     getProducts({ _limit: 6, on_sale: true });
    // }, [collectionSlug]);

    // let products;

    // if (!loading) {
    //     if (productItems && productItems.length > 0) {
    //         const items = productItems.map((item) => (
    //             <SwiperSlide key={item.id}>
    //                 <ProductWithAvaiable product={item} />
    //             </SwiperSlide>
    //         ));

    //         products = <SwiperCarousel>{items}</SwiperCarousel>;
    //     } else {
    //         products = <p>No product(s) found.</p>;
    //     }
    // } else {
    //     const skeletons = generateTempArray(2).map((item) => (
    //         <div className=" col-6" key={item}></div>
    //     ));
    //     products = <div className="row">{skeletons}</div>;
    // }

    return (
        <div className="ps-section--standard ps-best-deal-of-week">
            <div className="container">
                <div className="ps-section__header">
                    <h3>Best Deals of week!</h3>
                    <CountDown
                        time="12 31 2021, 6:00 am"
                        format="MM DD YYYY, h:mm a"
                    />
                </div>
                {/* <div className="ps-section__content">{products}</div> */}
            </div>
        </div>
    );
};

export default BestDealOfWeek;
