import React from "react";
import "./featured.css"
import useFetch from "../../hooks/useFetch";

const Featured = () => {

    const { data, loading, error } = useFetch("/hotels/countByCity?cities=berlin,madrid,london")

    return (
        <div className="featured">
            {loading ? (
                "Loading please wait"
            ) : (    
            <><div className="featuredItem">
                <img src="https://cf.bstatic.com/xdata/images/city/square250/349720.webp?k=b7eca2cb90afd858f294732b0d5c194af47e70386b5be99373e3ff03be95c515&o=" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Berlin</h1>
                    <h2>{ data[0] } properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src="https://cf.bstatic.com/xdata/images/city/square250/620036.webp?k=da1bb740e7026af0062b9bbab20fde0f05f522f18535bae387e66f72f4488703&o=" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Madrid</h1>
                    <h2>{ data[1] } properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src="https://cf.bstatic.com/xdata/images/city/square250/690242.webp?k=d237489ebaacd4fce01bee28f2947d5b8e4e062f62a47f1b3f771473dae96fb9&o=" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>London</h1>
                    <h2>{ data[2] } properties</h2>
                </div>
            </div>
        </>
    )}
        </div>
    )
}

export default Featured