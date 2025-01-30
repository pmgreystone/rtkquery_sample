import "../../../css/styles.css"
import "../../../css/index.css"

import React, { useState, useEffect } from "react"

import OrderedItemComponent from "./OrderedItemComponent.tsx"
import CommonCodeComponent from "../common/CommonCodeComponent.tsx"

const DatasetComponent = () => {
    return (
        <>
            <h2 className="section-heading">Obtaining the Dataset</h2>
            <p>There are various sources online where dataset can be obtained. As a general feeling, the author could feel that the data was already curated and structured. In addition to this, the description of this available dataset would contain the questions related to business or real-world applications of how the data could be used - which is basically the whole point of doing this exercise. The dataset for the purpose of this project has been obtained from Statistics Canada website.</p>

            <p>
                <img className="img-fluid border" src="/assets/img/canada-stat-svg_1.svg" alt="canada logo" />
                <span className="caption text-muted">Statistics Canada logo for those who don't know</span>
            </p>

            <h4>Area, production and farm gate value of marketed fruits</h4>
            
            <p>Visit this <a className="link-primary" href="https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=3210036401">link</a> to download the dataset. This dataset is updated annually, and holds valid for the entire geography of Canada including the territories. It consists of various commodities, which are edible fruits. The dataset contains the following features on these commodities</p>
            <ul>
                <li>geography, i.e. the province or territories where the commodity was grown or sold</li>
                <li>reference date, i.e. the year for which the data was recorded</li>
                <li>farm area, production, or value, to describe what kind of value is provided</li>
                <li>estimates, uom, i.e. the unit representing the commodities' value, e.g. Average price per pound, Pounds</li>
                <li>commodity, i.e. the name of the commodity along with its ID</li>
            </ul>
        </>
    )
}

export default DatasetComponent