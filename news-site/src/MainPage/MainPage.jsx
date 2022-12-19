import styles from './MainPage.module.css';
import { useDispatch, useSelector } from 'react-redux';

const MainPage = () => {
    const main = useSelector(state => state.main);

    const dispatch = useDispatch();

    return (
        <div className={styles.container}>
            <div className={styles.titul}>Latest News</div>
            <div className={styles.news}>
                <div>{main.newsName}</div>
                <div>{main.rating}</div>
                <div>{main.authorName}</div>
                <div>{main.publicationDate}</div>
            </div>
        </div>
    )
}

export default MainPage;