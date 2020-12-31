import React from 'react';

const FaceRecognition = ({ imageURL }) => {
    return(
        <div>
            <div className='absolute mt2 center w-100'>
            <img alt='image' src={imageURL} width='500px' height='auto' />
            </div>
        </div>
    )
}

export default FaceRecognition;