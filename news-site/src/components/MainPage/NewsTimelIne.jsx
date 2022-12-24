import useFetch from './../customHooks/useFetch';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNews } from './../../redux/mainPageReducer';
import styles from './MainPage.module.css';
import moment from 'moment';
import { Link } from 'react-router-dom';

const Timeline = (props) => {
    const news = useSelector(state => state.main.latestNews);

    const dispatch = useDispatch();

    let { data, error, loading } = useFetch(`https://hacker-news.firebaseio.com/v0/item/${props.id}.json`);

    useEffect(() => {
        if (data) dispatch(addNews(data));
    }, [data])

    if (error) console.log(error);

    return (
        <Link to={`${props.id}`} className={styles.news}>
            <div className={styles.newsTitul}>{news[props.index]?.title}</div>
            <div className={styles.score}>{news[props.index]?.score} points</div>
            <div className={styles.author}>by {news[props.index]?.by}</div>
            <div className={styles.date}>{moment.unix(news[props.index]?.time).format('DD.MM.YYYY HH:mm')}</div>
        </Link>
    )
}

export default Timeline;