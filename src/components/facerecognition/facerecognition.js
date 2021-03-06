import React from 'react';
import './facerecognition.css';

const FaceRecognition = ({ imageURL, box }) => {
    return(
        <div>
            <div className='absolute mt2 center w-100'>
            <img id='inputimage' alt='image' src={imageURL} width='500px' height='auto' />
            <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}>
            </div>
            </div>
        </div>
    )
}

export default FaceRecognition;