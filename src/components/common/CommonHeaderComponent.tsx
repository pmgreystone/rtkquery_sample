import "../../../css/styles.css"
import "../../../css/index.css"

import React, { useState, useEffect } from "react"

const CommonHeaderComponent = () => {
    return (
        <header className="masthead bgCover">
            <div className="container position-relative px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-7">
                        <div className="post-heading">
                            <h1>Selecting fruits to sell for profits in Canada</h1>
                            <h3 className="subheading">maximizing profits if you are in the fruits business</h3>
                            <span className="meta">
                                Posted by
                                <a className="spacedLink" href="#">Patt Mehta</a>
                                on October 4, 2022
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default CommonHeaderComponent