import React from "react";
import Container from "../components/layouts/Container";
import HeaderDefault from "../components/shared/headers/HeaderDefault";
import HomeOneTopBanners from "../components/partials/homepages/HomeOneTopBanners";
import HomeOnePromotions from "../components/partials/homepages/HomeOnePromotions";
import PopularCategories from "../components/partials/homepages/sections/PopularCategories";
import { client } from "../utilities/client";
import LatestProducts from "../components/partials/homepages/sections/LatestProducts";
import PromotionSecureInformation from "../components/shared/sections/PromotionSecureInformation";
import BestDealOfWeek from "../components/partials/homepages/sections/BestDealOfWeek";


const HomeDefaultPage = ({products}) => {

    console.log(products)
    return (
        <Container
            title="Healthfirst Medicorp"
            header={<HeaderDefault classes="without-border" />}>
            <main id="homepage-one">
               
                <HomeOneTopBanners />
                <HomeOnePromotions />
                <PopularCategories />
                <LatestProducts products={products}/>
                <div className="container"> 
                    <PromotionSecureInformation />
                </div>
                <BestDealOfWeek />
                {/* <TopSellers product={products} /> */}

                {/* // <HomeOnePromotionsTwo />
                // <FeaturedProducts />
                // <Testimonials />
                // <FollowInstagram />
                // <Subscribe />  */}
            </main>
        </Container>
    );
};

export default HomeDefaultPage;

export const getServerSideProps = async () => {
    const query = '*[_type == "allProducts"]'
    // const query = '*[_type == "allProducts"]';

    const products = await client.fetch(query)
    console.log("Dataa: ", products)
    return {
        props : {
            products,
            
        },
    }
}