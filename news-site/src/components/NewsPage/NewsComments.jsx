import useFetch from './../customHooks/useFetch';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styles from './NewsPage.module.css';
import { addNewsComment } from '../../redux/newsPageREducer';
import moment from 'moment';

const NewsComments = (props) => {
    const dispatch = useDispatch();

    let { data, error } = useFetch(`https://hacker-news.firebaseio.com/v0/item/${props.id}.json`);

    useEffect(() => {
        if (data) dispatch(addNewsComment(data));
    }, [data])

    if (error) console.log(error);

    return (
        <div className={styles.comment}>
            <div className={styles.text}>{data?.text}</div>
            <div className={styles.by}>by {data?.by}</div>
            <div className={styles.time}>{moment.unix(data?.time).format('DD.MM.YYYY HH:mm')}</div>
        </div>
    )
}

export default NewsComments;