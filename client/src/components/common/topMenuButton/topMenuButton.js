import styles from './topMenuButton.module.scss';

const topMenuButton = (props) => {

    return (
        <div className={styles.menuItem}>
            <a href={`/${props.title}`}>{props.title}</a>
            <div className={styles.menuDot}></div>
        </div>
    )
}

export default topMenuButton;