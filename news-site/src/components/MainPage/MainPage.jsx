import styles from './MainPage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import NewsTimeline from './NewsTimeline/NewsTimelIne';
import useFetch from '../customHooks/useFetch';
import { setNewsId } from '../../redux/mainPageReducer';
import Preloader from '../common/Preloader';

const MainPageBody = () => {
    const main = useSelector(state => state.main);

    const dispatch = useDispatch();

    let { data, error, loading, fetchNow } = useFetch(`https://hacker-news.firebaseio.com/v0/newstories.json`);

    useEffect(() => {
        if (data) dispatch(setNewsId(data.slice(0, 100)));
    }, [data, dispatch])

    useEffect(() => {
        const refresh = setInterval(() => fetchNow(`https://hacker-news.firebaseio.com/v0/newstories.json`), 60000);
        return () => {
            clearInterval(refresh);
        }
    }, [fetchNow])

    if (error) console.log(error);

    const newsTimeline = main.lastNewsId.map((id) => <NewsTimeline id={id} key={id} />);

    return (
        <div className={styles.container}>
            <button className={styles.refreshButton} onClick={() => fetchNow(`https://hacker-news.firebaseio.com/v0/newstories.json`)} data-testid='newslist-refresh'>Refresh</button>
            {loading ? <Preloader /> : <div className={styles.newsContainer} data-testid='news-container'>
                {newsTimeline}
            </div>}
        </div>
    )
}

export default MainPageBody;