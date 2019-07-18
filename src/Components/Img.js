import React from "react";

const ImgData = props => {

    return (
        <img alt= "Image of the day">{props.nasaData.url}</img>
    )
}

export default ImgData;