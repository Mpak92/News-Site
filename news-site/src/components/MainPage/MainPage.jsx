import styles from './MainPage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Timeline from './NewsTimelIne';
import useFetch from './../customHooks/useFetch';
import { setNewsId } from './../../redux/mainPageReducer';

const MainPage = () => {
    const main = useSelector(state => state.main);

    const dispatch = useDispatch();

    let { data, error, loading, fetchNow } = useFetch(`https://hacker-news.firebaseio.com/v0/newstories.json`);

    useEffect(() => {
        if (data) dispatch(setNewsId(data.slice(0, 100)));
    }, [data])

    if (error) console.log(error);

    const newsTimeline = main.lastNewsId.map((id, index)=> <Timeline id={id} index={index} key={id} />);

    return (
        <div className={styles.container}>
            <div className={styles.titul}>Latest News</div>
            <div className={styles.newsContainer}>
                {newsTimeline}
            </div>
        </div>
    )
}

export default MainPage;