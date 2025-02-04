import styles from './RoudedImage.module.css'

function RoudedImage({ width, ...rest }) {
  return <img className={`${styles.rouded_image} ${styles[width]}`} {...rest} />
}

export default RoudedImage
