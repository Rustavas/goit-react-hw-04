import css from "./ImageCard.module.css"

const ImageCard = ({ urls, alt_description, onImageClick, user, likes }) => {
  const imageData = {
    imageSrc: urls.regular,
    imageAltDescription: alt_description,
    imageAutor: user.name,
    imageLikes: likes,
  };
  return (
    <li className={css.ImageCard}>
      <div>
        <img src={urls.small} alt={alt_description}
          onClick={() => onImageClick(imageData)} />
      </div>
    </li>
  )
}

export default ImageCard