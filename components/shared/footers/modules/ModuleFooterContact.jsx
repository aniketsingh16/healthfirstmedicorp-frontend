import React from "react";

const ModuleFooterContact = () => {
    return (
        <div className="ps-footer--contact">
            <h5 className="ps-footer__title">Need help ?</h5>
            <div className="ps-footer__fax">
                <i className="icon-telephone"></i>
                +91 79724 71221
            </div>
            <p className="ps-footer__work">
                Monday – Saturday: 10AM to 7PM
                <br />
                Sunday: Closed
            </p>
            <hr />
            <p>
                <a
                    className="ps-footer__email"
                    href="mailto:healthfirstmedicorp@gmail.com">
                    {" "}
                    <i className="icon-envelope"></i>
                    healthfirstmedicorp@gmail.com{" "}
                </a>
            </p>
        </div>
    );
};

export default ModuleFooterContact;
