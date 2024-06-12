import React from "react";
import CardTemplate from "./CardTemplate";

// Maping card data to the card template, to filter the data based on the type of content
const CardData = ({data, value}) => {
    return (
        <>
        {data
          .filter((data) => data.content === value)
          .map((data) => (
            <CardTemplate key={data.id} data={data} />
          ))}
      </>
    )
}

export default CardData