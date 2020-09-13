import React, { useState,useContext } from 'react';
import { ImgUpContext } from '../../context/Context';

function CloudinaryUpload(props) {
  const [imageUrl,setImageUrl] = useContext(ImgUpContext);
    //const [imageUrl, setImageUrl] = useState('')
    const [imageAlt, setImageAlt] = useState('')
// create the widget
const widget = window.cloudinary.createUploadWidget(
    {
      cloudName: 'kwesiblack',
      uploadPreset: 'vexqntfa',
    },
    
    (error, result) => {
      if (result.event === 'success') {
        setImageUrl(result.info.secure_url)
        setImageAlt(result.info.original_filename)
        
         
      }
      
    },
  );
  const showWidget =() => {
  widget.open(); // open up the widget after creation
  }
  return (
    <main className="App">
    <section className="left-side">
      <form>
       <button type="button" className="btn btn-primary mb-2 " onClick={showWidget} > Upload Via Widget</button>
      </form>
    </section>
    <section className="right-side">
      <p>The resulting image will be displayed here</p>
      {imageUrl && (
        <img src={imageUrl} alt={imageAlt} className="displayed-image"/>
      )}

    </section>
  </main>


   
       
      
   );
}

export default CloudinaryUpload;