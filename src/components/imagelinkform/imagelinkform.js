import React from 'react';
import './form.css';


const ImageLinkForm = ({ onInputChange, onSubmit }) => {
    return(
       <div>
           <p className='f3'>
             This magic brain will detect faces in your pictures.  Give it a try now.
           </p>
           <div>
           <div className='form pa4 br3 shadow-5 w-80 center'>
               <input className='f4 pa2 w-50 center' type='text' onChange={onInputChange} />
               <button className='w-20 grow f4 link ph3 pv2 dib white bg-light-purple' onClick={onSubmit}>Detect</button>
           </div>
           </div>
       </div>
    )
}

export default ImageLinkForm;