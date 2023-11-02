import styles from './moduleItem.module.scss'

function ModuleItem(props) {
    const { title, description, imageSrc, imageWidth } = props

    return (
        <div className={styles.module_item}>
            <div className={styles.image_wrapper}>
                <img src={imageSrc} alt={title} width={imageWidth || 64} />
            </div>
            <a className={styles.link} href={'#'}>
                {title} <img src="/img/icons/other/arrow-right.svg" alt="right arrow" />
            </a>
            <p className={styles.description}>
                {description}
            </p>
        </div>
    );
}

export default ModuleItem;