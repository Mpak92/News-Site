import useFetch from './../customHooks/useFetch';
import styles from './NewsPage.module.css';
import moment from 'moment';

const NewsCommentsKids = (props) => {
    let { data, error } = useFetch(`https://hacker-news.firebaseio.com/v0/item/${props.id}.json`);

    if (error) console.log(error);

    const kidsComment = data?.kids?.sort((a, b) => a - b).map((id) => <NewsCommentsKids id={id} key={id} />);

    return (
        <div>
            {data?.text && <div className={styles.comment}>
                <div className={styles.by}>{'>'} {data.by}</div>
                <div className={styles.time}>{moment.unix(data.time).format('DD.MM.YYYY HH:mm')}</div>
                <div className={styles.text}>{data.text}</div>
            </div>}
            <div className={styles.kidsContainer}>
                {data?.kids && kidsComment}
            </div>
        </div>
    )
}

export default NewsCommentsKids;