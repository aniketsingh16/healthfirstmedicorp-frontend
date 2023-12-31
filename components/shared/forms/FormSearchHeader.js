import React, { useState, useRef,useEffect } from "react";
import Router from "next/router";

const FormSearchHeader = () => {
    const [keyword, setKeyword] = useState(null);
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();       // #3
    }, [])

    function handleSetKeyword(e) {
        e.preventDefault();
        if (e.target.value !== "") {
            setKeyword(e.target.value);
        } else {
            setKeyword(e.target.value);
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (keyword !== "") {
            Router.push(`/search?keyword=${keyword}`);
        }
    }

    return (
        <>
            <form
                onSubmit={(e) => handleSubmit(e)}
                className="header__search-form">
                <div className="ps-search-table">
                    <div className="input-group">
                        <input
                            ref={inputRef}
                            className="form-control ps-input"
                            type="text"
                            placeholder="Search for products"
                            onChange={(e) => handleSetKeyword(e)}
                        />
                        <div className="input-group-append">
                            <a href="#" onClick={(e) => handleSubmit(e)}>
                                <i className="fa fa-search"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
};

export default FormSearchHeader;
