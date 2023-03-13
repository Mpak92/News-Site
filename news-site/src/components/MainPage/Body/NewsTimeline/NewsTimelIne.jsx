import useFetch from '../../../customHooks/useFetch';
import styles from './NewsTimeline.module.css';
import moment from 'moment';
import { Link } from 'react-router-dom';

const NewsTimeline = (props) => {
    let { data, error } = useFetch(`https://hacker-news.firebaseio.com/v0/item/${props.id}.json`);

    if (error) console.log(error);

    return (<>
        {data && <Link to={`${props.id}`} className={styles.news}>
            <div className={styles.newsTitul}>{data.title}</div>
            <div className={styles.score}>{data.score} points</div>
            <div className={styles.author}>by {data.by}</div>
            <div className={styles.date}>{moment.unix(data.time).format('DD.MM.YYYY HH:mm')}</div>
        </Link>}
    </>)
}

export default NewsTimeline;