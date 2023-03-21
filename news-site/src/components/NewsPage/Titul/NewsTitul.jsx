import styles from './NewsTitul.module.css';

const NewsTitul = (props) => {

    return (
        <div className={styles.titul}>{props.titul}</div>
        // <div className={styles.buttonToMain}>
        //     <div>Back to Main</div>
        //     <Link to='/'>
        //         <img src={home} alt="BackToMain" />
        //     </Link>
        // </div>
    )
}

export default NewsTitul;