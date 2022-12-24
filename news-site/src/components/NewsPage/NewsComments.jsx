import useFetch from './../customHooks/useFetch';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './NewsPage.module.css';
import { addNewsComment } from '../../redux/newsPageREducer';
import moment from 'moment';

const NewsComments = (props) => {
    const commentData = useSelector(state => state.news.comments)

    const dispatch = useDispatch();

    let { data, error, loading } = useFetch(`https://hacker-news.firebaseio.com/v0/item/${props.id}.json`);

    useEffect(() => {
        if (data) dispatch(addNewsComment(data));
    }, [data])

    if (error) console.log(error);

    return (
        <div className={styles.comment}>
            <div className={styles.text}>{commentData[props.index]?.text}</div>
            <div className={styles.by}>by {commentData[props.index]?.by}</div>
            <div className={styles.time}>{moment.unix(commentData[props.index]?.time).format('DD.MM.YYYY HH:mm')}</div>
        </div>
    )
}

export default NewsComments;