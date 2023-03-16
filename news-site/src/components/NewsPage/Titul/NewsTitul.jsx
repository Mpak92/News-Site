import styles from './NewsTitul.module.css';

const NewsTitul = (props) => {

    return (
        <div className={styles.head}>
            <div className={styles.titul}>{props.titul}</div>
            {/* <div className={styles.buttonToMain}>
                    <div>Back to Main</div>
                    <Link to='/'>
                        <img src={home} alt="BackToMain" />
                    </Link>
                </div> */}
        </div>
    )
}

export default NewsTitul;