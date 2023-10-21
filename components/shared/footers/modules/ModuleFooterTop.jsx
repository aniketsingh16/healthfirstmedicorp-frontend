import React from 'react';

const ModuleFooterTop = () => {
    return (
        <div className="ps-footer--top ps-footer__top">
            <div className="container">
                <div className="row m-0">
                    <div className="col-12 col-sm-4 p-0">
                        <p className="text-center">
                            <a className="ps-footer__link" href="#">
                                <i className="icon-wallet"></i>100% Secure Payments
                            </a>
                        </p>
                    </div>
                    <div className="col-12 col-sm-4 p-0">
                        <p className="text-center">
                            <a className="ps-footer__link" href="#">
                                <i className="icon-bag2"></i>Shipping over 20+ cities
                            </a>
                        </p>
                    </div>
                    <div className="col-12 col-sm-4 p-0">
                        <p className="text-center">
                            <a className="ps-footer__link" href="#">
                                <i className="icon-truck"></i>Free Delivery 
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModuleFooterTop;
