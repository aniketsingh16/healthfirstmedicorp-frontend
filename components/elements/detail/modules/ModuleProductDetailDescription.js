import React from "react";
import Link from "next/link";

const ModuleProductDetailDescription = ({ description }) => (
    <div className="ps-product__short-desc">
        <div dangerouslySetInnerHTML={{ __html : description}} />
    </div>
);

export default ModuleProductDetailDescription;
