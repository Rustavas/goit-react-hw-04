import ImageCard from "../imageCard/ImageCard"
import css from "./ImageGallery.module.css"

const ImageGallery = ({photos}) => {
  return (
    
    <ul className={css.ImageGallery}>
    {Array.isArray(photos) && photos.map(({id, urls, alt_description}) => {
      return < ImageCard 
        key ={id}
        urls={urls}
        alt_description={alt_description}
      />
      })
    }
  </ul>
  )
}

export default ImageGallery