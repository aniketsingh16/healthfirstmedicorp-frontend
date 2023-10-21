import { useState } from "react";
import { getProductsByCollectionHelper } from "../utilities/strapi-fetch-data-helpers";
import { client } from "../utilities/client";
// import ProductRepository from "~/repositories/ProductRepository";


export default function useGetProducts() {
    const [loading, setLoading] = useState(false);
    const [productItems, setProductItems] = useState(null);
    
    const [product, setProduct] = useState(null);
    const [category, setCategory] = useState(null);

    return {
        loading,
        product,
        productItems,
        category,
        setLoading: (payload) => {
            console.log("LOADING>>>>",payload)
            console.log("Load>>>",loading)
            setLoading(payload);
        },

        // getProductsByCollection: async (payload, pageSize = 8) => {
        //     setLoading(true);
        //     const responseData = await client.(
        //         payload,
        //         pageSize
        //     );
        //     if (responseData) {
        //         setProductItems(responseData.items);
        //         setTimeout(
        //             function () {
        //                 setLoading(false);
        //             }.bind(this),
        //             250
        //         );
        //     }
        // },

        getProducts: async (payload) => {
            setLoading(true);
            let responseData;
            const query = `*[_type == "allProducts" && featured == ${payload.on_sale}]`
            console.log("PAYLOAD",payload);

            if (payload) {
                responseData = await client.fetch(query)
                console.log("GET_PRODUCTS",responseData)
            } 
            
            // else {
            //     const queries = {
            //         _limit: 12,
            //     };
            //     responseData = await ProductRepository.getProducts(queries);
            // }

            // const query = '*[_type == "allProducts"]';

            // const products = await client.fetch(query)
            // console.log("Dataa: ", products)



        //     if (responseData) {
        //         setProductItems(responseData);
        //         console.log("products...",responseData);
        //         setTimeout(
        //             function () {
        //                 setLoading(false);
        //             }.bind(this),
        //             250
        //         );
        //     }
        },

        // getProductById: async (payload) => {
        //     setLoading(true);
        //     const responseData = await ProductRepository.getProductsById(
        //         payload
        //     );
        //     if (responseData) {
        //         setProduct(responseData);
        //         setTimeout(
        //             function () {
        //                 setLoading(false);
        //             }.bind(this),
        //             250
        //         );
        //     }
        // },

        // getCategoryBySlug: async (payload) => {
        //     setLoading(true);
        //     const response = await ProductRepository.getPrductCategoryBySlug(
        //         payload
        //     );
        //     if (response) {
        //         setCategory(response);
        //         setTimeout(
        //             function () {
        //                 setLoading(false);
        //             }.bind(this),
        //             250
        //         );
        //     }
        // },
    };
}
