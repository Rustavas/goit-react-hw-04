import ImageCard from "../imageCard/ImageCard"
import css from "./ImageGallery.module.css"

const ImageGallery = ({ photos, onImageClick }) => {
  return (
    <ul className={css.ImageGallery}>
      {Array.isArray(photos) && photos.map(({ id, urls, alt_description, user, likes }) => {
        return < ImageCard
          key={id}
          urls={urls}
          alt_description={alt_description}
          user={user}
          likes={likes}
          onImageClick={onImageClick}
        />
      })
      }
    </ul>
  )
}

export default ImageGallery