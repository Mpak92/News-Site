import useFetch from './../customHooks/useFetch';
import styles from './NewsPage.module.css';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { showNestedComments } from './../../redux/newsPageReducer';
import NewsCommentsKids from './NewsCommentsKids';

const NewsComments = (props) => {
    const news = useSelector(state => state.news);

    const dispatch = useDispatch();

    let { data, error } = useFetch(`https://hacker-news.firebaseio.com/v0/item/${props.id}.json`);

    if (error) console.log(error);

    const kidsComment = data?.kids?.sort((a, b) => a - b).map((id) => <NewsCommentsKids id={id} key={id} />);

    return (
        <div>
            {data?.text && <div className={news.rootComments[props.id] ? styles.active : styles.commentRoot} onClick={() => dispatch(showNestedComments(props.id))}>
                <div className={styles.by}>{'>'} {data.by}</div>       
                <div className={styles.time}>{moment.unix(data.time).format('DD.MM.YYYY HH:mm')}</div>          
                <div className={styles.text}>{data.text}</div>
            </div>}
            <div className={styles.kidsContainer}>
                {news.rootComments[props.id] && kidsComment}
            </div>
        </div>
    )
}

export default NewsComments;