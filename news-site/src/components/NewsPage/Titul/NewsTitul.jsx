import styles from './NewsTitul.module.css';

const NewsTitul = (props) => {

    return (
        <div className={styles.titul}>{props.titul}</div>
    )
}

export default NewsTitul;