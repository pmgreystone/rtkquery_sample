import "../../../css/styles.css"
import "../../../css/index.css"

import React, { useState, useEffect } from "react"

import OrderedItemComponent from "./OrderedItemComponent.tsx"
import CommonCodeComponent from "../common/CommonCodeComponent.tsx"

const NumberedQuestionsComponent = () => {
    return (
        <>
            <h2 className="section-heading">1. Are there certain commodities preferred over others</h2>

            <p>Sometimes a dataset may have a large number of categorical columns. Each of these columns can make it easy for us to get lost in the details that the dataset is providing us. When the data is originally collected, it is in a raw format. It makes more sense at that stage, to put everything in one place in the raw form. But for interpreting meaningful results, we do not need all the details.</p>

            <p>The results below show the top five marketed production values (in <b>kg</b>) for the group <code>GEO-Commodity</code> - which is created by grouping <code>GEO</code> and <code>Commodity</code> columns from the dataset and then sorting by value.</p>

            <p>
                <img className="img-fluid border" src="/assets/img/geo_commodity_ascending_portion_1.png" alt="marketed production" />
                <span className="caption text-muted">Figure 1. marketed production value (in kg)</span>
            </p>

            <blockquote className="blockquote">NOTE: We can use <code>groupby</code> on the dataframe to group one or more columns into a single index. Once that is done we can easily narrow down on any column.</blockquote>

            <h4>Answer Time</h4>

            <p>As we can see from the above plot, two commodities are clearly in a majority. This is a good way to get some early success when understanding the data. From here on, we focus only on these two commodities - i.e. blueberries and grapes.</p>

            <OrderedItemComponent start={1}
                content="✅ Are there certain commodities preferred for production/price-increase?"
            />

            <h2 className="section-heading">2. Does the area of cultivation show some relation to the price change</h2>

            <p>From the plots below, we see that there is a drastic difference in the price (<b>$</b>), production (<b>kg</b>), and cultivation (<b>acre</b>) values, for the picked commodities (blueberries and grapes in this case).
            </p>

            <blockquote className="blockquote">NOTE: As there are different commodities in this dataset, it makes sense to select a few for comparison and move ahead with them. Here, we have picked blueberries and grapes.</blockquote>

            <p>
                <img className="img-fluid border" src="/assets/img/blueberry_grapes_comparisons_1.png" alt="commodity comparisons" />
                <span className="caption text-muted">Figure 2. price, weight, and area plots</span>
            </p>

            <blockquote className="blockquote">NOTE: You might have noticed an additional detail about the year axis for the price plot. It is discussed at the end, and is not relevant for now.</blockquote>
            <p>For the middle plot, there seems to be some missing data between 1975 and 2000 for blueberries. Otherwise, we see a very clear picture that not only blueberries are priced more, but they are also cultivated more than grapes.</p>

            <h4>Using Plots for Visualizations</h4>
            <p>This section can be skipped as it talks about some technical details. One of the biggest strengths of using <code>matplotlib</code> is that it enables us to put different plots in the same place. This allows for a better understanding of what the data is trying to tell. Sometimes, we can go wrong when we are looking at the data in only one way. Putting different plots together is helpful because it reduces the chances of interpreting the data in an incorrect manner.</p>

            <h4>Answer Time</h4>
            <p>The price, weight, area plot above shows us many useful relations. Firstly, the price, weight, area values for blueberry is greater than grapes. And most importantly it seems to be increasing. Secondly, we can also see that for blueberries, as the price value has increased, the area of cultivation has also been increasing. This result holds value for a business. It can be used to deduce that blueberries can be cultivated with less effort - otherwise it would have shown a decline in the cultivated area.</p>

            <OrderedItemComponent start={2}
                content="✅ If so, does the area of cultivation also show some relation to the price change (or any other relation that can be obtained)?"
            />

            <h2 className="section-heading">3. Is it possible to model this relation, along with other data</h2>

            <p>In this section, we focus on modeling from the data. If data only has numerical values, and if the dataframe has been cleaned properly by dropping missing or extra values - this step is easy. In our case, we have some categorical information in the data, that needs to be properly encoded. After concatenating it with numerical values, we can start the modeling process.</p>

            <h4>Creating a Model for the Data</h4>
            <p>In order to predict, say, the future price of a commodity we need to train/fit a model. Training a model means to derive certain values from the input (X, y), that can help create simple mathematical equations to give the best approximation for the values themselves. The algorithm uses differentials (internally) to generate these values.</p>

            <p>When we say we are training a model, it means we are calling functions that will generate these values for us. But we still need to provide the inputs (X, y). X are (could be singular) some of the columns from our dataset, and y is a column that depends on X. For e.g. X could be a column with label 'year' (containing numerical years) and y could be a column, say 'price' (containing numerical prices in $), that depends on X.</p>

            <p>In our case, X is composed of two columns - year and province. Since we want to predict the price of a commodity, y in this case would be the price column (for the given commodity). These values do not automatically get passed onto the model. We need to select the X columns, and the y column separately. We then pass it to the model. As our model uses linear mathematical equations internally, we use the <a className="link-primary" href="https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LinearRegression.html">LinearRegression</a> model. Finally, we can call <code>LinearRegression().fit(X, y)</code> to train/fit the linear model.</p>

            <h4>Interpreting the Coefficients</h4>
            <p>After training the model, we can access its properties and methods to understand the relations between X and y, and also predict y using an unknown X. This becomes clear on observing the following bar plot. Here, we simply plot using <code>plt.barh(X.columns,model.coef_)</code>. The <code>columns</code> property is a collection of columns from X, and the <code>coef_</code> property is a collection of values that signify how strongly (or weakly) a given column relates to y.</p>

            <p>
                <img className="img-fluid border" src="/assets/img/model_columns_coeffs_1.png" alt="model coefficients" />
                <span className="caption text-muted">Figure 3. plot of column names and the corresponding coefficients</span>
            </p>

            <p>As we can see from above, y (i.e. the price of the commodity) depends <b>positively</b> on REF_DATE (i.e. price increases with increase in year) and GEOs (i.e. the province) British Columbia, Quebec, <b>while</b> y depends <b>negatively</b> on GEOs Newfoundland and Labrador, Prince Edward Island.</p>

            <h4>Obtaining the Results</h4>
            <p>Since our X is composed of columns - REF_DATE and GEOs, we can put together these values inside a dictionary for better representation (it is easy to read and modify in this manner). The code below contains three dictionaries <code>priceInCanada2025</code>, <code>priceInNewBrunswick2025</code>, and <code>priceInBC2025</code>. Each dictionary encapsulates the values (X) we intend to pass to our model to predict the price (y).</p>

            <p className="border">
                <CommonCodeComponent content="priceInCanada2025 = {" />
                <CommonCodeComponent content="'REF_DATE':2025" space={4} />
                <CommonCodeComponent content="'GEO_British Columbia':0" space={4} />
                <CommonCodeComponent className="text-success" content="'GEO_Canada':1" space={4} />
                <CommonCodeComponent content="'GEO_New Brunswick':0" space={4} />
                <CommonCodeComponent content="'GEO_Newfoundland and Labrador':0" space={4} />
                <CommonCodeComponent content="'GEO_Nova Scotia':0" space={4} />
                <CommonCodeComponent content="'GEO_Prince Edward Island':0" space={4} />
                <CommonCodeComponent content="'GEO_Quebec':0" space={4} />
                <CommonCodeComponent content="}" />
            </p>
            <p className="border">
                <CommonCodeComponent content="priceInNewBrunswick2025 = {" />
                <CommonCodeComponent content="'REF_DATE':2025" space={4} />
                <CommonCodeComponent content="'GEO_British Columbia':0" space={4} />
                <CommonCodeComponent content="'GEO_Canada':0" space={4} />
                <CommonCodeComponent className="text-success" content="'GEO_New Brunswick':1" space={4} />
                <CommonCodeComponent content="'GEO_Newfoundland and Labrador':0" space={4} />
                <CommonCodeComponent content="'GEO_Nova Scotia':0" space={4} />
                <CommonCodeComponent content="'GEO_Prince Edward Island':0" space={4} />
                <CommonCodeComponent content="'GEO_Quebec':0" space={4} />
                <CommonCodeComponent content="}" />
            </p>
            <p className="border">
                <CommonCodeComponent content="priceInBC2025 = {" />
                <CommonCodeComponent content="'REF_DATE':2025" space={4} />
                <CommonCodeComponent className="text-success" content="'GEO_British Columbia':1" space={4} />
                <CommonCodeComponent content="'GEO_Canada':0" space={4} />
                <CommonCodeComponent content="'GEO_New Brunswick':0" space={4} />
                <CommonCodeComponent content="'GEO_Newfoundland and Labrador':0" space={4} />
                <CommonCodeComponent content="'GEO_Nova Scotia':0" space={4} />
                <CommonCodeComponent content="'GEO_Prince Edward Island':0" space={4} />
                <CommonCodeComponent content="'GEO_Quebec':0" space={4} />
                <CommonCodeComponent content="}" />
            </p>

            <p>Finally, as shown in the screenshot below, we call the <code>predict</code> method on our linear model to obtain the result. To visualize, we use the <code>plot</code> function.</p>
            <p>
                <img className="img-fluid border" src="/assets/img/plot_result_1.png" alt="price plot" />
                <span className="caption text-muted">Figure 4. using predict, 'y' is the blueberry price in 2025</span>
            </p>
            <p>The plot we see above contains the price values along the y-axis. The x-axis contains the province names as labels, where, the label for Canada is used to show the average price value on the plot, and how the other provinces compare against it, in terms of the price.</p>
            <h4>Answer Time</h4>
            <p>The answer is true for the last question we wanted to address from the dataset. We were able to successfully create a model and predict price value using X, that is composed of <code>REF_DATE</code> and <code>GEO</code> province data.</p>

            <OrderedItemComponent start={3}
                content="✅ Since it is a known fact that commodities' price increases with time, is it possible to model this relation, along with other data (such as the province)?"
            />
        </>
    )
}

export default NumberedQuestionsComponent