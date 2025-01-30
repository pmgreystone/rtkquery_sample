import "../../../css/styles.css"
import "../../../css/index.css"

import React, { useState, useEffect } from "react"

import OrderedItemComponent from "./OrderedItemComponent.tsx"
import CommonCodeComponent from "../common/CommonCodeComponent.tsx"

const QuestionsComponent = () => {
    return (
        <>
            <h2 className="section-heading">Questions to Look For</h2>
            <p>Before selecting these questions, the author studied import-export in Canada as a side course. During this time, the author was heavily relied on random websites on the internet to get statistical information on the products relevant to the coursework. So, the questions chosen here go from simple to complex, as sometimes getting answers to simple questions grows our capacity to ask complex questions. Moreover, the code and the data needs to be tested, and so getting answers to simple questions helps in early validation of the project.</p>

            <p>In addition to this, having lived in different cities in Canada - it made sense to ask questions on living expenditure, and to see trends on how the prices vary in different provinces for a given commodity. Therefore, following are the questions that this project tries to address in some ways.</p>

            <ol start={1}>
                <li>Are there certain commodities preferred for production/price-increase?</li>
                <li>If so, does the area of cultivation also show some relation to the price change (or any other relation that can be obtained)?</li>
                <li>Since it is a known fact that commodities' price increases with time, is it possible to model this relation, along with other data (such as the province)?</li>
            </ol>
        </>
    )
}

export default QuestionsComponent