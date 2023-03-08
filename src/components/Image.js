import React from "react";

const Image = ({currentImage, onClickImage, imageName}) => {
    return (
        <div>
            <img style={{ width: 150, height: 150 }} alt={`${imageName}`} src={currentImage} />
        </div>
    )
}

export default Image;