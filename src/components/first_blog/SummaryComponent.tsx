import "../../../css/styles.css"
import "../../../css/index.css"

import React, { useState, useEffect } from "react"

const SummaryComponent = () => {
    return (
        <>
            <h2>Summary</h2>
            <p>This datascience blog post was created to address some business questions. It took on those questions as they are useful for a business that wants to sell certain fruits in different parts of Canada. For a recap, following are those questions again.</p>
            
            <ol start={1}>
                <li>Are there certain commodities preferred for production/price-increase?</li>
                <li>If so, does the area of cultivation also show some relation to the price change (or any other relation that can be obtained)?</li>
                <li>Since it is a known fact that commodities' price increases with time, is it possible to model this relation, along with other data (such as the province)?</li>
            </ol>

            <h4>How to Begin</h4>
            <p>We start by cleaning our data. After cleaning our data, we need to select the relevant attributes (i.e. columns) in the data. The first section <code>1. Are there certain commodities preferred over others</code> takes the first steps in building some level of understanding of the data. By grouping attributes and then sorting (in ascending or descending manner) by production value it becomes obvious that the production of commodities varies with the province. Although the blog post omits technical details, for an overview of what happens behind the scenes - we are grouping our data and taking the mean of its values and then sorting in a descending order.</p>

            <p>At this stage we can only see that the distribution varies as a group, but looking more closely at the plot <code>marketed production value (in kg)</code> we see that only two commodities exist at the top five, so we choose them for further analysis. One thing to keep in mind here is that our dataset is our source of truth. So, after each step of analysis we should not stop and check the results from other online sources to confirm any inference that we are trying to reach. Rather, as a data scientist we need to follow towards the end of our evaulation, and then discuss the final results with peers.</p>

            <h4>Establishing Winner Commmodity</h4>
            <p>Coming back to the second plot in the blog post - <code>price, weight, and area plots</code> we further investigate the commodities to establish a clear winner. The <code>bb</code> acronym in the legend stands for blueberry, and the <code>gr</code> acronym stands for grapes. The first plot shows the price values in dollars, the second plot shows the weight values in kgs and the third plot shows the area values in acre. We can see that the blueberry plot clearly has higher curves than the grape plot. We can infer that over a decade and beyond, blueberry commodity has higher price, weight and area values as compared to the other commodity. This proves that certain commodities are produced more and have more price. This sort of preference is interesting, and for a business that wants to sell a particular commoditiy in a province - they can use this data, in order to create a fixed price at which they could sell the commodity. We wanted to understand this (price, weight, area) preference of commodity, as stated in the beginning of the blog post.</p>

            <p>Later we create a model with the data, and display the model information in <code>plot of column names and the corresponding coefficients</code>. The plot is used to interpret the correlation coefficient for different attributes. We see how some attributes have highly positive values for the coefficients, while others are negative. Some values are the in-betweens. As seen, the geo value for BC has the highest coefficient. If a value has highly positive coefficient, it means that it has a strong influence in the model when the <code>predict</code> function is called.</p>

            <h4>Confirming Findings</h4>
            <p>To confirm the finding, model prediction is used. This is simply done by calling the model's predict function and passing it the right inputs. The plot seen in <code>using predict, 'y' is the blueberry price in 2025</code> displays how price varies for three different regions - two of these are the provinces, and one region is to reflect the average price.</p>

            <h4>Key Takeaways</h4>
            <p>If a business wants to make decisions for selling fruits in Canada - this post provides some useful answers. For maximizing profits when picking between say New Brunswick and British Columbia, a business should pick to sell blueberries in British Columbia, as we can see from plot <code>6</code>. Not only this, if it were to need an estimate of the price in a given year for a province - the data model can help with making the prediction. And if the business needs to pick the next best fruit to sell, in that case it would be grapes as we saw from the above analysis. So, if you have read everything and reached this far - you know what fruits to pick to sell, and in which provinces.</p>
        </>
    )
}

export default SummaryComponent