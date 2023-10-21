import React, { useEffect } from "react";

import ModuleProductDetailDescription from "./modules/ModuleProductDetailDescription";
import ModuleDetailShoppingActions from "./modules/ModuleDetailShoppingActions";
import ModuleProductDetailSharing from "./modules/ModuleProductDetailSharing";
import ModuleDetailThumbnail from "./modules/ModuleDetailThumbnail";
import ModuleDetailMeta from "./modules/ModuleDetailMeta";
import ModuleDetailColors from "./modules/ModuleDetailColors";
import ModuleDetailSizes from "./modules/ModuleDetailSizes";
import ModuleDetailThumbnailSingle from "./modules/ModuleDetailThumbnailSingle";
import ModuleDetailTopInformation from "./modules/ModuleDetailTopInformation";
import useProduct from "../../../hooks/useProduct";

const DetailQuickView = ({ product }) => {
    const { price } = useProduct();
    return (
        <>
            <div className="product--detail ps-product--detail ps-product--quickview">
                <div className="ps-product__header">
                    <ModuleDetailThumbnailSingle product={product} />
                    <div className="ps-product__info">
                        <p className="ps-product__log-status">
                            Only 6 left in stock
                        </p>
                        <ModuleDetailTopInformation product={product} />
                        <ModuleProductDetailDescription product={product} />
                        {price(product)}
                        <div className="ps-product__variants">
                            <ModuleDetailColors />
                            <ModuleDetailSizes />
                        </div>
                        <ModuleDetailShoppingActions product={product} />
                        <ModuleDetailMeta />
                        <ModuleProductDetailSharing />
                    </div>
                </div>
            </div>
        </>
    );
};

export default DetailQuickView;
