import styles from './NewsPage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import useFetch from './../customHooks/useFetch';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { addRootComments, setNewsData } from './../../redux/newsPageReducer';
import NewsComments from './Comments/NewsComments';
import Preloader from '../common/Preloader';
import NewsTitul from './Titul/NewsTitul';
import NewsInfo from './Info/NewsInfo';

const NewsPage = () => {
    const news = useSelector(state => state.news);

    const dispatch = useDispatch();

    const { newsId } = useParams();

    let { data, error, loading, fetchNow } = useFetch(`https://hacker-news.firebaseio.com/v0/item/${newsId}.json`);

    useEffect(() => {
        if (data) {
            dispatch(setNewsData(data));
        };
        if (data?.kids) {
            dispatch(addRootComments(data.kids));
        }
    }, [data, dispatch])

    useEffect(() => {
        const refresh = setInterval(() => fetchNow(`https://hacker-news.firebaseio.com/v0/item/${newsId}.json`), 60000);
        return () => {
            clearInterval(refresh);
        }
    }, [])

    if (error) console.log(error);

    const newsCommentsId = news.newsData.kids?.concat();
    const newsComment = newsCommentsId?.sort((a, b) => a - b).map((id) => <NewsComments id={id} key={id} />);

    return (
        <div className={styles.container}>
            <NewsTitul titul={news.newsData?.title} />
            <NewsInfo url={news.newsData?.url} time={news.newsData?.time} by={news.newsData?.by} descendants={news.newsData?.descendants} />
            <div className={styles.refreshButton} onClick={() => fetchNow(`https://hacker-news.firebaseio.com/v0/item/${newsId}.json`)}>Refresh</div>
            {loading ? <Preloader /> : <div className={styles.commentBox}>
                {newsComment || <div className={styles.absent}>No comments yet</div>}
            </div>}
        </div>
    )
}

export default NewsPage;