import React from 'react';

const FaceRecognition = ({ imageURL }) => {
    return(
        <div>
            <img alt='image' src={imageURL} />
        </div>
    )
}

export default FaceRecognition;