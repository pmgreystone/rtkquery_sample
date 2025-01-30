import "../../../css/styles.css"
import "../../../css/index.css"

import React, { useState, useEffect } from "react"

const ImprovementComponent = () => {
    return (
        <>
            <h2 className="section-heading">Areas for Improvement</h2>
            <p>This is an extra section that explores certain areas in the data gathering stage. If taken into consideration, we can have more data at our disposal. It also explains that we should use updated values.</p>
            <h4>year of reference</h4>
            <p>The min value for the REF_DATE column in the dataset is very low (1981) as seen previously in the plot. This could cause problems, as REF_DATE is not relevant, and we want to predict the latest prices of the commodity. At the moment, however, the prediction for the price seems to be working fine in terms of the linear relation. In a nutshell, we should query the dataset before we create the model, to ensure that the values of interest meet the expectations. Otherwise the result that we obtain might not be relevant.</p>
            <span className="caption text-muted">Subset of dataframe, after sorting values using <i>REF_DATE</i></span>
            <table className="table table-striped table-bordered table-hover table-sm">
                <thead>
                    <tr style={{textAlign:'right'}}>
                        <th>#</th>
                        <th>REF_DATE</th>
                        <th>GEO</th>
                        <th>Estimates</th>
                        <th>Commodity</th>
                        <th>Farm area, production, value</th>
                        <th>VALUE</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>9311</th>
                        <td className="table-warning">1981</td>
                        <td>British Columbia</td>
                        <td>Average price per pound</td>
                        <td>Fresh grapes [1141147]</td>
                        <td>Dollars</td>
                        <td>0.25</td>
                    </tr>
                    <tr>
                        <th>9310</th>
                        <td className="table-warning">1981</td>
                        <td>British Columbia</td>
                        <td>Average price per pound</td>
                        <td>Fresh blueberries [1141114]</td>
                        <td>Dollars</td>
                        <td>0.58</td>
                    </tr>
                    <tr>
                        <th>9279</th>
                        <td className="table-warning">1981</td>
                        <td>Ontario</td>
                        <td>Average price per pound</td>
                        <td>Fresh grapes [1141147]</td>
                        <td>Dollars</td>
                        <td>0.17</td>
                    </tr>
                    <tr>
                        <th>9254</th>
                        <td className="table-warning">1981</td>
                        <td>Quebec</td>
                        <td>Average price per pound</td>
                        <td>Fresh blueberries [1141114]</td>
                        <td>Dollars</td>
                        <td>0.49</td>
                    </tr>
                    <tr>
                        <th>9238</th>
                        <td className="table-warning">1981</td>
                        <td>New Brunswick</td>
                        <td>Average price per pound</td>
                        <td>Fresh blueberries [1141114]</td>
                        <td>Dollars</td>
                        <td>0.48</td>
                    </tr>
                </tbody>
            </table>

            <h4>quarts and bushels</h4>
            <p>To plot the price, production, and cultivation values, corresponding dataframe had to be selected from the dataset. For the production plot, the data selected only comprises of tons, metric tonnes, and pounds. The quarts and bushels values were left out. This was because the conversion methods described online to convert from quarts and bushels to kg had some discrepancy in their calculation.</p>
            <p>
                <img className="img-fluid border" src="/assets/img/area_produce_value_piechart_1.png" alt="plot with values" />
                <span className="caption text-muted">Figure 5. plot with proportion of values</span>
            </p>
            <h4>farm gate value and other estimates</h4>
            <p>The data selected for plot left out some estimates such as farm gate value, and bearing area. These values can be added to the plots, and might be used to address other questions. Farm gate value, for example, is the price a farmer first gets paid for the commodity, and is completely separate from the value at which the commodity gets sold in the market.</p>
            <p>
                <img className="img-fluid border" src="/assets/img/estimates_piechart_1.png" alt="plot with estimates" />
                <span className="caption text-muted">Figure 6. plot with proportion for price, production, and cultivation</span>
            </p>
        </>
    )
}

export default ImprovementComponent