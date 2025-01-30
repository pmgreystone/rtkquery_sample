import "../../../css/styles.css"
import "../../../css/index.css"

import React from "react";

interface OrderedItemComponentProps {
    content: string
    // ✅ Since it is a known fact that commodities' price increases with time, is it possible to model this relation, along with other data (such as the province)?
}
const OrderedItemComponent = (props: OrderedItemComponentProps & React.OlHTMLAttributes<HTMLOListElement>) => {
    return (
        <ol start={props.start}><li>{props.content}</li></ol>
    )
}

export default OrderedItemComponent