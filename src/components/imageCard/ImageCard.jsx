import css from "./ImageCard.module.css"

const ImageCard = ({ urls, alt_description }) => {
  return (
    <li className={css.ImageCard}>
      <div>
        <img src={urls.small} alt={alt_description} />
      </div>
    </li>
  )
}

export default ImageCard