import "../../../css/styles.css"
import "../../../css/index.css"

import React, { useState, useEffect } from "react"

const CleanerDataComponent = () => {
    return (
        <>
            <h2 className="section-heading">Towards a Cleaner Data</h2>
            <p>A small proportion of the dataset has null values. Fixing these cells by removing them or replacing them is an important aspect of working on any datascience project. Pandas provides some useful built-in methods that can be used for this purpose. It is important to use these methods to remove the missing values from our dataset. <u>If we skip this stage, our code might break in different places</u>. Some operations we perform on our dataset using Pandas expect the missing values to be removed. Now, the following sections tackle business questions one by one.</p>
        </>
    )
}

export default CleanerDataComponent